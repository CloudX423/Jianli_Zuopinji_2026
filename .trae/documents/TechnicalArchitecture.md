# Cloud Xia Portfolio - Technical Architecture Document

## 1. Architecture Overview

Single-page React application with no backend. Static site with component-based architecture.

```
┌─────────────────────────────────────┐
│           Frontend (React)           │
│  ┌─────────────────────────────────┐ │
│  │ Components: Hero, Work, Process │ │
│  │ Tools, Notes, Footer            │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────────────────────────┐ │
│  │ Styles: Tailwind CSS            │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 2. Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Syntax Highlighting | Prism React Renderer |
| Language | JavaScript (ES6+) |

---

## 3. Component Structure

```
src/
├── App.jsx                 # Main app container
├── index.css               # Tailwind imports + custom styles
├── components/
│   ├── Hero.jsx            # Hero/banner section
│   ├── FeaturedWork.jsx    # Case study cards
│   ├── CaseStudyCard.jsx   # Individual case study
│   ├── ProcessFlow.jsx     # 4-step production process
│   ├── ToolsShowcase.jsx   # Media & tool showcase
│   ├── MediaPlaceholder.jsx# Reusable placeholder for images/videos
│   ├── CodeSnippet.jsx     # Python code display
│   ├── MarketingNotes.jsx  # Strategic thinking section
│   ├── MarketingNoteCard.jsx
│   ├── Closing.jsx         # Closing statement + footer
│   └── Tag.jsx             # Reusable tag component
```

---

## 4. Route Definitions

Single page application. No routing required.

---

## 5. Data Model

Content is static, defined in component files or a single `content.js` data file.

```javascript
// content.js
{
  hero: { name, title, tagline },
  caseStudies: [{ id, title, context, goal, tools, process, output, learning }],
  processSteps: [{ step, label, description }],
  toolShowcase: [{ id, type, placeholder, caption }],
  marketingNotes: [{ id, title, content }]
}
```

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column |
| Tablet | 640px - 1023px | 2-column grids |
| Desktop | >= 1024px | Full layout, max-width 1200px |

---

## 7. Key Implementation Details

### 7.1 Fonts
- Primary: DM Sans (Google Fonts)
- Mono: JetBrains Mono (for code snippets)

### 7.2 Color Variables
```css
--color-primary: #0F172A;
--color-secondary: #64748B;
--color-accent: #0D9488;
--color-background: #FAFAFA;
--color-surface: #F1F5F9;
--color-border: #E2E8F0;
```

### 7.3 Animation Strategy
- Page load: Staggered fade-in for hero elements
- Scroll: Fade-up reveals for sections
- Hover: Subtle scale/shadow on cards
- Process flow: Sequential reveal on scroll

---

## 8. File Structure

```
d:\Developer\ResumePortfolio\
├── .trae/
│   └── documents/
│       ├── PRD.md
│       └── TechnicalArchitecture.md
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   └── [component files]
│   └── data/
│       └── content.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```
