import { z } from 'zod';

export const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Product name must be at least 2 characters long.')
    .max(150, 'Product name cannot exceed 150 characters.'),

  slug: z
    .string()
    .trim()
    .min(2, 'Product slug must be at least 2 characters long.')
    .max(150, 'Product slug cannot exceed 150 characters.')
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Slug can only contain lowercase letters, numbers, and hyphens.',
    ),

  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters long.'),

  gender: z.enum(['MEN', 'WOMEN', 'UNISEX']),

  inspiredBy: z
    .string()
    .trim()
    .max(100, 'Inspired by cannot exceed 100 characters.')
    .nullable()
    .optional(),

  topNotes: z
    .array(z.string().trim().min(1))
    .min(1, 'At least one top note is required.'),

  midNotes: z
    .array(z.string().trim().min(1))
    .min(1, 'At least one middle note is required.'),

  baseNotes: z
    .array(z.string().trim().min(1))
    .min(1, 'At least one base note is required.'),

  vibes: z
    .string()
    .trim()
    .min(1, 'Vibes are required.')
    .max(255, 'Vibes cannot exceed 255 characters.'),

  bestSeasons: z
    .array(z.enum(['SUMMER', 'WINTER', 'SPRING', 'AUTUMN', 'ALL_SEASONS']))
    .min(1, 'At least one season is required.'),

  isBestSeller: z.boolean().default(false),

  isNew: z.boolean().default(false),

  images: z
    .array(
      z.object({
        url: z.url('Invalid image URL.'),
        publicId: z.string().trim().min(1, 'Cloudinary public ID is required.'),
        description: z
          .string()
          .trim()
          .max(100, 'Image description cannot exceed 100 characters.')
          .nullable()
          .optional(),
        isMain: z.boolean().default(false),
      }),
    )
    .min(1, 'At least one product image is required.'),

  variants: z
    .array(
      z.object({
        sizeML: z
          .number()
          .int('Size must be a whole number.')
          .positive('Size must be greater than 0.'),

        price: z.number().positive('Price must be greater than 0.'),

        stock: z
          .number()
          .int('Stock must be a whole number.')
          .min(0, 'Stock cannot be negative.'),

        label: z.string().trim().min(1).max(100).nullable().optional(),
      }),
    )
    .min(1, 'At least one product variant is required.')

    .superRefine((variants, ctx) => {
      const sizes = new Set();

      variants.forEach((variant, index) => {
        if (sizes.has(variant.sizeML)) {
          ctx.addIssue({
            code: 'custom',
            message: `Duplicate variant size: ${variant.sizeML}ml.`,
            path: [index, 'sizeML'],
          });
        }

        sizes.add(variant.sizeML);
      });
    }),
});

export const updateProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Product name must be at least 2 characters long.')
    .max(150, 'Product name cannot exceed 150 characters.')
    .optional(),

  slug: z
    .string()
    .trim()
    .min(2, 'Product slug must be at least 2 characters long.')
    .max(150, 'Product slug cannot exceed 150 characters.')
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Slug can only contain lowercase letters, numbers, and hyphens.',
    )
    .optional(),

  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters long.')
    .optional(),

  gender: z.enum(['MEN', 'WOMEN', 'UNISEX']).optional(),

  inspiredBy: z
    .string()
    .trim()
    .max(100, 'Inspired by cannot exceed 100 characters.')
    .nullable()
    .optional(),

  topNotes: z
    .array(z.string().trim().min(1))
    .min(1, 'At least one top note is required.')
    .optional(),

  midNotes: z
    .array(z.string().trim().min(1))
    .min(1, 'At least one middle note is required.')
    .optional(),

  baseNotes: z
    .array(z.string().trim().min(1))
    .min(1, 'At least one base note is required.')
    .optional(),

  vibes: z
    .string()
    .trim()
    .min(1, 'Vibes are required.')
    .max(255, 'Vibes cannot exceed 255 characters.')
    .optional(),

  bestSeasons: z
    .array(z.enum(['SUMMER', 'WINTER', 'SPRING', 'AUTUMN', 'ALL_SEASONS']))
    .min(1, 'At least one season is required.')
    .optional(),

  isBestSeller: z.boolean().optional(),

  isNew: z.boolean().optional(),
});

export const addImageSchema = z.object({
  url: z.url('Invalid image URL.'),

  publicId: z.string().trim().min(1, 'Cloudinary public ID is required.'),

  description: z
    .string()
    .trim()
    .max(100, 'Image description cannot exceed 100 characters.')
    .nullable()
    .optional(),

  isMain: z.boolean().default(false),
});

export const updateImageSchema = z.object({
  description: z
    .string()
    .trim()
    .max(100, 'Image description cannot exceed 100 characters.')
    .nullable()
    .optional(),

  isMain: z.boolean().optional(),
});

export const restockSchema = z.object({
  quantity: z
    .number()
    .int()
    .positive('Restock quantity must be greater than 0.'),

  reason: z.string().trim().max(255).optional(),
});

export const createVariantSchema = z.object({
  sizeML: z
    .number()
    .int('Size must be a whole number.')
    .positive('Size must be greater than 0.'),

  price: z.number().positive('Price must be greater than 0.'),

  stock: z
    .number()
    .int('Stock must be a whole number.')
    .min(0, 'Stock cannot be negative.'),

  label: z.string().trim().min(1).max(100).nullable().optional(),
});

export const updateVariantSchema = z.object({
  sizeML: z
    .number()
    .int('Size must be a whole number.')
    .positive('Size must be greater than 0.')
    .optional(),

  price: z.number().positive('Price must be greater than 0.').optional(),

  label: z.string().trim().min(1).max(100).nullable().optional(),
});
