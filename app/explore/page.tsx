"use client";

import Footer from "@/component/footer";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

// Food data mapped to the exact cards in the original UI
const popularItems: FoodItem[] = [
  {
    id: 101,
    name: "Jollof Rice & Fried Chicken",
    price: 3500,
    image: "/jollof.png",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    tags: ["Mildly spicy", "Bestseller"],
    proteins: [{ name: "Fried Chicken", price: 0 }, { name: "Grilled Fish", price: 500 }, { name: "Beef", price: 700 }],
    sides: [{ name: "Fried Plantain", price: 700 }, { name: "Coleslaw", price: 500 }, { name: "Extra Pepper Sauce", price: 300 }],
  },
  {
    id: 102,
    name: "Eba & Egusi Soup (Goat Meat)",
    price: 3500,
    image: "/eba.png",
    description: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    tags: ["Gluten-free", "High protein"],
    proteins: [{ name: "Goat Meat", price: 0 }, { name: "Assorted Meat", price: 500 }, { name: "Stockfish", price: 300 }],
    sides: [{ name: "Extra Eba", price: 300 }, { name: "Fufu", price: 400 }],
  },
  {
    id: 103,
    name: "Pounded Yam & Edikaikong",
    price: 3800,
    image: "/pounded.png",
    description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
    tags: ["Gluten-free"],
    proteins: [{ name: "Assorted Meat", price: 0 }, { name: "Goat Meat", price: 700 }],
    sides: [{ name: "Extra Pounded Yam", price: 500 }],
  },
  {
    id: 104,
    name: "Peppered Snail",
    price: 2500,
    image: "/snail.png",
    description: "Spicy and savory peppered snail, perfect as a starter.",
    tags: ["Spicy", "Starter"],
    proteins: [{ name: "Snail", price: 0 }],
    sides: [{ name: "Extra Pepper Sauce", price: 200 }],
  },
  {
    id: 105,
    name: "Grilled Tilapia Fish",
    price: 4500,
    image: "/tilapia.png",
    description: "Whole grilled tilapia seasoned with our special spices.",
    tags: ["Gluten-free", "Grilled"],
    proteins: [{ name: "Tilapia", price: 0 }, { name: "Catfish", price: 500 }],
    sides: [{ name: "Jollof Rice", price: 700 }, { name: "Fried Plantain", price: 500 }],
  },
  {
    id: 106,
    name: "Jollof Rice & Fried Chicken",
    price: 3500,
    image: "/jollof.png",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    tags: ["Mildly spicy"],
    proteins: [{ name: "Fried Chicken", price: 0 }, { name: "Grilled Fish", price: 500 }],
    sides: [{ name: "Coleslaw", price: 500 }, { name: "Fried Plantain", price: 700 }],
  },
];

const jollofItems: FoodItem[] = [
  {
    id: 201,
    name: "Jollof Rice & Fried Chicken",
    price: 3500,
    image: "/smoke.png",
    description: "Flavorful jollof rice served with perfectly smoked fish.",
    tags: ["Mildly spicy"],
    proteins: [{ name: "Smoked Fish", price: 0 }, { name: "Fried Chicken", price: 400 }],
    sides: [{ name: "Coleslaw", price: 500 }],
  },
  {
    id: 202,
    name: "Party Jollof Rice (Veg)",
    price: 3500,
    image: "/jollof.png",
    description: "Vegetarian party jollof, full of rich flavors.",
    tags: ["Vegetarian"],
    proteins: [{ name: "No Protein", price: 0 }, { name: "Grilled Chicken", price: 600 }],
    sides: [{ name: "Coleslaw", price: 500 }, { name: "Fried Plantain", price: 700 }],
  },
  {
    id: 203,
    name: "Party Jollof Rice (Veg)",
    price: 3800,
    image: "/jollof.png",
    description: "Vegetarian party jollof, full of rich flavors.",
    tags: ["Vegetarian"],
    proteins: [{ name: "No Protein", price: 0 }, { name: "Beef", price: 700 }],
    sides: [{ name: "Coleslaw", price: 500 }],
  },
];

const swallowItems: FoodItem[] = [
  {
    id: 301,
    name: "Amala with Gbegiri & Ewedu",
    price: 3500,
    image: "/amala.png",
    description: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    tags: ["Gluten-free", "Traditional"],
    proteins: [{ name: "Beef", price: 0 }, { name: "Goat Meat", price: 500 }, { name: "Assorted", price: 700 }],
    sides: [{ name: "Extra Amala", price: 300 }],
  },
  {
    id: 302,
    name: "Fufu & Okra Soup (Fish)",
    price: 3500,
    image: "/okra.png",
    description: "Light Fufu served with fresh okra soup and tilapia fish.",
    tags: ["Gluten-free"],
    proteins: [{ name: "Tilapia Fish", price: 0 }, { name: "Catfish", price: 500 }],
    sides: [{ name: "Extra Fufu", price: 300 }, { name: "Eba", price: 300 }],
  },
  {
    id: 303,
    name: "Fufu & Okra Soup (Fish)",
    price: 3800,
    image: "/okra.png",
    description: "Light Fufu served with fresh okra soup and tilapia fish.",
    tags: ["Gluten-free"],
    proteins: [{ name: "Tilapia Fish", price: 0 }, { name: "Assorted Meat", price: 600 }],
    sides: [{ name: "Extra Fufu", price: 300 }],
  },
];

const categories = [
  { label: "Popular", id: "popular" },
  { label: "Jollof Rice & Entrees", id: "jollof-rice" },
  { label: "Swallow & Soups", id: "swallow-soups" },
  { label: "Grills & sides", id: "grills-sides" },
  { label: "Beverages", id: "beverages" },
  { label: "Desserts", id: "desserts" },
];

