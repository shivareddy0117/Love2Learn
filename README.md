# 🌟 Love2Learn AI Kids School

> **Where Little Stars Shine Bright!** ⭐

A beautiful, colorful preschool website built with Next.js, Tailwind CSS, and Prisma.

---

## 🎨 Features

- 🏠 **Colorful Homepage** — Animated hero, floating emojis, gradient backgrounds
- 📚 **Programs** — Playgroup, Nursery, LKG, UKG (Ages 1.5 – 5 years)
- 💰 **Fee Structure** — Transparent pricing cards for all programs
- 📸 **Gallery** — HD photo gallery with hover effects
- 💬 **Testimonials** — Parent reviews and ratings
- 📝 **Contact & Inquiry Form** — Admission inquiry with database storage
- 💳 **Online Payment Portal** — 3-step Razorpay integration for fee payments
- 🗄️ **Database** — Prisma + SQLite for students, payments, attendance, inquiries
- 🔐 **Auth Ready** — Google OAuth via NextAuth (for future admin/parent portals)
- 📱 **Responsive** — Works on mobile, tablet, and desktop

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shivareddy0117/Love2Learn.git
cd Love2Learn

# Install dependencies
npm install

# Set up environment variables
cp env.example .env
# Edit .env with your credentials

# Set up database
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **Prisma** | Database ORM |
| **SQLite** | Local database |
| **Razorpay** | Payment gateway |
| **NextAuth** | Authentication |
| **React Icons** | Icon library |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   │   ├── inquiries/    # Admission inquiries
│   │   ├── payments/     # Payment orders & verification
│   │   └── students/     # Student management
│   ├── payment/          # Online fee payment page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Animated hero section
│   ├── About.tsx         # About the school
│   ├── Programs.tsx      # Programs (Playgroup–UKG)
│   ├── Features.tsx      # Why choose us
│   ├── Gallery.tsx       # Photo gallery
│   ├── FeeStructure.tsx  # Pricing cards
│   ├── Testimonials.tsx  # Parent reviews
│   ├── Contact.tsx       # Contact & inquiry form
│   ├── CTABanner.tsx     # Call-to-action banner
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer
└── lib/
    └── prisma.ts         # Database client
```

---

## 🗄️ Database Schema

- **Students** — Full profile, medical info, pickup authorization
- **Payments** — Fee tracking with Razorpay integration
- **Attendance** — Daily attendance tracking
- **Inquiries** — Admission form submissions
- **ContactMessages** — General contact queries
- **Users/Accounts/Sessions** — Auth (Google OAuth ready)

---

## 🌿 Branch Strategy

| Branch | Purpose |
|--------|---------|
| `dev` | Active development |
| `stage` | Staging / QA testing |
| `prod` | Production release |

---

## ⚙️ Environment Variables

Copy `env.example` to `.env` and fill in:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | SQLite database path |
| `NEXTAUTH_SECRET` | NextAuth secret key |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret |
| `RAZORPAY_KEY_ID` | Razorpay API key |
| `RAZORPAY_KEY_SECRET` | Razorpay secret |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key |

---

## 📞 Contact

**Love2Learn AI Kids School**
- 📱 +91 98765 43210
- 📧 hello@love2learn.school
- 📍 Hyderabad, Telangana

---

Made with ❤️ for little learners
