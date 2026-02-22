"use client";

import { Island_Moments } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const island = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Explore", path: "/explore" },
    { name: "My Orders", path: "/order" },
    { name: "Account", path: "/account" },
  ];

  return (
    <header className="w-full px-8 bg-white py-4 flex items-center shadow-sm">
      <Link href="/" className="cursor-pointer">
        <h1
          className={`${island.className} text-[40px] font-normal text-[#FF7A18]`}
        >
          Chuks Kitchen
        </h1>
      </Link>

      <nav className="flex-1 flex justify-around gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`text-[16px] transition-colors ${
              pathname === link.path
                ? "text-[#FF7A18] font-semibold"
                : "text-gray-700 hover:text-[#FF7A18]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Link href="/login">
        <button className="px-8 rounded-lg text-white py-2 bg-[#FF7A18] hover:bg-orange-600 transition">
          Login
        </button>
      </Link>
    </header>
  );
}