export default function Explore() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("popular");

  const handleAddToCart = (food: FoodItem) => {
    const encoded = encodeURIComponent(JSON.stringify(food));
    router.push(`/food-detail?data=${encoded}`);
  };

  const scrollTo = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      <main>
        <section
          className="relative flex flex-1 min-h-screen items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/explorehero.png')" }}
        >
          <div className="absolute inset-0 bg-[#00000073]"></div>
          <div className="relative z-10 px-2 md:px-8 text-white">
            <h1 className="md:text-[48px] text-[32px] leading-[48px] font-bold">Chuks  Kitchen</h1>
            <p className="leading-relaxed mt-3 md:text-[24px] text-[16px]">
              Chuks  Kitchen Nigerian Home Cooking 4.8(12k)Handcrafted with passion, delivered with care.
            </p>
          </div>
        </section>

        <section className="w-[90%] bg-white mt-20 mx-auto py-4">
          <h4 className="text-[#000000] text-[24px] px-5 font-bold">Menu Categories</h4>
          <nav className="mt-2">
            {categories.map((cat) => (
              <p
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`px-5 mb-2 py-1 cursor-pointer transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#FFE1C4] border-l-3 border-[#FF7A18] text-[#FF7A18] font-semibold"
                    : "hover:bg-[#FFF5EE]"
                }`}
              >
                {cat.label}
              </p>
            ))}
          </nav>
        </section>

        <section className="mt-15 w-[90%] mx-auto">

          <h1 id="popular" className="text-[32px] text-[#1F2937] font-bold scroll-mt-6">Popular</h1>
          <section className="w-full flex md:flex-row flex-col items-center flex-wrap justify-between mt-10">
            {popularItems.map((food) => (
              <div key={food.id} className="md:w-[30%] w-[95%] bg-white mb-10 rounded-[20px] overflow-hidden">
                <img src={food.image} alt={food.name} className="rounded-t-[20px] w-full" />
                <nav className="min-h-30 px-4 py-3">
                  <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">{food.name}</h4>
                  <p className="text-[#1F2937] text-[16px] leading-[18px]">{food.description}</p>
                  <nav className="mt-10 flex flex-1 justify-between items-center">
                    <p className="text-[#FF7A18]">₦{food.price.toLocaleString()}</p>
                    <button
                      onClick={() => handleAddToCart(food)}
                      className="bg-[#FF7A18] w-9 h-9 flex items-center justify-center text-white rounded-full cursor-pointer text-[14px] mb-5 hover:bg-orange-600 transition"
                    >
                      <i className="fa-solid fa-plus" />
                    </button>
                  </nav>
                </nav>
              </div>
            ))}
          </section>

          {/* Jollof Rice & Entrees */}
          <h1 id="jollof-rice" className="md:text-[32px] text-[20px] text-[#1F2937] font-bold scroll-mt-6">Jollof Rice & Entrees</h1>
          <section className="w-full flex flex-wrap items-center justify-between mt-10">
            {jollofItems.map((food) => (
              <div key={food.id} className="md:w-[30%] w-[95%] bg-white mb-10 rounded-[20px] overflow-hidden">
                <img src={food.image} alt={food.name} className="rounded-t-[20px] w-full" />
                <nav className="min-h-30 px-4 py-3">
                  <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">{food.name}</h4>
                  <p className="text-[#1F2937] text-[16px] leading-[18px]">{food.description}</p>
                  <nav className="mt-10 flex flex-1 justify-between items-center">
                    <p className="text-[#FF7A18]">₦{food.price.toLocaleString()}</p>
                    <button
                      onClick={() => handleAddToCart(food)}
                      className="bg-[#FF7A18] w-9 h-9 flex items-center justify-center text-white rounded-full cursor-pointer text-[14px] mb-5 hover:bg-orange-600 transition"
                    >
                      <i className="fa-solid fa-plus" />
                    </button>
                  </nav>
                </nav>
              </div>
            ))}
          </section>

          {/* Swallow & Soups */}
          <h1 id="swallow-soups" className="md:text-[32px] text-[25px] text-[#1F2937] font-bold scroll-mt-6">Swallow & Soups</h1>
          <section className="w-full flex flex-wrap items-center justify-between mt-10">
            {swallowItems.map((food) => (
              <div key={food.id} className="md:w-[30%] w-[95%] bg-white mb-10 rounded-[20px] overflow-hidden">
                <img src={food.image} alt={food.name} className="rounded-t-[20px] w-full" />
                <nav className="min-h-30 px-4 py-3">
                  <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">{food.name}</h4>
                  <p className="text-[#1F2937] text-[16px] leading-[18px]">{food.description}</p>
                  <nav className="mt-10 flex flex-1 justify-between items-center">
                    <p className="text-[#FF7A18]">₦{food.price.toLocaleString()}</p>
                    <button
                      onClick={() => handleAddToCart(food)}
                      className="bg-[#FF7A18] w-9 h-9 flex items-center justify-center text-white rounded-full cursor-pointer text-[14px] mb-5 hover:bg-orange-600 transition"
                    >
                      <i className="fa-solid fa-plus" />
                    </button>
                  </nav>
                </nav>
              </div>
            ))}
          </section>

          {/* Grills & sides placeholder */}
          <div id="grills-sides" className="scroll-mt-6 mb-10" />
          {/* Beverages placeholder */}
          <div id="beverages" className="scroll-mt-6 mb-10" />
          {/* Desserts placeholder */}
          <div id="desserts" className="scroll-mt-6 mb-10" />

        </section>
      </main>
      <Footer />
    </div>
  );
}