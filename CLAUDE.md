# gtdcc-site

Georgia Tech Design Consulting Club website.

## Project Structure

- **Tech stack**: React 19, React Router DOM 7, Vite 6, TypeScript 5, Tailwind CSS 4
- **Entry point**: `src/main.tsx` — sets up BrowserRouter with Nav and Routes
- **Pages**: `src/pages/` — Home, Team, Apply
- **Components**: `src/components/` — Hero, About, Values, Methodology, Partner, Opportunities, Contact, Footer
- **Navbar**: `src/Nav.tsx`
- **Styles**: `src/styles/` — index.css, tailwind.css, theme.css

## Routes

- `/` — Home (landing page with all sections)
- `/team` — Team member showcase
- `/apply` — Application page

## Reference Repository

`../Designconsultingclubwebsite/` is a **read-only reference** exported from Figma. Never modify it. Use it only to understand the intended design and component structure.

## Styling Conventions

- Colors: #141414 (dark), #ebebeb (light), #dccd2e (yellow accent), #2e44de (blue accent), #dc442e (red accent)
- Inline styles for colors/fonts, Tailwind for layout/spacing/responsive
- Font weights: 400 normal, 500 medium, 600-700 headings
- Hover: opacity transitions, scale on buttons

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build
```
