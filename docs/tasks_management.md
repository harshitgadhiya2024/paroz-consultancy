# Task Management Document

## Paroz Consultancy — Corporate Website Implementation

**PRD Reference:** [docs/PRD.md](PRD.md)
**Created:** 2026-07-05
**Author:** Petra (PM Agent)
**Total Estimated Duration:** ~18 working days (7 phases)

---

## How to Read This Document

Each task includes:

- **ID** — Unique identifier (`FE-XXX` Frontend, `BE-XXX` Backend, `PM-XXX` Project Management)
- **Priority** — P0 (blocker), P1 (critical path), P2 (important), P3 (nice-to-have)
- **Dependencies** — Tasks that must complete before this one can start. Tasks with no dependencies can run in parallel.
- **Phase** — Maps to the PRD milestones (Phases 1–7)
- **Acceptance Criteria** — Conditions that must be met for the task to be considered done

---

## Task Summary

| Category | Total Tasks | P0 | P1 | P2 | P3 |
|---|---|---|---|---|---|
| Frontend | 38 | 4 | 18 | 12 | 4 |
| Backend | 10 | 2 | 5 | 2 | 1 |
| Project Management | 10 | 2 | 4 | 3 | 1 |
| **Total** | **58** | **8** | **27** | **17** | **6** |

---

## Phase 1 — Project Setup & Design System (3 days)

### PM-001: Gather & Confirm Brand Assets

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P0 |
| **Phase** | 1 |
| **Dependencies** | None |
| **Assigned Team** | Project Manager |
| **Description** | Confirm with client: brand colors (defaults in PRD Section 7.1: Deep Blue `#1a365d`, Teal `#2d8a6e`), typography choices (Inter/Poppins), and that all repository logo assets (`logo.png`, 7 client logos) are properly licensed and approved for use. Document any deviations from PRD defaults. |
| **Acceptance Criteria** | Written confirmation (email/doc) of approved brand colors, fonts, and logo usage rights. Any deviations documented and communicated to dev team. |

---

### PM-002: Pre-Process Logo Assets

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P1 |
| **Phase** | 1 |
| **Dependencies** | PM-001 |
| **Assigned Team** | Project Manager + Frontend |
| **Description** | Process all client logos in the repo root (`aditya_birla_issurance.jpeg`, `aditya_capital.jpeg`, `axis_max_life.jpeg`, `bharti.jpeg`, `cars24.jpeg`, `kotak_life.jpeg`, `niva.jpeg`) and `logo.png`: resize to consistent dimensions, convert to WebP with JPEG fallback, apply consistent padding. This mitigates the PRD risk of inconsistent logo quality. |
| **Acceptance Criteria** | All logos available in WebP + JPEG, consistent dimensions (max height 80px for client logos), stored under `src/assets/logos/`. |

---

### FE-001: Initialize React Project with Vite

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P0 |
| **Phase** | 1 |
| **Dependencies** | None |
| **Assigned Team** | Frontend |
| **Description** | Initialize a React 18+ project using Vite as the build tool. Set up the project structure with folders: `src/components/`, `src/pages/`, `src/assets/`, `src/data/`, `src/styles/`, `src/utils/`. Configure TypeScript (optional but recommended), ESLint, and Prettier. |
| **Acceptance Criteria** | `npm run dev` starts a working dev server. Project structure matches the component tree in PRD Section 8. Linting passes with zero errors. |

---

### FE-002: Configure Tailwind CSS & Design Tokens

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P0 |
| **Phase** | 1 |
| **Dependencies** | FE-001 |
| **Assigned Team** | Frontend |
| **Description** | Install and configure Tailwind CSS. Define design tokens in `tailwind.config.js` per PRD Section 7.1: primary color (`#1a365d`), secondary (`#2d8a6e`), neutrals (`#ffffff`, `#f7fafc`, `#2d3748`, `#1a202c`). Set up typography (Inter/Poppins via Google Fonts or self-hosted). Define breakpoints for mobile (320px), tablet (768px), desktop (1200px), and large (2560px). Set max content width to 1200px. Configure section padding: 80px vertical desktop, 48px mobile. |
| **Acceptance Criteria** | Tailwind utility classes apply brand colors, fonts, and spacing. A test page renders correctly at all breakpoints. |

---

### FE-003: Install Core Dependencies

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 1 |
| **Dependencies** | FE-001 |
| **Assigned Team** | Frontend |
| **Description** | Install and configure: React Router v6 (routing), Framer Motion (animations/page transitions), Lucide React or React Icons (iconography). Verify all packages are compatible with React 18+. |
| **Acceptance Criteria** | All dependencies installed, importable, and verified with a minimal smoke test. `npm audit` shows zero critical/high vulnerabilities. |

---

