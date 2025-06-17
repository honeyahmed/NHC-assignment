type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchIcon = () => (
  <svg
    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const Input = ({ value, onChange }: SearchInputProps) => (
  <input
    type="text"
    placeholder="Search keyword"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="p-3 w-full border border-nhc-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-nhc-blue bg-light-gray pr-10"
  />
);

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="text-center w-full relative">
      <Input value={value} onChange={onChange} />
      <SearchIcon />
    </div>
  );
}
  