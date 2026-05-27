# Cloud Xia Portfolio - Product Requirements Document

## 1. Product Overview

A single-page portfolio website for Cloud Xia, a Digital Media Specialist targeting E-commerce Social Media Content & AI-assisted Marketing Workflows roles in New Zealand.

The portfolio presents work as a digital content production studio—not a resume. Focus is on selected case studies, production workflows, tool proficiency, and practical marketing thinking. Social media is positioned as an e-commerce marketing touchpoint, not a standalone skill.

**Target Users:** E-commerce businesses, digital marketing agencies, NZ-based brands seeking digital media content creation.

---

## 2. Core Features

### 2.1 Page Structure

Single-page layout with the following sections:

1. **Hero / Banner** - Name, role, positioning statement
2. **Featured Work** - Case study blocks with flexible placeholders
3. **Production Process** - Workflow visualization from product to publish
4. **Tools & Process Showcase** - Media samples, screenshots, code snippets
5. **Marketing Thinking Notes** - Brief practical insights
6. **Closing Section** - Simple statement + optional footer

### 2.2 Section Details

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Hero | Strong first impression | Name, title, supporting tagline, visual anchor |
| Featured Work | Show selected work | Case study cards with: context, goals, tools, process, output, learnings |
| Production Process | Demonstrate workflow | 4-step flow: Product input → Content direction → Media production → Review |
| Tools Showcase | Prove tool proficiency | Video/image placeholders, CapCut screenshots, AI workflow screenshots, Python snippets |
| Marketing Notes | Show strategic thinking | Short practical notes (3-5) connecting work to marketing theory |
| Closing | Clean exit | One-line statement, minimal footer |

---

## 3. Design Language

### 3.1 Visual Style
- **Aesthetic:** Clean commercial UI, e-commerce studio feel
- **Background:** Light (white or off-white)
- **Text:** Dark (near-black or dark gray)
- **Accents:** Teal, blue, or green (restrained use)
- **Avoid:** Flashy agency look, programmer blog, CV-style, heavy marketing jargon, futuristic AI cyber aesthetic

### 3.2 Color Palette
- Primary: `#0F172A` (dark slate - text)
- Secondary: `#64748B` (slate - secondary text)
- Accent: `#0D9488` (teal-600) or `#0891B2` (cyan-600)
- Background: `#FAFAFA` or `#FFFFFF`
- Surface: `#F1F5F9` (slate-100)
- Border: `#E2E8F0` (slate-200)

### 3.3 Typography
- **Display Font:** DM Sans or Satoshi (clean, modern, slightly distinctive)
- **Body Font:** Inter (readable, professional) — or use system-ui with fallbacks
- **Code Font:** JetBrains Mono or Fira Code (for Python snippets)

### 3.4 Layout
- Desktop-first responsive design
- Max content width: 1200px
- Generous whitespace
- Grid-based case study cards
- No text overlap on mobile

---

## 4. Component Inventory

### 4.1 Hero Section
- Large name typography
- Role/title below name
- Supporting tagline (2 lines max)
- Optional subtle background element or gradient

### 4.2 Case Study Card
- Project title
- Context block
- Content goal
- Tool tags (AI Workflow, CapCut, Product Content, Social Media, Python, E-commerce)
- Production process summary
- Output placeholder (image/video)
- Marketing thinking or learning
- States: default, hover (subtle lift)

### 4.3 Process Flow
- 4 connected steps with icons
- Horizontal on desktop, vertical on mobile
- Step labels and brief descriptions

### 4.4 Tool/Media Showcase Module
- Large placeholder area for visuals
- Caption or description
- Optional code snippet display (syntax highlighted)

### 4.5 Marketing Note Card
- Short title
- Brief paragraph (3-5 sentences)
- Optional connection to work example

### 4.6 Footer
- Simple line: Cloud Xia · Digital Media Specialist · Auckland
- Optional small links (LinkedIn, email icon only)

---

## 5. Technical Approach

### 5.1 Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS 3
- **Animation:** CSS animations + Framer Motion for scroll-triggered reveals
- **Icons:** Lucide React or similar

### 5.2 Structure
- Single HTML entry point
- Component-based architecture
- Responsive breakpoints: sm(640), md(768), lg(1024), xl(1280)

### 5.3 Placeholder Strategy
- Use gradient backgrounds or muted colored blocks as image/video placeholders
- SVG icons for tool logos
- Code blocks with syntax highlighting (Prism or highlight.js)

---

## 6. Responsiveness

- Mobile: Single column, stacked sections
- Tablet: 2-column grids where appropriate
- Desktop: Full layout with generous spacing

---

## 7. Content Guidelines

- Language: English only
- Tone: Professional, clean, credible, business-oriented, lightly technical
- No resume-style work history
- No standalone skills section
- No impact snapshot
- No large contact CTA
- No theoretical essays
