import type { CheckoutDefaults, CheckoutFormValues } from "@shared/types";

export const splitName = (fullName: string) => {
  const [firstName = "", ...rest] = fullName.trim().split(/\s+/);
  return { firstName, lastName: rest.join(" ") };
};

export const mapDefaultsToFormValues = (
  defaults: CheckoutDefaults,
): Partial<CheckoutFormValues> => {
  const { firstName, lastName } = splitName(defaults.name);

  return {
    contact: defaults.email,
    firstName,
    lastName,
    ...(defaults.address && {
      address: defaults.address.address,
      city: defaults.address.city,
      governorate: defaults.address.governorate,
      country: defaults.address.country,
      postalCode: defaults.address.postalCode ?? "",
    }),
  };
};
