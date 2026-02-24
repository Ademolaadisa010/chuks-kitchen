"use client";

import Header from "@/component/header";
import Footer from "@/component/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = `ORD-${Math.random().toString(36).toUpperCase().slice(2, 9)}`;
    setOrderId(id);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin w-16 h-16"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <rect
                  key={i}
                  x="23"
                  y="4"
                  width="4"
                  height="10"
                  rx="2"
                  fill={i === 5 ? "#FF7A18" : "#D1D5DB"}
                  transform={`rotate(${i * 45} 25 25)`}
                  opacity={1 - i * 0.1}
                />
              ))}
            </svg>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center px-6 max-w-[400px] py-10 w-full">

            <div className="w-[90px] h-[90px] rounded-full bg-[#1E7D4B] flex items-center justify-center mb-5 shadow-md">
              <i className="fa-solid fa-check text-white text-[38px]" />
            </div>

            <p className="text-[#0A0D13] text-[16px] font-bold">
              Order Placed Successfully!
            </p>
            <p className="text-[#4B5563] text-[14px] mt-1">
              Your delicious Chuks Kitchen meal is on its way!
            </p>

            <div className="w-2 h-2 rounded-full bg-green-100 my-8" />

            <h2 className="text-[#0A0D13] text-[22px] font-bold mb-5">
              Order #{orderId} Confirmed
            </h2>

            <button
              onClick={() => router.push("/order")}
              className="w-full bg-[#FF7A18] text-white text-[16px] font-semibold py-4 rounded-xl cursor-pointer hover:bg-orange-600 transition mb-4"
            >
              Track Order
            </button>

            <p className="text-[#9CA3AF] text-[14px] cursor-pointer hover:text-gray-600 transition mb-3">
              Generate Receipt
            </p>

            <p
              onClick={() => router.push("/home")}
              className="text-[#1E88E5] text-[14px] cursor-pointer hover:underline"
            >
              Need help with your order?
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}