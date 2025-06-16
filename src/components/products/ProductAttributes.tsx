import React from "react";
import Image from "next/image";
import RatingStars from "../ui/RatingStars";
interface Props {
  price: number;
  rating: number;
  brand: string;
  discountPercentage: number;
  stock: number;
  category: string;
}

const ProductAttributes = ({
  price,
  rating,
  brand,
  discountPercentage,
  stock,
  category,
}: Props) => (
  <div className="flex flex-col md:flex-row justify-between w-full lg:gap-8 gap-2 mb-8">
    <ul className="space-y-1 flex-1">
      <li>
        <span className="font-semibold">Price:</span>{" "}
        <span className="text-blue-700">${price}</span>
      </li>
      <li className="flex items-center gap-1">
      <span className="font-semibold">Rating:</span> <RatingStars rating={rating} />

      </li>
      <li>
        <span className="font-semibold">Brand:</span>{" "}
        <span className="text-blue-700">{brand}</span>
      </li>
    </ul>
    <ul className="space-y-1 flex-1">
      <li>
        <span className="font-semibold">Discount Percentage:</span>{" "}
        <span>{discountPercentage}</span>
      </li>
      <li>
        <span className="font-semibold">Stock:</span> <span>{stock}</span>
      </li>
      <li>
        <span className="font-semibold">Category:</span>{" "}
        <span className="text-blue-700">{category}</span>
      </li>
    </ul>
  </div>
);

export default ProductAttributes; 