import Footer from "@/component/footer";
import Header from "@/component/header";
import Link from "next/link";

export default function OrderSummary(){
    return(
        <div className="bg-[#F3F4F6] min-h-screen w-full">
            <Header/>
            <main className="flex justify-center items-center">
                <section className="w-[50%] min-h-40 bg-white my-10 px-2">
                    <h1 className="text-[#000000] text-[32px] font-bold py-2 border-b-1 border-[#BDBDBD]">Order Summary</h1>
                    <h2 className="text-[#000000] text-[24px] font-semibold mt-4">Add a Promo Code</h2>
                    <nav className="flex gap-4 mt-2 mb-10">
                        <input type="text" className="flex-1 min-h-10 pl-2 rounded-lg border-[#BDBDBD] border-1" placeholder="Enter Promo code" />
                        <button className="bg-[#FF7A18] px-6 text-white rounded-sm cursor-pointer">Login</button>
                    </nav>

                    <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
                        <p>Subtotal</p>
                        <p>₦9,200</p>
                    </nav>
                    <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
                        <p>Delivery Fee</p>
                        <p>₦500</p>
                    </nav>
                    <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
                        <p>Service Fee</p>
                        <p>200</p>
                    </nav>
                    <nav className="flex justify-between text-[#4B5563] text-[16px] mb-1">
                        <p>Tax</p>
                        <p>₦0</p>
                    </nav>

                    <div className="flex justify-between items-center py-6 border-t-1 text-[24px] text-[#1F2937] font-bold border-[#BDBDBD]">
                        <h1>Total</h1>
                        <p>₦9,900</p>
                    </div>
                    <aside className="flex">
                        <button className="flex-1 bg-[#FF7A18] min-h-12 rounded-sm cursor-pointer text-white">Delivery</button>
                        <button className="flex-1 bg-[#BDBDBD] min-h-12 rounded-sm cursor-pointer text-white">Pick up</button>
                    </aside>
                    <label className="mt-6 font-semibold text-[24px] block">Special Instructions for Restaurant</label>
                    <input className="border-1 border-[#BDBDBD] min-h-20 mt-2 w-full px-2 outline-none rounded-sm" type="text" placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty" />
                    <Link href="/delivery-details">
                    <button className="mt-3 mb-5 bg-[#FF7A18] w-full min-h-12 text-white rounded-sm cursor-pointer">Confirm Checkout</button></Link>
                </section>
            </main>
            <Footer/>
        </div>
    )
}