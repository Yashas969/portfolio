# Yashas R — Portfolio Website

A clean, responsive personal portfolio platform presenting software development projects, Green AI research, academic achievements, and technical leadership.

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting / Storage**: Google Drive Cloud Integration, Vercel

## ✨ Key Sections

- **Hero & Identity**: Professional introduction and career availability details.
- **About & Education**: St. Joseph's University BCA background (8.7 CGPA), spoken languages, and core values.
- **Technical Stack**: Categorized skills across programming languages, web frameworks, AI tools, databases, and analytics.
- **Featured Projects**: Production web applications including **FinTrack** and **Student Notes Database**.
- **Sustainable Green AI Research**: Paper review on energy efficiency and carbon reduction in AI lifecycles.
- **Technical Leadership**: Cybernetics Club Presidency and Class Representative responsibilities.
- **Certifications**: Industry credentials in LLM Engineering and Data Analysis.
- **Resume Document**: Single-source Google Drive view integration.
- **Direct Contact**: Recruiter-focused contact details and social profiles.

## 📁 Folder Structure

```text
portfolio/
├── public/              # Static public assets & favicon
├── src/
│   ├── animations/      # Framer Motion transition variants
│   ├── components/      # UI components (Buttons, Cards, Badges, Modals, Navbar, Footer)
│   ├── config/          # Centralized configuration (portfolio.config.ts, files.config.ts)
│   ├── data/            # Data layer (projects, research, skills, leadership, education)
│   ├── hooks/           # Custom React hooks (useScrollSpy, useSearch, useSpotlight)
│   ├── pages/           # Page routes (HomePage, NotFoundPage)
│   ├── sections/        # Main landing page sections
│   ├── styles/          # Design system & CSS global tokens
│   ├── types/           # TypeScript interfaces & definitions
│   └── utils/           # Helper utilities (Google Drive link normalizer, search engine)
├── index.html           # Document root & metadata
├── package.json         # Package dependencies & build scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite bundler configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Yashas969/portfolio.git

# Navigate into project directory
cd portfolio

# Install dependencies
npm install
```

### Local Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Compile TypeScript & bundle production assets
npm run build

# Preview production build locally
npm run preview
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).
