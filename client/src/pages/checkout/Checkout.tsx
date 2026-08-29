import {
  BillingAddressSection,
  ContactSection,
  DeliverySection,
  PaymentSection,
  ShippingSection,
} from "@/components/checkout/sections";
import { Container, PageWrapper } from "@/components/ui/common";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CheckoutFormOutput, CheckoutFormValues } from "@shared/types";
import { useForm } from "react-hook-form";
import { checkoutSchema } from "@shared/validators/checkoutSchema";
import { CheckoutSaveInformation } from "@/components/checkout/common";
import { PAYMENT_METHODS } from "@shared/constants/paymentMethods";

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
  shippingMethodId: "",
  paymentMethodId: PAYMENT_METHODS[0].id,
  billingSameAsShipping: true,
  billingAddress: "",
  billingCity: "",
  billingGovernorate: "",
  billingCountry: "Egypt",
  billingPostalCode: "",
  billingPhone: "",
};

export const Checkout = () => {
  const {
    register,
    control,
    setValue,
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
          className="flex flex-col gap-8 px-8 pb-20"
        >
          <ContactSection register={register} errors={errors} />
          <div className="flex flex-col gap-2">
            <DeliverySection
              control={control}
              register={register}
              errors={errors}
            />
            <CheckoutSaveInformation control={control} />
          </div>
          <ShippingSection control={control} setValue={setValue} />{" "}
          <PaymentSection control={control} />
          <BillingAddressSection
            control={control}
            register={register}
            errors={errors}
          />
        </form>
      </Container>
    </PageWrapper>
  );
};
