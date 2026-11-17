import z from 'zod';

const isGoogleMapsUrl = (value: string) => {
  try {
    const { protocol, hostname, pathname } = new URL(value);
    if (protocol !== 'https:') return false;

    return (
      hostname === 'share.google' ||
      hostname === 'maps.app.goo.gl' ||
      hostname === 'maps.google.com' ||
      (hostname === 'goo.gl' && pathname.startsWith('/maps')) ||
      ((hostname === 'google.com' || hostname === 'www.google.com') &&
        pathname.startsWith('/maps'))
    );
  } catch {
    return false;
  }
};

export const locationUrlShape = {
  locationUrl: z
    .string()
    .trim()
    .min(1, 'Please paste a Google Maps link.')
    .max(500, 'Link is too long.')
    .refine(isGoogleMapsUrl, 'Please paste a valid Google Maps link.'),
};
