# Requirements: Project Requirement Document Creation

**Project Name:** Paroz Consultancy — Corporate Website
**Reference Website:** https://devicons.net/
**Technology Stack:** React.js (Frontend), Node.js (Backend)
**Prepared By:** Petra, AI Product Manager
**Date:** July 4, 2026

---

## 1. Business Requirements

Paroz Consultancy is a non-IT consultancy service company specializing in resource handling and related professional services. The goal is to build a modern, professional corporate website inspired by the structure, layout, and user experience of devicons.net — adapted entirely for a consultancy services context rather than a tech/icon library.

**Business Goals:**

- Establish a strong digital presence that communicates Paroz Consultancy's brand, expertise, and service offerings clearly and professionally.
- Generate qualified inbound leads through contact forms, service inquiries, and calls to action throughout the site.
- Showcase the company's service portfolio, team expertise, client success stories, and industry credibility.
- Provide a content hub (blog/insights section) to drive organic traffic and demonstrate thought leadership.
- Ensure the website is easily maintainable by non-technical staff through a lightweight admin/CMS panel.

**Success Metrics:**

| Metric | Target |
|---|---|
| Monthly unique visitors (within 6 months of launch) | 5,000+ |
| Average page load time | < 2 seconds |
| Lead form submission rate | > 3% of visitors |
| Bounce rate | < 45% |
| Mobile traffic usability score (Lighthouse) | > 90 |
| SEO: Top 20 ranking for 5+ target keywords within 6 months | Achieved |

---

## 2. Functional Requirements

Based on a thorough analysis of the reference website (devicons.net) and its adaptation to a non-IT consultancy context, the following functional requirements are identified. The reference site features a clean hero section, categorized icon/service browsing with search and filters, detailed item pages, responsive grid layouts, a sticky navigation bar, dark/light theme support, footer with social links, and smooth animations — all of which are adapted below.

| ID | Requirement | Priority | Source |
|---|---|---|---|
| **FR-01** | **Global Navigation Bar:** Sticky top navigation with logo, menu links (Home, About, Services, Industries, Resources/Blog, Contact), and a prominent CTA button ("Get a Consultation"). Mobile hamburger menu. | High | Reference site analysis |
| **FR-02** | **Hero Section (Home):** Full-width hero banner with headline, subheadline describing Paroz Consultancy's value proposition, a primary CTA button ("Explore Our Services" or "Request a Quote"), and a supporting visual/illustration or background image. | High | Reference site analysis |
| **FR-03** | **Services Listing Page:** Grid/card-based layout displaying all consultancy services (e.g., Resource Handling, Staffing Solutions, HR Consulting, Compliance Advisory, Payroll Management, Training & Development). Each card shows an icon, title, and short description. Clicking a card navigates to a detailed service page. | High | Reference site analysis, Business need |
| **FR-04** | **Service Search & Filter:** A search bar and category filter on the Services page allowing users to quickly find a specific service by keyword or category (mirroring the search/filter pattern on devicons.net). | Medium | Reference site analysis |
| **FR-05** | **Individual Service Detail Page:** Dedicated page per service with a detailed description, key benefits (bullet or icon list), process/methodology overview, relevant case studies or testimonials, and a CTA to inquire about the service. | High | Business need |
| **FR-06** | **About Us Page:** Company overview, mission and vision statements, core values, company history/timeline, and key statistics (years of experience, clients served, team size, etc.). | High | Business need |
| **FR-07** | **Team Section:** Grid layout of team members with photo, name, designation, and short bio. Optional: LinkedIn profile links. Can be a standalone page or a section within About Us. | Medium | Business need |
| **FR-08** | **Industries Served Page:** Grid or list of industries Paroz Consultancy serves (e.g., Manufacturing, Healthcare, Retail, Logistics, Education) with brief descriptions and relevant service mappings. | Medium | Business need |
| **FR-09** | **Client Testimonials / Case Studies:** A dedicated section or page showcasing client logos, quotes, and detailed case studies with measurable outcomes. Carousel or grid layout. | Medium | Business need |
| **FR-10** | **Blog / Insights Section:** Listing page with article cards (thumbnail, title, date, excerpt, category tag). Individual blog post page with rich text content, author info, related posts, and social sharing buttons. | Medium | Reference site analysis, Business need |
| **FR-11** | **Contact Us Page:** Contact form (Name, Email, Phone, Company, Service Interest dropdown, Message), office address with embedded Google Map, phone number, email address, and business hours. | High | Business need |
| **FR-12** | **Lead Capture / CTA Sections:** Contextual call-to-action banners placed strategically across pages ("Need Help with Staffing?", "Talk to Our Experts") with inline forms or links to the Contact page. | High | Business need |
| **FR-13** | **Footer:** Multi-column footer with quick links, service links, contact info, social media icons (LinkedIn, Twitter/X, Facebook), newsletter subscription input, and copyright/legal links (Privacy Policy, Terms). | High | Reference site analysis |
| **FR-14** | **Dark/Light Theme Toggle:** A theme switcher in the navbar allowing users to toggle between dark and light modes, with preference stored in local storage. | Low | Reference site analysis |
| **FR-15** | **Admin Panel (CMS):** A lightweight, authenticated admin panel built with Node.js backend to allow authorized staff to manage services, blog posts, team members, testimonials, and contact form submissions (CRUD operations). | High | Business need |
| **FR-16** | **Contact Form Submissions Management:** Backend API to receive, store, and list contact form submissions. Email notification to admin on new submission. | High | Business need |
| **FR-17** | **Newsletter Subscription:** Capture email addresses for a newsletter. Store in the database. Optional integration with an email marketing service. | Low | Business need |
| **FR-18** | **Smooth Scroll & Animations:** Subtle scroll-based animations (fade-in, slide-up) on sections and cards as the user scrolls, consistent with the polished feel of the reference site. | Medium | Reference site analysis |
| **FR-19** | **Responsive Design:** Fully responsive across desktop, tablet, and mobile breakpoints. All pages and components must be tested on common screen sizes. | High | Reference site analysis |
| **FR-20** | **SEO Foundations:** Dynamic meta titles, descriptions, Open Graph tags per page. Server-side rendering (SSR) or static site generation (SSG) via Next.js (React framework) for SEO-friendliness. Semantic HTML. Sitemap and robots.txt. | High | Business need |
| **FR-21** | **404 / Error Page:** Custom-designed 404 page with navigation back to key sections. | Low | Best practice |
| **FR-22** | **Cookie Consent Banner:** GDPR-compliant cookie consent popup with accept/reject options. | Medium | Compliance |

