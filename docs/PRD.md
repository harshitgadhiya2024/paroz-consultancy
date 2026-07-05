# Product Requirements Document (PRD)

## Paroz Consultancy — Corporate Website

**Version:** 1.0
**Date:** 2026-07-05
**Author:** Petra (PM Agent)
**Status:** Draft

---

## 1. Executive Summary

Paroz Consultancy is a non-IT consultancy service company specializing in resource handling, staffing, recruitment, and operational consulting services. This PRD defines the requirements for building a modern, professional corporate website using **React.js** (frontend) and **Node.js** (backend) — modeled after the structure and content approach of [devicons.net](https://devicons.net/) (Devi Consultancy), a consultancy firm serving the insurance and staffing industry.

The website will serve as the company's digital storefront: communicating services, building trust through client logos and testimonials, generating leads via a contact form, and establishing Paroz Consultancy's brand presence online.

---

## 2. Goals

1. **Brand Presence** — Establish Paroz Consultancy as a credible, professional non-IT consultancy firm with a polished web presence.
2. **Lead Generation** — Drive inbound inquiries through a prominent contact form and clear calls-to-action on every page.
3. **Service Communication** — Clearly articulate the full range of consultancy services offered (resource handling, staffing, recruitment, HR operations, compliance advisory, payroll management, etc.).
4. **Client Trust** — Showcase existing client partnerships (Aditya Birla Insurance, Axis Max Life, Kotak Life, Cars24, Bharti, Niva, and others) to build credibility.
5. **Mobile-First** — Deliver a fully responsive experience that works seamlessly on mobile, tablet, and desktop.
6. **Performance** — Achieve Lighthouse scores of 90+ across Performance, Accessibility, Best Practices, and SEO.

---

## 3. Scope

### 3.1 In-Scope

- **Public-facing corporate website** with the pages listed in Section 5.
- **Contact form** with backend email delivery (Node.js + Nodemailer or equivalent).
- **Responsive design** — mobile-first, supporting viewports from 320px to 2560px.
- **SEO optimization** — meta tags, Open Graph, structured data (JSON-LD), sitemap.xml, robots.txt.
- **Client logo carousel/grid** — leveraging the existing logo assets in the repository (`aditya_birla_issurance.jpeg`, `aditya_capital.jpeg`, `axis_max_life.jpeg`, `bharti.jpeg`, `cars24.jpeg`, `kotak_life.jpeg`, `niva.jpeg`, `logo.png`).
- **Admin-friendly content** — content stored in easily editable JSON/Markdown files or a lightweight CMS-ready structure so non-developers can update text.
- **Deployment-ready** — Dockerized setup or clear build scripts for production deployment.

### 3.2 Out-of-Scope

- User authentication / login portal.
- Payment processing.
- Blog or content management system (CMS) backend (Phase 2 consideration).
- Multi-language / internationalization (Phase 2 consideration).
- Job board / applicant tracking system integration (Phase 2 consideration).
- Native mobile applications.

---

## 4. Target Audience

| Segment | Description |
|---|---|
| **Corporate HR Directors** | Decision-makers at mid-to-large enterprises seeking outsourced HR, staffing, and resource management services. |
| **Operations Managers** | Individuals responsible for workforce planning, compliance, and operational efficiency. |
| **Small Business Owners** | Entrepreneurs needing flexible staffing and consultancy support without building an in-house HR team. |
| **Job Seekers** (secondary) | Candidates who discover Paroz Consultancy through search and want to understand the company before engaging. |

---

## 5. Site Architecture & Page Requirements

The website follows a multi-page architecture inspired by devicons.net, adapted for Paroz Consultancy's service offerings.

### 5.1 Page Map

```
Home (/)
├── About Us (/about)
├── Services (/services)
│   ├── Resource Handling & Staffing
│   ├── Recruitment & Talent Acquisition
│   ├── HR Operations & Compliance
│   ├── Payroll Management
│   ├── Training & Development
│   └── Operational Consulting
├── Our Clients (/clients)
├── Career (/career)
├── Contact Us (/contact)
└── Privacy Policy (/privacy)
```

### 5.2 Page-by-Page Requirements

#### 5.2.1 Home Page (`/`)

**Purpose:** First impression — communicate who Paroz Consultancy is, what they do, and why visitors should trust them.

**Sections (top to bottom):**

1. **Hero Banner**
   - Full-width background image or gradient with overlay.
   - Company tagline (e.g., "Your Trusted Partner in Resource Management & Consultancy").
   - Primary CTA button: "Get in Touch" (links to `/contact`).
   - Secondary CTA: "Explore Our Services" (links to `/services`).

2. **About Snapshot**
   - 2–3 sentence company introduction.
   - "Learn More" link to `/about`.
   - Accompanied by a relevant image or the company logo.

3. **Services Overview**
   - Grid of 4–6 service cards, each with:
     - Icon (from a library like React Icons or Lucide).
     - Service title.
     - 1-sentence description.
     - "Read More" link to the corresponding section on `/services`.

4. **Key Statistics / Counters**
   - Animated counters for metrics like:
     - "500+ Resources Deployed"
     - "50+ Corporate Clients"
     - "10+ Years of Experience"
     - "98% Client Retention Rate"
   - Counters animate on scroll into viewport.

5. **Client Logo Carousel**
   - Auto-scrolling horizontal carousel of client logos.
   - Uses existing assets: Aditya Birla Insurance, Axis Max Life, Kotak Life, Cars24, Bharti, Niva.
   - Logos should be displayed in grayscale with color on hover.

6. **Testimonials**
   - Rotating testimonial cards with client name, designation, company, and quote.
   - Minimum 3 testimonials (placeholder content to be replaced).

7. **Call-to-Action Banner**
   - Full-width colored section: "Ready to optimize your workforce? Let's talk."
   - CTA button linking to `/contact`.

8. **Footer**
   - Company logo, address, phone, email.
   - Quick links to all pages.
   - Social media icons (LinkedIn, Twitter/X, Facebook — links configurable).
   - Copyright notice.

**Acceptance Criteria:**
- Hero banner loads within 1.5 seconds on 3G.
- All CTAs are visible without scrolling on desktop (hero section).
- Client logo carousel is draggable/swipeable on touch devices.
- Counter animation triggers only once per page load.

---

#### 5.2.2 About Us (`/about`)

**Purpose:** Build trust by telling the company's story, mission, vision, values, and leadership.

**Sections:**

1. **Page Header** — "About Paroz Consultancy" with a subtle background.
2. **Company Story** — 2–3 paragraphs covering founding, growth, and positioning.
3. **Mission & Vision** — Side-by-side cards or columns.
4. **Core Values** — Grid of 4–6 values with icons (Integrity, Excellence, Partnership, Innovation, People-First, Accountability).
5. **Leadership Team** — Cards with photo placeholder, name, title, and brief bio. Minimum 3 team members.
6. **Why Choose Us** — Bulleted or icon-based list of differentiators (Industry Expertise, Dedicated Account Managers, Compliance-First Approach, Scalable Solutions, Pan-India Network).

**Acceptance Criteria:**
- Content is scannable — no text block exceeds 4 lines without a visual break.
- Leadership photos use consistent aspect ratios (1:1 circle crop).

---

#### 5.2.3 Services (`/services`)

**Purpose:** Detail each service offering so prospects understand the value proposition.

**Sections:**

Each service gets a dedicated section with:
- **Title and icon.**
- **Description** (3–5 sentences).
- **Key deliverables** (bulleted list of 3–5 items).
- **CTA**: "Request a Consultation" linking to `/contact` with the service pre-selected.

**Service Definitions:**

| # | Service | Description |
|---|---|---|
| 1 | **Resource Handling & Staffing** | End-to-end temporary and permanent staffing solutions. We source, screen, and deploy qualified professionals across industries — from frontline associates to mid-management. |
| 2 | **Recruitment & Talent Acquisition** | Executive search, bulk hiring, and campus recruitment services. We partner with clients to build high-performing teams through rigorous assessment and cultural-fit evaluation. |
| 3 | **HR Operations & Compliance** | Outsourced HR operations including employee lifecycle management, statutory compliance (PF, ESI, PT, Labour Laws), and HR policy development. |
| 4 | **Payroll Management** | Accurate, timely payroll processing with tax computation, salary structuring, reimbursement management, and full statutory filing. |
| 5 | **Training & Development** | Customized training programs for onboarding, skills development, leadership coaching, and compliance training. |
| 6 | **Operational Consulting** | Process optimization, workforce planning, organizational design, and performance management framework implementation. |

**Acceptance Criteria:**
- Each service section has a unique anchor ID for deep-linking from the home page.
- "Request a Consultation" buttons pass the service name as a query parameter to the contact form.

---

#### 5.2.4 Our Clients (`/clients`)

**Purpose:** Showcase the breadth and quality of the client portfolio.

**Sections:**

1. **Page Header** — "Trusted by Leading Organizations."
2. **Client Logo Grid** — Responsive grid (3 columns desktop, 2 tablet, 1 mobile) displaying all client logos with company names as alt text.
3. **Industry Breakdown** (optional) — Categorize clients by industry: Insurance, Automotive, Financial Services, FMCG, etc.
4. **Case Study Teasers** (Phase 2 placeholder) — Space for 2–3 short case study summaries.

**Acceptance Criteria:**
- All existing logo assets in the repo are displayed.
- Logos maintain aspect ratio and are visually consistent (max height 80px, centered).

---

#### 5.2.5 Career (`/career`)

**Purpose:** Attract potential employees and show Paroz Consultancy as a great place to work.

**Sections:**

1. **Page Header** — "Join Our Team."
2. **Why Work With Us** — 3–4 value propositions (Growth Opportunities, Collaborative Culture, Competitive Compensation, Work-Life Balance).
3. **Open Positions** — List of current openings (initially placeholder data). Each card shows: Title, Location, Type (Full-time/Contract), and a "Apply Now" button linking to the contact form or an email.
4. **Application CTA** — "Don't see a role that fits? Send us your resume at careers@parozconsultancy.com."

**Acceptance Criteria:**
- Open positions are driven by a JSON data file so they can be updated without code changes.
- Page renders gracefully with zero open positions ("No current openings — check back soon!").

---

#### 5.2.6 Contact Us (`/contact`)

**Purpose:** Convert visitors into leads.

**Sections:**

1. **Page Header** — "Get in Touch."
2. **Contact Form** with fields:
   - Full Name (required)
   - Email (required, validated)
   - Phone Number (optional, validated)
   - Company Name (optional)
   - Service Interested In (dropdown, pre-populated from services list; optional query param pre-selection)
   - Message (required, textarea)
   - Submit button with loading state.
3. **Contact Information** — Address, phone, email displayed alongside the form.
4. **Embedded Map** — Google Maps iframe showing office location (configurable coordinates).

**Backend Requirements:**
- Node.js API endpoint `POST /api/contact` that:
  - Validates all fields server-side.
  - Sends an email notification to a configurable admin address (via Nodemailer / SendGrid / equivalent).
  - Returns success/failure JSON response.
  - Implements rate limiting (max 5 submissions per IP per hour) to prevent spam.

**Acceptance Criteria:**
- Form submission shows a success toast/message on completion.
- Validation errors are displayed inline next to the relevant field.
- Form is accessible — all fields have labels, error messages use `aria-live`.
- Rate limit returns a 429 status with a user-friendly message.

---

#### 5.2.7 Privacy Policy (`/privacy`)

**Purpose:** Legal compliance (GDPR / IT Act awareness).

**Content:** Standard privacy policy covering data collection (contact form), usage, storage, and user rights. Placeholder content to be reviewed by legal.

---

## 6. Non-Functional Requirements

### 6.1 Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js 18+ (Create React App or Vite) |
| Routing | React Router v6 |
| Styling | Tailwind CSS or CSS Modules (no heavy UI framework) |
| Animations | Framer Motion or CSS transitions |
| Icons | Lucide React or React Icons |
| Backend | Node.js 18+ with Express.js |
| Email | Nodemailer (SMTP) or SendGrid SDK |
| Build | Vite (preferred) or Create React App |
| Deployment | Docker (Dockerfile + docker-compose) or PM2 + Nginx |

### 6.2 Performance

- **First Contentful Paint (FCP):** < 1.5s on 4G.
- **Largest Contentful Paint (LCP):** < 2.5s.
- **Cumulative Layout Shift (CLS):** < 0.1.
- **Total page weight:** < 1.5 MB (excluding map iframe).
- Images optimized: WebP format with JPEG fallback; lazy loading for below-the-fold images.

### 6.3 Accessibility

- WCAG 2.1 AA compliance.
- Keyboard-navigable (all interactive elements focusable, visible focus rings).
- Screen-reader compatible (semantic HTML, ARIA labels where needed).
- Color contrast ratio ≥ 4.5:1 for body text.

### 6.4 SEO

- Unique `<title>` and `<meta description>` per page.
- Open Graph and Twitter Card meta tags.
- JSON-LD structured data for Organization schema.
- `sitemap.xml` and `robots.txt` generated at build time.
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- All images have descriptive `alt` attributes.

### 6.5 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 15+)
- Chrome for Android (latest)

### 6.6 Security

- Contact form: server-side validation, input sanitization, CSRF protection.
- Rate limiting on API endpoints.
- HTTPS enforced in production.
- No sensitive data stored (contact form submissions are emailed, not persisted in a database — unless Phase 2 adds a CRM).
- Dependency audit (`npm audit`) with zero critical/high vulnerabilities.

---

## 7. Design Guidelines

### 7.1 Brand Identity

| Element | Specification |
|---|---|
| **Primary Color** | To be defined by Paroz Consultancy brand guide. Default: Deep Blue (#1a365d) |
| **Secondary Color** | Teal/Green accent (#2d8a6e) |
| **Neutral Colors** | White (#ffffff), Light Gray (#f7fafc), Dark Gray (#2d3748), Black (#1a202c) |
| **Typography** | Headings: Inter or Poppins (600/700 weight). Body: Inter or Open Sans (400/500 weight). |
| **Logo** | Use `logo.png` from repository root. |
| **Imagery** | Professional, diverse workforce imagery. Avoid generic stock photos; prefer illustrations or real photography where available. |

### 7.2 Layout Principles

- Max content width: 1200px, centered.
- Consistent section padding: 80px vertical (desktop), 48px (mobile).
- Card-based design for services, team members, and testimonials.
- Sticky navigation header with transparent-to-solid transition on scroll.
- Hamburger menu on mobile (< 768px).

### 7.3 Interaction Patterns

- Smooth scroll for anchor links.
- Hover effects on cards (subtle elevation/shadow increase).
- Page transitions (fade or slide) via Framer Motion.
- Loading skeletons for any async-loaded content.

---

## 8. Information Architecture — Component Tree

```
<App>
├── <Header />                  (sticky nav, logo, menu links, mobile hamburger)
├── <Routes>
│   ├── <HomePage />
│   │   ├── <HeroBanner />
│   │   ├── <AboutSnapshot />
│   │   ├── <ServicesOverview />
│   │   ├── <StatsCounters />
│   │   ├── <ClientLogoCarousel />
│   │   ├── <Testimonials />
│   │   └── <CTABanner />
│   ├── <AboutPage />
│   │   ├── <PageHeader />
│   │   ├── <CompanyStory />
│   │   ├── <MissionVision />
│   │   ├── <CoreValues />
│   │   ├── <LeadershipTeam />
│   │   └── <WhyChooseUs />
│   ├── <ServicesPage />
│   │   ├── <PageHeader />
│   │   └── <ServiceSection /> (×6)
│   ├── <ClientsPage />
│   │   ├── <PageHeader />
│   │   └── <ClientLogoGrid />
│   ├── <CareerPage />
│   │   ├── <PageHeader />
│   │   ├── <WhyWorkWithUs />
│   │   └── <OpenPositions />
│   ├── <ContactPage />
│   │   ├── <PageHeader />
│   │   ├── <ContactForm />
│   │   ├── <ContactInfo />
│   │   └── <MapEmbed />
│   └── <PrivacyPage />
├── <Footer />
└── <ScrollToTop />             (utility component)
```

---

## 9. Backend API Specification

### 9.1 Endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit a contact form inquiry. |
| `GET` | `/api/health` | Health check endpoint for monitoring. |

### 9.2 `POST /api/contact`

**Request Body (JSON):**
```json
{
  "fullName": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "phone": "string (optional, valid phone format)",
  "company": "string (optional, max 100 chars)",
  "service": "string (optional, one of predefined service keys)",
  "message": "string (required, 10-2000 chars)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for reaching out. We will get back to you within 24 hours."
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "errors": [
    { "field": "email", "message": "Please provide a valid email address." }
  ]
}
```

**Rate Limit (429):**
```json
{
  "success": false,
  "message": "Too many requests. Please try again later."
}
```

---

## 10. Content Requirements

All page copy should be:
- Professional but approachable tone.
- Written in third person ("Paroz Consultancy provides…") for company descriptions.
- Written in second person ("You can count on us…") for CTAs and direct engagement.
- Free of jargon — clear enough for a non-HR audience to understand.

**Content to be provided by the client:**
- Final company story and history.
- Leadership team bios and photos.
- Exact statistics for counters.
- Real testimonials from clients.
- Open job positions.
- Office address and map coordinates.

**Content created by the development team (placeholders):**
- All of the above with realistic placeholder content so the site is demo-ready.

---

## 11. Milestones & Timeline

| Phase | Milestone | Duration | Deliverable |
|---|---|---|---|
| **Phase 1** | Project Setup & Design System | 3 days | Initialized React + Node.js project, Tailwind config, component library skeleton, design tokens. |
| **Phase 2** | Home Page & Shared Components | 4 days | Header, Footer, Hero, Services Overview, Client Carousel, Stats, Testimonials, CTA Banner. |
| **Phase 3** | Inner Pages | 4 days | About, Services, Clients, Career, Contact, Privacy pages fully built. |
| **Phase 4** | Backend API & Contact Form | 2 days | Express.js server, `/api/contact` endpoint, email integration, rate limiting. |
| **Phase 5** | Responsive & Cross-Browser QA | 2 days | Mobile/tablet/desktop testing, browser compatibility fixes, accessibility audit. |
| **Phase 6** | Performance Optimization & SEO | 2 days | Image optimization, lazy loading, meta tags, JSON-LD, sitemap, Lighthouse audit. |
| **Phase 7** | Deployment & Handoff | 1 day | Docker setup, deployment documentation, client handoff. |
| | **Total** | **~18 working days** | |

---

## 12. Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Client content (bios, testimonials, photos) delayed | Blocks final polish; site launches with placeholders. | High | Use realistic placeholder content from day one; design components to gracefully handle missing data. |
| Logo image quality inconsistent (JPEG artifacts, varying dimensions) | Unprofessional appearance on Clients page. | Medium | Pre-process all logos during Phase 1: resize to consistent dimensions, convert to WebP, apply consistent padding. |
| Email delivery failures (SMTP blocked, SendGrid quota) | Contact form appears broken to users. | Medium | Implement fallback: if email fails, log submission to a local JSON file and alert admin. Add health monitoring for the email service. |
| SEO not indexed quickly by search engines | Low organic traffic at launch. | Low | Submit sitemap to Google Search Console immediately after launch; set up Google Analytics / Plausible. |
| Scope creep (client requests blog, job portal, CRM) | Timeline overrun. | Medium | Clearly communicate Phase 2 items in this PRD. Any additions require a change request and revised timeline. |

---

## 13. Success Metrics

| Metric | Target | Measurement |
|---|---|---|
| **Contact form submissions** | ≥ 10/month within 3 months of launch | Backend logs or analytics event tracking. |
| **Bounce rate** | < 50% on Home page | Google Analytics / Plausible. |
| **Average session duration** | > 2 minutes | Google Analytics / Plausible. |
| **Lighthouse Performance score** | ≥ 90 | Lighthouse CI in deployment pipeline. |
| **Lighthouse Accessibility score** | ≥ 90 | Lighthouse CI. |
| **Mobile traffic share** | ≥ 40% of total traffic | Google Analytics. |

---

## 14. Dependencies

- **Client:** Must provide brand guidelines (colors, fonts) or approve the defaults in Section 7.1.
- **Client:** Must provide real content (bios, testimonials, statistics) before final launch.
- **Infrastructure:** Domain name and hosting environment must be provisioned before Phase 7.
- **Email:** SMTP credentials or SendGrid API key must be provided for contact form backend.
- **Repository:** Existing assets in repo root (`logo.png`, client logos) are confirmed usable and properly licensed.

---

## 15. Reference

- **Reference Website:** [https://devicons.net/](https://devicons.net/) (Devi Consultancy) — an HR/staffing consultancy website serving the insurance industry. The Paroz Consultancy website follows a similar information architecture (Home, About, Services, Clients, Contact) but is adapted for a broader non-IT consultancy scope with modern React.js/Node.js technology stack, improved performance standards, and mobile-first design.
- **Existing Repository Assets:**
  - `logo.png` — Paroz Consultancy company logo.
  - `aditya_birla_issurance.jpeg` — Client: Aditya Birla Insurance.
  - `aditya_capital.jpeg` — Client: Aditya Capital.
  - `axis_max_life.jpeg` — Client: Axis Max Life Insurance.
  - `bharti.jpeg` — Client: Bharti.
  - `cars24.jpeg` — Client: Cars24.
  - `kotak_life.jpeg` — Client: Kotak Life Insurance.
  - `niva.jpeg` — Client: Niva Insurance.

---

*This document is a living artifact. It should be updated as requirements evolve during development.*
