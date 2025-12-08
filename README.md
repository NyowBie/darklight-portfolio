# DarkLight Portfolio

A premium, dark-themed personal portfolio website built with React, Vite, Tailwind CSS, and Three.js.

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **3D Background**: Three.js (@react-three/fiber)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository (if applicable) or navigate to the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at the URL shown (usually `http://localhost:5173`).

### Building for Production

To create a static production build:

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## customization

### Personal Info
- Edit `src/components/Hero.jsx` to change your name, title, and intro text.
- Edit `src/components/About.jsx` to update your bio and timeline.
- Edit `src/components/Contact.jsx` to update your email and social links.

### Skills & Projects
- **Skills**: Update the `categories` array in `src/components/Skills.jsx`.
- **Projects**: Update the `projects` array in `src/components/Projects.jsx`.

### Galaxy Background
- The background logic is in `src/components/GalaxyBackground.jsx`.
- adjustable parameters: `count` (number of stars), `radius`, `depth`, `speed`.

## License

This project is open source and available for personal use.