---

## 3. Non-Functional Requirements

**Performance:**
- Pages must achieve a Lighthouse Performance score of 85+ on both mobile and desktop.
- Time to First Contentful Paint (FCP) must be under 1.5 seconds.
- All images must be optimized (WebP format, lazy loading) and served via a CDN if traffic warrants it.
- API response times for all backend endpoints must be under 300ms for standard operations.

**Security:**
- All traffic served over HTTPS (TLS 1.2+).
- Backend API endpoints must be protected against common vulnerabilities: SQL injection, XSS, CSRF.
- Admin panel must require authentication (JWT-based) with strong password policies.
- Contact form must include rate limiting and CAPTCHA (e.g., reCAPTCHA v3) to prevent spam.
- Sensitive data (admin credentials, user emails) must be encrypted at rest.
- Dependencies must be audited regularly for known vulnerabilities (npm audit).

**Scalability:**
- Architecture must support horizontal scaling of the Node.js backend (stateless API design).
- Database choice (e.g., PostgreSQL or MongoDB) must handle projected growth to 50,000+ monthly visitors without architectural changes.
- Static assets should be cacheable and CDN-ready.

**Accessibility:**
- WCAG 2.1 Level AA compliance.
- All images must have descriptive alt text.
- Full keyboard navigability across all interactive elements.
- Sufficient color contrast ratios in both light and dark themes.
- Screen reader compatibility tested with at least one major tool (NVDA or VoiceOver).

**Maintainability:**
- Codebase must follow a clear folder structure with separation of concerns (components, pages, services, utilities).
- Code must be linted (ESLint) and formatted (Prettier) with pre-commit hooks.
- README documentation for both frontend and backend repositories with setup, build, and deployment instructions.

**Reliability:**
- Target uptime of 99.5%.
- Automated daily database backups.
- Error logging and monitoring (e.g., Sentry or equivalent).

---

## 4. User Stories

**Visitor (Prospective Client):**

- As a prospective client, I want to see a clear overview of all services Paroz Consultancy offers so that I can quickly determine if they can help my business.
- As a prospective client, I want to search and filter services by category or keyword so that I can find the specific service I need without scrolling through everything.
- As a prospective client, I want to read detailed information about a specific service so that I understand the scope, methodology, and benefits before reaching out.
- As a prospective client, I want to read client testimonials and case studies so that I can assess the consultancy's credibility and track record.
- As a prospective client, I want to submit a contact/inquiry form so that I can request a consultation or ask questions about a service.
- As a prospective client, I want to learn about the company's background, team, and values so that I can build trust before engaging.
- As a prospective client, I want to see which industries the consultancy serves so that I know they have relevant domain experience.
- As a prospective client, I want to read blog articles and insights so that I can evaluate the consultancy's thought leadership and expertise.
- As a prospective client, I want the website to load fast and work well on my phone so that I can browse comfortably on any device.
- As a prospective client, I want to toggle between dark and light modes so that I can browse comfortably in different lighting conditions.

