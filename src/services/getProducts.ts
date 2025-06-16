import { Product, ProductsResponse } from '@/types/product';

export async function getProducts(searchQuery: string = '') {
  if (!searchQuery) {
    return [];
  }
  
  const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`, {
    cache: 'no-store'
  });
  const data = await response.json();
  return data.products;
}

export type { Product, ProductsResponse };