### FE-004: Create Content Data Files

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 1 |
| **Dependencies** | FE-001 |
| **Assigned Team** | Frontend |
| **Description** | Create JSON data files under `src/data/` for all content-driven sections so non-developers can update text without code changes (PRD Section 3.1). Files needed: `services.json` (6 services with title, icon key, description, deliverables), `clients.json` (client name, logo path, industry category), `team.json` (leadership team members), `testimonials.json` (min 3 testimonials), `stats.json` (counter values), `positions.json` (open job positions — initially placeholder), `company.json` (about content, mission, vision, values), `navigation.json` (menu items), `contact.json` (address, phone, email, map coordinates), `social.json` (social media links). |
| **Acceptance Criteria** | All JSON files are valid, contain realistic placeholder content per PRD Section 10, and are imported successfully in a test component. |

---

### BE-001: Initialize Node.js/Express Backend

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P0 |
| **Phase** | 1 |
| **Dependencies** | None |
| **Assigned Team** | Backend |
| **Description** | Initialize a Node.js 18+ project with Express.js. Set up folder structure: `server/`, `server/routes/`, `server/middleware/`, `server/utils/`. Configure ESLint, environment variable loading (dotenv), and CORS for local development. Create a `GET /api/health` endpoint that returns `{ "status": "ok" }`. |
| **Acceptance Criteria** | `npm run server` starts the Express server. `/api/health` returns 200 with JSON response. CORS allows requests from the frontend dev server. |

---

### FE-005: Set Up React Router & Page Shells

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 1 |
| **Dependencies** | FE-001, FE-003 |
| **Assigned Team** | Frontend |
| **Description** | Configure React Router v6 with routes for all pages per PRD Section 5.1: `/` (Home), `/about`, `/services`, `/clients`, `/career`, `/contact`, `/privacy`. Create empty page shell components for each. Implement a `<ScrollToTop />` utility component that scrolls to top on route change. Add page transition animations using Framer Motion (fade or slide). |
| **Acceptance Criteria** | Navigation between all routes works. Browser URL updates. Scroll position resets on navigation. Page transitions animate smoothly. |

---

## Phase 2 — Home Page & Shared Components (4 days)

### FE-006: Build Header / Navigation Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P0 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-005 |
| **Assigned Team** | Frontend |
| **Description** | Build the `<Header />` component (PRD Section 8): sticky navigation bar with `logo.png`, menu links to all pages, transparent-to-solid background transition on scroll. On mobile (< 768px), show a hamburger menu icon that opens a slide-out or dropdown menu. Navigation items sourced from `navigation.json`. |
| **Acceptance Criteria** | Header is sticky and visible on all pages. Background transitions from transparent to solid on scroll. Hamburger menu opens/closes on mobile. All links navigate correctly. Keyboard accessible (Tab, Enter, Escape to close mobile menu). |

---

### FE-007: Build Footer Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build the `<Footer />` component per PRD Section 5.2.1 item 8: company logo, address, phone, email (from `contact.json`), quick links to all pages, social media icons (LinkedIn, Twitter/X, Facebook from `social.json`), copyright notice with dynamic year. |
| **Acceptance Criteria** | Footer renders on all pages. All links are functional. Social icons open in new tabs. Responsive layout: multi-column on desktop, stacked on mobile. |

---

### FE-008: Build Hero Banner Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-005 |
| **Assigned Team** | Frontend |
| **Description** | Build `<HeroBanner />` for the Home page (PRD Section 5.2.1 item 1): full-width background image or gradient with overlay, company tagline, primary CTA button ("Get in Touch" → `/contact`), secondary CTA ("Explore Our Services" → `/services`). Optimize for < 1.5s load on 3G. |
| **Acceptance Criteria** | Hero is full-width. Both CTAs are visible without scrolling on desktop. Loads within 1.5s on 3G (test with Chrome DevTools throttling). Background image is lazy-loaded or uses a lightweight CSS gradient. |

---

### FE-009: Build About Snapshot Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<AboutSnapshot />` for Home page (PRD Section 5.2.1 item 2): 2–3 sentence company intro from `company.json`, "Learn More" link to `/about`, accompanied by company logo or relevant image. |
| **Acceptance Criteria** | Content is pulled from JSON data. "Learn More" links to `/about`. Responsive layout (image + text side-by-side on desktop, stacked on mobile). |

---

### FE-010: Build Services Overview Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-003, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<ServicesOverview />` for Home page (PRD Section 5.2.1 item 3): grid of 4–6 service cards, each with an icon (Lucide React), service title, 1-sentence description, and "Read More" link to the corresponding anchor on `/services`. Data sourced from `services.json`. |
| **Acceptance Criteria** | Grid displays all services from JSON. Each card links to the correct anchor on `/services` (e.g., `/services#resource-handling`). Cards show hover effects (subtle elevation/shadow). Responsive: 3 columns desktop, 2 tablet, 1 mobile. |

---

### FE-011: Build Stats Counters Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<StatsCounters />` for Home page (PRD Section 5.2.1 item 4): animated counters for metrics ("500+ Resources Deployed", "50+ Corporate Clients", "10+ Years of Experience", "98% Client Retention Rate"). Counters animate (count up) when scrolled into viewport. Values from `stats.json`. |
| **Acceptance Criteria** | Counter animation triggers only once per page load. Animation starts when the section enters the viewport (Intersection Observer). Numbers increment smoothly. Data sourced from JSON. |

