"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/getProducts";
import type { Product } from "@/types/product";
import SearchSection from "@/components/products/ProductSearch";
import NoResults from "@/components/ui/NoResults";
import ProductList from "@/components/products/ProductList";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await getProducts(searchQuery);
        setProducts(results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-10">
      <SearchSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultsCount={products.length}
      />

      <div className="w-full max-w-6xl lg:px-0 px-2">
        {searchQuery && products.length === 0 ? (
          <NoResults />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
}
