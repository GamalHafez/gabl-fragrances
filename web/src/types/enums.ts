export type Weather = 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'ALL_SEASONS';

export type Gender = 'MEN' | 'WOMEN' | 'UNISEX';

export type OrderStatus =
  | 'PENDING'
  | 'PAID'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED';

export type DiscountType = 'FIXED' | 'PERCENTAGE';

export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';

export type PaymentMethod = 'CASH_ON_DELIVERY' | 'CARD';

export type InventoryTransactionType =
  | 'RESTOCK'
  | 'SALE'
  | 'RETURN'
  | 'DAMAGE'
  | 'ADJUSTMENT';
