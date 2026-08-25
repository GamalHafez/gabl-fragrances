export type CheckoutFormValues = {
  contact: string;

  firstName: string;
  lastName: string;

  country: string;
  address: string;
  city: string;
  governorate: string;
  postalCode?: string;
  phone: string;

  shippingMethod: string;
  paymentMethod: string;
};
