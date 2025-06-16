import { Product, ProductsResponse } from '@/types/product';

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://dummyjson.com/products', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch');

    const data: ProductsResponse = await res.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export type { Product, ProductsResponse };