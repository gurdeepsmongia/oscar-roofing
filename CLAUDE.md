# Oscar Roofing — Claude Code Project Instructions

## Project

Build a professional, modern, responsive static website for Oscar Roofing, a roofing company serving the Greater Toronto Area in Ontario, Canada.

The project requirements are defined in:

* `docs/master-prompt.md`
* `docs/website-specification.md`
* `docs/client-information.md`

Read all three documents before beginning development.

---

# SOURCE OF TRUTH

Use the documents in this priority order:

1. `docs/client-information.md`

   * Source of truth for actual business facts.

2. `docs/website-specification.md`

   * Source of truth for website requirements.

3. `docs/master-prompt.md`

   * Source of truth for development, UX, SEO, accessibility and quality instructions.

If there is a conflict, do not silently guess.

Explain the conflict and ask for clarification.

---

# CRITICAL RULE — NEVER INVENT BUSINESS FACTS

Never fabricate:

* Reviews
* Google ratings
* Testimonials
* Awards
* Certifications
* Licenses
* Insurance
* Warranties
* Years of experience
* Number of completed projects
* Customer counts
* Company history
* Team members
* Addresses
* Manufacturer relationships
* Pricing
* Guarantees

If information is unavailable, use a clearly marked placeholder or omit the content.

---

# DESIGN DIRECTION

The website must feel:

* Premium
* Modern
* Professional
* Trustworthy
* Local
* Canadian
* Established
* Conversion-focused

Primary visual colors:

Navy
Blue
White
Light gray

Optional subtle accent:

Amber/gold

Do not create a generic AI-template appearance.

---

# PRIMARY BUSINESS GOAL

The website's primary goal is generating roofing inquiries.

The primary CTA is:

GET A QUOTE

The secondary CTA is:

CALL NOW

The phone number is:

+1 (416) 710-9798

The email is:

[oscarroofing520@gmail.com](mailto:oscarroofing520@gmail.com)

---

# DEVELOPMENT RULES

Before creating code:

1. Read all project documentation.
2. Analyze the requirements.
3. Determine the appropriate technology stack.
4. Propose the architecture.
5. Identify missing information.
6. Identify potential conflicts.
7. Present an implementation plan.

Do not begin full implementation until the user approves the plan.

---

# IMPLEMENTATION

Build the website as a production-quality responsive website.

It must work on:

* Chrome
* Edge
* Firefox
* Safari
* iOS Safari
* Android Chrome

It must work on:

* Desktop
* Laptop
* Tablet
* Mobile

---

# QUALITY

Do not stop after generating the initial UI.

After implementation:

1. Run/build the project.
2. Check for errors.
3. Check all routes/pages.
4. Check responsive behavior.
5. Check forms.
6. Check links.
7. Check images.
8. Check accessibility.
9. Check SEO.
10. Check console errors.
11. Fix issues found.
12. Perform a final audit.

---

# CODE QUALITY

Use clean, maintainable code.

Avoid:

* Unnecessary dependencies
* Huge components
* Duplicate code
* Dead code
* Hardcoded secrets
* Exposed API keys
* Fake functionality
* Placeholder lorem ipsum

Use reusable components where appropriate.

---

# FORM SECURITY

The quote form must not expose:

* SMTP passwords
* API keys
* Secret tokens

in browser/client-side code.

Use a secure form provider or serverless backend.

The form should ultimately send submissions to:

[oscarroofing520@gmail.com](mailto:oscarroofing520@gmail.com)

---

# IMAGES

Actual Oscar Roofing project images are not yet available.

Use appropriate royalty-free placeholder images.

Do not represent stock photographs as actual Oscar Roofing projects.

Keep image paths organized so they can easily be replaced later.

---

# ANIMATIONS

Use subtle professional animations.

Support:

prefers-reduced-motion

Avoid excessive animation.

---

# SEO

Implement local SEO appropriate for a GTA roofing company.

Include:

* Page titles
* Meta descriptions
* H1/H2 hierarchy
* Canonical URLs
* Open Graph metadata
* Sitemap
* robots.txt
* Appropriate JSON-LD
* Descriptive image alt text

Only use verified business information in structured data.

---

# IMPORTANT

Do not make assumptions about missing client information.

If a decision does not materially affect implementation, make a reasonable technical decision.

If a missing fact materially affects the website's content, keep it as a placeholder.

Always prioritize correctness over filling empty space.
