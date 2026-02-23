"use client";

import Footer from "@/component/footer";
import Header from "@/component/header";
import { useRouter } from "next/navigation";

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

const chefsSpecials: FoodItem[] = [
  {
    id: 1,
    name: "Spicy Tilapia Pepper Soup",
    price: 3500,
    image: "/fish.jpg",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy. Slow-cooked with aromatic spices and fresh herbs for an unforgettable taste.",
    tags: ["Mildly spicy", "Gluten-free"],
    proteins: [
      { name: "Tilapia Fish", price: 0 },
      { name: "Catfish", price: 500 },
      { name: "Assorted Meat", price: 700 },
    ],
    sides: [
      { name: "Agidi", price: 300 },
      { name: "Yam", price: 500 },
      { name: "Extra Pepper Sauce", price: 200 },
    ],
  },
  {
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    price: 3500,
    image: "/jollof.png",
    description:
      "Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.",
    tags: ["Mildly spicy", "Vegetarian option available"],
    proteins: [
      { name: "Fried Chicken", price: 0 },
      { name: "Grilled Fish", price: 500 },
      { name: "Beef", price: 700 },
    ],
    sides: [
      { name: "Fried Plantain", price: 700 },
      { name: "Coleslaw", price: 500 },
      { name: "Extra Pepper Sauce", price: 300 },
    ],
  },
  {
    id: 3,
    name: "Jollof Rice & Fried Chicken",
    price: 3500,
    image: "/jollof.png",
    description:
      "Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying.",
    tags: ["Mildly spicy", "Vegetarian option available"],
    proteins: [
      { name: "Fried Chicken", price: 0 },
      { name: "Grilled Fish", price: 500 },
      { name: "Beef", price: 700 },
    ],
    sides: [
      { name: "Fried Plantain", price: 700 },
      { name: "Coleslaw", price: 500 },
      { name: "Extra Pepper Sauce", price: 300 },
    ],
  },
  {
    id: 4,
    name: "Jollof Rice & Fried Chicken",
    price: 3500,
    image: "/jollof.png",
    description:
      "Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food.",
    tags: ["Mildly spicy"],
    proteins: [
      { name: "Fried Chicken", price: 0 },
      { name: "Grilled Fish", price: 500 },
    ],
    sides: [
      { name: "Fried Plantain", price: 700 },
      { name: "Coleslaw", price: 500 },
    ],
  },
  {
    id: 5,
    name: "Fried Plantain & Sauce",
    price: 3500,
    image: "/plantain.png",
    description:
      "Sweet, ripe plantains fried to golden perfection, served with a spicy pepper sauce. A beloved Nigerian street food classic.",
    tags: ["Vegan", "Gluten-free"],
    proteins: [
      { name: "No Protein", price: 0 },
      { name: "Grilled Chicken", price: 600 },
    ],
    sides: [
      { name: "Extra Pepper Sauce", price: 200 },
      { name: "Coleslaw", price: 500 },
    ],
  },
  {
    id: 6,
    name: "Egusi Soup & Pounded Yam",
    price: 3500,
    image: "/egusi.png",
    description:
      "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam. A classic Nigerian dish full of flavor and nourishment.",
    tags: ["Gluten-free", "High protein"],
    proteins: [
      { name: "Assorted Meat", price: 0 },
      { name: "Goat Meat", price: 700 },
      { name: "Stockfish", price: 400 },
    ],
    sides: [
      { name: "Extra Pounded Yam", price: 500 },
      { name: "Fufu", price: 400 },
      { name: "Eba", price: 300 },
    ],
  },
];

