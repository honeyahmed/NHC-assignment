import Image from "next/image";
import { Product } from "@/types/product";
import ProductAttributes from "@/components/products/ProductAttributes";

interface Props {
  params: { id: string };
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }: Props) {
  const product = await getProduct(params.id);
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="lg:w-2/3 w-full flex flex-col mt-3">
        <div className="lg:w-3/4 flex flex-col items-center justify-center gap-4 self-center">
          <h1 className="text-2xl font-bold mb-4 self-start">
            {product.title}
          </h1>
          <div className="relative w-48 h-48 mb-4 self-center">
            <div className="rounded-lg p-4 flex items-center justify-center w-32 h-32 md:w-48 md:h-48 relative">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 128px, (max-width: 1200px) 192px, 192px"
                className="object-contain"
                priority
              />
            </div>
          </div>
          <ProductAttributes
            price={product.price}
            rating={product.rating}
            brand={product.brand}
            discountPercentage={product.discountPercentage}
            stock={product.stock}
            category={product.category}
          />
        </div>
        <div className="flex flex-col">
          <p>Product Description</p>
          <p className="my-2 text-gray-700">{product.description}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold mb-2">Product Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg w-40 h-40 flex items-center justify-center "
              >
                <div className="relative w-32 h-32">
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
