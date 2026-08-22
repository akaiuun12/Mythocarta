You are an expert Frontend Developer and UI/UX Designer. Please initialize and build a web application named "Mythocarta" based on the following requirements:

# Project Overview
- **Name:** Mythocarta (Public GitHub Repo)
- **Concept:** An interactive, game-like web map exploring Ancient Greek mythology and geography.
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Mapbox GL JS (or maplibre-gl), Framer Motion, next-intl for i18n.

# Core Features
1. **Interactive Map:** Center on the Mediterranean Sea. Remove modern political borders. Focus on terrain. Labels should reflect ancient names with current language translations.
2. **City-States & Hover:** Add markers for major ancient cities (e.g., Athens, Sparta, Mycenae, Troy). On hover, display a glassmorphism-styled tooltip showing the city's ruler (e.g., Agamemnon for Mycenae).
3. **Hero Routes (Legend):** Create a floating legend panel with toggle switches. Toggling a hero (e.g., Odysseus, Nestor) animates their journey path on the map while dimming the rest of the map slightly.
4. **i18n (EN/KO):** Default language is English. Auto-detect user's location/browser settings to switch to Korean if applicable. Add a sleek EN/KO toggle button in the header.

# UI/UX & Design Guidelines
- **Style:** Apple-like Glassmorphism (backdrop-blur, translucent panels, subtle white borders, clean typography).
- **Vibe:** It should feel less like Google Maps and more like a premium iPad app or an elegant history simulation game. Smooth transitions and hover effects are mandatory.
- **Assets:** Setup placeholders for a modern favicon and site logo.

# Performance, SEO & Setup
- **Lightweight:** Ensure fast load times. Lazy load the map component.
- **SEO & AEO:** Implement proper Meta tags, OpenGraph, and Semantic HTML. Add JSON-LD structured data for answer engine optimization.
- **Analytics:** Setup a module for Google Analytics 4 (GA4).
- **Code Quality:** Use modern React patterns, highly readable, modular, and scalable code. 
- **README:** Generate a highly user-friendly README.md explaining the project, tech stack, and how to run it locally.

Please start by providing the initial project structure, package dependencies (package.json), and the implementation of the main Map layout with Glassmorphism UI.