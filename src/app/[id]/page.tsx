import Image from "next/image";
import { Product } from "@/types/product";
import ProductAttributes from "@/components/products/ProductAttributes";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="lg:w-2/3 w-full flex flex-col mt-3">
        <div className="lg:w-3/5 w-full flex flex-col  justify-center gap-4 self-center">
          <h1 className="text-3xl font-medium mb-4 self-start text-nhc-blue">
            {product.title}
          </h1>
          <div className="relative w-48 h-48 mb-4 self-center flex items-center justify-center">
            <div className="rounded-lg p-4 flex items-center justify-center w-48 h-32 md:w-72 md:h-48 relative">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 192px"
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
          <p className="text-lg">Product Description</p>
          <p className="my-2 text-dark-gray leading-relaxed">{product.description}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg mb-2">Product Images</p>
          <div className="flex flex-wrap lg:justify-start gap-6">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow w-56 h-32 flex items-center justify-center "
              >
                <div className="relative w-40 h-32">
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
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

async function getProduct(id: string): Promise<Product> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      notFound();
    }
    return res.json();
  } catch (error) {
    notFound();
  }
}
