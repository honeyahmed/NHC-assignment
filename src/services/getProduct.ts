import { Product } from "@/types/product";

export async function getProduct(id: string): Promise<Product> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Product not found');
    }
    return res.json();
  } catch (error) {
    throw error;
  }
} 