---

### FE-012: Build Client Logo Carousel Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-004, PM-002 |
| **Assigned Team** | Frontend |
| **Description** | Build `<ClientLogoCarousel />` for Home page (PRD Section 5.2.1 item 5): auto-scrolling horizontal carousel using the processed client logo assets. Logos displayed in grayscale with color on hover. Draggable/swipeable on touch devices. Data from `clients.json`. |
| **Acceptance Criteria** | Carousel auto-scrolls continuously. Logos are grayscale by default, color on hover. Touch-swipeable on mobile. All 7 client logos from the repo are displayed. Uses optimized WebP images. |

---

### FE-013: Build Testimonials Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 2 |
| **Dependencies** | FE-002, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<Testimonials />` for Home page (PRD Section 5.2.1 item 6): rotating testimonial cards with client name, designation, company, and quote. Minimum 3 testimonials from `testimonials.json`. Auto-rotate with manual navigation (dots or arrows). |
| **Acceptance Criteria** | Displays at least 3 testimonials. Auto-rotates every 5–7 seconds. Manual navigation works (previous/next or dots). Accessible (ARIA labels, pause on focus). |

---

### FE-014: Build CTA Banner Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 2 |
| **Dependencies** | FE-002 |
| **Assigned Team** | Frontend |
| **Description** | Build `<CTABanner />` for Home page (PRD Section 5.2.1 item 7): full-width colored section with text "Ready to optimize your workforce? Let's talk." and a CTA button linking to `/contact`. |
| **Acceptance Criteria** | Full-width banner with brand secondary color background. CTA links to `/contact`. Text is readable on the colored background (contrast ratio ≥ 4.5:1). |

---

### FE-015: Assemble Home Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 2 |
| **Dependencies** | FE-006 through FE-014 |
| **Assigned Team** | Frontend |
| **Description** | Assemble `<HomePage />` by composing all home page sections in order: HeroBanner, AboutSnapshot, ServicesOverview, StatsCounters, ClientLogoCarousel, Testimonials, CTABanner. Ensure proper spacing between sections (80px desktop, 48px mobile). |
| **Acceptance Criteria** | All sections render in correct order. Smooth scrolling between sections. No layout shift (CLS < 0.1). Page weight < 1.5 MB. |

---

### FE-016: Build Reusable PageHeader Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 2 |
| **Dependencies** | FE-002 |
| **Assigned Team** | Frontend |
| **Description** | Build a reusable `<PageHeader />` component used across About, Services, Clients, Career, Contact, and Privacy pages. Accepts a title and optional subtitle. Renders with a subtle background (gradient or light color). |
| **Acceptance Criteria** | Component is reusable with props. Consistent appearance across all inner pages. Responsive typography. |

---

## Phase 3 — Inner Pages (4 days)

### FE-017: Build About Page — Company Story Section

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<CompanyStory />` for the About page (PRD Section 5.2.2 item 2): 2–3 paragraphs covering founding, growth, and positioning. Content from `company.json`. |
| **Acceptance Criteria** | Content pulled from JSON. No text block exceeds 4 lines without a visual break. |

---

### FE-018: Build About Page — Mission & Vision Section

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<MissionVision />` for About page (PRD Section 5.2.2 item 3): side-by-side cards or columns displaying the company's mission and vision statements from `company.json`. |
| **Acceptance Criteria** | Two distinct sections (mission/vision) displayed side-by-side on desktop, stacked on mobile. Content from JSON. |

---

### FE-019: Build About Page — Core Values Section

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-003, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<CoreValues />` for About page (PRD Section 5.2.2 item 4): grid of 4–6 values (Integrity, Excellence, Partnership, Innovation, People-First, Accountability) each with an icon (Lucide React) and title. Data from `company.json`. |
| **Acceptance Criteria** | Grid layout: 3 columns desktop, 2 tablet, 1 mobile. Each value has an icon and title. Data sourced from JSON. |

---

### FE-020: Build About Page — Leadership Team Section

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<LeadershipTeam />` for About page (PRD Section 5.2.2 item 5): cards with photo placeholder (1:1 circle crop), name, title, and brief bio. Minimum 3 team members from `team.json`. |
| **Acceptance Criteria** | Minimum 3 team member cards. Photos use consistent 1:1 circle crop. Responsive grid. Data from JSON. Gracefully handles missing photo (shows placeholder avatar). |

---

### FE-021: Build About Page — Why Choose Us Section

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-003, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<WhyChooseUs />` for About page (PRD Section 5.2.2 item 6): icon-based list of differentiators (Industry Expertise, Dedicated Account Managers, Compliance-First Approach, Scalable Solutions, Pan-India Network). |
| **Acceptance Criteria** | Each differentiator has an icon and descriptive text. Data from JSON. |

