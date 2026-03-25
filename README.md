# KatyaDesign — Portfolio

Personal portfolio built as a code editor / file explorer interface. Browse sections like files, read content in a Nano-style terminal, and navigate through tabs and sidebars — all wrapped in a glassmorphism dark theme.

**Live site:** [katyadesign.com.ar](https://katyadesign.com.ar)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules + Tailwind CSS v4 |
| Icons | FontAwesome |
| Fonts | Outfit, Fira Code, Comic Neue (via `next/font`) |
| Deployment | Vercel |

## Project Structure

```
app/
├── assets/          # Images, SCSS variables
├── components/      # Standalone components (TextType)
├── config/          # Sidebar, tab, and project configs
├── context/         # React Context (filter system)
├── types/           # TypeScript type definitions
├── ui/              # UI components
│   ├── Bars/        # Navbar, Sidebar, Socialbar, Tab
│   ├── Button/
│   ├── Footer/
│   ├── HeaderTitle/
│   ├── LayoutShell/ # Client-side layout wrapper
│   ├── Mailto/      # Contact email interface
│   ├── Nano/        # Terminal-style text editor
│   ├── Projects/    # Project card component
│   ├── SectionLayout/ # Shared section layout
│   └── Skills/
├── about/           # About section (bio, studies, certificates, career)
├── contact/         # Contact page
├── works/           # Projects section with filtering
└── layout.tsx       # Root layout (Server Component + metadata)
```

## Key Features

- **File explorer navigation** — Sidebar with collapsible folders, tab bar with close buttons
- **Nano editor** — Content rendered as a code editor with line numbers and typing animation
- **Filter system** — Works section filterable by category via checkboxes
- **Responsive** — Desktop shows the full IDE layout; mobile adapts to a simplified view
- **SSR + Static generation** — All pages prerendered at build time
- **SEO ready** — Full metadata, Open Graph, and Twitter card tags

## Getting Started

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000) to see the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## License

This project is personal and not open for redistribution. Feel free to use it as reference or inspiration.
