# Profile Landing Page

A modern, interactive portfolio website built with React and Three.js featuring 3D animations, physics-based interactions, and smooth scroll animations.

## Features

- **Interactive 3D Scene** - Physics-enabled Rubik's cubes that respond to cursor movement
- **Tech Stack Showcase** - 3D cubes displaying technology icons with physics simulation
- **Smooth Scroll Animations** - GSAP-powered SVG path drawing and element reveals
- **Lottie Animations** - Animated SVG illustrations throughout the site
- **Responsive Design** - Optimized for all screen sizes
- **Navigation Menu** - Dropdown menu with smooth scroll to sections
- **Contact Section** - Social media links with copy-to-clipboard email functionality

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite | Build Tool & Dev Server |
| Three.js | 3D Graphics |
| @react-three/fiber | React renderer for Three.js |
| @react-three/cannon | Physics engine |
| @react-three/drei | Three.js helpers |
| GSAP | Scroll animations |
| Lottie | SVG animations |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sohsaws/complex-landing-page-template.git

# Navigate to project directory
cd profile-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAIL=your.email@example.com
VITE_TELEGRAM_URL=https://t.me/yourusername
VITE_VK_URL=https://vk.com/yourusername
VITE_INSTAGRAM_URL=https://instagram.com/yourusername
```

> **Note:** All environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with menu dropdown
│   ├── AnimatedLogo.jsx    # Animated site logo
│   ├── InteractiveScene.jsx # Main 3D Rubik's cube scene
│   ├── InteractiveWindow.jsx # Physics boundaries for cubes
│   ├── Cube.jsx            # Individual 3D cube component
│   ├── MiddleContent.jsx   # About section with SVG animations
│   ├── TechStackScene.jsx  # Tech stack 3D showcase
│   ├── TechBoxes.jsx       # Physics-enabled tech icon cubes
│   ├── CursorInteraction.jsx # Mouse interaction for physics
│   ├── GitHubSection.jsx   # Portfolio/GitHub section
│   └── Socials.jsx         # Contact footer with social links
├── App.jsx                 # Main application component
├── App.css                 # Global styles
└── index.css               # Base styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License

## Author

V.ktr - [GitHub](https://github.com/sohsaws)