---

### FE-022: Assemble About Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-017 through FE-021 |
| **Assigned Team** | Frontend |
| **Description** | Compose `<AboutPage />` from: PageHeader ("About Paroz Consultancy"), CompanyStory, MissionVision, CoreValues, LeadershipTeam, WhyChooseUs. |
| **Acceptance Criteria** | All sections render in order. Consistent spacing. Content is scannable. |

---

### FE-023: Build Services Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-003, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<ServicesPage />` (PRD Section 5.2.3): PageHeader, then 6 `<ServiceSection />` components — one per service. Each section has: title, icon, 3–5 sentence description, bulleted deliverables (3–5 items), and a "Request a Consultation" CTA linking to `/contact?service=<service-key>`. Each section has a unique anchor ID (e.g., `#resource-handling`) for deep-linking from the home page. All data from `services.json`. |
| **Acceptance Criteria** | All 6 services rendered with unique anchor IDs. "Request a Consultation" buttons pass service name as query parameter. Deep links from Home page Services Overview cards scroll to correct section. Smooth scroll for anchor links. |

---

### FE-024: Build Clients Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-004, PM-002 |
| **Assigned Team** | Frontend |
| **Description** | Build `<ClientsPage />` (PRD Section 5.2.4): PageHeader ("Trusted by Leading Organizations"), responsive `<ClientLogoGrid />` (3 columns desktop, 2 tablet, 1 mobile). All 7 client logos displayed with company names as alt text. Optional industry breakdown section. Include a Phase 2 placeholder area for case study teasers. |
| **Acceptance Criteria** | All existing logo assets displayed. Logos maintain aspect ratio (max height 80px, centered). Responsive grid. Alt text on all logos. Renders correctly with zero or many clients. |

---

### FE-025: Build Career Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<CareerPage />` (PRD Section 5.2.5): PageHeader ("Join Our Team"), `<WhyWorkWithUs />` (3–4 value propositions), `<OpenPositions />` list driven by `positions.json`. Each position card shows: Title, Location, Type (Full-time/Contract), "Apply Now" button (links to contact form or mailto). Include fallback: "No current openings — check back soon!" when `positions.json` is empty. Application CTA at bottom: "Don't see a role that fits? Send us your resume at careers@parozconsultancy.com." |
| **Acceptance Criteria** | Positions loaded from JSON. Page renders gracefully with zero open positions. "Apply Now" links work. Data is updatable without code changes. |

---

