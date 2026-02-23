"use client";

import Footer from "@/component/footer";
import { Island_Moments } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const island = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});

interface UserData {
  email: string;
  phone: string;
  createdAt: string;
}

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    const { emailOrPhone, password } = formData;

    if (!emailOrPhone || !password) {
      return "All fields are required.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const error = validateForm();
      if (error) {
        toast.error(error, { duration: 4000, position: "top-right" });
        setIsLoading(false);
        return;
      }

      const existingUsers: UserData[] = JSON.parse(
        localStorage.getItem("chuks_kitchen_users") || "[]"
      );

      const { emailOrPhone } = formData;

      const matchedUser = existingUsers.find(
        (user) => user.email === emailOrPhone || user.phone === emailOrPhone
      );

      if (!matchedUser) {
        toast.error("No account found with that email or phone number.", {
          duration: 4000,
          position: "top-right",
        });
        setIsLoading(false);
        return;
      }

      localStorage.setItem(
        "chuks_kitchen_session",
        JSON.stringify(matchedUser)
      );

      toast.success(`Welcome back!`, {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#FF7A18",
          color: "#fff",
          fontWeight: "600",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#FF7A18",
        },
      });

      setFormData({ emailOrPhone: "", password: "" });

      router.push("/home");
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        duration: 4000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Toaster />

      <main className="flex w-full">
        <aside
          className="relative hidden md:block flex flex-1 min-h-screen items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/family.svg')" }}
        >
          <div className="absolute inset-0 bg-[#FF7A18B2]"></div>

          <div className="relative z-10 text-center px-8 max-w-md text-white space-y-4">
            <h1 className="text-4xl font-semibold">Chuks Kitchen</h1>
            <p className="text-lg leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </aside>

        <section className="flex-1 flex justify-center bg-white items-center">
          <div className="md:w-[60%] w-full px-3 min-h-30">
            <h1
              className={`${island.className} text-[40px] text-center font-normal text-[#FF7A18]`}
            >
              Chuks Kitchen
            </h1>
            <p className="text-[#000000] text-[24px] text-center">
              Login your Account
            </p>

            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <label htmlFor="emailOrPhone" className="text-[#3B4758]">
                Email or phone number
              </label>
              <nav className="border-1 mb-3 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                <i className="fa-solid fa-envelope mr-2"></i>
                <input
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="flex-1 h-[40px] border-none outline-none"
                  placeholder="name@gmail.com or 08123340690"
                />
              </nav>

              <label htmlFor="password" className="text-[#3B4758]">
                Password
              </label>
              <nav className="border-1 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                <i className="fa-solid fa-lock mr-2"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 h-[40px] border-none outline-none"
                  placeholder="••••••"
                />
              </nav>

              <p className="text-end text-[12px] text-[#1E88E5] cursor-pointer mt-1 font-400">
                Forgot Password?
              </p>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FF7A18] min-h-13 rounded-lg cursor-pointer text-[16px] text-white mt-5 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
              >
                {isLoading ? "Signing in..." : "Continue"}
              </button>

              <p className="text-center text-sm mt-2 text-[#1F2937] mb-2">
                Or continue with
              </p>

              <button
                type="button"
                className="w-full bg-white border-[#BDBDBD] border-2 min-h-13 rounded-lg cursor-pointer text-[14px] text-[#3B4758] mt-5"
              >
                <i className="fa-brands fa-google mr-2"></i>
                Continue with Google
              </button>

              <button
                type="button"
                className="w-full bg-white border-[#BDBDBD] border-2 min-h-13 rounded-lg cursor-pointer text-[14px] text-[#3B4758] mt-5"
              >
                <i className="fa-brands fa-facebook-f mr-2"></i>
                Continue with Facebook
              </button>

              <p className="text-[14px] text-center mt-2 font-400">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-[#1C7FF9]">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}