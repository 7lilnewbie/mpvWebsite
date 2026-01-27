# mpvEx Website - Architecture & Implementation Guide

## 🏗️ Project Overview

This is a modern, high-performance landing page for **mpvExtended**, an advanced Android video player.
The architecture focuses on **performance**, **accessibility**, **SEO**, and a **premium user experience** using smooth GSAP animations and a rich color palette.

### Core Principles

- **Minimal Dependencies**: We prefer lightweight, performant solutions (e.g., standard `next-themes`, native CSS variables) over heavy bundles.
- **Component Modularity**: logical separation of concerns into sections, UI primitives, and providers.
- **Mobile-First**: Design and functionality prioritized for mobile users.
- **SEO Optimized**: Built-in sitemaps, robots.txt, metadata, and semantic HTML.

---

## 📂 Directory Structure

The project follows a feature-based organization for clarity and scalability.

```
project/
├── app/                        # Next.js App Router (Routing & Pages)
│   ├── layout.tsx              # Root layout (Fonts, ThemeProvider, Metadata)
│   ├── page.tsx                # Homepage composition
│   ├── globals.css             # Global styles, Tailwind directives, & Color vars
│   ├── not-found.tsx           # Custom 404 Error Page
│   ├── error.tsx               # Global Error Boundary
│   ├── sitemap.ts              # Dynamic Sitemap Generation
│   ├── robots.ts               # Crawler Instructions
│   └── manifest.ts             # PWA Web Manifest
│
├── components/                 # React Components
│   ├── sections/               # Page Sections (Large, distinct blocks)
│   │   ├── header.tsx          # Sticky Navbar with Theme Toggle
│   │   ├── hero.tsx            # Hero Section with GSAP Entrances
│   │   ├── features.tsx        # Feature Grid with Hover Effects
│   │   ├── downloads.tsx       # Download Cards
│   │   ├── screenshots-bento.tsx # Bento Grid Gallery
│   │   ├── contributors.tsx    # Async GitHub Contributors
│   │   └── footer.tsx          # Footer Links
│   │
│   ├── ui/                     # Reusable UI Primitives (shadcn/ui-like)
│   │   └── button.tsx          # Button Primitive
│   │
│   ├── theme-toggle.tsx        # Standalone Theme Toggle Component
│   └── providers/              # Context Providers (Theme)
│
├── lib/                        # Utilities & Logic
│   ├── data.ts                 # Static Content (Features, Links, Stats)
│   ├── github.ts               # GitHub API Fetching & Caching
│   ├── utils.ts                # Tailwind Class Merger (cn)
│   └── theme-context.tsx       # (Deprecated/Legacy - replaced by next-themes)
│
└── public/                     # Static Assets
    ├── logo.png
    └── icon-*.png
```

---

## 🎨 Design System

### Color Palette ("Rich Colors")

We use a **Vibrant Violet & Pink** palette defined in `globals.css` using HSL variables for dynamic theming.

| Variable       | Light Mode (Hex Approx) | Dark Mode (Hex Approx) | Usage              |
| -------------- | ----------------------- | ---------------------- | ------------------ |
| `--background` | `#ffffff`               | `#020617` (Slate 950)  | Main background    |
| `--surface`    | `#ffffff` (Card)        | `#0f172a` (Slate 900)  | Cards, Sections    |
| `--primary`    | `#8b5cf6` (Violet 500)  | `#7c3aed` (Violet 600) | CTAs, Highlights   |
| `--secondary`  | `#ec4899` (Pink 500)    | `#db2777` (Pink 600)   | Accents, Gradients |
| `--foreground` | `#0f172a`               | `#f8fau9`              | Body Text          |

### Typography

- **Font**: Geist Sans (Modern, variable font)
- **Mono**: Geist Mono (For code snippets)

### Animation Layer (GSAP)

We use **GSAP (GreenSock Animation Platform)** for complex, high-performance interactions that CSS alone cannot handle smoothly.

- **ScrollTrigger**: Elements fade in and slide up as they enter the viewport.
- **Hover Effects**: 3D transforms, glows, and scaling on cards.
- **Theme Transition**: Smooth icon rotation and state changes.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animation**: GSAP + ScrollTrigger
- **Theming**: `next-themes` (System/Dark/Light persistence)
- **Package Manager**: `pnpm` (Fast, efficient dependency management)
- **Icons**: `lucide-react`

---

## 🔍 SEO & Performance Strategy

1. **Metadata**: Dynamic titles and descriptions in `layout.tsx`.
2. **Sitemap & Robots**: auto-generated via `sitemap.ts` and `robots.ts` for indexability.
3. **PWA Ready**: `manifest.ts` provides extensive web app capabilities.
4. **Font Optimization**: `next/font` reduces layout shifts (CLS).
5. **Clean Code**: Minimal client-side JavaScript bundles where possible.

---

## 🚀 Deployment & Build

1. **Build Command**: `pnpm build`
   - Compiles pages and optimizes assets.
2. **Start Command**: `pnpm start`
   - Runs the optimized production server.
3. **CI/CD**: Compatible with Vercel zero-config deployment.

---

## 🤝 Contribution Guidelines

1. **Components**: Place new page sections in `components/sections/`.
2. **Icons**: Use `lucide-react` components.
3. **Data**: Update `lib/data.ts` to change text content without touching UI code.
4. **Linting**: Run `pnpm lint` before pushing.

---

**Status**: ✅ Production Ready Architecture
