<div align="center">

# 🌍 Wonderlust

### Full-Stack Airbnb Clone with Next.js 16, React 19, MongoDB, Redis & Docker

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-7.0_Cache-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A state-of-the-art, high-performance vacation rental web application replicating Airbnb's signature user experience. Built with Next.js App Router, multi-stage Docker orchestration, sub-millisecond Redis caching, and an end-to-end host management suite.
</p>

[Explore Features](#-features) • [Quick Start (Docker)](#-quick-start-with-docker) • [Local Development](#-local-development) • [API Reference](#-api-endpoints) • [Architecture](#-architecture)

</div>

---

## 📸 Overview

**Wonderlust** is designed from the ground up to deliver a production-grade experience:
- **Instant Search & Category Filtering**: Browse properties by beachfront, cabins, luxury mansions, trending destinations, and more.
- **Lightning-Fast Performance**: Built-in **Redis caching** with automated cache invalidation ensures catalog queries resolve in sub-milliseconds.
- **Interactive Reservation Engine**: Dynamic fee breakdown, nights calculation, and booking conflict prevention.
- **Host Analytics Dashboard**: Hosts track earnings, occupancy rates, reservations, and manage listings with seamless live editing.
- **Zero-Friction Docker Setup**: Complete containerized environment with standalone Next.js runtime, MongoDB, and Redis.

---

## ✨ Features

### 🏡 Guest Experience
- **Dynamic Category Explorer**: Seamless category tabs with active indicators (Iconic Cities, Beachfront, Cabins, Mansions, Castles, Trending, etc.).
- **Global Search**: Filter stays by destination, date range, and guest capacity.
- **Listing Showcases**: High-resolution image mosaic galleries, verified host profiles, Superhost badges, and complete amenities breakdowns.
- **Interactive Booking Widget**:
  - Live price & nights calculation with cleaning and service fee breakdowns.
  - Instant reservations linked directly to your authenticated user account.
- **Wishlist & Saved Properties**: Instant one-click toggle to save your favorite destinations.
- **Trips Management**: Dedicated page to view past, ongoing, and upcoming bookings.
- **Verified Reviews**: Community rating system with breakdown scores and testimonials.

### 💼 Host Management & Dashboard
- **Host Analytics**: Real-time KPI cards for **Total Earnings**, **Total Reservations**, **Occupancy Rate**, and **Average Rating**.
- **Interactive Listing Editor**: In-place modal to update pricing, title, description, amenities, and photos without page reloads.
- **Create New Stays**: Multi-step listing creation with Cloudinary image upload integration.
- **Reservation Tracker**: View incoming guest reservations with dates and booking totals.

### 🛡️ Core Infrastructure & Security
- **JWT Authentication**: Secure stateless session cookies (HTTP-only, SameSite protection) with `bcryptjs` password hashing.
- **Redis Multi-Layer Caching**:
  - `listings:*`: Caches catalog and category query results with 1-hour TTL.
  - `listing:<id>`: Caches single listing views for rapid detail page transitions.
  - Automatic cache purging on listing creation, edits, and deletions.
  - Safe fallback to MongoDB direct access if Redis is unreachable.
- **Cloudinary Asset Storage**: High-res property photo optimization and uploads.
- **Full Docker Orchestration**: Multi-stage standalone Next.js container bundled with production MongoDB and Redis services.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Hybrid Server & Client Rendering, Turbopack, API Routes |
| **Frontend** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) | Type-safe component architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first design system |
| **Database** | [MongoDB 7](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) | Schema-backed document persistence |
| **Cache** | [Redis 7](https://redis.io/) via [ioredis](https://github.com/redis/ioredis) | High-speed response caching & invalidation |
| **Media Hosting** | [Cloudinary](https://cloudinary.com/) | Image transformations & CDN delivery |
| **Authentication** | [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Secure token-based session handling |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent UI iconography |
| **DevOps** | [Docker](https://www.docker.com/) & Docker Compose | Multi-container production deployment |

---

## 🚀 Quick Start with Docker

The fastest and most reliable way to run the entire Wonderlust stack (Next.js app, MongoDB, and Redis) is with Docker Compose:

### 1. Clone the repository
```bash
git clone https://github.com/Nayefshaikh1/next-wonderlust.git
cd next-wonderlust
```

### 2. Configure Environment Variables
Create your local environment file:
```bash
cp .env.example .env.local
```

### 3. Spin up the containers
```bash
docker compose up -d --build
```

### 4. Access the services
| Service | URL / Port | Details |
|---|---|---|
| **Next.js Web App** | [http://localhost:3001](http://localhost:3001) | Main user interface & API |
| **MongoDB** | `localhost:27018` | Persistent database volume |
| **Redis** | `localhost:6380` | High-speed cache |

To view real-time logs:
```bash
docker compose logs -f app
```

To stop containers:
```bash
docker compose down
```

---

## 💻 Local Development

If you prefer running services directly on your host machine:

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher
- **MongoDB**: Running locally at `mongodb://127.0.0.1:27017`
- **Redis** *(Optional)*: Running locally at `redis://127.0.0.1:6379` *(The app gracefully falls back to MongoDB if Redis is absent)*

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure `.env.local`
```env
MONGODB_URI=mongodb://127.0.0.1:27017/wonderlust
REDIS_URL=redis://127.0.0.1:6379
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_super_secret_jwt_key
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌱 Database Seeding

To quickly populate your database with stunning, pre-configured sample properties, categories, and reviews:

1. Start the server (either via Docker or `npm run dev`).
2. Trigger the automated seed endpoint:
```bash
# If using Docker (Port 3001)
curl -X POST http://localhost:3001/api/seed

# If using local dev (Port 3000)
curl -X POST http://localhost:3000/api/seed
```
*Alternatively, you can visit the seed route directly or use an API testing tool like Postman.*

---

## 📁 Architecture & Directory Structure

```text
react_wonderlust/
├── .github/                 # GitHub workflows & templates
├── public/                  # Static assets & SVG icons
├── src/
│   ├── app/
│   │   ├── api/             # Backend API Route Handlers
│   │   │   ├── auth/        # /login, /logout, /register, /me
│   │   │   ├── bookings/    # Create and fetch user reservations
│   │   │   ├── dashboard/   # Host metrics and received bookings
│   │   │   ├── listings/    # CRUD operations, category filters & reviews
│   │   │   ├── seed/        # Database population endpoint
│   │   │   ├── upload/      # Cloudinary image asset handler
│   │   │   └── wishlist/    # User wishlist persistence
│   │   ├── dashboard/       # Host overview & listing management
│   │   ├── listings/        # Listing details & listing creation forms
│   │   ├── trips/           # Guest reservation history
│   │   ├── wishlist/        # Saved listings collection
│   │   ├── globals.css      # Design tokens & Tailwind 4 styles
│   │   ├── layout.tsx       # Root layout, fonts, and global wrappers
│   │   └── page.tsx         # Home page with category bar and grid
│   ├── components/          # Reusable UI components
│   │   ├── AuthModal.tsx    # Combined Sign In / Sign Up dialog
│   │   ├── BookingWidget.tsx# Pricing calculator & reservation widget
│   │   ├── CategoryBar.tsx  # Interactive filter pill bar
│   │   ├── ListingCard.tsx  # Property card with wishlist toggle
│   │   ├── ListingEditModal.tsx # In-place host editing modal
│   │   ├── Navbar.tsx       # Navigation, search bar, & user profile menu
│   │   ├── PhotoMosaic.tsx  # Airbnb-style 5-photo responsive grid
│   │   └── ReviewSection.tsx# Rating breakdown and guest reviews
│   └── lib/
│       ├── auth.ts          # JWT sign, verify, and session extractors
│       ├── cloudinary.ts    # Cloudinary SDK client
│       ├── db.ts            # Mongoose connection with caching
│       ├── redis.ts         # Redis client, fallback logic & cache helpers
│       ├── seed-data.ts     # Realistic mock properties dataset
│       └── models/          # Mongoose Data Models
│           ├── Booking.ts   # Reservations schema
│           ├── Listing.ts   # Property listings schema
│           ├── Review.ts    # Reviews & ratings schema
│           └── User.ts      # Authentication & user profile schema
├── docker-compose.yml       # Production container orchestration
├── Dockerfile               # Optimized multi-stage standalone build
├── next.config.ts           # Next.js standalone and image domains configuration
└── package.json             # Scripts and project dependencies
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `POST` | `/api/auth/register` | Register new user account | No |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT cookie | No |
| `POST` | `/api/auth/logout` | Clear session cookie | Yes |
| `GET` | `/api/auth/me` | Fetch currently logged-in user profile | Yes |
| `GET` | `/api/listings` | Fetch properties (supports `category`, `search`, `limit`) | No |
| `POST` | `/api/listings` | Create a new property listing | Yes |
| `GET` | `/api/listings/:id` | Fetch detailed listing by ID (Redis cached) | No |
| `PUT` | `/api/listings/:id` | Update an existing listing | Yes |
| `DELETE` | `/api/listings/:id` | Delete a listing | Yes |
| `POST` | `/api/listings/:id/reviews` | Submit a review with star rating | Yes |
| `GET` | `/api/bookings` | Retrieve user bookings | Yes |
| `POST` | `/api/bookings` | Reserve a property for selected dates | Yes |
| `GET` | `/api/dashboard/stats` | Retrieve host earnings, occupancy, & listings | Yes |
| `GET` | `/api/wishlist` | Retrieve user's saved wishlist items | Yes |
| `POST` | `/api/wishlist` | Toggle listing in/out of wishlist | Yes |
| `POST` | `/api/upload` | Upload image to Cloudinary CDN | Yes |
| `POST` | `/api/seed` | Seed initial database listings and reviews | No |

---

## 🔐 Environment Variables

| Variable | Description | Example / Default |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/wonderlust` |
| `REDIS_URL` | Redis server connection string | `redis://127.0.0.1:6379` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary Cloud Name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API Key | `your_api_key` |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret | `your_api_secret` |
| `JWT_SECRET` | Secret key used for signing JWT auth tokens | `your_secure_random_key` |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Nayefshaikh1">Nayef Jamal</a></sub>
</div>
