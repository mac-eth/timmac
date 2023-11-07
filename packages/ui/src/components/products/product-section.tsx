import Image from "next/image";
import type { StaticImageData } from "next/image";
import { CheckCircledIcon } from "@radix-ui/react-icons";

import { cn } from "~/utils/cn";
import Button from "../misc/button";

interface Product {
  id: string;
  name: string;
  price: string;
  comparisonPrice?: string;
  mostPopular?: boolean;
  includes: string[];
  href: string;
  imageURL: StaticImageData;
  imageAlt: string;
}

interface ProductSection {
  icon: React.ReactNode;
  products: Product[];
}

export default function ProductSection({
  icon,
  products,
}: ProductSection): JSX.Element {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 font-neueEinstellung text-4xl tracking-tight text-neutral-50 sm:text-5xl">
            Experience the <span className="underline">NutNinja</span>{" "}
            Difference
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-2xl text-neutral-300">
          Look and Feel your best with these best-selling bundles!
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                product.mostPopular
                  ? "bg-neutral-50/5 ring-2 ring-[#FFD700]"
                  : "ring-1 ring-neutral-50/10",
                "rounded-3xl p-8 xl:p-10",
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={product.id}
                  className="font-neueEinstellung text-lg uppercase italic leading-8 text-neutral-50"
                >
                  {product.name}
                </h3>
                {product.mostPopular ? (
                  <p className="text-md rounded-full bg-[#FFD700] px-4 py-2 font-semibold leading-5 text-neutral-950">
                    Most popular
                  </p>
                ) : null}
              </div>
              <Image
                src={product.imageURL}
                alt={product.imageAlt}
                className="mt-4 h-auto w-full rounded-xl ring-1 ring-neutral-50"
              />
              <ul
                role="list"
                className="mt-4 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-4"
              >
                <span className=" font-futuraPTDemi text-lg">Includes:</span>
                {product.includes.map((include) => (
                  <li key={include} className="flex gap-x-3 text-lg">
                    {icon}
                    {include}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-4 min-w-full rounded-xl shadow-md"
                backgroundColor={
                  product.mostPopular ? "bg-[#FFD700]" : "bg-neutral-50"
                }
                text={
                  <p className=" font-futuraPTDemi">
                    Buy Now - {product.price}{" "}
                    <span className="text-sm line-through">
                      {product.comparisonPrice}
                    </span>
                  </p>
                }
                href="#"
                underText={
                  <p className="text-md mt-2 text-neutral-200 underline">
                    Free Shipping to Australia
                  </p>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
