import { Island_Moments } from "next/font/google";
const island = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});
export default function Footer() {
  return (
    <footer className="bg-[#7B4B2A] text-white">
      <div className="max-w-7xl mx-auto px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          
          <div className="space-y-6">
            <h2 className={`${island.className} text-[37px] text-[#FF8C32]`}>
              Chuks Kitchen
            </h2>

            <p className="text-[17px] leading-relaxed text-gray-200">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="hover:text-white text-[12px] cursor-pointer">Home</li>
              <li className="hover:text-white text-[12px] cursor-pointer">Explore</li>
              <li className="hover:text-white text-[12px] cursor-pointer">My Order</li>
              <li className="hover:text-white text-[12px] cursor-pointer">Account</li>
              <li className="hover:text-white text-[12px] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="text-[12px]">+234 801 234 5678</li>
              <li className="text-[12px]">hello@chukskitchen.com</li>
              <li className="text-[12px]">123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 text-gray-200">
            <p className="hover:text-white text-[12px] cursor-pointer">Facebook</p>
            <p className="hover:text-white text-[12px] cursor-pointer">Twitter</p>
            <p className="hover:text-white text-[12px] cursor-pointer">LinkedIn</p>
            <p className="hover:text-white text-[12px] cursor-pointer">Instagram</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-gray-300 text-sm">
          © 2020 Lift Media. All rights reserved.
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition">
        ↑
      </button>
    </footer>
  );
}