### FE-026: Build Contact Form Component

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-002, FE-003, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<ContactForm />` (PRD Section 5.2.6 item 2) with fields: Full Name (required), Email (required, validated), Phone Number (optional, validated), Company Name (optional), Service Interested In (dropdown populated from `services.json`, supports pre-selection via `?service=` query parameter), Message (required, textarea). Submit button with loading state. Client-side validation with inline error messages. Success toast/message on submission. All fields have labels and error messages use `aria-live` for accessibility. |
| **Acceptance Criteria** | All fields render with proper labels. Client-side validation shows inline errors. Service dropdown pre-selects from query parameter. Submit button shows loading state during API call. Success/error feedback displayed. Fully accessible (WCAG 2.1 AA). |

---

### FE-027: Build Contact Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 3 |
| **Dependencies** | FE-016, FE-026, FE-004 |
| **Assigned Team** | Frontend |
| **Description** | Build `<ContactPage />` (PRD Section 5.2.6): PageHeader ("Get in Touch"), ContactForm, `<ContactInfo />` (address, phone, email from `contact.json`) displayed alongside the form, `<MapEmbed />` (Google Maps iframe with configurable coordinates from `contact.json`). |
| **Acceptance Criteria** | Form and contact info displayed side-by-side on desktop, stacked on mobile. Map iframe renders. Rate limit 429 response shows user-friendly message. |

---

### FE-028: Build Privacy Policy Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-016 |
| **Assigned Team** | Frontend |
| **Description** | Build `<PrivacyPage />` (PRD Section 5.2.7): PageHeader, standard privacy policy content covering data collection (contact form), usage, storage, and user rights. Placeholder content to be reviewed by legal. Content can be stored in a Markdown file or JSON for easy updates. |
| **Acceptance Criteria** | Privacy policy renders with proper formatting (headings, paragraphs). Content is easily editable without code changes. |

---

## Phase 4 — Backend API & Contact Form Integration (2 days)

### BE-002: Implement Contact Form API Endpoint

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P0 |
| **Phase** | 4 |
| **Dependencies** | BE-001 |
| **Assigned Team** | Backend |
| **Description** | Implement `POST /api/contact` endpoint (PRD Section 9.2). Accepts JSON body with fields: `fullName` (required, 2–100 chars), `email` (required, valid email), `phone` (optional, valid phone format), `company` (optional, max 100 chars), `service` (optional, one of predefined service keys), `message` (required, 10–2000 chars). Server-side validation with detailed error responses (400). Input sanitization to prevent XSS and injection. |
| **Acceptance Criteria** | Endpoint accepts valid submissions and returns 200 success response. Invalid submissions return 400 with field-specific error messages matching PRD format. Inputs are sanitized. |

---

### BE-003: Implement Email Notification

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P1 |
| **Phase** | 4 |
| **Dependencies** | BE-002 |
| **Assigned Team** | Backend |
| **Description** | Integrate Nodemailer (SMTP) or SendGrid SDK to send email notifications on contact form submission. Email sent to a configurable admin address (via environment variable). Email includes all form fields in a readable format. Implement fallback: if email delivery fails, log submission to a local JSON file (`submissions.json`) and alert admin (PRD Risk mitigation). |
| **Acceptance Criteria** | Successful form submission triggers email to admin address. Email contains all submitted fields. Failed email delivery logs to local file. Admin address configurable via `.env`. |

---

### BE-004: Implement Rate Limiting

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P1 |
| **Phase** | 4 |
| **Dependencies** | BE-002 |
| **Assigned Team** | Backend |
| **Description** | Add rate limiting to `POST /api/contact`: max 5 submissions per IP per hour (PRD Section 5.2.6). Return 429 status with message: "Too many requests. Please try again later." Use `express-rate-limit` or equivalent middleware. |
| **Acceptance Criteria** | 6th submission from the same IP within an hour returns 429 with the specified message. Rate limit resets after the window expires. Other endpoints are not affected. |

---

### BE-005: Implement CSRF Protection

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P1 |
| **Phase** | 4 |
| **Dependencies** | BE-002 |
| **Assigned Team** | Backend |
| **Description** | Add CSRF protection to the contact form endpoint (PRD Section 6.6). Implement using `csurf` middleware or a custom CSRF token mechanism. Ensure the frontend includes the CSRF token in form submissions. |
| **Acceptance Criteria** | Requests without a valid CSRF token are rejected with 403. Frontend correctly obtains and submits CSRF tokens. |

---

### BE-006: Implement Server-Side Security Hardening

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P1 |
| **Phase** | 4 |
| **Dependencies** | BE-001 |
| **Assigned Team** | Backend |
| **Description** | Add security middleware: Helmet.js for HTTP security headers, CORS configuration for production (whitelist frontend domain only), input sanitization library (e.g., `express-validator` or `sanitize-html`). Run `npm audit` and resolve any critical/high vulnerabilities. |
| **Acceptance Criteria** | Helmet headers present in responses. CORS restricted to allowed origins. `npm audit` shows zero critical/high vulnerabilities. |

---

### FE-029: Integrate Contact Form with Backend API

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 4 |
| **Dependencies** | FE-026, BE-002, BE-004, BE-005 |
| **Assigned Team** | Frontend |
| **Description** | Connect the ContactForm component to `POST /api/contact`. Handle all response states: success (show toast/message), validation error (display inline errors from API response), rate limit (show 429 message), network error (show generic error). Include CSRF token in requests. |
| **Acceptance Criteria** | Form submits to API and displays appropriate feedback for all response types. Loading state visible during submission. CSRF token included. No console errors. |

---

## Phase 5 — Responsive & Cross-Browser QA (2 days)

### FE-030: Mobile-First Responsive Testing & Fixes

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 5 |
| **Dependencies** | FE-015, FE-022 through FE-028 |
| **Assigned Team** | Frontend |
| **Description** | Systematically test all pages at breakpoints: 320px, 375px, 414px (mobile), 768px (tablet), 1024px, 1200px, 1440px, 2560px (PRD Section 3.1). Fix any layout issues, overflow, text truncation, or touch target size problems. Ensure hamburger menu works correctly on all mobile viewports. Test client logo carousel swipe/drag on touch devices. |
| **Acceptance Criteria** | All pages render correctly from 320px to 2560px. No horizontal scrollbar appears unexpectedly. Touch targets are at least 44×44px. Hamburger menu functions on all mobile sizes. |

---

### FE-031: Cross-Browser Compatibility Testing

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 5 |
| **Dependencies** | FE-030 |
| **Assigned Team** | Frontend |
| **Description** | Test on all supported browsers per PRD Section 6.5: Chrome (latest 2), Firefox (latest 2), Safari (latest 2), Edge (latest 2), Mobile Safari (iOS 15+), Chrome for Android. Fix CSS inconsistencies, JS compatibility issues, and font rendering differences. |
| **Acceptance Criteria** | All pages render and function correctly on every listed browser. No JavaScript errors in console. Animations and transitions work across browsers. |

---

### FE-032: Accessibility Audit & Fixes

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 5 |
| **Dependencies** | FE-030 |
| **Assigned Team** | Frontend |
| **Description** | Conduct a full WCAG 2.1 AA audit (PRD Section 6.3): verify keyboard navigation for all interactive elements, visible focus rings, screen-reader compatibility (semantic HTML, ARIA labels), color contrast ratio ≥ 4.5:1 for body text. Test with a screen reader (NVDA or VoiceOver). Fix any violations. |
| **Acceptance Criteria** | All interactive elements keyboard-navigable. Focus rings visible. Screen reader reads page content logically. No color contrast violations. `aria-live` used for dynamic content (form errors, success messages). Lighthouse Accessibility score ≥ 90. |

---

### PM-003: QA Test Plan & Execution

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P1 |
| **Phase** | 5 |
| **Dependencies** | FE-030 |
| **Assigned Team** | Project Manager |
| **Description** | Create and execute a QA test plan covering: all user flows (navigating pages, submitting contact form, viewing services, applying for careers), edge cases (empty states, long text, missing images, zero open positions), and cross-device testing matrix. Document all bugs found and track to resolution. |
| **Acceptance Criteria** | Test plan document created in `docs/`. All critical and high bugs resolved. Test results documented. |

---

## Phase 6 — Performance Optimization & SEO (2 days)

### FE-033: Image Optimization & Lazy Loading

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 6 |
| **Dependencies** | FE-015, PM-002 |
| **Assigned Team** | Frontend |
| **Description** | Optimize all images per PRD Section 6.2: convert to WebP format with JPEG fallback (using `<picture>` element), implement lazy loading for below-the-fold images (native `loading="lazy"` or Intersection Observer), ensure all images have descriptive `alt` attributes (PRD Section 6.4). Target total page weight < 1.5 MB. |
| **Acceptance Criteria** | All images served in WebP with JPEG fallback. Below-the-fold images lazy load. All images have `alt` text. Total page weight < 1.5 MB (excluding map iframe). |

---

### FE-034: SEO — Meta Tags & Structured Data

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 6 |
| **Dependencies** | FE-015, FE-022 through FE-028 |
| **Assigned Team** | Frontend |
| **Description** | Implement per PRD Section 6.4: unique `<title>` and `<meta description>` for every page, Open Graph and Twitter Card meta tags, JSON-LD structured data for Organization schema, semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). Use `react-helmet-async` or equivalent for managing head tags. |
| **Acceptance Criteria** | Each page has unique title and meta description. OG tags render correctly (test with Facebook Sharing Debugger or equivalent). JSON-LD validates (Google Rich Results Test). Semantic HTML elements used throughout. |

---

### FE-035: Generate sitemap.xml & robots.txt

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 6 |
| **Dependencies** | FE-005 |
| **Assigned Team** | Frontend |
| **Description** | Generate `sitemap.xml` and `robots.txt` at build time (PRD Section 6.4). Sitemap should include all public routes with appropriate `changefreq` and `priority` values. `robots.txt` should allow all crawlers and reference the sitemap. |
| **Acceptance Criteria** | `sitemap.xml` lists all public routes. `robots.txt` references sitemap and allows crawling. Both files accessible at root URL. |

---

### FE-036: Performance Optimization — Core Web Vitals

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P1 |
| **Phase** | 6 |
| **Dependencies** | FE-033, FE-034 |
| **Assigned Team** | Frontend |
| **Description** | Optimize for PRD Section 6.2 targets: FCP < 1.5s on 4G, LCP < 2.5s, CLS < 0.1. Techniques: code splitting per route, tree shaking, font display swap, preload critical assets, minimize render-blocking resources. Run Lighthouse audit and iterate until all scores ≥ 90. |
| **Acceptance Criteria** | Lighthouse Performance ≥ 90. Lighthouse Accessibility ≥ 90. Lighthouse Best Practices ≥ 90. Lighthouse SEO ≥ 90. FCP < 1.5s, LCP < 2.5s, CLS < 0.1. |

---

### FE-037: Loading Skeletons for Async Content

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P3 |
| **Phase** | 6 |
| **Dependencies** | FE-015 |
| **Assigned Team** | Frontend |
| **Description** | Add loading skeleton placeholders for any async-loaded content (PRD Section 7.3 item 4): contact form submission state, any dynamically loaded sections. Prevents layout shift during loading. |
| **Acceptance Criteria** | Skeletons appear while content loads. No layout shift when content replaces skeleton. |

---

## Phase 7 — Deployment & Handoff (1 day)

### BE-007: Create Dockerfile & docker-compose

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P1 |
| **Phase** | 7 |
| **Dependencies** | BE-001 through BE-006, FE-036 |
| **Assigned Team** | Backend |
| **Description** | Create production deployment configuration per PRD Section 3.1 and 6.1: `Dockerfile` for the full-stack app (multi-stage build: build React frontend, serve with Node.js/Express), `docker-compose.yml` for easy local/production setup. Alternative: PM2 + Nginx configuration. Include environment variable documentation. |
| **Acceptance Criteria** | `docker-compose up` builds and runs the full application. Frontend and backend both accessible. Environment variables documented in `.env.example`. |

---

### BE-008: Production Environment Configuration

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P2 |
| **Phase** | 7 |
| **Dependencies** | BE-007 |
| **Assigned Team** | Backend |
| **Description** | Configure production settings: HTTPS enforcement (PRD Section 6.6), CORS whitelist for production domain, production environment variables, error handling (no stack traces in production), static file serving with cache headers. |
| **Acceptance Criteria** | HTTPS enforced. CORS restricted. No stack traces leak in production errors. Static files served with appropriate cache headers. |

---

### PM-004: Create Deployment Documentation

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P1 |
| **Phase** | 7 |
| **Dependencies** | BE-007 |
| **Assigned Team** | Project Manager |
| **Description** | Write deployment documentation in `docs/deployment.md` covering: prerequisites, environment setup (`.env` variables: SMTP credentials, admin email, allowed origins), Docker deployment steps, alternative PM2/Nginx setup, DNS configuration, SSL certificate setup, Google Search Console sitemap submission, and analytics setup (Google Analytics or Plausible). |
| **Acceptance Criteria** | A developer unfamiliar with the project can deploy it by following the documentation. All environment variables documented. |

---

### PM-005: Create Content Update Guide

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P2 |
| **Phase** | 7 |
| **Dependencies** | FE-004 |
| **Assigned Team** | Project Manager |
| **Description** | Write a content update guide in `docs/content-guide.md` for non-developers explaining how to update: services, client logos, team members, testimonials, statistics, job positions, contact info, and social links — all via the JSON data files. Include examples for each file. |
| **Acceptance Criteria** | A non-developer can follow the guide to update any content by editing JSON files. Includes examples and field descriptions. |

---

### PM-006: Client Handoff Checklist

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P1 |
| **Phase** | 7 |
| **Dependencies** | All other tasks |
| **Assigned Team** | Project Manager |
| **Description** | Prepare and execute client handoff: verify all placeholder content is flagged for replacement, confirm domain/hosting is provisioned, submit sitemap to Google Search Console, set up analytics, run final `npm audit`, conduct final Lighthouse audit, and deliver a punch list of Phase 2 items (blog, CMS, multi-language, job board). |
| **Acceptance Criteria** | Handoff checklist document completed. All items verified. Phase 2 backlog documented. |

---

## Cross-Cutting / Ongoing Tasks

### PM-007: Risk Monitoring & Mitigation

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P2 |
| **Phase** | 1–7 (Ongoing) |
| **Dependencies** | None |
| **Assigned Team** | Project Manager |
| **Description** | Monitor and mitigate risks identified in PRD Section 12: client content delays (track content delivery status), logo quality issues (verify after PM-002), email delivery failures (test after BE-003), scope creep (flag any out-of-scope requests and refer to PRD Section 3.2). Maintain a risk register and update weekly. |
| **Acceptance Criteria** | Risk register maintained in `docs/risk-register.md`. Weekly updates. Mitigations executed as needed. |

---

### PM-008: Sprint Planning & Progress Tracking

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P2 |
| **Phase** | 1–7 (Ongoing) |
| **Dependencies** | None |
| **Assigned Team** | Project Manager |
| **Description** | Track progress against the 18-day timeline (PRD Section 11). Run daily standups or async check-ins. Flag any blockers, especially around client-dependent content (real bios, testimonials, photos, office address). Ensure parallel work streams (Frontend / Backend) are coordinated. |
| **Acceptance Criteria** | Progress tracked against milestones. Blockers identified and escalated within 24 hours. |

---

### BE-009: Backend Automated Tests

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P2 |
| **Phase** | 4 |
| **Dependencies** | BE-002, BE-004 |
| **Assigned Team** | Backend |
| **Description** | Write automated tests for the backend: unit tests for validation logic, integration tests for `POST /api/contact` (success, validation errors, rate limiting), and health endpoint. Use Jest or Mocha + Supertest. |
| **Acceptance Criteria** | Test suite passes. Covers success, validation error, rate limit, and email failure fallback scenarios. CI-runnable. |

---

### BE-010: Email Service Health Monitoring

| Field | Value |
|---|---|
| **Category** | Backend |
| **Priority** | P3 |
| **Phase** | 4 |
| **Dependencies** | BE-003 |
| **Assigned Team** | Backend |
| **Description** | Add health monitoring for the email service (PRD risk mitigation). The `/api/health` endpoint should check email service connectivity and report status. Log any email delivery failures with timestamps for debugging. |
| **Acceptance Criteria** | `/api/health` includes email service status. Email failures logged with timestamps. Admin alerted on repeated failures. |

---

### FE-038: Frontend Unit & Integration Tests

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P3 |
| **Phase** | 5 |
| **Dependencies** | FE-015, FE-026 |
| **Assigned Team** | Frontend |
| **Description** | Write tests for critical frontend components: ContactForm (validation, submission, error handling), navigation (routing), and data-driven components (services, positions). Use Vitest + React Testing Library. |
| **Acceptance Criteria** | Tests pass. Cover form validation, routing, and key data-driven rendering. CI-runnable. |

---

### PM-009: Success Metrics Setup

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P3 |
| **Phase** | 7 |
| **Dependencies** | BE-007 |
| **Assigned Team** | Project Manager |
| **Description** | Set up measurement for PRD Section 13 success metrics: contact form submission tracking (backend logs or analytics events), bounce rate, session duration, Lighthouse scores (CI integration), and mobile traffic share. Configure Google Analytics or Plausible. |
| **Acceptance Criteria** | Analytics tracking live. Contact form events tracked. Lighthouse CI configured. Baseline metrics recorded. |

---

### PM-010: Phase 2 Backlog Documentation

| Field | Value |
|---|---|
| **Category** | Project Management |
| **Priority** | P3 |
| **Phase** | 7 |
| **Dependencies** | None |
| **Assigned Team** | Project Manager |
| **Description** | Document Phase 2 backlog items from PRD Section 3.2: blog/CMS backend, multi-language support, job board/ATS integration. Include rough scope and priority for each. Reference in client handoff. |
| **Acceptance Criteria** | Phase 2 backlog documented in `docs/phase2-backlog.md` with scope descriptions and suggested priority. |

---

### FE-039: Error Boundary & 404 Page

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-005 |
| **Assigned Team** | Frontend |
| **Description** | Implement a React Error Boundary component that catches rendering errors and displays a user-friendly fallback UI. Create a 404 Not Found page for unmatched routes with a link back to Home. |
| **Acceptance Criteria** | Unknown routes show 404 page with navigation back to Home. Rendering errors show friendly fallback instead of white screen. |

---

### FE-040: Smooth Scroll for Anchor Links

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P2 |
| **Phase** | 3 |
| **Dependencies** | FE-005 |
| **Assigned Team** | Frontend |
| **Description** | Implement smooth scrolling for all anchor links across the site (PRD Section 7.3 item 1). When navigating from Home page service cards to `/services#section-id`, the page should scroll smoothly to the target section. |
| **Acceptance Criteria** | Anchor links scroll smoothly to target. Works for both same-page and cross-page anchor navigation. |

