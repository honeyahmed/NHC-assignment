import SearchInput from "../ui/SearchInput";

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultsCount: number;
}

export default function ProductSearch({ searchQuery, onSearchChange, resultsCount }: ProductSearchProps) {
  return (
    <div className="w-full max-w-3xl mb-10 lg:px-0 px-4">
      <p className="text-lg text-nhc-blue mb-3 text-left font-medium">
        Search products by keyword
      </p>
      <SearchInput value={searchQuery} onChange={onSearchChange} />
      {searchQuery && (
        <p className="text-black w-full text-md my-4 text-left">
          Total results count:{" "}
          <span className="text-nhc-blue font-bold">{resultsCount}</span>
        </p>
      )}
    </div>
  );
} 