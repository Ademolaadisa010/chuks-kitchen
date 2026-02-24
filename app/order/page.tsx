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
      <main className="px-2 md:px-8 my-5 md:my-20">
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
              <div className="flex flex-col gap-3">
                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="border border-[#BDBDBD] rounded-sm flex flex-row overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[110px] h-[150px] md:w-[160px] md:h-[160px] flex-shrink-0 object-cover"
                    />

                    <div className="flex-1 flex flex-col md:flex-row justify-between items-center px-1 py-2 md:px-5 md:py-3">

                      <div className="flex-0.5 md:mr-20">
                        <h4 className="text-[15px] md:text-[20px] text-[#000000] font-bold leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[#4B5563] text-[12px] md:text-[14px] mt-1">
                          {[
                            item.selectedProtein,
                            ...(item.selectedSides.length > 0 ? [item.selectedSides.join(", ")] : []),
                          ].filter(Boolean).join(", ")}
                        </p>
                        {item.instructions && (
                          <p className="text-[#4B5563] text-[11px] md:text-[13px] italic mt-0.5">
                            {item.instructions}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-1 w-full items-center md:flex-row flex-col justify-between mt-2">

                        <div className="flex flex-1 mr-0 md:mr-20 w-full items-center justify-between gap-3">
                          <button
                            onClick={() => increaseQty(item.cartId)}
                            className="fa-solid fa-plus text-[#4B5563] cursor-pointer hover:text-[#FF7A18] transition text-[14px] md:text-[16px]"
                          />
                          <p className="text-[#000000] text-[16px] md:text-[20px] font-bold w-5 text-center">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() => decreaseQty(item.cartId)}
                            className="fa-solid fa-minus text-[#4B5563] cursor-pointer hover:text-[#FF7A18] transition text-[14px] md:text-[16px]"
                          />
                        </div>

                        <div className="flex flex-1 items-center w-full justify-between gap-3">
                          <p className="text-[#FF7A18] text-[16px] md:text-[22px] font-bold">
                            ₦{(item.total * item.quantity).toLocaleString()}
                          </p>
                          <button
                            onClick={() => removeItem(item.cartId)}
                            className="bg-[#FF7A18] text-white w-8 h-8 flex items-center justify-center rounded-sm cursor-pointer hover:bg-orange-600 transition flex-shrink-0 text-[12px]"
                          >
                            <i className="fa-solid fa-x" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/home">
                <p className="text-[#1E88E5] cursor-pointer mt-3 mb-2 inline-block text-[14px] md:text-[16px]">
                  <i className="fa-solid fa-plus mr-2"></i>
                  Add more items from Chuks Kitchen
                </p>
              </Link>

              <button
                onClick={handleCheckout}
                className="w-full h-12 bg-[#FF7A18] text-white rounded-sm cursor-pointer mt-4 hover:bg-orange-600 transition text-[16px] font-semibold"
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