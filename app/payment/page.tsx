import Footer from "@/component/footer";
import Header from "@/component/header";

export default function Payment(){
    return(
        <div className="bg-[#F3F4F6]">
            <Header/>
            <main className="flex justify-center items-center my-20">
                <section className="w-[50%] bg-white min-h-10 px-3">
                    <h1 className="text-[#000000] text-[30px] font-bold py-2 border-b-1 border-[#BDBDBD]">Payment</h1>
                    <h3 className="text-[#0A0D13] text-[20px] font-semibold mt-3 mb-1">Pay With:</h3>
                    <nav className="flex pl-2">
                        <div className="flex-1 flex items-center gap-1">
                            <input type="radio" />
                            <p>Card</p>
                        </div>
                        <div className="flex-1 flex items-center gap-1">
                            <input type="radio" />
                            <p>Bank</p>
                        </div>
                        <div className="flex-1 flex items-center gap-1">
                            <input type="radio" />
                            <p>Transfer</p>
                        </div>
                    </nav>
                    <form className="mt-8">
                        <label className="text-[16px] text-[#0A0D13] font-semibold">Card Number</label>
                        <br />
                        <input className="border-2 border-[#ACACAC] min-h-10 w-full rounded-sm pl-2 mt-3" type="text" placeholder="1234  5678  9101  1121" />
                        <nav className="flex gap-4 mt-4">
                            <div className="flex-1">
                                <p className="mb-2">Expiration Date</p>
                                <input className="border-2 border-[#ACACAC] w-full min-h-10 pl-2 rounded-sm" type="text" placeholder="MM/YY" />
                            </div>
                            <div className="flex-1">
                                <p className="mb-2">CVV</p>
                                <input className="border-2 border-[#ACACAC] w-full min-h-10 pl-2 rounded-sm" type="text" placeholder="123" />
                            </div>
                        </nav>
                        <p className="flex items-center gap-1 mt-2 text-[#ACACAC] text-[14px]"><input type="checkbox" name="" id="" />Save card details</p>
                        <button className="w-full min-h-12 bg-[#FF7A18] rounded-lg mt-5 text-white cursor-pointer mb-5">Pay ₦9,900</button>
                        <p className="text-[#ACACAC] text-[14px]">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </form>
                </section>
            </main>
            <Footer/>
        </div>
    )
}