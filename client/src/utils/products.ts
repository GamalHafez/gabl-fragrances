import type { ProductBadge } from "@/components/products/ProductInfo/ProductBadges";
import type { Product } from "@shared/types/product";

export const getProductBadges = (product: Product): ProductBadge[] => {
  const badges: ProductBadge[] = [];

  const genderLabel =
    product.gender === "MEN"
      ? "Men's"
      : product.gender === "WOMEN"
        ? "Women's"
        : "Unisex";

  // Gender collection first
  badges.push({
    label: `${genderLabel} Collection`,
    status: "collection",
  });

  if (product.isNew) {
    badges.push({
      label: "New",
      status: "new",
    });
  }

  if (product.isBestSeller) {
    badges.push({
      label: "Best Seller",
      status: "best-seller",
    });
  }

  const inStock = product.variants.some(
    (variant) => variant.isActive && variant.stock > 0,
  );

  badges.push({
    label: inStock ? "In Stock" : "Out of Stock",
    status: inStock ? "stock" : "out-of-stock",
  });

  return badges;
};
