import Footer from "@/component/footer";
import Header from "@/component/header";
import Link from "next/link";

export default function DeliveryDetails(){
    return(
        <div className="bg-[#F3F4F6]">
            <Header/>
            <main className="flex justify-center items-center">
                <section className="w-[50%] min-h-10 bg-white my-10 px-2">
                    <h1 className="text-[#000000] text-[30px] py-2 border-b-1 border-[#BDBDBD] font-bold">Delivery Details</h1>
                    <input className="w-full min-h-18 border-1 border-[#BDBDBD] rounded-sm px-2 mt-3" type="text" placeholder="Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega Plaza" />
                    <p className="text-[20px] text-[#000000] font-semibold mt-3">Delivery Time</p>
                    <input className="mt-2 border-[#BDBDBD] border-1 w-full pl-2 min-h-10 rounded-sm" type="text" placeholder="ASAP(30-25)" />
                    <p className="text-[20px] text-[#000000] font-semibold mt-3">Delivery Instructions (Optional)</p>
                    <input className="mt-2 border-[#BDBDBD] border-1 w-full pl-2 min-h-10 rounded-sm" type="text" placeholder="E.g leave at the front of the door, knock twice..................." />
                    <p className="text-[20px] text-[#000000] font-semibold mt-3">Contact Address</p>
                    <input className="mt-2 border-[#BDBDBD] border-1 w-full pl-2 min-h-10 rounded-sm" type="text" placeholder="+234 801 234 5678" />
                    <Link href="/payment">
                    <button className="w-full min-h-12 bg-[#FF7A18] mt-5 rounded-sm cursor-pointer mb-3 text-white">Proceed to Payment</button></Link>
                </section>
            </main>
            <Footer/>
        </div>
    )
}