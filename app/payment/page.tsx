"use client";

import Footer from "@/component/footer";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface OrderMeta {
  total: number;
  subtotal: number;
  deliveryCharge: number;
  serviceFee: number;
  discount: number;
  orderType: string;
}

type PaymentMethod = "card" | "bank" | "transfer";

export default function Payment() {
  const router = useRouter();
  const [orderMeta, setOrderMeta] = useState<OrderMeta | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [saveCard, setSaveCard] = useState(false);
  const [placing, setPlacing] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const meta = localStorage.getItem("chuks_kitchen_order_meta");
    if (meta) setOrderMeta(JSON.parse(meta));
  }, []);

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1  ")
      .trim();
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  };

  const handlePay = () => {
    if (paymentMethod === "card") {
      if (cardNumber.replace(/\s/g, "").length < 16) {
        toast.error("Please enter a valid 16-digit card number.", { position: "top-right" });
        return;
      }
      if (expiry.length < 5) {
        toast.error("Please enter a valid expiry date.", { position: "top-right" });
        return;
      }
      if (cvv.length < 3) {
        toast.error("Please enter a valid CVV.", { position: "top-right" });
        return;
      }
    }

    setPlacing(true);

    const checkout = localStorage.getItem("chuks_kitchen_checkout");
    const delivery = localStorage.getItem("chuks_kitchen_delivery");
    const meta = localStorage.getItem("chuks_kitchen_order_meta");

    const orders = JSON.parse(localStorage.getItem("chuks_kitchen_orders") || "[]");
    orders.push({
      orderId: `ORD-${Date.now()}`,
      cart: checkout ? JSON.parse(checkout).cart : [],
      delivery: delivery ? JSON.parse(delivery) : {},
      ...( meta ? JSON.parse(meta) : {}),
      paymentMethod,
      placedAt: new Date().toISOString(),
      status: "Confirmed",
    });
    localStorage.setItem("chuks_kitchen_orders", JSON.stringify(orders));

    localStorage.removeItem("chuks_kitchen_cart");
    localStorage.removeItem("chuks_kitchen_checkout");
    localStorage.removeItem("chuks_kitchen_order_meta");
    localStorage.removeItem("chuks_kitchen_delivery");

    toast.success("Payment successful! Order placed 🎉", {
      duration: 2500,
      position: "top-right",
      style: { background: "#FF7A18", color: "#fff", fontWeight: "600" },
      iconTheme: { primary: "#fff", secondary: "#FF7A18" },
    });

    setTimeout(() => router.push("/payment-success"), 2500);
  };

  const total = orderMeta?.total ?? 0;

  return (
    <div className="bg-[#F3F4F6]">
      <Toaster />
      <Header />
      <main className="flex justify-center items-center my-20">
        <section className="md:w-[50%] w-full bg-white min-h-10 px-2 md:px-4">
          <h1 className="text-[#000000] text-[30px] font-bold py-2 border-b border-[#BDBDBD]">
            Payment
          </h1>

          {orderMeta && (
            <div className="mt-3 mb-2 flex justify-between items-center bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
              <p className="text-[#4B5563] text-[15px]">Amount Due</p>
              <p className="text-[#FF7A18] font-bold text-[20px]">₦{total.toLocaleString()}</p>
            </div>
          )}

          {/* Pay With */}
          <h3 className="text-[#0A0D13] text-[20px] font-semibold mt-4 mb-2">Pay With:</h3>
          <nav className="flex gap-2 mb-6">
            {(["card", "bank", "transfer"] as PaymentMethod[]).map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`flex-1 py-2 rounded-lg border text-[15px] capitalize cursor-pointer transition ${
                  paymentMethod === method
                    ? "border-[#FF7A18] bg-orange-50 text-[#FF7A18] font-semibold"
                    : "border-gray-200 text-[#4B5563] hover:border-[#FF7A18]"
                }`}
              >
                {method === "card" ? "💳 Card" : method === "bank" ? "🏦 Bank" : "🔁 Transfer"}
              </button>
            ))}
          </nav>

          {/* Card Form */}
          {paymentMethod === "card" && (
            <div>
              <label className="text-[16px] text-[#0A0D13] font-semibold">Card Number</label>
              <input
                className="border-2 border-[#ACACAC] min-h-10 w-full rounded-sm pl-2 mt-2 outline-none focus:border-[#FF7A18] transition text-[14px]"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="1234  5678  9101  1121"
                maxLength={19}
              />
              <nav className="flex gap-4 mt-4">
                <div className="flex-1">
                  <p className="mb-2 text-[#0A0D13] font-semibold text-[15px]">Expiration Date</p>
                  <input
                    className="border-2 border-[#ACACAC] w-full min-h-10 pl-2 rounded-sm outline-none focus:border-[#FF7A18] transition text-[14px]"
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-2 text-[#0A0D13] font-semibold text-[15px]">CVV</p>
                  <input
                    className="border-2 border-[#ACACAC] w-full min-h-10 pl-2 rounded-sm outline-none focus:border-[#FF7A18] transition text-[14px]"
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                    placeholder="•••"
                    maxLength={3}
                  />
                </div>
              </nav>
              <label className="flex items-center gap-2 mt-3 text-[#ACACAC] text-[14px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  className="accent-[#FF7A18]"
                />
                Save card details
              </label>
            </div>
          )}

          {/* Bank Form */}
          {paymentMethod === "bank" && (
            <div>
              <label className="text-[16px] text-[#0A0D13] font-semibold">Bank Name</label>
              <select
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="border-2 border-[#ACACAC] min-h-10 w-full rounded-sm pl-2 mt-2 outline-none focus:border-[#FF7A18] transition text-[14px] bg-white"
              >
                <option value="">Select your bank</option>
                <option>Access Bank</option>
                <option>First Bank</option>
                <option>GTBank</option>
                <option>Zenith Bank</option>
                <option>UBA</option>
                <option>Sterling Bank</option>
                <option>Opay</option>
                <option>Kuda Bank</option>
              </select>
              <label className="text-[16px] text-[#0A0D13] font-semibold mt-4 block">Account Number</label>
              <input
                className="border-2 border-[#ACACAC] min-h-10 w-full rounded-sm pl-2 mt-2 outline-none focus:border-[#FF7A18] transition text-[14px]"
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="0123456789"
                maxLength={10}
              />
            </div>
          )}

          {/* Transfer Info */}
          {paymentMethod === "transfer" && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-4">
              <p className="text-[#1F2937] font-semibold text-[16px] mb-2">Transfer Details</p>
              <p className="text-[#4B5563] text-[14px]">Bank: <span className="font-semibold text-[#1F2937]">GTBank</span></p>
              <p className="text-[#4B5563] text-[14px]">Account Name: <span className="font-semibold text-[#1F2937]">Chuks Kitchen Ltd</span></p>
              <p className="text-[#4B5563] text-[14px]">Account Number: <span className="font-semibold text-[#1F2937]">0123456789</span></p>
              <p className="text-[#4B5563] text-[14px] mt-2">Amount: <span className="font-bold text-[#FF7A18]">₦{total.toLocaleString()}</span></p>
              <p className="text-[#4B5563] text-[12px] mt-2 italic">Click "Pay Now" once you have completed the transfer.</p>
            </div>
          )}

          <button
            onClick={handlePay}
            disabled={placing}
            className="w-full min-h-12 bg-[#FF7A18] rounded-lg mt-6 text-white cursor-pointer mb-3 hover:bg-orange-600 transition font-semibold text-[16px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {placing ? "Processing..." : `Pay ₦${total.toLocaleString()}`}
          </button>

          <p className="text-[#ACACAC] text-[13px] mb-5 leading-relaxed">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}