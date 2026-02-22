"use client";

import Footer from "@/component/footer";
import Header from "@/component/header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Order() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("chuks_kitchen_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const saveCart = (updated: CartItem[]) => {
    setCart(updated);
    localStorage.setItem("chuks_kitchen_cart", JSON.stringify(updated));
  };

  const increaseQty = (cartId: string) => {
    saveCart(
      cart.map((item) =>
        item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (cartId: string) => {
    saveCart(
      cart
        .map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (cartId: string) => {
    saveCart(cart.filter((item) => item.cartId !== cartId));
  };

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.total * item.quantity,
    0
  );

  const handleCheckout = () => {
    localStorage.setItem(
      "chuks_kitchen_checkout",
      JSON.stringify({ cart, grandTotal })
    );
    router.push("/summary");
  };

  return (
    <div className="bg-[#F3F4F6] w-full min-h-screen">
      <Header />
      <main className="px-8 my-20">
        <section className="w-full min-h-10 bg-white rounded-sm py-3 px-2">
          <h1 className="text-[32px] text-[#000000] font-bold mb-4">Your Cart</h1>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <i className="fa-solid fa-cart-shopping text-[60px] text-[#BDBDBD]"></i>
              <p className="text-[#4B5563] text-[18px]">Your cart is empty.</p>
              <Link href="/home">
                <button className="bg-[#FF7A18] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition">
                  Browse Menu
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div>
                {cart.map((item) => (
                  <nav
                    key={item.cartId}
                    className="px-2 py-1 border-1 rounded-sm mb-2 border-[#BDBDBD] flex"
                  >
                    <img
                      src={item.image}
                      className="w-[200px] h-[150px] object-cover rounded-sm flex-shrink-0"
                      alt={item.name}
                    />
                    <div className="flex-1 flex items-center justify-between px-4">
                      <nav className="ml-4 flex-1">
                        <h4 className="text-[24px] text-[#000000] font-bold">{item.name}</h4>
                        <p className="text-[#4B5563] text-[15px] mt-1">
                          Protein: {item.selectedProtein}
                        </p>
                        {item.selectedSides.length > 0 && (
                          <p className="text-[#4B5563] text-[15px]">
                            Sides: {item.selectedSides.join(", ")}
                          </p>
                        )}
                        {item.instructions && (
                          <p className="text-[#4B5563] text-[13px] italic mt-1">
                            Note: {item.instructions}
                          </p>
                        )}
                      </nav>

                      <nav className="flex items-center gap-4 mx-6">
                        <button
                          onClick={() => increaseQty(item.cartId)}
                          className="fa-solid fa-plus bg-[#BDBDBD] p-2 rounded-sm cursor-pointer hover:bg-gray-400 transition"
                        />
                        <p className="text-[#000000] text-[24px] font-bold w-6 text-center">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => decreaseQty(item.cartId)}
                          className="fa-solid fa-minus bg-[#BDBDBD] p-2 rounded-sm cursor-pointer hover:bg-gray-400 transition"
                        />
                      </nav>

                      <p className="text-[#FF7A18] text-[28px] font-bold mr-6">
                        ₦{(item.total * item.quantity).toLocaleString()}
                      </p>

                      <button
                        onClick={() => removeItem(item.cartId)}
                        className="fa-solid fa-x bg-[#FF7A18] p-2 rounded-sm cursor-pointer text-white hover:bg-orange-600 transition"
                      />
                    </div>
                  </nav>
                ))}
              </div>

              <Link href="/home">
                <p className="text-[#1E88E5] cursor-pointer mt-3 mb-2 inline-block">
                  <i className="fa-solid fa-plus mr-2"></i>
                  Add more items from Chuks Kitchen
                </p>
              </Link>

              <button
                onClick={handleCheckout}
                className="w-full h-12 bg-[#FF7A18] text-white rounded-sm cursor-pointer mt-6 hover:bg-orange-600 transition text-[16px] font-semibold"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}