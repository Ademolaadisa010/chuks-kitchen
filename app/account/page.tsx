"use client";

import Header from "@/component/header";
import Footer from "@/component/footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface UserSession {
  email: string;
  phone: string;
  createdAt: string;
}

interface OrderItem {
  name: string;
  quantity: number;
  total: number;
}

interface Order {
  orderId: string;
  cart: OrderItem[];
  total: number;
  orderType: string;
  paymentMethod: string;
  placedAt: string;
  status: string;
  deliveryCharge: number;
  serviceFee: number;
  discount: number;
}

type Tab = "profile" | "security" | "orders";

function getDisplayName(email: string) {
  return email.split("@")[0];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric", month: "short", year: "numeric",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-NG", {
    hour: "2-digit", minute: "2-digit",
  });
}

const STATUS_COLORS: Record<string, string> = {
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Delivered: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function Account() {
  const router = useRouter();
  const [session, setSession] = useState<UserSession | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chuks_kitchen_session");
    if (!stored) { router.push("/login"); return; }
    const user: UserSession = JSON.parse(stored);
    setSession(user);
    setEmail(user.email);
    setPhone(user.phone || "");
    setFullName(getDisplayName(user.email));

    const savedOrders = JSON.parse(localStorage.getItem("chuks_kitchen_orders") || "[]");
    setOrders(savedOrders.reverse());
  }, []);

  const handleSaveProfile = () => {
    if (!email.trim() || !phone.trim()) {
      toast.error("Email and phone are required.", { position: "top-right" });
      return;
    }
    const updated = { ...session, email, phone, createdAt: session?.createdAt || "" };
    localStorage.setItem("chuks_kitchen_session", JSON.stringify(updated));
    setSession(updated);
    toast.success("Profile updated successfully!", {
      position: "top-right",
      style: { background: "#FF7A18", color: "#fff", fontWeight: "600" },
      iconTheme: { primary: "#fff", secondary: "#FF7A18" },
    });
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All password fields are required.", { position: "top-right" });
      return;
    }
    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters.", { position: "top-right" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.", { position: "top-right" });
      return;
    }
    setCurrentPassword(""); setNewPassword(""); setConfirmPassword("");
    toast.success("Password changed successfully!", {
      position: "top-right",
      style: { background: "#FF7A18", color: "#fff", fontWeight: "600" },
      iconTheme: { primary: "#fff", secondary: "#FF7A18" },
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("chuks_kitchen_session");
    router.push("/login");
  };

  if (!session) return null;

  const totalSpent = orders.reduce((sum, o) => sum + (o.total || 0), 0);

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <Toaster />
      <Header />
      <main className="w-[90%] max-w-[900px] mx-auto my-10">

        <div className="bg-white rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center md:items-start gap-5 mb-6 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-[#FF7A18] flex items-center justify-center text-white text-[36px] font-bold flex-shrink-0">
            {getDisplayName(session.email)[0].toUpperCase()}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[22px] font-bold text-[#1F2937]">{fullName || getDisplayName(session.email)}</h1>
            <p className="text-[#4B5563] text-[14px] mt-0.5">{session.email}</p>
            <p className="text-[#9CA3AF] text-[12px] mt-1">
              Member since {formatDate(session.createdAt)}
            </p>
          </div>

          <div className="flex gap-6 text-center">
            <div>
              <p className="text-[22px] font-bold text-[#FF7A18]">{orders.length}</p>
              <p className="text-[#4B5563] text-[12px]">Orders</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-[22px] font-bold text-[#FF7A18]">₦{totalSpent.toLocaleString()}</p>
              <p className="text-[#4B5563] text-[12px]">Total Spent</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-[22px] font-bold text-[#FF7A18]">
                {orders.filter(o => o.status === "Confirmed").length}
              </p>
              <p className="text-[#4B5563] text-[12px]">Confirmed</p>
            </div>
          </div>
        </div>

        <div className="flex bg-white rounded-xl overflow-hidden mb-6 shadow-sm">
          {([
            { key: "profile", label: "Profile", icon: "fa-user" },
            { key: "security", label: "Security", icon: "fa-lock" },
            { key: "orders", label: "Order History", icon: "fa-bag-shopping" },
          ] as { key: Tab; label: string; icon: string }[]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 text-[14px] font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                activeTab === tab.key
                  ? "bg-[#FF7A18] text-white"
                  : "text-[#4B5563] hover:bg-orange-50 hover:text-[#FF7A18]"
              }`}
            >
              <i className={`fa-solid ${tab.icon}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl px-6 py-6 shadow-sm">
            <h2 className="text-[20px] font-bold text-[#1F2937] mb-5">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#3B4758] text-[14px] font-medium block mb-1">Full Name</label>
                <div className="border border-[#BDBDBD] flex items-center pl-3 rounded-lg focus-within:border-[#FF7A18] transition">
                  <i className="fa-solid fa-user text-[#9CA3AF] mr-2 text-[13px]" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="flex-1 h-[42px] outline-none text-[#1F2937] text-[14px] bg-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#3B4758] text-[14px] font-medium block mb-1">Email Address</label>
                <div className="border border-[#BDBDBD] flex items-center pl-3 rounded-lg focus-within:border-[#FF7A18] transition">
                  <i className="fa-solid fa-envelope text-[#9CA3AF] mr-2 text-[13px]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-[42px] outline-none text-[#1F2937] text-[14px] bg-transparent"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#3B4758] text-[14px] font-medium block mb-1">Phone Number</label>
                <div className="border border-[#BDBDBD] flex items-center pl-3 rounded-lg focus-within:border-[#FF7A18] transition">
                  <i className="fa-solid fa-phone text-[#9CA3AF] mr-2 text-[13px]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 h-[42px] outline-none text-[#1F2937] text-[14px] bg-transparent"
                    placeholder="08123456789"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#3B4758] text-[14px] font-medium block mb-1">Default Delivery Address</label>
                <div className="border border-[#BDBDBD] flex items-center pl-3 rounded-lg focus-within:border-[#FF7A18] transition">
                  <i className="fa-solid fa-location-dot text-[#9CA3AF] mr-2 text-[13px]" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1 h-[42px] outline-none text-[#1F2937] text-[14px] bg-transparent"
                    placeholder="123 Main Street, Lagos"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 bg-orange-50 rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-2 text-[13px] text-[#4B5563]">
                <i className="fa-solid fa-calendar text-[#FF7A18]" />
                <span>Joined: <strong>{formatDate(session.createdAt)}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#4B5563]">
                <i className="fa-solid fa-shield-halved text-[#FF7A18]" />
                <span>Account Status: <strong className="text-green-600">Active</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-[#4B5563]">
                <i className="fa-solid fa-star text-[#FF7A18]" />
                <span>Loyalty Points: <strong className="text-[#FF7A18]">{orders.length * 50} pts</strong></span>
              </div>
            </div>

            <button
              onClick={handleSaveProfile}
              className="mt-5 w-full md:w-auto px-10 py-3 bg-[#FF7A18] text-white rounded-lg cursor-pointer hover:bg-orange-600 transition font-semibold text-[15px]"
            >
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "security" && (
          <div className="bg-white rounded-2xl px-6 py-6 shadow-sm">
            <h2 className="text-[20px] font-bold text-[#1F2937] mb-5">Security Settings</h2>

            <div className="flex flex-col gap-4 max-w-[480px]">
              {[
                { label: "Current Password", value: currentPassword, setter: setCurrentPassword, show: showCurrent, toggle: () => setShowCurrent(p => !p) },
                { label: "New Password", value: newPassword, setter: setNewPassword, show: showNew, toggle: () => setShowNew(p => !p) },
                { label: "Confirm New Password", value: confirmPassword, setter: setConfirmPassword, show: showConfirm, toggle: () => setShowConfirm(p => !p) },
              ].map(({ label, value, setter, show, toggle }) => (
                <div key={label}>
                  <label className="text-[#3B4758] text-[14px] font-medium block mb-1">{label}</label>
                  <div className="border border-[#BDBDBD] flex items-center pl-3 rounded-lg focus-within:border-[#FF7A18] transition">
                    <i className="fa-solid fa-lock text-[#9CA3AF] mr-2 text-[13px]" />
                    <input
                      type={show ? "text" : "password"}
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="flex-1 h-[42px] outline-none text-[#1F2937] text-[14px] bg-transparent"
                      placeholder="••••••••"
                    />
                    <button onClick={toggle} className="px-3 text-[#9CA3AF] hover:text-[#FF7A18] cursor-pointer transition">
                      <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {newPassword.length > 0 && (
              <div className="mt-3 max-w-[480px]">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        newPassword.length >= i * 3
                          ? newPassword.length >= 10 ? "bg-green-500" : "bg-[#FF7A18]"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[12px] text-[#9CA3AF]">
                  {newPassword.length < 6 ? "Too short" : newPassword.length < 10 ? "Good" : "Strong"}
                </p>
              </div>
            )}

            <button
              onClick={handleChangePassword}
              className="mt-6 w-full md:w-auto px-10 py-3 bg-[#FF7A18] text-white rounded-lg cursor-pointer hover:bg-orange-600 transition font-semibold text-[15px]"
            >
              Update Password
            </button>

            <div className="mt-8 border border-red-200 rounded-xl px-4 py-4">
              <h3 className="text-[16px] font-bold text-red-600 mb-1">Danger Zone</h3>
              <p className="text-[#4B5563] text-[13px] mb-3">
                Logging out will clear your session. Your account and orders remain saved.
              </p>
              <button
                onClick={handleLogout}
                className="px-6 py-2 border border-red-400 text-red-500 rounded-lg cursor-pointer hover:bg-red-50 transition text-[14px] font-medium"
              >
                <i className="fa-solid fa-right-from-bracket mr-2" />
                Logout
              </button>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="flex flex-col gap-4">
            {orders.length === 0 ? (
              <div className="bg-white rounded-2xl px-6 py-16 shadow-sm flex flex-col items-center gap-4">
                <i className="fa-solid fa-bag-shopping text-[50px] text-[#BDBDBD]" />
                <p className="text-[#4B5563] text-[16px]">You haven&apos;t placed any orders yet.</p>
                <button
                  onClick={() => router.push("/home")}
                  className="bg-[#FF7A18] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-orange-600 transition"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.orderId} className="bg-white rounded-2xl px-5 py-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-[15px] font-bold text-[#1F2937]">{order.orderId}</p>
                      <p className="text-[#9CA3AF] text-[12px] mt-0.5">
                        {formatDate(order.placedAt)} at {formatTime(order.placedAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span className={`text-[12px] px-3 py-1 rounded-full font-medium ${STATUS_COLORS[order.status] || "bg-gray-100 text-gray-600"}`}>
                        {order.status}
                      </span>
                      <span className="text-[12px] px-3 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
                        {order.orderType || "delivery"}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mb-3 flex flex-col gap-1">
                    {order.cart?.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-[13px]">
                        <span className="text-[#4B5563]">
                          {item.name} <span className="text-[#9CA3AF]">x{item.quantity}</span>
                        </span>
                        <span className="text-[#1F2937] font-medium">₦{(item.total * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-3 flex flex-col gap-1">
                    {order.deliveryCharge > 0 && (
                      <div className="flex justify-between text-[12px] text-[#9CA3AF]">
                        <span>Delivery Fee</span>
                        <span>₦{order.deliveryCharge?.toLocaleString()}</span>
                      </div>
                    )}
                    {order.serviceFee > 0 && (
                      <div className="flex justify-between text-[12px] text-[#9CA3AF]">
                        <span>Service Fee</span>
                        <span>₦{order.serviceFee?.toLocaleString()}</span>
                      </div>
                    )}
                    {order.discount > 0 && (
                      <div className="flex justify-between text-[12px] text-green-600">
                        <span>Discount</span>
                        <span>- ₦{order.discount?.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[15px] font-bold text-[#1F2937] mt-1">
                      <span>Total</span>
                      <span className="text-[#FF7A18]">₦{order.total?.toLocaleString()}</span>
                    </div>
                  </div>

                  {order.paymentMethod && (
                    <p className="text-[12px] text-[#9CA3AF] mt-2 capitalize">
                      <i className="fa-solid fa-credit-card mr-1" />
                      Paid via {order.paymentMethod}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}