"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 text-black px-7 py-2.5 h-20">
      <div className="flex items-center gap-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="NHC"
            width={50}
            height={30}
            className="object-contain"
            priority
          />
        </Link>
      <nav>
      <ul className="flex items-center lg:gap-16 gap-4 font-abel ">
          <li>
            <Link
              href="/"
              className={`hover:text-nhc-blue ${
                "text-nhc-blue"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-nhc-blue ${
                pathname === "/about" ? "text-nhc-blue " : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
</div>
    </div>
  );
}
