import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-xl shadow flex flex-col items-start w-[350px] h-[400px] p-6 mb-8 transition-transform hover:scale-105">
    <div className="relative w-full flex justify-center mb-4">
      <div className="relative w-56 h-40">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
    </div>

    <h2 className="text-xl font-medium text-nhc-blue mb-2 line-clamp-2 h-[3em]">
      {product.title}
    </h2>

    <p className="text-neutral-500 mb-4 line-clamp-2 h-[3em]">
      {product.description}
    </p>

    <div className="mt-auto w-full flex items-center justify-between">
      <span className="text-black font-medium">
        Price: <span className="text-nhc-blue">{product.price}$</span>
      </span>
      <Link
        href={`/${product.id}`}
        className="px-6 py-2 bg-nhc-blue text-white rounded"
      >
        More
      </Link>
    </div>
  </div>
);

export default ProductCard;
