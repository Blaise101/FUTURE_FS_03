# Luna Thread Boutique 🌙👗

Luna Thread Boutique is a premium, full-stack e-commerce application designed for a luxury women's fashion brand. It features a sophisticated, minimalist public-facing storefront and a robust administrative dashboard for inventory and customer relationship management.

## 🏗️ System Architecture

The application follows a modern decoupled architecture:

- **Frontend**: A high-performance React Single Page Application (SPA).
- **Backend**: A RESTful API built with Laravel, utilizing Laravel Sanctum for secure, session-based authentication.
- **Styling**: Tailwind CSS with a focus on luxury aesthetics (Glassmorphism, Serif typography, and neutral palettes).

---

## ✨ Key Features

### Public Storefront

- **Curated Home**: High-impact hero section and featured collections.
- **Intelligent Shop**: Real-time category filtering (Clothing, Accessories, Shoes).
- **Product Discovery**: Detailed product views with size selection and quantity management.
- **Dynamic Cart**: Persistent shopping bag managed via React Context API.
- **Contact Portal**: Elegant lead generation form that syncs directly with the Admin Inbox.

### Administrative Portal (Secure)

- **Sanctum Auth**: Secure login with CSRF protection and session management.
- **Analytics Dashboard**: Overview of inventory stats and incoming customer inquiries.
- **Inventory Management**: Full CRUD (Create, Read, Update, Delete) for boutique products.
- **Collection Controls**: Manage seasonal groupings and thematic brand stories.
- **Message Center**: Real-time inbox for customer inquiries with read/unread tracking.

---

## 🛠️ Tech Stack

### Frontend

- **ReactJs**: Utilizing the latest patterns and hooks.
- **React Router**: Client-side routing with protected admin guards.
- **Context API**: Global state management for Authentication, Cart, and Admin data.
- **Tailwind CSS**: Utility-first styling for a custom, luxury design system.

### Backend

- **Laravel 12**: Robust PHP framework for API development.
- **Laravel Sanctum**: Modern API authentication without the complexity of OAuth.
- **Eloquent ORM**: Fluent database interactions and relationship management.

---

## 🗄️ Database Schema

The system relies on a relational database with the following core tables:

1.  **`users`**: Administrative credentials.
2.  **`products`**: Name, price, description, images, categories, and featured status.
3.  **`collections`**: Seasonal grouping metadata.
4.  **`admin_messages`**: Customer contact submissions.
5.  **`personal_access_tokens`**: Sanctum token management.

---

## 🔒 Authentication Flow (Laravel Sanctum)

The boutique uses a stateful, cookie-based authentication flow:

1.  **Handshake**: The React frontend requests `GET /sanctum/csrf-cookie` to initialize CSRF protection.
2.  **Login**: User sends credentials to `POST /api/login`.
3.  **Verification**: Laravel validates and sets a secure session cookie.
4.  **Persistence**: On page refresh, the frontend hits `GET /api/user`. If the cookie is valid, the user stays logged in.

---

## 🚀 Setup Instructions

### 1. Backend Setup (Laravel)

```bash
# Install dependencies
composer install

# Configure environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate --seed

# Start the server
php artisan serve
```

### 2. Frontend Setup (React)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🎨 UI/UX Highlights

- **Global Spinner**: A premium, full-screen glassmorphism loader that triggers during API synchronization.
- **Micro-interactions**: Subtle hover scales on product cards and animated transitions on login.
- **Responsive Design**: Fully optimized for mobile, tablet, and high-resolution desktop displays.

---

## 📄 License

© 2025 Luna Thread Boutique. All rights reserved. Built for luxury, designed for performance.
