# 🍽️ Chuks Kitchen

A full-stack Nigerian food ordering web application built with [Next.js 14](https://nextjs.org), TypeScript, and Tailwind CSS. Bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 📦 Install Dependencies

```bash
npm install
npm install react-hot-toast
```

### Font Awesome (Icons)
Add this to your `app/layout.tsx` inside the `<head>` tag:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
```

---

## 🗂️ Project Structure

```
app/
  ├── home/page.tsx                → Home page (hero, categories, Chef's Specials)
  ├── login/page.tsx               → Login with email or phone
  ├── register/page.tsx            → Registration with validation
  ├── explore/page.tsx             → Full menu with sidebar categories
  ├── food-detail/page.tsx         → Food customization (protein, sides, instructions)
  ├── order/page.tsx               → Cart with quantity controls
  ├── summary/page.tsx             → Order summary, promo codes, delivery toggle
  ├── delivery-details/page.tsx    → Delivery address, time, contact form
  ├── payment/page.tsx             → Card / Bank / Transfer payment
  ├── payment-success/page.tsx     → Animated loader → success screen
  ├── account/page.tsx             → Profile, security, order history
  └── layout.tsx                   → Root layout

component/
  ├── header.tsx                   → Responsive header with auth + hamburger menu
  └── footer.tsx                   → Site footer
```

---

## 🔄 User Flow

```
Register / Login
      ↓
Home / Explore  →  click (+)  →  Food Detail (select protein, sides, instructions)
      ↓
    Cart (/order)  →  Proceed to Checkout
      ↓
   Summary (/summary)  →  Apply promo, toggle Delivery/Pickup
      ↓
  Delivery Details  →  Address, time, contact number
      ↓
    Payment  →  Card / Bank / Transfer
      ↓
  Payment Success  →  Spinner (2.5s) → Order confirmed ✓
```

---

## 🗃️ Routes & Pages

| Route | File | Description |
|-------|------|-------------|
| `/home` | `home/page.tsx` | Landing page with hero, categories, Chef's Specials |
| `/login` | `login/page.tsx` | Login with email or phone |
| `/register` | `register/page.tsx` | New user registration |
| `/explore` | `explore/page.tsx` | Full menu with sidebar category navigation |
| `/food-detail` | `food-detail/page.tsx` | Protein/sides selector + special instructions |
| `/order` | `order/page.tsx` | Cart view with qty controls and remove |
| `/summary` | `summary/page.tsx` | Price breakdown, promo code, delivery toggle |
| `/delivery-details` | `delivery-details/page.tsx` | Delivery address, time, contact form |
| `/payment` | `payment/page.tsx` | Card / Bank / Transfer payment forms |
| `/payment-success` | `payment-success/page.tsx` | Loader then success message |
| `/account` | `account/page.tsx` | Profile info, security, order history |

---

## 💾 localStorage Keys

| Key | Description |
|-----|-------------|
| `chuks_kitchen_users` | Array of registered users (email, phone, createdAt) |
| `chuks_kitchen_session` | Current logged-in user object |
| `chuks_kitchen_cart` | Array of CartItem objects in the active cart |
| `chuks_kitchen_checkout` | Snapshot of cart + grandTotal for summary page |
| `chuks_kitchen_order_meta` | Price breakdown (total, fees, discount, orderType) |
| `chuks_kitchen_delivery` | Delivery address, time, instructions, phone |
| `chuks_kitchen_orders` | Array of all completed orders (order history) |

> ⚠️ **Note:** This app uses localStorage for all data persistence. For production, replace with a real backend, database, and hashed password authentication.

---

## ✨ Features

- **Authentication** — Register/login with email or phone. Session stored in localStorage. Header updates live on route change.
- **Responsive Header** — Full nav on desktop. Hamburger (`fa-bars` / `fa-xmark`) on mobile with animated dropdown.
- **Food Customization** — Select protein (radio), sides (checkboxes), add special instructions. Live price calculation.
- **Cart Management** — Add multiple items, adjust quantity (+/−), remove items. Cart persists across refreshes.
- **Promo Codes** — `CHUKS10` (10% off), `WELCOME20` (20% off). Input locks after applying.
- **Checkout Flow** — Summary → Delivery Details → Payment → Success.
- **Payment Methods** — Card (formatted input, CVV, expiry), Bank (Nigerian bank dropdown), Transfer (bank details shown).
- **Payment Success** — SVG spinner for 2.5s, then success screen with order ID, Track Order button, and receipt link.
- **Account Page** — Profile editor, password change with strength bar, full order history with price breakdowns.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary (Orange) | `#FF7A18` |
| Background | `#F3F4F6` |
| Dark Text | `#1F2937` |
| Medium Text | `#4B5563` |
| Light Text | `#9CA3AF` |
| Border | `#BDBDBD` |
| Link Blue | `#1E88E5` |
| Orange Light | `#FFE1C4` |

Font: **Island Moments** (Google Fonts) for the logo. **System sans-serif** for body text.

---

## 🖼️ Image Assets

Place these in your `/public` folder:

```
Welcome.png       explorehero.png     family.svg
jollof.png        eba.png             pounded.png
snail.png         tilapia.png         smoke.png
amala.png         okra.png            bbq.png
sweet.png
```

---

## 🚀 Promo Codes

| Code | Discount |
|------|----------|
| `CHUKS10` | 10% off subtotal |
| `WELCOME20` | 20% off subtotal |

---

## 🚢 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```bash
npm install -g vercel
vercel
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 🔮 Production Roadmap

- [ ] Replace localStorage auth with **NextAuth.js** or JWT
- [ ] Store passwords with **bcrypt** — never plaintext
- [ ] Connect to a real database (**PostgreSQL** / **MongoDB**)
- [ ] Integrate **Paystack** or **Flutterwave** for real Nigerian payments
- [ ] Add real-time order tracking with **WebSockets**
- [ ] Replace `<img>` with `next/image` for optimization
- [ ] Add **ESLint + Prettier** configuration
- [ ] Implement admin dashboard for menu management

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [react-hot-toast](https://react-hot-toast.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) — your feedback and contributions are welcome!

---

*Built by Abdulmalik with ❤️ and 🍛 — Chuks Kitchen © 2025*