"use client";

import Footer from "@/component/footer";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface CartItem {
  cartId: string;
  foodId: number;
  name: string;
  image: string;
  basePrice: number;
  selectedProtein: string;
  selectedSides: string[];
  instructions: string;
  total: number;
  quantity: number;
}

interface CheckoutData {
  cart: CartItem[];
  grandTotal: number;
}

const DELIVERY_FEE = 500;
const SERVICE_FEE = 200;
const TAX = 0;

const VALID_PROMOS: Record<string, number> = {
  CHUKS10: 0.1,
  WELCOME20: 0.2,
};

export default function OrderSummary() {
  const router = useRouter();
  const [data, setData] = useState<CheckoutData | null>(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [specialInstructions, setSpecialInstructions] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("chuks_kitchen_checkout");
    if (stored) setData(JSON.parse(stored));
  }, []);

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (VALID_PROMOS[code]) {
      setPromoDiscount(VALID_PROMOS[code]);
      setPromoApplied(true);
      toast.success(`Promo applied! ${VALID_PROMOS[code] * 100}% off 🎉`, {
        position: "top-right",
        style: { background: "#FF7A18", color: "#fff", fontWeight: "600" },
        iconTheme: { primary: "#fff", secondary: "#FF7A18" },
      });
    } else {
      toast.error("Invalid promo code.", { position: "top-right" });
    }
  };

  if (!data || data.cart.length === 0) {
    return (
      <div className="bg-[#F3F4F6] min-h-screen w-full">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-[#4B5563] text-[18px]">No order to summarize.</p>
          <button onClick={() => router.push("/home")} className="bg-[#FF7A18] text-white px-6 py-2 rounded-lg cursor-pointer">
            Go to Menu
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const subtotal = data.grandTotal;
  const deliveryCharge = orderType === "delivery" ? DELIVERY_FEE : 0;
  const discountAmount = Math.round(subtotal * promoDiscount);
  const total = subtotal + deliveryCharge + SERVICE_FEE + TAX - discountAmount;

  const handleConfirmCheckout = () => {
    // Save summary data for delivery-details and payment pages
    localStorage.setItem(
      "chuks_kitchen_order_meta",
      JSON.stringify({
        orderType,
        specialInstructions,
        promoCode: promoApplied ? promoCode.toUpperCase() : null,
        subtotal,
        deliveryCharge,
        serviceFee: SERVICE_FEE,
        discount: discountAmount,
        total,
      })
    );
    router.push("/delivery-details");
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen w-full">
      <Toaster />
      <Header />
      <main className="flex justify-center items-center">
        <section className="md:w-[50%] w-full min-h-40 bg-white my-10 px-2 md:px-4">

          <h1 className="text-[#000000] text-[32px] font-bold py-2 border-b border-[#BDBDBD]">
            Order Summary
          </h1>


          {/* Promo Code */}
          <h2 className="text-[#000000] text-[24px] font-semibold mt-4">Add a Promo Code</h2>
          <nav className="flex gap-4 mt-2 mb-6">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={promoApplied}
              className="flex-1 min-h-10 pl-2 rounded-lg border-[#BDBDBD] border outline-none disabled:bg-gray-50 disabled:text-gray-400"
              placeholder="Enter promo code"
            />
            <button
              onClick={applyPromo}
              disabled={promoApplied}
              className="bg-[#FF7A18] px-6 text-white rounded-sm cursor-pointer hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {promoApplied ? "Applied ✓" : "Apply"}
            </button>
          </nav>

          {/* Price Breakdown */}
          <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
            <p>Subtotal</p>
            <p>₦{subtotal.toLocaleString()}</p>
          </nav>
          <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
            <p>Delivery Fee</p>
            <p>{orderType === "delivery" ? `₦${DELIVERY_FEE.toLocaleString()}` : "Free (Pickup)"}</p>
          </nav>
          <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
            <p>Service Fee</p>
            <p>₦{SERVICE_FEE.toLocaleString()}</p>
          </nav>
          <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
            <p>Tax</p>
            <p>₦{TAX}</p>
          </nav>
          {promoApplied && (
            <nav className="flex justify-between text-green-600 text-[16px] mb-1">
              <p>Promo Discount ({promoDiscount * 100}%)</p>
              <p>- ₦{discountAmount.toLocaleString()}</p>
            </nav>
          )}

          <div className="flex justify-between items-center py-6 border-t border-[#BDBDBD] text-[24px] text-[#1F2937] font-bold mt-2">
            <h1>Total</h1>
            <p className="text-[#FF7A18]">₦{total.toLocaleString()}</p>
          </div>

          {/* Delivery / Pickup toggle */}
          <aside className="flex">
            <button
              onClick={() => setOrderType("delivery")}
              className={`flex-1 min-h-12 rounded-l-sm cursor-pointer text-white transition ${orderType === "delivery" ? "bg-[#FF7A18]" : "bg-[#BDBDBD] hover:bg-gray-400"}`}
            >
              Delivery
            </button>
            <button
              onClick={() => setOrderType("pickup")}
              className={`flex-1 min-h-12 rounded-r-sm cursor-pointer text-white transition ${orderType === "pickup" ? "bg-[#FF7A18]" : "bg-[#BDBDBD] hover:bg-gray-400"}`}
            >
              Pick up
            </button>
          </aside>

          {/* Special Instructions */}
          <label className="mt-6 font-semibold text-[24px] block">
            Special Instructions for Restaurant
          </label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="border border-[#BDBDBD] min-h-20 mt-2 w-full px-2 outline-none rounded-sm resize-none focus:border-[#FF7A18] transition text-[14px] text-[#1F2937] py-2"
            placeholder="E.g no onion, food is too spicy, extra sauce on the side..."
          />

          <button
            onClick={handleConfirmCheckout}
            className="mt-3 mb-5 bg-[#FF7A18] w-full min-h-12 text-white rounded-sm cursor-pointer hover:bg-orange-600 transition font-semibold text-[16px]"
          >
            Confirm Checkout — ₦{total.toLocaleString()}
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}