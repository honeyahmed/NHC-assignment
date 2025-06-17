import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
      <Image src="/not-found.png" alt="Not found" width={200} height={250} />
      <h2 className="text-2xl font-semibold text-nhc-blue mb-4 mt-4">
        Product Not Found
      </h2>
      <p className="text-gray-600 mb-4">
        The product you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500">
        Go back to home
      </Link>
    </div>
  );
}
