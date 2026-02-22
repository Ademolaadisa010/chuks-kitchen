import Footer from "@/component/footer";
import Header from "@/component/header";
import Link from "next/link";

export default function Order(){
    return(
        <div className="bg-[#F3F4F6] w-full min-h-screen">
            <Header/>
            <main className="px-8 my-20">
                <section className="w-full min-h-10 bg-white rounded-sm py-3 px-2">
                    <h1 className="text-[32px] text-[#000000] font-bold">Your Cart</h1>
                    <div> 
                        <nav className="px-2 py-1 border-1 rounded-sm mb-2 border-[#BDBDBD] flex">
                            <img src="/jollof.png" className="w-[200px] h-[150px] object-cover rounded-sm" alt="jollof" />
                            <div className="flex-1 flex items-center justify-between">
                                <nav className="ml-10">
                                    <h4 className="text-[24px] text-[#000000] font-bold">Jollof Rice & Fried Chicken</h4>
                                    <p className="text-[#4B5563] text-[17px] mt-1">With plantain, extra pepper sauce</p>
                                </nav>
                                <nav className="flex items-center gap-10">
                                    <i className="fa-solid fa-plus bg-[#BDBDBD] p-1 rounded-sm cursor-pointer"></i>
                                    <p className="text-[#000000] text-[30px] font-bold">1</p>
                                    <i className="fa-solid fa-minus bg-[#BDBDBD] p-1 rounded-sm cursor-pointer"></i>
                                </nav>
                                <p className="text-[#FF7A18] text-[32px] font-bold">₦3,200</p>
                                <i className="fa-solid fa-x bg-[#FF7A18] p-2 rounded-sm cursor-pointer text-white"></i>
                            </div>
                        </nav>

                        <nav className="px-2 py-1 border-1 rounded-sm mb-2 border-[#BDBDBD] flex">
                            <img src="/jollof.png" className="w-[200px] h-[150px] object-cover rounded-sm" alt="jollof" />
                            <div className="flex-1 flex items-center justify-between">
                                <nav className="ml-10">
                                    <h4 className="text-[24px] text-[#000000] font-bold">Jollof Rice & Fried Chicken</h4>
                                    <p className="text-[#4B5563] text-[17px] mt-1">With plantain, extra pepper sauce</p>
                                </nav>
                                <nav className="flex items-center gap-10">
                                    <i className="fa-solid fa-plus bg-[#BDBDBD] p-1 rounded-sm cursor-pointer"></i>
                                    <p className="text-[#000000] text-[30px] font-bold">1</p>
                                    <i className="fa-solid fa-minus bg-[#BDBDBD] p-1 rounded-sm cursor-pointer"></i>
                                </nav>
                                <p className="text-[#FF7A18] text-[32px] font-bold">₦3,200</p>
                                <i className="fa-solid fa-x bg-[#FF7A18] p-2 rounded-sm cursor-pointer text-white"></i>
                            </div>
                        </nav>
                    </div>
                    <p className="text-[#1E88E5] cursor-pointer">
                        <i className="fa-solid fa-plus mr-2"></i>
                        Add more items from Chuks Kitchen
                    </p>
                    <Link href="/summary">
                    <button className="w-full h-12 bg-[#FF7A18] text-white rounded-sm cursor-pointer mt-10">Proceed to Checkout</button></Link>
                </section>
            </main>
            <Footer/>
        </div>
    )
}