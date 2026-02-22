"use client";

import { Island_Moments } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const island = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});

interface UserSession {
  email: string;
  phone: string;
  createdAt: string;
}

function getDisplayName(email: string): string {
  // Remove everything from @ onwards e.g. "john.doe@gmail.com" → "john.doe"
  return email.split("@")[0];
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("chuks_kitchen_session");
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {
        setSession(null);
      }
    }
  }, [pathname]); // re-check on every route change

  const handleLogout = () => {
    localStorage.removeItem("chuks_kitchen_session");
    setSession(null);
    router.push("/login");
  };

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

      {session ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-lg border border-orange-200">
            <div className="w-8 h-8 rounded-full bg-[#FF7A18] flex items-center justify-center text-white text-sm font-semibold">
              {getDisplayName(session.email)[0].toUpperCase()}
            </div>
            <span className="text-[#3B4758] text-[14px] font-medium">
              {getDisplayName(session.email)}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 rounded-lg text-[#FF7A18] py-2 border border-[#FF7A18] hover:bg-[#FF7A18] hover:text-white transition text-[14px]"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className="px-8 rounded-lg text-white py-2 bg-[#FF7A18] hover:bg-orange-600 transition">
            Login
          </button>
        </Link>
      )}
    </header>
  );
}