---

### FE-041: Hover Effects on Cards

| Field | Value |
|---|---|
| **Category** | Frontend |
| **Priority** | P3 |
| **Phase** | 3 |
| **Dependencies** | FE-002 |
| **Assigned Team** | Frontend |
| **Description** | Implement consistent hover effects across all card components (PRD Section 7.3 item 2): services cards, team member cards, testimonial cards, career position cards. Subtle elevation/shadow increase on hover with smooth transition. |
| **Acceptance Criteria** | All cards show consistent hover effect. Transition is smooth (200–300ms). Effect only on desktop (no hover on touch devices). |

---

## Dependency Graph — Critical Path

```
Phase 1 (Setup)
  FE-001 → FE-002 → FE-006 (Header)
  FE-001 → FE-003 ─┐
  FE-001 → FE-004 ─┤→ FE-005 (Router) → Phase 2–3 pages
  FE-001 → FE-005 ─┘
  BE-001 (independent, parallel with FE-001)
  PM-001 → PM-002 (logo processing)

Phase 2 (Home + Shared)
  FE-006 + FE-007 + FE-008–014 → FE-015 (Home Page assembled)
  FE-016 (PageHeader — needed by all inner pages)

Phase 3 (Inner Pages)
  FE-017–021 → FE-022 (About assembled)
  FE-023 (Services), FE-024 (Clients), FE-025 (Career) — parallel
  FE-026 → FE-027 (Contact)
  FE-028 (Privacy) — parallel
  FE-039, FE-040, FE-041 — parallel with page builds

Phase 4 (Backend API)
  BE-002 → BE-003 (Email), BE-004 (Rate Limit), BE-005 (CSRF) — parallel
  BE-006 (Security) — parallel with BE-002
  FE-029 depends on BE-002 + BE-004 + BE-005 + FE-026

Phase 5 (QA)
  FE-030 → FE-031, FE-032 — parallel
  PM-003 depends on FE-030

Phase 6 (Perf/SEO)
  FE-033, FE-034, FE-035 — parallel
  FE-036 depends on FE-033 + FE-034

Phase 7 (Deploy)
  BE-007 → BE-008
  PM-004 depends on BE-007
  PM-006 depends on all tasks
```

**Critical Path:** FE-001 → FE-002 → FE-006 → FE-015 → FE-030 → FE-036 → BE-007 → PM-006

---

## Parallel Execution Opportunities

The following work streams can execute simultaneously to compress the timeline:

| Stream A (Frontend Setup + Home) | Stream B (Backend) | Stream C (PM/Content) |
|---|---|---|
| FE-001, FE-002, FE-003, FE-004, FE-005 | BE-001 | PM-001 |
| FE-006 through FE-015 | BE-002 through BE-006 | PM-002 |
| FE-017 through FE-028 | BE-009 | PM-003 |
| FE-029 through FE-036 | BE-007, BE-008 | PM-004 through PM-006 |

---

*This document should be updated as tasks are completed, blocked, or requirements change. Refer to [PRD.md](PRD.md) for full requirement details.*
