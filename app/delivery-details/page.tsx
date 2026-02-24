"use client";

import Footer from "@/component/footer";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DeliveryDetails() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("ASAP (30-45 mins)");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  useEffect(() => {
    // Pre-fill phone from session
    const session = localStorage.getItem("chuks_kitchen_session");
    if (session) {
      const user = JSON.parse(session);
      if (user.phone) setContactPhone(user.phone);
    }
  }, []);

  const handleProceed = () => {
    if (!address.trim()) {
      toast.error("Please enter your delivery address.", { position: "top-right" });
      return;
    }
    if (!contactPhone.trim()) {
      toast.error("Please enter a contact phone number.", { position: "top-right" });
      return;
    }

    // Save delivery details for payment page
    localStorage.setItem(
      "chuks_kitchen_delivery",
      JSON.stringify({ address, deliveryTime, deliveryInstructions, contactPhone })
    );

    router.push("/payment");
  };

  return (
    <div className="bg-[#F3F4F6]">
      <Toaster />
      <Header />
      <main className="flex justify-center items-center">
        <section className="md:w-[50%] w-full min-h-10 bg-white my-10 px-2 md:px-4">
          <h1 className="text-[#000000] text-[30px] py-2 border-b border-[#BDBDBD] font-bold">
            Delivery Details
          </h1>

          <p className="text-[20px] text-[#000000] font-semibold mt-4">Delivery Address</p>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full min-h-18 border border-[#BDBDBD] rounded-sm px-2 py-2 mt-2 outline-none resize-none focus:border-[#FF7A18] transition text-[14px] text-[#1F2937]"
            placeholder="Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega Plaza"
            rows={3}
          />

          <p className="text-[20px] text-[#000000] font-semibold mt-4">Delivery Time</p>
          <select
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="mt-2 border border-[#BDBDBD] w-full pl-2 min-h-10 rounded-sm outline-none focus:border-[#FF7A18] transition text-[14px] text-[#1F2937] bg-white"
          >
            <option>ASAP (30-45 mins)</option>
            <option>In 1 hour</option>
            <option>In 2 hours</option>
            <option>Schedule for later</option>
          </select>

          <p className="text-[20px] text-[#000000] font-semibold mt-4">
            Delivery Instructions{" "}
            <span className="text-[#4B5563] font-normal text-[16px]">(Optional)</span>
          </p>
          <input
            type="text"
            value={deliveryInstructions}
            onChange={(e) => setDeliveryInstructions(e.target.value)}
            className="mt-2 border border-[#BDBDBD] w-full pl-2 min-h-10 rounded-sm outline-none focus:border-[#FF7A18] transition text-[14px] text-[#1F2937]"
            placeholder="E.g leave at the front of the door, knock twice..."
          />

          <p className="text-[20px] text-[#000000] font-semibold mt-4">Contact Number</p>
          <input
            type="tel"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            className="mt-2 border border-[#BDBDBD] w-full pl-2 min-h-10 rounded-sm outline-none focus:border-[#FF7A18] transition text-[14px] text-[#1F2937]"
            placeholder="+234 801 234 5678"
          />

          <button
            onClick={handleProceed}
            className="w-full min-h-12 bg-[#FF7A18] mt-5 rounded-sm cursor-pointer mb-5 text-white hover:bg-orange-600 transition font-semibold text-[16px]"
          >
            Proceed to Payment
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}