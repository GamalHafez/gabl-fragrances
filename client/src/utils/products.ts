import type { ProductBadge } from "@/components/products/ProductInfo/ProductBadges";
import type {
  Product,
  ProductReview,
  ProductSample,
} from "@shared/types/product";

export const getProductBadges = (
  product: Product | ProductSample,
  inStock: boolean,
  isSample?: boolean,
): ProductBadge[] => {
  const badges: ProductBadge[] = [];

  if (isSample) {
    badges.push({
      label: `Sample`,
      status: "sample",
    });
  }

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

  badges.push({
    label: inStock ? "In Stock" : "Out of Stock",
    status: inStock ? "stock" : "out-of-stock",
  });

  return badges;
};

export const getAverageRating = (reviews: ProductReview[]): number => {
  if (reviews.length === 0) {
    return 0;
  }

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);

  return total / reviews.length;
};

export const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const getMainProductVariant = (variants: Product["variants"]) => {
  return variants.find((variant) => variant.sizeML !== 5) ?? variants[0];
};