export default function Home() {
  const router = useRouter();

  const handleAddToCart = (food: FoodItem) => {
    const encoded = encodeURIComponent(JSON.stringify(food));
    router.push(`/food-detail?data=${encoded}`);
  };

  return (
    <div className="bg-[#F3F4F6]">
      <Header />

      <main>
        {/* Hero */}
        <section
          className="relative flex flex-1 min-h-screen items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/Welcome.png')" }}
        >
          <div className="absolute inset-0 bg-[#00000073]"></div>
          <div className="relative z-10 pl-1 md:px-8 text-white">
            <h1 className="text-[32px] md:text-[48px] leading-[50px] font-bold md:w-[60%] w-full">
              The Heart of Nigerian Home Cooking
            </h1>
            <p className="leading-relaxed mt-5 md:text-[32px] text-[16px] font-semibold">
              Handcrafted with passion, delivered with care.
            </p>
            <button className="bg-[#FF7A18] mt-5 px-5 py-3 rounded-lg cursor-pointer">
              Discover what&apos;s new
            </button>
          </div>
        </section>

        <nav className="md:w-[70%] w-[95%] mx-auto rounded-sm bg-white md:px-4 px-2 flex items-center mt-[-30px] relative">
          <i className="fa-solid fa-magnifying-glass text-3xl mr-3 text-[#807373]"></i>
          <input
            className="h-15 flex-1 outline-none border-none text-[#1F2937] text-[16px] md:text-[24px]"
            type="search"
            placeholder="What are you craving for today?"
          />
        </nav>

        <h1 className="text-[32px] text-[#1F2937] text-center font-bold mt-20">
          Popular Categories
        </h1>

        <section className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap justify-between mt-10">
          {[
            { img: "/jollof.png", label: "Jollof Delights" },
            { img: "/swallow.png", label: "Swallow & Soups" },
            { img: "/bbq.png", label: "Grills & BBQ" },
            { img: "/sweet.png", label: "Sweet Treats" },
            { img: "/fish.jpg", label: "Fish" },
            { img: "/Welcome.png", label: "Jollof Rice" },
          ].map((cat) => (
            <div key={cat.label} className="md:w-[30%] w-[95%] bg-white mb-10 rounded-[20px] overflow-hidden">
              <img src={cat.img} alt={cat.label} className="rounded-t-[20px] w-full" />
              <nav className="h-30 flex items-center justify-center">
                <p className="text-[#1F2937] text-[24px] font-bold">{cat.label}</p>
              </nav>
            </div>
          ))}
        </section>

        <h1 className="text-[32px] text-[#1F2937] text-center font-bold mt-40">
          Chef&apos;s Specials
        </h1>

        <section className="w-[90%] mx-auto flex flex-col md:flex-row flex-wrap justify-between mt-10">
          {chefsSpecials.map((food) => (
            <div key={food.id} className="md:w-[30%] w-[95%] bg-white mb-10 rounded-[20px] overflow-hidden">
              <img src={food.image} alt={food.name} className="rounded-t-[20px] w-full" />
              <nav className="min-h-30 px-4 py-3">
                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">{food.name}</h4>
                <p className="text-[#1F2937] text-[16px] leading-[18px]">
                  {food.description.slice(0, 80)}...
                </p>
                <nav className="mt-10 flex flex-1 justify-between items-center">
                  <p className="text-[#FF7A18]">₦{food.price.toLocaleString()}</p>
                  <button
                    onClick={() => handleAddToCart(food)}
                    className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5 hover:bg-orange-600 transition"
                  >
                    Add to cart
                  </button>
                </nav>
              </nav>
            </div>
          ))}
        </section>

        <section
          className="relative flex flex-1 min-h-150 mt-30 items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/egusi.png')" }}
        >
          <div className="absolute inset-0 bg-[#1D1D1D73]"></div>
          <div className="relative z-10 pl-2 md:pl-15">
            <h1 className="text-[32px] md:text-[48px] font-bold text-white">
              Introducing Our New Menu Additions!
            </h1>
            <p className="text-lg leading-relaxed text-[#FFFFFF] w-[90%] md:w-[50%]">
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </p>
            <button className="bg-[#FF7A18] mt-5 px-5 py-3 rounded-lg cursor-pointer text-white">
              Discover what&apos;s new
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}