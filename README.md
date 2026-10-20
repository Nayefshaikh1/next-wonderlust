<div align="center">

# 🌍 Wonderlust

### Full-Stack Vacation Rental Platform with Next.js 16, React 19, Nginx Load Balancer, Multi-Tier Caching & Docker

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nginx](https://img.shields.io/badge/Nginx-Load_Balancer-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-7.0_Cache-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A state-of-the-art, high-performance vacation rental web application replicating Airbnb's signature user experience. Built with Next.js App Router, Nginx load balancer reverse proxy, multi-tier Redis + in-memory caching, dynamic catalog pagination, role-based access control (RBAC), and hardened production security.
</p>

[Explore Features](#-features) • [Architecture](#-architecture--load-balancer) • [Quick Start (Docker)](#-quick-start-with-docker) • [Local Development](#-local-development) • [API Reference](#-api-endpoints)

</div>

---

## 📸 Overview

**Wonderlust** is engineered for production scalability, security, and exceptional user experience:
- **Nginx Load Balancer**: High-performance reverse proxy with upstream request distribution, Gzip compression, static asset caching, and DDoS rate-limiting.
- **Dynamic Catalog Pagination**: Responsive Airbnb-style pagination with page controls, total stay counts, and full-catalog interactive map synchronization.
- **Multi-Tier Caching Architecture**: Sub-millisecond Redis caching paired with an in-memory TTL fallback, ensuring uninterrupted cache acceleration even when Redis is offline.
- **Role-Based Access Control (RBAC)**: Distinct permissions for Guests, Hosts (Owners), and Platform Administrators with protected dashboards and listing management.
- **Production-Hardened Security**: Zero hardcoded secrets, environment-driven configuration, HTTP security headers, and rate-limited authentication routes.

---

## ✨ Features

### 🏡 Guest Experience
- **Dynamic Category Explorer**: Seamless category tabs with active indicators (Iconic Cities, Beachfront, Cabins, Mansions, Castles, Trending, etc.).
- **Global Search & Filter**: Filter stays by destination keyword, category, price threshold, and guest capacity.
- **Interactive Stays Pagination**: Smooth paginated catalog with responsive page navigation and stay indicators.
- **Listing Showcases**: High-resolution image mosaic galleries, verified host profiles, Superhost badges, and complete amenities breakdowns.
- **Interactive Booking Widget**:
  - Live price & nights calculation with cleaning and service fee breakdowns.
  - Instant reservations linked directly to your authenticated user account.
- **Wishlist & Saved Properties**: Instant one-click toggle to save your favorite destinations.
- **Trips Management**: Dedicated page to view past, ongoing, and upcoming bookings.
- **Verified Reviews**: Community rating system with breakdown scores and testimonials.

### 💼 Host & Administrator Management
- **Role-Based Dashboards**:
  - **Hosts (Owners)**: Track personal listing revenue, occupancy rates, and reservations.
  - **Administrators**: Platform-wide metrics, listing moderation, and a dedicated **User Management** control center to manage roles.
- **Interactive Listing Editor**: In-place modal to update pricing, title, description, amenities, and photos without page reloads.
- **Create New Stays**: Multi-step listing creation with Cloudinary image upload integration.

### 🛡️ Core Infrastructure & Security
- **Nginx Load Balancer**: Distributes incoming web traffic across app instances with connection timeouts, rate limiting, and HTTP security headers.
- **Multi-Tier Caching**:
  - `listings:*`: Caches catalog and category query results with 10-minute TTL.
  - `listing:<id>`: Caches single listing views for rapid detail page transitions.
  - Automatic cache purging across both Redis and in-memory stores on listing mutations.
- **JWT Authentication**: Secure stateless session cookies (HTTP-only, SameSite protection) with `bcryptjs` password hashing.
- **Zero-Secret Codebase**: Environment variables are managed strictly via `.env` with a clean `.env.example` template.

---

## 🏗️ Architecture & Load Balancer

```text
[ Incoming Web Traffic ]
           │
           ▼
┌────────────────────────────────────────┐
│      Nginx Reverse Proxy & LB          │  Port 3001:80
│  - Upstream Load Balancing (least_conn)│
│  - Rate Limiting (DDoS mitigation)     │
│  - Static Asset Caching (/_next/static)│
│  - Gzip Compression                   │
└──────────────────┬─────────────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌─────────────────┐ ┌─────────────────┐
│ Next.js App #1  │ │ Next.js App #2  │  Internal Port 3000
│ (App Router)    │ │ (App Router)    │
└────────┬────────┘ └────────┬────────┘
         │                   │
         ├───────────────────┴───────────────────┐
         ▼                                       ▼
┌─────────────────────────┐           ┌─────────────────────────┐
│   Multi-Tier Caching    │           │    MongoDB Database     │
│  - Redis 7.0 Container  │           │  - MongoDB 7.0 Volume   │
│  - In-Memory Fallback   │           │  - Users, Listings,     │
│  - Tagged Invalidation  │           │    Bookings, Reviews    │
└─────────────────────────┘           └─────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Hybrid Server & Client Rendering, Turbopack, API Routes |
| **Frontend** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) | Type-safe component architecture |
| **Load Balancer** | [Nginx](https://nginx.org/) | Reverse proxy, rate limiting, gzip, static caching |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first design system |
| **Database** | [MongoDB 7](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) | Schema-backed document persistence |
| **Cache** | [Redis 7](https://redis.io/) via [ioredis](https://github.com/redis/ioredis) + Memory Fallback | High-speed response caching & invalidation |
| **Media Hosting** | [Cloudinary](https://cloudinary.com/) | Image transformations & CDN delivery |
| **Maps** | [Leaflet](https://leafletjs.com/) & [MapTiler](https://www.maptiler.com/) | Interactive vector maps & custom price markers |
| **Authentication** | [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Secure token-based session handling |
| **DevOps** | [Docker](https://www.docker.com/) & Docker Compose | Multi-container production deployment |

---

## 🚀 Quick Start with Docker

The fastest and most reliable way to run the entire Wonderlust stack (Nginx Load Balancer, Next.js app, MongoDB, and Redis) is with Docker Compose:

### 1. Clone the repository
```bash
git clone https://github.com/Nayefshaikh1/next-wonderlust.git
cd next-wonderlust
```

### 2. Configure Environment Variables
Copy the template to `.env` and fill in your keys:
```bash
cp .env.example .env
```

### 3. Spin up the containers
```bash
docker compose up -d --build
```

### 4. Access the services
| Service | URL / Port | Details |
|---|---|---|
| **Nginx Load Balancer / App** | [http://localhost:3001](http://localhost:3001) | Main user interface & API |
| **MongoDB** | `localhost:27018` | Persistent database volume |
| **Redis** | `localhost:6380` | High-speed cache |

To view real-time logs:
```bash
docker compose logs -f loadbalancer app
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
- **Redis** *(Optional)*: Running locally at `redis://127.0.0.1:6379` *(The app automatically falls back to in-memory caching if Redis is offline)*

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure `.env`
```bash
cp .env.example .env
```
Fill in your configuration:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/wonderlust
REDIS_URL=redis://127.0.0.1:6379
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_MAPTILER_KEY=your_maptiler_key
JWT_SECRET=your_super_secret_jwt_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change_this_secure_password
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌱 Database Seeding

To quickly populate your database with sample properties, categories, and reviews:

1. Start the server (either via Docker or `npm run dev`).
2. Trigger the automated seed endpoint:
```bash
# If using Docker (Port 3001 via Load Balancer)
curl -X POST http://localhost:3001/api/seed

# If using local dev (Port 3000)
curl -X POST http://localhost:3000/api/seed
```
*Alternatively, click the **"Seed Airbnb Data"** button directly on the homepage if the database is empty.*

---

## 📁 Architecture & Directory Structure

```text
react_wonderlust/
├── .github/                 # GitHub workflows & templates
├── nginx/
│   └── nginx.conf           # Reverse proxy, load balancing, & rate limiting
├── public/                  # Static assets & SVG icons
├── src/
│   ├── app/
│   │   ├── api/             # Backend API Route Handlers
│   │   │   ├── admin/users/ # Admin user management & role promotion
│   │   │   ├── auth/        # /login, /logout, /register, /me
│   │   │   ├── bookings/    # Create and fetch user reservations
│   │   │   ├── dashboard/   # Host & admin metrics and received bookings
│   │   │   ├── listings/    # CRUD operations, pagination, filters & reviews
│   │   │   ├── seed/        # Database population endpoint
│   │   │   ├── upload/      # Cloudinary image asset handler
│   │   │   └── wishlist/    # User wishlist persistence
│   │   ├── dashboard/       # Role-guarded Host & Admin overview
│   │   ├── listings/        # Listing details & listing creation forms
│   │   ├── trips/           # Guest reservation history
│   │   ├── wishlist/        # Saved listings collection
│   │   ├── globals.css      # Design tokens & Tailwind 4 styles
│   │   ├── layout.tsx       # Root layout, fonts, and global wrappers
│   │   └── page.tsx         # Home page with category bar, grid, & pagination
│   ├── components/          # Reusable UI components
│   │   ├── AuthModal.tsx    # Combined Sign In / Sign Up dialog
│   │   ├── BookingWidget.tsx# Pricing calculator & reservation widget
│   │   ├── CategoryBar.tsx  # Interactive filter pill bar
│   │   ├── ListingCard.tsx  # Property card with wishlist toggle
│   │   ├── ListingGrid.tsx  # Responsive property grid with pagination controls
│   │   ├── ListingEditModal.tsx # In-place host editing modal
│   │   ├── MapView.tsx      # Interactive Leaflet map with custom price markers
│   │   ├── Navbar.tsx       # Navigation, search bar, & user profile menu
│   │   ├── PhotoMosaic.tsx  # Airbnb-style 5-photo responsive grid
│   │   └── ReviewSection.tsx# Rating breakdown and guest reviews
│   └── lib/
│       ├── admin-config.ts  # Admin configuration and role definitions
│       ├── auth.ts          # JWT sign, verify, and session extractors
│       ├── cloudinary.ts    # Cloudinary SDK client
│       ├── db.ts            # Mongoose connection with caching
│       ├── geo.ts           # Geocoding coordinates helper
│       ├── redis.ts         # Multi-tier Redis & in-memory caching engine
│       ├── seed-data.ts     # Realistic mock properties dataset
│       └── models/          # Mongoose Data Models
│           ├── Booking.ts   # Reservations schema
│           ├── Listing.ts   # Property listings schema
│           ├── Review.ts    # Reviews & ratings schema
│           └── User.ts      # Authentication & user profile schema
├── docker-compose.yml       # Production container orchestration with Nginx LB
├── Dockerfile               # Optimized multi-stage standalone build
├── next.config.ts           # Next.js standalone and security headers config
└── package.json             # Scripts and project dependencies
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `POST` | `/api/auth/register` | Register new user account | No |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT cookie (Rate-limited) | No |
| `POST` | `/api/auth/logout` | Clear session cookie | Yes |
| `GET` | `/api/auth/me` | Fetch currently logged-in user profile | Yes |
| `GET` | `/api/admin/users` | List all users and modify roles (Admin only) | Yes (Admin) |
| `PUT` | `/api/admin/users` | Promote or demote user roles (Admin only) | Yes (Admin) |
| `GET` | `/api/listings` | Fetch properties (supports `page`, `limit`, `category`, `query`, `maxPrice`) | No |
| `POST` | `/api/listings` | Create a new property listing (elevates to Host) | Yes |
| `GET` | `/api/listings/:id` | Fetch detailed listing by ID (Multi-tier cached) | No |
| `PUT` | `/api/listings/:id` | Update an existing listing (Admin or Owner only) | Yes |
| `DELETE` | `/api/listings/:id` | Delete a listing (Admin or Owner only) | Yes |
| `POST` | `/api/listings/:id/reviews` | Submit a review with star rating | Yes |
| `GET` | `/api/bookings` | Retrieve user bookings | Yes |
| `POST` | `/api/bookings` | Reserve a property for selected dates | Yes |
| `GET` | `/api/dashboard/stats` | Retrieve host/admin earnings, occupancy, & listings | Yes |
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
| `NEXT_PUBLIC_MAPTILER_KEY` | MapTiler API Key for vector map tiles | `your_maptiler_key` |
| `JWT_SECRET` | Secret key used for signing JWT auth tokens | `your_secure_random_key` |
| `ADMIN_EMAIL` | Default Administrator login email | `admin@example.com` |
| `ADMIN_PASSWORD` | Default Administrator password | `change_this_secure_password` |
| `ADMIN_USERNAME` | Administrator display name | `Administrator` |

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
