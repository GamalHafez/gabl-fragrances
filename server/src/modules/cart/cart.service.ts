import { prisma } from '@/config/db.js';
import {
  CartRepresentation,
  CartVariant,
  StoredCartItem,
} from '@shared/types/cart.js';

export const cartService = {
  async getCartData(items: StoredCartItem[]): Promise<CartRepresentation> {
    const cartItems = await Promise.all(
      items.map(async (item): Promise<CartVariant | null> => {
        const variant = await prisma.productVariant.findFirst({
          where: {
            id: item.productVariantId,
            isActive: true,
            product: {
              isActive: true,
            },
          },
          select: {
            id: true,
            sizeML: true,
            price: true,
            stock: true,
            product: {
              select: {
                id: true,
                slug: true,
                name: true,
                images: {
                  where: {
                    isMain: true,
                  },
                  select: {
                    url: true,
                    description: true,
                  },
                  take: 1,
                },
              },
            },
          },
        });

        if (!variant) {
          return null;
        }

        return {
          productVariantId: variant.id,
          sizeML: variant.sizeML,
          price: variant.price.toString(),
          quantity: item.quantity,
          stock: variant.stock,
          product: {
            id: variant.product.id,
            name: variant.product.name,
            slug: variant.product.slug,
            image: variant.product.images[0] ?? null,
          },
        };
      }),
    );

    const validItems = cartItems.filter(
      (item): item is NonNullable<typeof item> => item !== null,
    );

    const availableItems = validItems.filter((item) => item.stock > 0);

    const totalQuantity = availableItems.reduce(
      (acc, item) => acc + item.quantity,
      0,
    );

    const subtotal = availableItems
      .reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
      .toFixed(2);

    return {
      items: validItems,
      totalQuantity,
      subtotal,
    };
  },
};