import { ContactSection } from "@/components/checkout/sections";
import { Container, PageWrapper } from "@/components/ui/common";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CheckoutFormValues } from "@shared/types";
import { useForm } from "react-hook-form";
import { checkoutSchema } from "@shared/validators/checkoutSchema";

const checkoutDefaultValues = {
  contact: "",
  // country: "Egypt",
  // firstName: "",
  // lastName: "",
  // address: "",
  // city: "",
  // governorate: "",
  // postalCode: "",
  // phone: "",
  // shippingMethod: "",
  // paymentMethod: "",
};

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: checkoutDefaultValues,
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  return (
    <PageWrapper>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="px-8">
          <ContactSection register={register} errors={errors} />
        </form>
      </Container>
    </PageWrapper>
  );
};
