"use client";

import Header from "@/component/header";
import Footer from "@/component/footer";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Extra {
  name: string;
  price: number;
}

interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
  proteins: Extra[];
  sides: Extra[];
}

export interface CartItem {
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

function FoodDetailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const raw = searchParams.get("data");
  const food: FoodItem | null = raw ? JSON.parse(decodeURIComponent(raw)) : null;

  const [selectedProtein, setSelectedProtein] = useState<string>(
    food?.proteins[0]?.name || ""
  );
  const [selectedSides, setSelectedSides] = useState<string[]>([]);
  const [instructions, setInstructions] = useState("");

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1F2937] text-[20px]">Food not found.</p>
      </div>
    );
  }

  const proteinExtra = food.proteins.find((p) => p.name === selectedProtein)?.price || 0;
  const sidesExtra = selectedSides.reduce((sum, sideName) => {
    const side = food.sides.find((s) => s.name === sideName);
    return sum + (side?.price || 0);
  }, 0);
  const total = food.price + proteinExtra + sidesExtra;

  const toggleSide = (name: string) => {
    setSelectedSides((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleAddToCart = () => {
    const existingCart: CartItem[] = JSON.parse(
      localStorage.getItem("chuks_kitchen_cart") || "[]"
    );

    const newItem: CartItem = {
      cartId: `${food.id}-${Date.now()}`,
      foodId: food.id,
      name: food.name,
      image: food.image,
      basePrice: food.price,
      selectedProtein,
      selectedSides,
      instructions,
      total,
      quantity: 1,
    };

    existingCart.push(newItem);
    localStorage.setItem("chuks_kitchen_cart", JSON.stringify(existingCart));

    toast.success("Added to cart!", {
      duration: 1500,
      position: "top-right",
      style: { background: "#FF7A18", color: "#fff", fontWeight: "600" },
      iconTheme: { primary: "#fff", secondary: "#FF7A18" },
    });

    setTimeout(() => router.push("/order"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Toaster />
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto min-h-[85vh] bg-white rounded-2xl overflow-hidden md:my-10 shadow-sm">

        <div className="md:w-[45%] w-full sticky top-0 self-start">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover min-h-[85vh]"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-2 md:px-10 py-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#3B4758] text-[14px] mb-6 hover:text-[#FF7A18] transition cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Menu
          </button>

          <h2 className="text-[32px] font-bold text-[#1F2937]">{food.name}</h2>
          <p className="text-[#FF7A18] text-[24px] font-bold mt-1">
            ₦{total.toLocaleString()}
          </p>
          <p className="text-[#1F2937] text-[14px] leading-relaxed mt-3">
            {food.description}
          </p>

          <div className="flex gap-4 mt-4 flex-wrap">
            {food.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-[13px] text-[#3B4758]">
                <span className="text-[#FF7A18]">⏱</span> {tag}
              </span>
            ))}
            <span className="text-[#1E88E5] text-[13px] cursor-pointer underline">
              View Allergies
            </span>
          </div>

          <hr className="my-5 border-gray-200" />

          {food.proteins.length > 0 && (
            <>
              <h3 className="text-[18px] font-bold text-[#1F2937] mb-3">
                Choose Your Protein
              </h3>
              <div className="flex flex-col gap-3">
                {food.proteins.map((protein) => (
                  <label
                    key={protein.name}
                    className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#FF7A18] transition"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="protein"
                        value={protein.name}
                        checked={selectedProtein === protein.name}
                        onChange={() => setSelectedProtein(protein.name)}
                        className="accent-[#FF7A18] w-5 h-5"
                      />
                      <span className="text-[#1F2937] text-[15px]">{protein.name}</span>
                    </div>
                    <span className="text-[#3B4758] text-[14px]">
                      {protein.price === 0 ? "(Default)" : `+₦${protein.price.toLocaleString()}`}
                    </span>
                  </label>
                ))}
              </div>
              <hr className="my-5 border-gray-200" />
            </>
          )}

          {food.sides.length > 0 && (
            <>
              <h3 className="text-[18px] font-bold text-[#1F2937] mb-3">
                Extra Sides{" "}
                <span className="text-gray-400 font-normal text-[14px]">(Optional)</span>
              </h3>
              <div className="flex flex-col gap-3">
                {food.sides.map((side) => (
                  <label
                    key={side.name}
                    className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-[#FF7A18] transition"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedSides.includes(side.name)}
                        onChange={() => toggleSide(side.name)}
                        className="accent-[#FF7A18] w-5 h-5 rounded"
                      />
                      <span className="text-[#1F2937] text-[15px]">{side.name}</span>
                    </div>
                    <span className="text-[#3B4758] text-[14px]">
                      +₦{side.price.toLocaleString()}
                    </span>
                  </label>
                ))}
              </div>
              <hr className="my-5 border-gray-200" />
            </>
          )}

          <h3 className="text-[18px] font-bold text-[#1F2937] mb-3">
            Special Instructions
          </h3>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="E.g no onion, food is too spicy..."
            rows={4}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1F2937] outline-none resize-none focus:border-[#FF7A18] transition"
          />

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#FF7A18] text-white text-[16px] font-semibold py-4 rounded-lg mt-5 mb-8 hover:bg-orange-600 transition cursor-pointer"
          >
            Add to Cart ₦{total.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FoodDetailPage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-[#1F2937] text-[18px]">Loading...</p>
          </div>
        }
      >
        <FoodDetailContent />
      </Suspense>
      <Footer />
    </>
  );
}