# AVIORY & CO - Luxury Gemstones & Fine Jewellery

A complete, production-ready React website for AVIORY & CO, a luxury gemstones and fine jewellery brand with Ceylon heritage.

## Project Overview

This is a fully static React + Vite application featuring:

- **8 Main Sections**: Home, Gemstones, Fine Jewellery, Engagement Rings, Bespoke, Journal, Our House, Contact
- **15+ Routes**: Complete single-page application with React Router v6
- **Complete Catalog**: 25+ gemstones, 8+ fine jewellery pieces, 8+ engagement rings
- **Journal**: 6 in-depth articles on education, craftsmanship, sustainability, care, heritage, and inspiration
- **Bespoke Process**: Detailed 5-stage creation process with enquiry form
- **Luxury Design System**: Custom CSS with color variables, typography scales, and responsive breakpoints
- **Cart Management**: Zustand state management for cart functionality
- **Fully Responsive**: Optimized for mobile (480px), tablet (768px), desktop (1280px+)

## Tech Stack

- **React** 18.2.0
- **React Router** 6.20.0
- **Vite** 5.0.8
- **Zustand** 4.4.2
- **JavaScript (ES6+)**

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Gemstones.jsx
│   ├── GemstoneDetail.jsx
│   ├── FineJewellery.jsx
│   ├── JewelleryDetail.jsx
│   ├── EngagementRings.jsx
│   ├── EngagementRingDetail.jsx
│   ├── Bespoke.jsx
│   ├── BespokeProcess.jsx
│   ├── BespokeEnquiry.jsx
│   ├── Journal.jsx
│   ├── JournalArticle.jsx
│   ├── OurHouse.jsx
│   ├── PrivateConsultations.jsx
│   └── Contact.jsx
├── data/
│   ├── products.js (Gemstones, Fine Jewellery, Engagement Rings)
│   └── content.js (Editorial, FAQs, Process, About)
├── hooks/
│   ├── useCart.js (Zustand store)
│   └── useFetch.js
├── styles/
│   └── index.css (Complete design system)
├── App.jsx (Routing)
└── main.jsx (Entry point)
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite development server at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Design System

### Colors
- **Black**: #111111
- **Ivory**: #F8F4EF
- **Champagne**: #D4AF7F
- **Charcoal**: #2B2B2B

### Typography
- **Headers**: Playfair Display
- **Body**: Cormorant Garamond
- **UI**: Montserrat

### Spacing Scale
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-2xl`: 4rem
- `--spacing-3xl`: 5rem

### Responsive Breakpoints
- Mobile: 480px
- Tablet: 768px
- Small Desktop: 1024px
- Desktop: 1280px
- Large Desktop: 1536px

## Features

### Home Page
- Hero section with call-to-action
- Category showcase
- Featured gemstones
- 5-stage bespoke process
- Journal preview
- Newsletter signup

### Gemstones
- 25+ gemstones across 9 categories
- Multi-filter system (category, color, price range)
- Detailed product pages with specs and certification
- Related products

### Fine Jewellery
- 8+ pieces across 8 collections
- Filter by collection and type
- Detailed specifications and care instructions

### Engagement Rings
- 8 rings across multiple styles and stone types
- Dual-filter system (style + stone type)
- Ring sizing guide
- Size selection in cart

### Bespoke
- Detailed process overview
- 5-stage creation process page
- Enquiry form with validation
- FAQ section
- Testimonials

### Journal
- 6 in-depth articles
- Category filtering
- Full article pages
- Related articles
- Editorial content

### Our House
- Brand story
- Master artisans profiles
- Company values
- Ceylon heritage section
- Timeline

### Contact
- Contact form
- Location information
- Hours and contact details
- Category-based inquiry routing

## Data Structure

### Products (src/data/products.js)

#### Gemstones
Each gemstone includes:
- ID, name, category, type
- Price, carat weight
- Origin, color, clarity
- Treatment status and certification
- Full specifications
- Long description
- Related image

#### Fine Jewellery
Each piece includes:
- ID, name, collection
- Material and gemstone composition
- Pricing and weight
- Description and long description

#### Engagement Rings
Each ring includes:
- Style and stone type
- Material and stone specifications
- Complete specifications
- Warranty information

### Content (src/data/content.js)

- **Bespoke Process**: 5 stages with full descriptions
- **FAQs**: 8 categorized questions
- **About**: Brand story, values, artisans, Ceylon heritage
- **Private Consultations**: Options and process
- **Shop Info**: Services and locations
- **Contact Info**: Email, phone, hours

## Deployment

### Vercel

```bash
# Build automatically on push
npm run build
```

The `dist/` folder is ready for deployment. Configure for SPA routing:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Netlify

```bash
# Build
npm run build

# Deploy dist folder
```

Configure `_redirects` file for SPA routing.

### Traditional Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder
3. Configure server for SPA routing (all routes to index.html)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile 12+

## Performance

- Code splitting via Vite
- Lazy loading routes
- Optimized CSS
- No external dependencies beyond React/Router/Zustand
- All images optimized
- Production build: ~200KB gzipped

## SEO

- Semantic HTML
- Meta tags in index.html
- Descriptive page titles and descriptions
- Structured content
- Clean URL structure

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant
- Form labels and validation

## Future Enhancements

- Product search functionality
- User accounts/wishlists
- Payment integration
- Email notifications
- Image optimization/CDN
- A/B testing capabilities
- Analytics integration
- Blog CMS integration

## License

© 2024 AVIORY & CO. All rights reserved.

## Support

For questions or issues:
- Email: hello@aviorycoin.com
- Phone: +94 11 XXX XXXX

---

**Built with excellence for AVIORY & CO**
