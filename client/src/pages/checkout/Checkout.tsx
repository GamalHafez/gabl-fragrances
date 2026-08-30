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
import { useForm, useWatch } from "react-hook-form";
import { checkoutSchema } from "@shared/validators/checkoutSchema";
import { CheckoutSaveInformation } from "@/components/checkout/common";
import { PAYMENT_METHODS } from "@shared/constants/paymentMethods";
import { OrderSummary, OrderSummaryMobile } from "@/components/checkout/order";
import { FormSubmitButton } from "@/components/ui/forms";
import { Lock } from "lucide-react";

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

  const shippingMethodId = useWatch({ control, name: "shippingMethodId" });

  const onSubmit = (data: CheckoutFormOutput) => {
    console.log(data);
  };

  return (
    <PageWrapper>
      <div className="lg:hidden">
        <OrderSummaryMobile shippingMethodId={shippingMethodId} />
      </div>
      <Container>
        <div className="mx-4 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <form
  onSubmit={handleSubmit(
    onSubmit,
    (errors) => console.log("Validation errors:", errors),
  )}
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
            <FormSubmitButton
              label="Complete order"
              icon={Lock}
              disabled={false}
              //    isLoading={isPending}
              //      disabled={!isValid || items.length === 0}
            />
          </form>

          <aside className="hidden w-full shrink-0 lg:sticky lg:top-26 lg:block lg:w-95">
            <OrderSummary shippingMethodId={shippingMethodId} />
          </aside>
        </div>
      </Container>
    </PageWrapper>
  );
};
