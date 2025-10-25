# Basak Bible Baptist Church Website

A modern, responsive church website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🏗️ Tech Stack

- **Frontend**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (recommended)
- **CMS**: Sanity (to be configured)
- **Analytics**: Plausible (to be configured)

## 📱 Features

### ✅ Completed Pages

- **Home Page**: Hero section, service times, location info, and welcome message
- **About Us**: Mission/vision, statement of faith, leadership profiles
- **Services & Events**: Weekly schedule, upcoming events, location details
- **Sermons/Media**: YouTube integration, sermon archive with search/filter
- **Ministries**: Kids/Youth/Adults programs, volunteer opportunities
- **Give & Donate**: Secure donation page with PayPal integration (ready)
- **Contact**: Contact form, church info, Google Maps integration (ready)

### 🎨 Design Features

- Fully responsive design for mobile, tablet, and desktop
- Professional color scheme with consistent branding
- Accessible navigation with mobile menu
- Modern card-based layouts
- Interactive elements and hover effects
- Professional typography with Inter font

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (currently using 18.20.8 - upgrade recommended)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd church-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Node.js Version Issue

If you encounter the "Node.js version >=20.9.0 required" error:

1. **Option 1: Upgrade Node.js (Recommended)**
   - Download and install Node.js 20+ from [nodejs.org](https://nodejs.org/)
   - Restart your terminal after installation

2. **Option 2: Use Node Version Manager**
   ```bash
   # Install nvm (if not already installed)
   # Then install and use Node.js 20
   nvm install 20
   nvm use 20
   ```

## 📁 Project Structure

```
church-website/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── about/          # About Us page
│   │   ├── contact/        # Contact page
│   │   ├── give/           # Donation page
│   │   ├── ministries/     # Ministries page
│   │   ├── sermons/        # Sermons & Media page
│   │   ├── services/       # Services & Events page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── navigation.tsx  # Header navigation
│   │   └── footer.tsx      # Footer component
│   └── lib/               # Utilities
├── public/                # Static assets
└── package.json
```

## 🔧 Next Steps

### 1. Fix Node.js Version
Upgrade to Node.js 20+ to resolve the development server issue.

### 2. Content Management (Sanity CMS)
Set up Sanity for dynamic content management of sermons, events, and staff profiles.

### 3. Form Integration (Formspree)
Configure contact forms and prayer request submissions.

### 4. Payment Integration
Set up PayPal, PayMongo, or Xendit for online donations.

### 5. Google Maps Integration
Add interactive maps for church location.

### 6. Deployment (Vercel)
Deploy to production with automatic CI/CD.

## 📧 Church Information

**Basak Bible Baptist Church**
- **Address**: Basak Mercado Sudtonggan Road, Lapu-Lapu City, Basak, Philippines
- **Phone**: 0926 634 7805
- **Email**: biblebaptistchurchbasakllc@gmail.com
- **YouTube**: [@BibleBaptistChurchBasakLLC](https://www.youtube.com/@BibleBaptistChurchBasakLLC)

### Service Times
- **Sunday**: 7:30-9:30 AM, 10:00 AM-12:00 PM, 1:30-3:00 PM, 3:30-5:00 PM
- **Wednesday**: 6:00-8:00 PM
- **Saturday**: 8:00-9:00 AM

---

**Built with ❤️ for the church community**
