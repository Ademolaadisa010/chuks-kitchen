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
  return email.split("@")[0];
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<UserSession | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chuks_kitchen_session");
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {
        setSession(null);
      }
    }
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">

        <Link href="/" className="cursor-pointer">
          <h1 className={`${island.className} text-[36px] md:text-[40px] font-normal text-[#FF7A18]`}>
            Chuks Kitchen
          </h1>
        </Link>

        <nav className="hidden md:flex flex-1 justify-around gap-10 mx-6">
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

        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
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
                className="px-5 rounded-lg text-[#FF7A18] py-2 border border-[#FF7A18] hover:bg-[#FF7A18] hover:text-white transition text-[14px] cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="px-8 rounded-lg text-white py-2 bg-[#FF7A18] hover:bg-orange-600 transition cursor-pointer">
                Login
              </button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-[#FF7A18] text-[20px] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-orange-50 transition cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {menuOpen
            ? <i className="fa-solid fa-xmark" />
            : <i className="fa-solid fa-bars" />
          }
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-5 shadow-md">

          <nav className="flex flex-col gap-1 mt-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-3 text-[16px] rounded-lg transition-colors ${
                  pathname === link.path
                    ? "text-[#FF7A18] font-semibold bg-orange-50"
                    : "text-gray-700 hover:text-[#FF7A18] hover:bg-orange-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 border-t border-gray-100 pt-4">
            {session ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-9 h-9 rounded-full bg-[#FF7A18] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                    {getDisplayName(session.email)[0].toUpperCase()}
                  </div>
                  <span className="text-[#3B4758] text-[15px] font-medium">
                    {getDisplayName(session.email)}
                  </span>
                </div>
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="w-full py-3 rounded-lg text-[#FF7A18] border border-[#FF7A18] hover:bg-[#FF7A18] hover:text-white transition text-[15px] font-medium cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <button className="w-full py-3 rounded-lg text-white bg-[#FF7A18] hover:bg-orange-600 transition text-[15px] font-medium cursor-pointer">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}