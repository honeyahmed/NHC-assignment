"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/getProducts";
import type { Product } from "@/types/product";
import SearchSection from "@/components/products/ProductSearch";
import NoResults from "@/components/ui/NoResults";
import ProductGrid from "@/components/products/ProductGrid";

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
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-2 sm:px-4 py-4">
      <SearchSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultsCount={products.length}
      />

      <div className="w-full max-w-6xl px-4">
        {searchQuery && products.length === 0 ? (
          <NoResults />
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
}
