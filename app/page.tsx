import Image from "next/image";
import { Island_Moments } from "next/font/google";
import {Inter} from "next/font/google";
import Family from "@/public/family.svg"
import Link from "next/link";
import Footer from "@/component/footer";
const island = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Onboarding() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="flex w-full min-h-screen">

        <div className="relative flex-1 min-h-screen">
          <Image src={Family} alt="family picture" fill className="object-cover" priority/>
        </div>

        <div className="flex-1 min-h-screen pl-20 pr-10 pt-8">
          <nav className="flex-1 flex justify-between items-center">
            <h1 className={`${island.className} text-5xl font-normal text-[#FF7A18]`}>Chuks Kitchen</h1>
            <Link href="/login">
            <button className="border-2 border-[#1E88E5] text-[#1E88E5] px-5 py-1 rounded-lg cursor-pointer">Sign In</button></Link>
          </nav>

          <div className="mt-20">
            <h2 className={`${inter.className} text-[32px] text-[#1F2937]`}>Your Authentic Taste of Nigeria</h2>
            <p className={`${inter.className} text-[16px] text-[#1F2937] mt-2`}>Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.</p>
          </div>

          <div className="mt-10 flex gap-30">
            <nav className="flex items-center gap-3">
              <i className="fa-solid fa-utensils text-[#FF7A18] p-2 bg-[#FFE1C4] rounded-lg"></i>
              <h4 className={`${inter.className} text-[16px] text-[#1F2937]`}>Freshly Prepared</h4>
            </nav>
            <nav className="flex items-center gap-3">
              <i className="fa-solid fa-utensils text-[#FF7A18] p-2 bg-[#FFE1C4] rounded-lg"></i>
              <h4 className={`${inter.className} text-[16px] text-[#1F2937]`}>Support Local Business</h4>
            </nav>
          </div>
          <nav className="flex items-center gap-3 mt-5">
            <i className="fa-solid fa-truck text-[#FF7A18] p-2 bg-[#FFE1C4] rounded-lg"></i>
            <h4 className={`${inter.className} text-[16px] text-[#1F2937]`}>Fast & Reliable Delivery</h4>
          </nav>
          <Link href="/login"><button className="mt-[30px] bg-[#FF7A18] text-white w-full h-12 rounded-lg cursor-pointer">Start Your Order</button></Link>
          <Link href="/home">
          <button className="mt-[30px] text-[#1E88E5] border-[#1E88E5] border-2 w-full h-12 rounded-lg cursor-pointer">Learn More About Us</button></Link>
          <p className="text-center my-10 text-[14px] text-[#1F2937]">&copy; 2024 Chuks Kitchen. <Link className="text-[#64B5F6]" href="/">Privacy Policy Terms of Service</Link></p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
