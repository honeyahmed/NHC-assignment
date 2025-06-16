type Props = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export default function SearchInput({ value, onChange }: Props) {
    return (
      <div className="text-center w-full">
        <input
          type="text"
          placeholder="Search keyword"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 w-full border border-blue-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
      </div>
    );
  }
  