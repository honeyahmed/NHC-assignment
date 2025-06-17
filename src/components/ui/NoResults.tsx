import Image from "next/image";

export default function NoResults() {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center mt-0">
      <Image
        src="/no-results.svg"
        alt="No results illustration"
        width={200}
        height={250}
        className="mb-4"
      />
    </div>
  );
} 