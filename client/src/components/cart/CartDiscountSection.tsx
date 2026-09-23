import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { useTheme } from "@/context/theme/useTheme";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import {
  discountCodeSchema,
  type DiscountCodeRequest,
} from "@shared/validators/discountsSchema.js";
import { ErrorMessage } from "../ui/common";
import { useCheckDiscountCode } from "@/hooks/cart/useCheckDiscountCode";
import { getApiErrorMessage } from "@/utils/errors";
import { useState } from "react";
import { useCart } from "@/context/cart/useCart";

export const CartDiscountSection = () => {
  const { isDark } = useTheme();
  const { handleApplyDiscount } = useCart();
  const [accordionValue, setAccordionValue] = useState<string[]>([]);

  const handleAccordionChange = (value: unknown[]) => {
    setAccordionValue(value as string[]);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DiscountCodeRequest>({
    resolver: zodResolver(discountCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const {
    mutate: checkDiscountCode,
    isPending,
    error,
  } = useCheckDiscountCode();

  const onSubmit = (data: DiscountCodeRequest) => {
    checkDiscountCode(data.code, {
      onSuccess: (response) => {
        reset();
        setAccordionValue([]); // closes it

        handleApplyDiscount(response);
      },
    });
  };

  return (
    <Accordion
      value={accordionValue}
      onValueChange={handleAccordionChange}
      className="w-full"
    >
      <AccordionItem
        value="discount"
        className={clsx(
          "border-b px-5",
          isDark ? "border-white/10" : "border-black/10",
        )}
      >
        <AccordionTrigger
          className={clsx(
            "cursor-pointer py-4 text-sm font-medium hover:no-underline",
            isDark ? "text-white" : "text-black",
          )}
        >
          Have a discount code?
        </AccordionTrigger>

        <AccordionContent className="pb-5">
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-2"
          >
            <label htmlFor="discount-code" className="sr-only">
              Discount code
            </label>
            <input
              {...register("code")}
              type="text"
              placeholder="Enter discount code"
              className={clsx(
                "min-w-0 flex-1 rounded-full border px-4 py-2.5 text-sm transition-colors outline-none",
                "placeholder:text-current",
                isDark
                  ? "border-white/10 bg-white/5 text-white placeholder:text-white/30 focus:border-white/30"
                  : "border-black/10 bg-black/2 text-black placeholder:text-black/30 focus:border-black/30",
              )}
            />

            <button
              type="submit"
              disabled={isPending}
              className={clsx(
                "shrink-0 rounded-full px-5 py-2.5 text-xs font-medium tracking-wide uppercase",
                "cursor-pointer transition-colors duration-200",
                isDark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/90",
              )}
            >
              {isPending ? "Checking..." : "Apply"}
            </button>
          </form>

          {(errors.code || error) && (
            <ErrorMessage
              message={String(
                errors?.code?.message ?? getApiErrorMessage(error) ?? "",
              )}
            />
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
