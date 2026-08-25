import { ContactSection } from "@/components/checkout/sections";
import { Container, PageWrapper } from "@/components/ui/common";
import type { CheckoutFormValues } from "@shared/types";
import { useForm } from "react-hook-form";

const checkoutDefaultValues = {
  contact: "",
  country: "Egypt",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  governorate: "",
  postalCode: "",
  phone: "",
  shippingMethod: "",
  paymentMethod: "",
};

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
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
