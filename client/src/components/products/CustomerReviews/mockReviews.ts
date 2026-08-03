export type Review = {
  id: number;
  userName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  createdAt: string;
  verifiedPurchase: boolean;
};

export const reviews: Review[] = [
  {
    id: 1,
    userName: "أحمد محمد",
    rating: 5,
    comment:
      "بصراحة العطر فاق توقعاتي، الثبات ممتاز والفوحان واضح، واستخدمته في الشغل وخدت عليه كذا تعليق حلو.",
    createdAt: "2026-07-20",
    verifiedPurchase: true,
  },
  {
    id: 2,
    userName: "سارة علي",
    rating: 5,
    comment:
      "ريحة شيك جدًا وقريبة جدًا من العطر الأصلي، والتغليف كان محترم ووصل بسرعة.",
    createdAt: "2026-07-15",
    verifiedPurchase: true,
  },
  {
    id: 3,
    userName: "محمد خالد",
    rating: 4,
    comment:
      "العطر جميل وثابت، كنت أتمنى الفوحان يكون أقوى شوية، لكن بالنسبة للسعر فهو ممتاز.",
    createdAt: "2026-07-09",
    verifiedPurchase: true,
  },
  {
    id: 4,
    userName: "ريم حسن",
    rating: 5,
    comment:
      "ريحته هادئة وأنيقة، مناسبة جدًا للخروج اليومي، وأكيد هطلبه مرة تانية.",
    createdAt: "2026-07-03",
    verifiedPurchase: true,
  },
  {
    id: 5,
    userName: "يوسف طارق",
    rating: 3,
    comment:
      "الجودة ممتازة، لكن أنا شخصيًا بميل للعطور السكرية أكتر، إنما اللي بيحب الريحة الفريش هيعجبه جدًا.",
    createdAt: "2026-06-25",
    verifiedPurchase: false,
  },
  {
    id: 6,
    userName: "منة الله",
    rating: 5,
    comment:
      "من أول رشة وأنا حبيت الريحة، والثبات على الملابس فضل لليوم التاني، تجربة ممتازة.",
    createdAt: "2026-06-18",
    verifiedPurchase: true,
  },
];