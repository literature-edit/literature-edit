<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Literature Edit — Project Guidelines & Architecture

## 1. Core Tech Stack & Dependencies
- **Framework**: Next.js 16.2.10 (App Router, Turbopack)
- **UI & Runtime**: React 19.2.4 & React DOM 19.2.4
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) with custom Google Font variables (`--font-cormorant`, `--font-lora`)
- **Database**: MongoDB 7.5.0 (`mongodb` driver, database `literature-edit`, collection `pages`)
- **Asset Management**: Cloudinary SDK (`cloudinary` v2.10.0 for image uploads)
- **Animation**: GSAP (GreenSock) for canvas sprite-sheet character animations

## 2. Design System & Aesthetics
- **Color Palette**:
  - Main Background: `#FAF6F0` (warm cream)
  - Dark Primary Text / Charcoal: `#2E2522`
  - Brand Accent: `#9E3E26` (literary rust red)
  - Gold Accent / Borders: `#C5A880`
  - Card Background: `#FCFAF7`
  - Footer Background: `#F3EDE2`
- **Typography**:
  - `Cormorant Garamond` (`--font-cormorant`) for display/headings.
  - `Lora` (`--font-lora`) for serif body text.
  - **Sentence-Case Titles**: Page headers and titles MUST use normal sentence-case (`normal-case font-serif-body font-normal`) instead of force-uppercase transforms.
- **Background Accents**:
  - Background accents (`1.png`, `2.png`, `flower.webp`) MUST retain their exact original colors at `opacity-20` / `opacity-25`. Do NOT apply `brightness-0` or dark filters.

## 3. Page Layouts & Sticky Sidebar Mechanics
- **LitHub & Bookmarks Layouts**:
  - Category pages (`/resources`, `/editorial-services`, `/journal`) and article detail pages (`/[slug]`) follow the 12-column grid layout (`lg:col-span-8` main well + `lg:col-span-4 sticky top-28 self-start` right sidebar).
- **CSS Sticky Positioning Rule**:
  - NEVER set `overflow: hidden`, `overflow-y: hidden`, or `overflow-x: hidden` on parent containers or `body`. Use `overflow-x: clip` instead to prevent breaking `position: sticky`.
  - Always apply `self-start` to grid children containing `position: sticky`.
  - Do NOT wrap sticky elements inside components that apply CSS `transform` (such as `ScrollReveal`).

## 4. Admin Dashboard & Dynamic Database Architecture
- **Authentication**:
  - Session authentication via `/admin/login` and API route `/api/admin/login`, setting HTTP-only session cookie evaluated by `/api/admin/pages` (PUT) and `/api/admin/upload` (POST).
- **Dashboard Layout Structure**:
  - Outer container: `h-screen overflow-hidden`.
  - Sidebar container: `w-full md:w-64 h-full overflow-y-auto shrink-0` (ensuring the Sign Out button remains accessible across all screen heights).
  - Main Editor container: `flex-1 h-full overflow-y-auto` (allowing long form content to scroll independently).
- **MongoDB Data Fetching**:
  - All 15 public pages fetch dynamic data via `getPageData(slug)` from `lib/db-pages.ts`, merging MongoDB documents from `pages` collection with static fallbacks in `data/site.ts`.
- **Cloudinary Image Uploads**:
  - Admin image upload API (`POST /api/admin/upload`) processes image files directly to Cloudinary and updates target fields (`image`, `founderImage`, `authorImage`).

## 5. Next.js Script & Preloader Rules
- **No Inline `<script>` Tags**:
  - Do NOT place raw `<script>` or `<Script>` tags in `app/layout.tsx` to prevent React 19 client hydration warnings during route transitions.
  - Preloader animation and body scrolling locks are managed directly inside [`components/Preloader.tsx`](file:///Users/adityagupta/Work/literature-edit/components/Preloader.tsx).
- **Custom 404 Page**:
  - Located at [`app/not-found.tsx`](file:///Users/adityagupta/Work/literature-edit/app/not-found.tsx) with edge-to-edge `<Navbar />`, centered 404 hero content, action links, and scroll-revealed GSAP `CrowdCanvas` animated characters.
