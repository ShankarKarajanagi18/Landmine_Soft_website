# 🚀 Landmine Soft — Official Company Website

A modern, professional, and fully responsive website for **Landmine Soft**, a full-service software engineering studio. Built as part of the Frontend Developer Internship Assignment (LMS-S3-01598).

---

## 🌐 Live Preview

Open `index.html` directly in a browser — no server required.

---

## 📋 Project Overview

This website is designed to reflect a real-world IT/Software company with a **startup + enterprise-level quality** UI/UX. The design aesthetic is **dark tech-luxury** — sophisticated, modern, and memorable.

### Design Decisions
- **Color Palette**: Deep navy void (#020810) as base, electric teal (#00E5C3) as primary accent, orange (#FF5C35) as secondary
- **Typography**: Syne (geometric display, Google Fonts) for headings + DM Sans for body text
- **Animations**: CSS keyframe animations, floating orbs, staggered reveals, marquee ticker
- **Unique Features**: Animated hero orb with floating tags, grid background with radial mask, glowing CTA sections

---

## 📄 Pages Implemented

| Page | Route (Internal) | Status |
|------|-----------------|--------|
| Home / Index | `home` | ✅ Complete |
| About Us | `about` | ✅ Complete |
| Services | `services` | ✅ Complete |
| Contact Us | `contact` | ✅ Complete (with validation) |
| Login | `login` | ✅ Complete (with validation + password toggle) |
| Register | `register` | ✅ Complete (with strength meter + validation) |
| Careers | `careers` | ✅ Complete (with job apply modal) |
| FAQ | `faq` | ✅ Complete (accordion) |
| Privacy Policy | `privacy` | ✅ Bonus |
| Terms of Service | `terms` | ✅ Bonus |

---

## 🏗️ Project Structure

```
landminesoft/
├── index.html              # HTML entry point
├── README.md               # This file
└── src/
    ├── App.jsx             # Main React application (all components + pages)
    └── styles/
        └── main.css        # Complete design system & styles
```

---

## 🛠️ Tech Stack

- **React 18** (via CDN — no build step needed)
- **Babel Standalone** (for JSX transpilation in-browser)
- **Pure CSS** (custom design system, no Tailwind/Bootstrap)
- **Google Fonts** — Syne + DM Sans
- **Zero npm dependencies** — runs directly in any browser

---

## 🚀 Steps to Run Locally

### Option 1: Direct Open (Easiest)
```bash
# Just double-click index.html OR:
open index.html
```

### Option 2: With a Local Server (Recommended)
```bash
# Using Python
cd landminesoft
python -m http.server 3000

# Then visit: http://localhost:3000
```

```bash
# Using Node.js (npx)
cd landminesoft
npx serve .

# Then visit the URL shown
```

```bash
# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## ✨ Key Features

### UI/UX
- ✅ Fully responsive — Mobile, Tablet, Desktop
- ✅ Sticky navbar with scroll detection + glassmorphism
- ✅ Mobile hamburger menu with full-screen overlay
- ✅ Animated hero section with floating orbital rings
- ✅ Marquee ticker for service highlights
- ✅ Smooth card hover effects with teal line reveal
- ✅ CSS grid-based layouts throughout

### Pages
- ✅ **Home**: Hero, marquee, services overview, why choose us, projects, tech stack, testimonials, CTA
- ✅ **About**: Company story, mission/vision, core values, team section
- ✅ **Services**: Detailed service cards with features + pricing, process steps
- ✅ **Contact**: Full form with real-time validation, company info panel, success state
- ✅ **Login**: Email/password with validation, show/hide password, social login buttons
- ✅ **Register**: Full validation, password strength indicator, terms checkbox
- ✅ **Careers**: Culture section, job listings, in-page apply modal, success state
- ✅ **FAQ**: Accordion with smooth open/close animation
- ✅ **Privacy Policy & Terms**: Structured legal pages

### Code Quality
- ✅ Single-responsibility components
- ✅ Shared data constants at top of file
- ✅ CSS custom properties (variables) for consistent design tokens
- ✅ Reusable CSS classes (`.btn`, `.card`, `.badge`, etc.)
- ✅ Accessible: proper labels, button elements for interactions, aria attributes

---

## 🎨 Design System

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-void` | `#020810` | Page background |
| `--accent-teal` | `#00E5C3` | Primary accent |
| `--accent-orange` | `#FF5C35` | Secondary accent |
| `--accent-gold` | `#F5C842` | Tertiary accent |
| `--text-primary` | `#EDF2F8` | Headings & body |
| `--text-secondary` | `#8BA4BE` | Descriptive text |

### Components
- `.btn` / `.btn-primary` / `.btn-secondary` / `.btn-orange`
- `.card` (hover effect with teal top line)
- `.badge` (pulsing dot + label)
- `.section-label` / `.section-title` / `.section-sub`
- `.form-group` with error states

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `> 1024px` | Full desktop layout |
| `≤ 1024px` | Adjusted grid, stacked sections |
| `≤ 768px` | Mobile nav, single-column |
| `≤ 480px` | Compact spacing, stacked CTAs |

---

## 👨‍💻 Author

Built with passion as part of the **Landmine Soft Frontend Internship** — LMS-S3-01598

---

*"Build something you would confidently present to a real client."*
