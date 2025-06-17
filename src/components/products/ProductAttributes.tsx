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
  <div className="flex flex-col md:flex-row justify-between w-full lg:gap-8 gap-2 mb-8 font-medium">
    <ul className="space-y-1 flex-1">
      <li  >
        <span >Price:</span>{" "}
        <span className="text-nhc-blue">${price}</span>
      </li>
      <li className="flex items-center gap-1">
      <span >Rating:</span> <RatingStars rating={rating} />

      </li>
      <li>
        <span >Brand:</span>{" "}
        <span className="text-nhc-blue">{brand}</span>
      </li>
    </ul>
    <ul className="space-y-1 flex-1">
      <li  >
        <span>Discount Percentage:</span>{" "}
        <span className="text-nhc-blue">{discountPercentage}</span>
      </li>
      <li  >
        <span>Stock:</span> <span className="text-nhc-blue">{stock}</span>
      </li>
      <li  >
        <span>Category:</span>{" "}
        <span className="text-nhc-blue">{category}</span>
      </li>
    </ul>
  </div>
);

export default ProductAttributes; 