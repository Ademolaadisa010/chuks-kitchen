"use client";
import { useRouter } from "next/navigation";
import Footer from "@/component/footer";
import { Island_Moments } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
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

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (): string | null => {
    const { email, phone, password, confirmPassword, agreeToTerms } = formData;

    if (!email || !phone || !password || !confirmPassword) {
      return "All fields are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return "Please enter a valid phone number (10-11 digits).";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    if (!agreeToTerms) {
      return "You must agree to the Terms & Conditions.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const error = validateForm();
      if (error) {
        toast.error(error, {
          duration: 4000,
          position: "top-right",
        });
        setIsLoading(false);
        return;
      }

      const existingUsers: UserData[] = JSON.parse(
        localStorage.getItem("chuks_kitchen_users") || "[]"
      );

      const userExists = existingUsers.some(
        (user) => user.email === formData.email
      );

      if (userExists) {
        toast.error("An account with this email already exists.", {
          duration: 4000,
          position: "top-right",
        });
        setIsLoading(false);
        return;
      }

      const newUser: UserData = {
        email: formData.email,
        phone: formData.phone,
        createdAt: new Date().toISOString(),
      };

      existingUsers.push(newUser);
      localStorage.setItem(
        "chuks_kitchen_users",
        JSON.stringify(existingUsers)
      );

      localStorage.setItem("chuks_kitchen_session", JSON.stringify(newUser));

      toast.success("Account created successfully! Welcome to Chuks Kitchen 🎉", {
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


      setFormData({
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      });
      router.push("/login");
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
          <div className="md:w-[60%] w-full px-3 min-h-30 pl-2">
            <h1
              className={`${island.className} text-[40px] text-center font-normal text-[#FF7A18]`}
            >
              Chuks Kitchen
            </h1>
            <p className="text-[#000000] text-[24px] text-center">
              Create Your Account
            </p>

            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <label htmlFor="email" className="text-[#3B4758]">
                Email
              </label>
              <nav className="border-1 mb-3 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                <i className="fa-solid fa-envelope mr-2"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 h-[40px] border-none outline-none"
                  placeholder="name@gmail.com"
                />
              </nav>

              <label htmlFor="phone" className="text-[#3B4758]">
                Phone number
              </label>
              <nav className="border-1 mb-3 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                <i className="fa-solid fa-phone mr-2"></i>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 h-[40px] border-none outline-none"
                  placeholder="8123340690"
                />
              </nav>

              <label htmlFor="password" className="text-[#3B4758]">
                Password
              </label>
              <nav className="border-1 mb-3 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                <i className="fa-solid fa-lock mr-2"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 h-[40px] border-none outline-none"
                  placeholder="••••••••"
                />
              </nav>

              <label htmlFor="confirmPassword" className="text-[#3B4758]">
                Confirm Password
              </label>
              <nav className="border-1 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                <i className="fa-solid fa-lock mr-2"></i>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="flex-1 h-[40px] border-none outline-none"
                  placeholder="••••••"
                />
              </nav>

              <p className="text-[12px] cursor-pointer mt-1 font-400 flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                I agree to the{" "}
                <Link href="/" className="text-[#1E88E5] ml-1">
                  Terms & Conditions and Privacy Policy
                </Link>
              </p>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FF7A18] min-h-13 rounded-lg cursor-pointer text-[16px] text-white mt-5 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
              >
                {isLoading ? "Creating account..." : "Continue"}
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

              <p className="text-[14px] text-center mt-2 font-400 mb-5">
                Already have an account?{" "}
                <Link href="/login" className="text-[#1C7FF9]">
                  Sign In
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