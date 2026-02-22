import Footer from "@/component/footer";
import { Island_Moments } from "next/font/google";
import Link from "next/link";
const island = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});
export default function Login(){
    return(
        <div>
            <main className="flex w-full">
                <aside className="relative flex flex-1 min-h-screen items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/family.svg')" }}
                    >
                    <div className="absolute inset-0 bg-[#FF7A18B2]"></div>

                    <div className="relative z-10 text-center px-8 max-w-md text-white space-y-4">
                        <h1 className="text-4xl font-semibold">Chuks Kitchen</h1>
                        <p className="text-lg leading-relaxed">
                        Your journey to delicious, authentic Nigerian meals starts here.
                        Sign up or log in to order your favorites today!
                        </p>
                    </div>
                </aside>

                <section className="flex-1 flex justify-center bg-white items-center">
                    <div className="w-[60%] min-h-30">
                        <h1 className={`${island.className} text-[40px] text-center font-normal text-[#FF7A18]`}>Chuks Kitchen</h1>
                        <p className="text-[#000000] text-[24px] text-center ">Login your Account</p>
                        <form className="mt-6">
                            <label htmlFor="email" className="text-[#3B4758]">Email or phone number</label>
                            <nav className="border-1 mb-3 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                                <i className="fa-solid fa-envelope mr-2"></i>
                                <input type="email" className="flex-1 h-[40px] border-none outline-none" placeholder="name@gmail.com" />
                            </nav>

                            <label htmlFor="email" className="text-[#3B4758]">Password</label>
                            <nav className="border-1 border-[#BDBDBD] text-black flex items-center pl-4 rounded-sm">
                                <i className="fa-solid fa-lock mr-2"></i>
                                <input type="password" className="flex-1 h-[40px] border-none outline-none" placeholder="******" />
                            </nav>
                            <p className="text-end text-[12px] text-[#1E88E5] cursor-pointer mt-1 font-400">Forgot Password?</p>
                            <button className="w-full bg-[#FF7A18] min-h-13 rounded-lg cursor-pointer text-[16px] text-white mt-5">Continue</button>
                            <p className="text-center text-sm mt-2 text-[#1F2937] mb-2">Or continue with</p>
                            <button className="w-full bg-white border-[#BDBDBD] border-2 min-h-13 rounded-lg cursor-pointer text-[14px] text-[#3B4758] mt-5">
                                <i className="fa-brands fa-google mr-2"></i>
                                Continue with Google</button>
                            <button className="w-full bg-white border-[#BDBDBD] border-2 min-h-13 rounded-lg cursor-pointer text-[14px] text-[#3B4758] mt-5">
                            <i className="fa-brands fa-facebook-f mr-2"></i>
                            Continue with Facebook</button>
                            <p className="text-[14px] text-center mt-2 font-400">Don’t have an account? <Link href="/register" className="text-[#1C7FF9]">Create an account</Link></p>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}