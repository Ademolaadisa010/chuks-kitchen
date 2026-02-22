import Footer from "@/component/footer"
import Header from "@/component/header"

export default function Home(){
    return(
        <div className="bg-[#F3F4F6]">
            <Header/>
            <main>
                <section className="relative flex flex-1 min-h-screen items-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/Welcome.png')" }}
                    >
                    <div className="absolute inset-0 bg-[#00000073]"></div>

                    <div className="relative z-10 px-8 text-white">
                        <h1 className="text-[48px] leading-[50px] font-semibold w-[60%]">The Heart of Nigerian Home Cooking</h1>
                        <p className="leading-relaxed mt-5 text-[32px] font-bold">
                        Handcrafted with passion, delivered with care.
                        </p>
                        <button className="bg-[#FF7A18] mt-5 px-5 py-3 rounded-lg cursor-pointer">Discover what’s new</button>
                    </div>
                </section>

                <nav className="w-[70%] mx-auto rounded-sm bg-white px-4 flex items-center mt-[-30px] relative">
                    <i className="fa-solid fa-magnifying-glass text-3xl mr-3 text-[#807373]"></i>
                    <input className="h-15 flex-1 outline-none border-none text-[#1F2937] text-[24px] font-500" type="search" placeholder="What are you craving for today?" />
                </nav>

                <h1 className="text-[32px] text-[#1F2937] text-center font-bold mt-20">Popular Categories</h1>
                
                <section className="w-[90%] mx-auto flex flex-wrap justify-between mt-10">
                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>
                        <nav className="h-30 flex items-center justify-center">
                            <p className="text-[#1F2937] text-[24px] font-bold">Jollof Delights</p>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/swallow.png" alt="welcome" className="rounded-t-[20px] w-full"/>
                        <nav className="h-30 flex items-center justify-center">
                            <p className="text-[#1F2937] text-[24px] font-bold">Swallow & Soups</p>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/bbq.png" alt="welcome" className="rounded-t-[20px] w-full"/>
                        <nav className="h-30 flex items-center justify-center">
                            <p className="text-[#1F2937] text-[24px] font-bold">Grills & BBQ</p>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/sweet.png" alt="welcome" className="rounded-t-[20px] w-full"/>
                        <nav className="h-30 flex items-center justify-center">
                            <p className="text-[#1F2937] text-[24px] font-bold">Sweet Treats</p>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/fish.jpg" alt="welcome" className="rounded-t-[20px] w-full"/>
                        <nav className="h-30 flex items-center justify-center">
                            <p className="text-[#1F2937] text-[24px] font-bold">Fish</p>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/Welcome.png" alt="welcome" className="rounded-t-[20px] w-full"/>
                        <nav className="h-30 flex items-center justify-center">
                            <p className="text-[#1F2937] text-[24px] font-bold">Jollof Rice</p>
                        </nav>
                    </div>
                </section>

                <h1 className="text-[32px] text-[#1F2937] text-center font-bold mt-40">Chef's Specials</h1>
                
                <section className="w-[90%] mx-auto flex flex-wrap justify-between mt-10">
                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/fish.jpg" alt="welcome" className="rounded-t-[20px] w-full"/>

                        <nav className="min-h-30 px-4 py-3">
                            <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Spicy Tilapia Pepper Soup</h4>
                            <p className="text-[#1F2937] text-[16px] leading-[18px]">A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.</p>
                            <nav className="mt-10 flex flex-1 justify-between items-center">
                                <p className="text-[#FF7A18]">₦3,500</p>
                                <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                            </nav>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                        <nav className="min-h-30 px-4 py-3">
                            <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Jollof Rice & Fried Chicken</h4>
                            <p className="text-[#1F2937] text-[16px] leading-[18px]">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                            <nav className="mt-10 flex flex-1 justify-between items-center">
                                <p className="text-[#FF7A18]">₦3,500</p>
                                <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                            </nav>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                        <nav className="min-h-30 px-4 py-3">
                            <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Jollof Rice & Fried Chicken</h4>
                            <p className="text-[#1F2937] text-[16px] leading-[18px]">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                            <nav className="mt-10 flex flex-1 justify-between items-center">
                                <p className="text-[#FF7A18]">₦3,500</p>
                                <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                            </nav>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/jollof.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                        <nav className="min-h-30 px-4 py-3">
                            <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Jollof Rice & Fried Chicken</h4>
                            <p className="text-[#1F2937] text-[16px] leading-[18px]">Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.</p>
                            <nav className="mt-10 flex flex-1 justify-between items-center">
                                <p className="text-[#FF7A18]">₦3,500</p>
                                <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                            </nav>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/plantain.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                        <nav className="min-h-30 px-4 py-3">
                            <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Spicy Tilapia Pepper Soup</h4>
                            <p className="text-[#1F2937] text-[16px] leading-[18px]">A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.</p>
                            <nav className="mt-10 flex flex-1 justify-between items-center">
                                <p>₦3,500</p>
                                <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                            </nav>
                        </nav>
                    </div>

                    <div className="w-[30%] bg-white mb-10 rounded-[20px] overflow-hidden">
                        <img src="/egusi.png" alt="welcome" className="rounded-t-[20px] w-full"/>

                        <nav className="min-h-30 px-4 py-3">
                            <h4 className="text-[20px] text-[#1F2937] font-bold mb-1">Egusi Soup & Pounded Yam</h4>
                            <p className="text-[#1F2937] text-[16px] leading-[18px]">Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.</p>
                            <nav className="mt-10 flex flex-1 justify-between items-center">
                                <p>₦3,500</p>
                                <button className="bg-[#FF7A18] px-5 py-2 text-white rounded-sm cursor-pointer text-[16px] mb-5">Add to cart</button>
                            </nav>
                        </nav>
                    </div>
                </section>

                <section className="relative flex flex-1 min-h-150 mt-30 items-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/egusi.png')" }}
                    >
                    <div className="absolute inset-0 bg-[#1D1D1D73]"></div>

                    <div className="relative z-10 pl-15">
                        <h1 className="text-[48px] font-bold text-white">Introducing Our New Menu Additions!</h1>
                        <p className="text-lg leading-relaxed text-[#FFFFFF] w-[50%]">
                        Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                        </p>
                        <button className="bg-[#FF7A18] mt-5 px-5 py-3 rounded-lg cursor-pointer text-white">Discover what’s new</button>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}