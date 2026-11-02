import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { formatSom } from "@/lib/site";
import { AddButton } from "./AddButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          {product.category}
        </p>
        <h1 className="mt-3 text-4xl font-black text-white">{product.name}</h1>
        <p className="mt-5 text-3xl font-black text-cyan-300">
          {formatSom(product.price)}
        </p>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
          {product.description}
        </p>
        <AddButton product={product} />
      </div>
    </div>
  );
}