**Admin / Content Manager:**

- As an admin, I want to log in to a secure admin panel so that I can manage website content without developer help.
- As an admin, I want to add, edit, or remove services so that the website always reflects our current offerings.
- As an admin, I want to create and publish blog posts with rich text formatting so that I can share insights and drive traffic.
- As an admin, I want to manage team member profiles (add, edit, remove) so that the team section stays current.
- As an admin, I want to view and manage contact form submissions so that no lead inquiry is missed.
- As an admin, I want to add or update client testimonials so that social proof on the website remains fresh and relevant.

**Developer / Maintainer:**

- As a developer, I want clean, well-documented code with a standard project structure so that I can onboard quickly and maintain the codebase efficiently.
- As a developer, I want automated linting and formatting so that code quality is consistent across the team.

---

## 5. Constraints & Assumptions

**Technical Constraints:**
- Frontend must be built using React.js (preferably Next.js for SSR/SSG benefits).
- Backend must be built using Node.js with Express.js (or a similar lightweight framework).
- Database: PostgreSQL (preferred for relational data) or MongoDB (if document-based flexibility is preferred). Final choice to be confirmed by the technical lead.
- Hosting environment to be confirmed (AWS, Vercel + managed DB, DigitalOcean, or similar). This affects deployment pipeline design.
- No third-party CMS (e.g., WordPress, Contentful) — the admin panel is custom-built as part of this project.

**Business Constraints:**
- The website must be branded entirely for Paroz Consultancy (no leftover reference-site branding or tech-oriented content).
- Content (service descriptions, team bios, case studies, blog posts) must be provided by the Paroz Consultancy team. Placeholder/lorem ipsum content will be used during development if real content is delayed.
- The project timeline and budget are to be defined after stakeholder review of this document.

**Assumptions:**
- Paroz Consultancy will provide brand assets (logo, brand colors, fonts, photography) before the design phase begins.
- The initial launch scope covers a public-facing website and a basic admin panel. Advanced features (client portal, appointment booking, multi-language support) are deferred to future phases.
- The website will be in English only for the initial release.
- A single admin role is sufficient for the CMS in Phase 1. Role-based access control (RBAC) can be added in a future phase.
- Email notifications for contact form submissions will use a transactional email service (e.g., SendGrid, AWS SES). The specific provider is to be confirmed.
- Analytics will be handled by Google Analytics 4 (or a privacy-friendly alternative like Plausible). Tag Manager setup is assumed.

---

## 6. Open Questions

| # | Question | Stakeholder | Impact |
|---|---|---|---|
| 1 | Can you provide the finalized brand kit (logo files, color palette, typography, brand guidelines)? | Paroz Consultancy Marketing | Blocks design phase |
| 2 | What is the complete list of services to be featured at launch? Please provide names, descriptions, and any categorization. | Paroz Consultancy Operations | Blocks content and IA |
| 3 | What is the preferred hosting environment and domain name? Is there an existing domain? | Paroz Consultancy IT / Management | Affects DevOps and deployment |
| 4 | What is the preferred database — PostgreSQL or MongoDB? | Technical Lead | Affects backend architecture |
| 5 | Are there specific compliance or regulatory requirements beyond GDPR (e.g., industry-specific data handling rules)? | Paroz Consultancy Legal | Affects security and legal pages |
| 6 | Will real content (service copy, team bios, images, case studies) be available before development, or should we plan for a content population phase post-development? | Paroz Consultancy Marketing | Affects timeline |
| 7 | Is multi-language support needed in the near future? If so, which languages? | Paroz Consultancy Management | Affects architecture decisions now |
| 8 | Should the blog support multiple authors and author profiles, or is a single company-authored voice sufficient? | Paroz Consultancy Marketing | Affects CMS complexity |
| 9 | What is the expected budget range and desired launch timeline? | Paroz Consultancy Management | Affects scope and phasing |
| 10 | Are there any third-party integrations required at launch (e.g., CRM like HubSpot/Salesforce, email marketing like Mailchimp, analytics beyond GA4)? | Paroz Consultancy Management | Affects backend scope |
| 11 | Does the admin panel need role-based access (e.g., Editor vs. Super Admin) in Phase 1, or is a single admin role sufficient? | Paroz Consultancy Management | Affects auth system complexity |
| 12 | Are there any specific competitor websites whose design or features you particularly like or want to differentiate from? | Paroz Consultancy Management | Influences UX/UI direction |

---

*This document serves as the foundational requirements specification for the Paroz Consultancy website project. It should be reviewed, refined, and approved by all key stakeholders before progressing to the design and sprint planning phases. All open questions should be resolved before development begins.*