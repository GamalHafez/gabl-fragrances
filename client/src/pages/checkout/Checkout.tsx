import {
  ContactSection,
  DeliverySection,
  ShippingSection,
} from "@/components/checkout/sections";
import { Container, PageWrapper } from "@/components/ui/common";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CheckoutFormOutput, CheckoutFormValues } from "@shared/types";
import { useForm } from "react-hook-form";
import { checkoutSchema } from "@shared/validators/checkoutSchema";
import { CheckoutSaveInformation } from "@/components/checkout/common";

const checkoutDefaultValues: CheckoutFormValues = {
  contact: "",
  country: "Egypt",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  governorate: "",
  postalCode: "",
  phone: "",
  saveInformation: false,
  shippingMethod: "standard",
  // paymentMethod: "",
};

export const Checkout = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues, unknown, CheckoutFormOutput>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: checkoutDefaultValues,
  });

  const onSubmit = (data: CheckoutFormOutput) => {
    console.log(data);
  };

  return (
    <PageWrapper>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 px-8"
        >
          <ContactSection register={register} errors={errors} />

          <div className="flex flex-col gap-2">
            <DeliverySection register={register} errors={errors} />
            <CheckoutSaveInformation control={control} />
          </div>

          <ShippingSection control={control} />
        </form>
      </Container>
    </PageWrapper>
  );
};
