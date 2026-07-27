import type { Product } from "./mockProducts";
import placeholder from "../../assets/placeholder.webp";
import { Plus, ShoppingCart, ArrowRight } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  const { name, size, price, collection, description } = product;

  return (
    <article className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-3xl">
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
        <img
          src={placeholder}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Floating Content */}
      <div className="relative z-10 mx-5 -mt-8 w-full rounded-3xl border border-zinc-100 bg-white p-4 shadow-md group-hover:shadow-xl md:mx-auto md:-mt-10 md:w-[calc(100%-2.5rem)] md:p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="text-brand-500 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase">
            {collection}
          </p>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 md:h-5 md:w-5" />{" "}
        </div>

        <h2 className="group-hover:text-brand-500 mt-2 font-semibold transition-colors duration-300 md:mt-1 md:text-xl">
          {name}
        </h2>

        <p className="text-sm text-zinc-500 uppercase">{size} ml</p>

        {description && (
          <p className="mt-3 line-clamp-2 hidden text-sm leading-6 text-zinc-600 lg:flex dark:text-zinc-400">
            {description}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between md:mt-4">
          <p className="text-xl font-bold md:text-2xl">${price}</p>

          <button
            type="button"
            className="bg-brand-900 hover:bg-brand-700 hidden cursor-pointer rounded-sm p-2 text-xs font-medium text-white uppercase transition-all duration-300 hover:-translate-y-0.5 md:flex md:text-sm"
          >
            Add to cart
          </button>

          <div className="relative inline-block md:hidden">
            <ShoppingCart size={20} />
            <Plus
              size={12}
              className="bg-brand-500 absolute -top-1 -right-1 rounded-full text-white"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
