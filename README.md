# AeroSpace ✈️

A premium, high-fidelity landing page and progressive multi-step booking engine designed for a luxury orbital logistics and civilian space transit corporation. Built to demonstrate high-performance frontend orchestration, responsive layouts, and seamless fluid transitions using the latest web technologies.

## 🚀 The Product

AeroSpace is a premium digital portal built around high-end operations, dense data configurations, and clear structural narratives.

- **The Fleet Matrix**: An interactive roster where users can explore and categorize suborbital catalysts, heavy transports, and deep space habitats with fluid grid adjustments.
- **Engineering Breakdown**: A highly technical, scroll-linked presentation explaining the structural physics, carbon-matrix shielding, and closed-loop ecosystems sustaining human life in transit.
- **The Booking Engine**: A progressive, multi-step checkout wizard that handles destinations, berth allocations, and passenger registry credentials while maintaining clean validation constraints.

---

## 🛠️ Tech Stack

- **Core Engine**: React 19 & Vite
- **Routing Framework**: React Router 7 (Data-driven router architecture)
- **Animation Layer**: Motion / `motion/react` (The modern, high-performance successor to traditional framer-motion setups)
- **Styling Architecture**: Tailwind CSS v4 (Leveraging native layer definitions and pure CSS semantic design variables)
- **Iconography**: Lucide React

---

## 🏗️ Architectural Decisions & Patterns

### 1. Unified Single-File Component Sequencing

To ensure maximum code maintainability and minimize cross-file jumping, every page component hosts its child layout sections directly within the same file. The subcomponents are organized in the exact chronological and sequential order in which they appear on the viewport, keeping code clean, self-contained, and readable.

### 2. Layout Animation Layer

Instead of using sudden layout shifts across paths, the app utilizes an explicit `AnimationLayout` shell wrapping the React Router 7 `Outlet`. By binding a unique `key={location.pathname}` hook to the page boundary, the animation engine executes smooth exit-before-entry transformations weightlessly.

### 3. Tailwind v4 Theme Variables

Themes are managed cleanly without global javascript state overhead. Toggling between Light (Stark Minimalist) and Dark (Deep Space Navy) modes flips a single attribute wrapper on the document element. Native Tailwind CSS variables transition colors smoothly over a `0.4s` window.

### 4. Fully Mobile-Adaptive Layouts

Every complex layout component is built with a mobile-first approach:

- The **Header Navigation** automatically transitions into a secure, opaque dark-tinted overlay curtain (`bg-black/60 backdrop-blur-xl`) on compact screens to maintain perfect text contrast over background text elements.
- The **Engineering Side-by-Side Split** utilizes native `sticky` scrolling parameters that gracefully collapse into linear vertical content cards on tablet and mobile viewports.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx             # Fully responsive desktop & mobile navigation drawer
│   └── Footer.jsx             # Minimalist operational footer
├── context/
│   └── ThemeContext.jsx       # Theme provider syncing root attributes and preference logic
├── layouts/
│   ├── RootLayout.jsx         # Global shell structure combining Header, Footer, and Outlet
│   └── AnimationLayout.jsx    # motion/react page transition wrapper
├── pages/
│   ├── Home.jsx               # Entrance page (Hero, Mission, Bento Metrics, Experiences)
│   ├── Fleet.jsx              # Categorical matrix grid with sliding active capsule
│   ├── Engineering.jsx        # Sticky side-by-side thermal protection sections
│   └── Reserve.jsx            # Multi-step progressive progressive reservation form wizard
├── styles/
│   └── index.css              # Tailwind v4 configuration + semantic layout variables
└── main.jsx                   # React Router 7 route path registrations
```

## Getting Started

To run this project locally:

1. Clone the repository: `git clone git@github.com:YuzStack/69-AeroSpace-Website.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
