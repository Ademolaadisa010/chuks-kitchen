import Footer from "@/component/footer";
import Header from "@/component/header";

export default function Explore(){
    return(
        <div className="min-h-screen bg-[#F3F4F6]">
            <Header/>
            <main>
                <section className="relative flex flex-1 min-h-screen items-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/explorehero.png')" }}
                    >
                    <div className="absolute inset-0 bg-[#00000073]"></div>

                    <div className="relative z-10 px-8 text-white">
                        <h1 className="text-[48px] leading-[48px] font-bold">Chuks  Kitchen</h1>
                        <p className="leading-relaxed mt-3 text-[24px]">
                        Chuks  Kitchen Nigerian Home Cooking 4.8(12k)Handcrafted with passion, delivered with care.
                        </p>
                    </div>
                </section>

                <section className="w-[90%] bg-white mt-20 mx-auto py-4">
                    <h4 className="text-[#000000] text-[24px] px-5 font-bold">Menu Categories</h4>
                    <nav className="mt-2">
                        <p className="px-5 mb-2 py-1 bg-[#FFE1C4] border-l-3 border-[#FF7A18]">Popular</p>
                        <p className="px-5 mb-2 py-1">Jollof Rice & Entrees</p>
                        <p className="px-5 mb-2 py-1">Swallow & Soups</p>
                        <p className="px-5 mb-2 py-1">Grills & sides</p>
                        <p className="px-5 mb-2 py-1">Beverages</p>
                        <p className="px-5 mb-2 py-1">Desserts</p>
                    </nav>
                </section>

                <section className="mt-15 w-[90%] mx-auto">
                    <h1 className="text-[32px] text-[#1F2937] font-bold">Popular</h1>
                    <section className="w-full flex flex-wrap justify-between mt-10">
                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Jollof Rice & Fried Chicken</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Our signature Jollof rice, served with crispy fried chicken and plantain.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/eba.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Eba & Egusi Soup (Goat Meat)</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Hearty Egusi soup with tender goat meat, served with soft Eba.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/pounded.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Pounded Yam & Edikaikong</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Traditional pounded yam with rich, leafy Edikaikong soup.
</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,800</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/snail.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Peppered Snail</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Spicy and savory peppered snail, perfect as a starter.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦2,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/tilapia.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Grilled Tilapia Fish</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Whole grilled tilapia seasoned with our special spices.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦4,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Jollof Rice & Fried Chicken</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Our signature Jollof rice, served with crispy fried chicken and plantain.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p>₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>
                    </section>
                    <h1 className="text-[32px] text-[#1F2937] font-bold">Jollof Rice & Entrees</h1>
                    <section className="w-full flex flex-wrap justify-between mt-10">
                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/smoke.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Jollof Rice & Fried Chicken</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Flavorful jollof rice served with perfectly smoked fish.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Party Jollof Rice (Veg)</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Vegetarian party jollof, full of rich flavors.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Party Jollof Rice (Veg)</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Vegetarian party jollof, full of rich flavors.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,800</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>
                    </section>

                    <h1 className="text-[32px] text-[#1F2937] font-bold">Swallow & Soups</h1>
                    <section className="w-full flex flex-wrap justify-between mt-10">
                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/amala.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Amala with Gbegiri & Ewedu</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/okra.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Fufu & Okra Soup (Fish)</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Light Fufu served with fresh okra soup and tilapia fish.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,500</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>

                        <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                            <img src="/okra.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                            <nav className="min-h-30 px-4 py-3">
                                <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Fufu & Okra Soup (Fish)</h4>
                                <p className="text-[#1F2937] text-[16px] leading-[18px]">Light Fufu served with fresh okra soup and tilapia fish.</p>
                                <nav className="mt-10 flex flex-1 justify-between items-center">
                                    <p className="text-[#FF7A18]">₦3,800</p>
                                    <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                                </nav>
                            </nav>
                        </div>
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}