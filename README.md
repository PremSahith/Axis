# Axis Travel

Axis Travel is a modern, full-stack travel booking application built with [Next.js](https://nextjs.org/). It features a beautiful, dynamic user interface powered by [Framer Motion](https://www.framer.com/motion/) and [Lucide React](https://lucide.dev/), with a robust MongoDB backend using [Mongoose](https://mongoosejs.com/).

## Features

- **Dynamic Animations**: Smooth and engaging UI interactions using Framer Motion.
- **Destinations & Packages**: Browse curated travel destinations and vacation packages.
- **Booking System**: Seamless booking experience for users.
- **Admin Dashboard**: Manage destinations, packages, and bookings.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## Tech Stack

- **Frontend**: Next.js App Router, React 19, Framer Motion, CSS Modules
- **Backend / API**: Next.js Route Handlers
- **Database**: MongoDB via Mongoose
- **Icons**: Lucide React

## Getting Started

First, ensure you have your environment variables set up in `.env.local` (e.g., your MongoDB connection string).

Then, install the dependencies and run the development server:

```bash
npm install
# or
yarn install

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Contains all Next.js App Router pages (about, admin, booking, contact, destinations, lookbook, packages) and API routes.
- `/components`: Reusable React components.
- `/lib`: Utility functions and configuration files.
- `/models`: Mongoose database schemas.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
