# 📘 Next.js Feature Showcase

A complete demonstration of **all major Next.js App Router features**, built using React, TypeScript, and modern Next.js conventions.  
This project is designed as a learning tool, reference implementation, and starter template for real‑world apps.

Note: Dynamic Next.js features (middleware, SSR, API routes, server actions) require the Edge or Node runtime.  
These cannot run on GitHub Pages, which is static-only (The github workflows are included but disabled)
To use dynamic functionality, the project must be hosted on a platform with a runtime such as: 
- Azure App Service
- Azure Static Web Apps (with Functions)
- Vercel
- Netlify

## 🚀 Features Demonstrated

### **Rendering Models**
- Static Site Generation (SSG)
- Server‑Side Rendering (SSR)
- Incremental Static Regeneration (ISR)
- Streaming + Suspense
- Dynamic Routes

### **Server Capabilities**
- Server Actions
- API Routes
- Middleware
- Metadata API
- Route Handlers

### **UI & Performance**
- App Router Layout
- Optimised Images
- Google Fonts Integration
- Shared Navigation
- Client vs Server Components


##  🧱 Key Pages & What They Demonstrate

 - `/static`
Static Site Generation using build‑time data.

- `/ssr`
Server‑Side Rendering using live GitHub API data.

- `/isr`
Incremental Static Regeneration with `revalidate = 10`.

- `/streaming`
React Suspense + Streaming with a delayed server component.

- `/docs/[slug]`
Dynamic routing with URL parameters.

- `/api/hello`
Simple API Route returning JSON.

- `/actions`
Server Actions with form submission.

## 🛠️ Tech Stack

- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS (optional)
- Google Fonts (Inter)

## ▶️ Getting Started

### Install dependencies
`npm install`

### Run the dev server
`npm run dev`

### Build for production
`npm run build`

## 🧭 Navigation
The project includes a simple navigation bar linking to all feature pages:

Home | SSG | SSR | ISR | Streaming | Dynamic Route | API Route

## Purpose of This Project
This repository is ideal for:
- Learning Next.js App Router from real examples
- Teaching others how modern Next.js works
- Using as a boilerplate for new projects
- Demonstrating Next.js skills in interviews
- Quickly testing rendering strategies

## 📁 Project Structure

```text
nextjs-feature-showcase/
│
├── app/                               # Next.js App Router root (all routes live here)
│   │
│   ├── layout.tsx                     # Global layout: wraps all pages, sets metadata, fonts, nav
│   ├── page.tsx                       # Home page: intro to the feature showcase
│   │
│   ├── static/                        # Static Site Generation (SSG) demo
│   │   └── page.tsx                   # Renders build-time static content
│   │
│   ├── ssr/                           # Server-Side Rendering (SSR) demo
│   │   └── page.tsx                   # Fetches live data on every request
│   │
│   ├── isr/                           # Incremental Static Regeneration (ISR) demo
│   │   └── page.tsx                   # Static page that revalidates every X seconds
│   │
│   ├── streaming/                     # Streaming + Suspense demo
│   │   ├── page.tsx                   # Uses <Suspense> to stream UI
│   │   └── SlowComponent.tsx          # Artificially delayed server component
│   │
│   ├── docs/                          # Dynamic route example
│   │   └── [slug]/                    # Dynamic segment folder
│   │       └── page.tsx               # Renders content based on URL param
│   │
│   ├── actions/                       # Server Actions live here
│   │   └── addItem.ts                 # Example server action for form submissions
│   │
│   └── api/                           # API Routes (Route Handlers)
│       └── hello/
│           └── route.ts               # Simple JSON API endpoint
│
├── components/                        # Reusable UI components
│   └── Nav.tsx                        # Navigation bar linking to all feature pages
│
├── lib/                               # Shared utilities, data, helpers
│   └── features.ts                    # Static list of features used by SSG page
│
├── public/                            # Static assets (images, icons, etc.)
│                                       # Served directly at /<filename>
│
├── styles/                            # Global CSS or Tailwind config (if used)
│                                       # Usually contains globals.css
├── .eslintrc.json                     # Defines project linting rules.
├── .gitignore                         # Files and patterns ignored when code added to repo
├── middleware.ts                      # Middleware example: redirects/blocks routes
├── next-env.ts                        # Auto‑gen Next.js type-definitions. Enable TypeScript support for Next.js features across the project.
├── next.config.js                     # Central configuration file for Next.js.
├── middleware.ts                      # Middleware example: redirects/blocks routes
├── package.json                       # Project dependencies, scripts, metadata
├── package-lock.json                  # Lockdown exact version of installed dependencies (including nested ones) to guarantee reproducible installs.
├── tsconfig.json                      # TypeScript configuration
├── .eslintrc.json                     # ESLint rules (Next.js defaults)
├── .gitignore                         # Files Git should ignore
└── README.md                          # Project documentation