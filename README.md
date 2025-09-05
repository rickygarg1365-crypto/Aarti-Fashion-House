# Aarti Fashion House

A responsive marketing/catalog website for a premium retail showroom in Punjab that sells fabrics and ready-to-wear suits. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **8 Main Pages**: Home, About, Fabric Collection, Ready-to-Wear Suits, Brands, Gallery, Testimonials, Contact
- **Product Catalog**: Detailed product cards with filtering capabilities
- **Client-side Filtering**: Filter fabrics by category, season, and price range
- **WhatsApp Integration**: Direct contact via WhatsApp for inquiries and appointments
- **Gallery with Lightbox**: Masonry grid layout with image lightbox functionality
- **SEO Optimized**: Meta tags, structured data, and accessibility features
- **Appointment Booking**: Contact forms for appointments and general inquiries
- **Google Maps Integration**: Embedded map for showroom location

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Permanent Marker, Poppins)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aarti-fashion-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── brands/            # Brands showcase
│   ├── contact/           # Contact & appointment booking
│   ├── fabrics/           # Fabric collection with filters
│   ├── gallery/           # Image gallery with lightbox
│   ├── suits/             # Ready-to-wear suits
│   ├── testimonials/      # Customer testimonials
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── ProductCard.tsx    # Product display card
│   ├── FilterBar.tsx      # Product filtering
│   ├── Breadcrumbs.tsx    # Navigation breadcrumbs
│   └── CTA.tsx            # Call-to-action sections
├── data/                  # JSON data files
│   ├── fabrics.json       # Fabric products
│   ├── suits.json         # Suit products
│   ├── brands.json        # Brand information
│   ├── testimonials.json  # Customer reviews
│   └── contact.json       # Contact information
├── types/                 # TypeScript type definitions
│   └── index.ts          # All interface definitions
└── lib/                   # Utility functions
```

## 🎨 Design System

### Colors
- **Primary Red**: #B32E1D
- **Red Hover**: #9A2519
- **Black**: #1E1E1E
- **Gray Scale**: Standard Tailwind gray palette

### Typography
- **Display Font**: Permanent Marker (headings, brand name)
- **Body Font**: Poppins (content, navigation)

### Components
All components are built with Tailwind CSS classes and follow a consistent design pattern:
- Mobile-first responsive design
- Consistent spacing and typography
- Accessible color contrasts
- Hover and focus states

## 📊 Sample Data

The website includes sample data for:
- **6 Fabric Products**: Various categories, seasons, and price ranges
- **6 Suit Products**: Different styles and occasions
- **6 Fashion Brands**: Leading Indian fashion brands
- **5 Customer Testimonials**: Real-style customer reviews
- **Contact Information**: Showroom details and hours

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? Yes
   - Which scope? Select your team/personal account
   - Link to existing project? No
   - What's your project's name? aarti-fashion-house
   - In which directory is your code located? ./

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Alternative Deployment Options

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects for dynamic routes

#### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d out"`
3. Run: `npm run build && npm run deploy`

## 🔍 SEO & Analytics

### SEO Features Included
- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Business information for search engines
- **Sitemap**: Automatic sitemap generation
- **Canonical URLs**: Prevent duplicate content issues
- **Accessibility**: WCAG compliance with proper ARIA labels

### Google Analytics Setup
1. **Get GA4 Measurement ID** from Google Analytics
2. **Replace placeholder** in `src/app/layout.tsx`:
   ```typescript
   // Replace 'GA_MEASUREMENT_ID' with your actual ID
   gtag('config', 'YOUR_GA_MEASUREMENT_ID');
   ```

### Google Search Console
1. **Verify ownership** using the meta tag in layout.tsx
2. **Submit sitemap**: `https://yoursite.com/sitemap.xml`
3. **Monitor performance** and fix any issues

## 📱 Features Deep Dive

### Product Filtering
- **Client-side filtering** for fast user experience
- **Multiple filter types**: Category, season, price range, size, material
- **Filter persistence** during browsing session
- **Clear all filters** functionality

### WhatsApp Integration
- **Direct messaging** with pre-filled product information
- **Appointment booking** via WhatsApp
- **Business hours display** for contact expectations

### Image Optimization
- **Next.js Image component** for automatic optimization
- **Responsive images** with multiple sizes
- **Lazy loading** for better performance
- **Placeholder images** for missing product images

### Accessibility
- **Keyboard navigation** support
- **Screen reader** friendly
- **Color contrast** WCAG AA compliant
- **Focus indicators** for interactive elements

## 🔧 Customization

### Adding New Products
1. **Edit JSON files** in `src/data/`
2. **Follow existing data structure**
3. **Add product images** to `public/images/`
4. **Update type definitions** if needed

### Modifying Contact Information
1. **Update** `src/data/contact.json`
2. **Replace Google Maps** embed URL
3. **Update social media** links in Footer component

### Changing Brand Colors
1. **Update CSS variables** in `src/app/globals.css`
2. **Modify Tailwind classes** in components
3. **Update theme colors** in layout

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run lint`
   - Verify all imports are correct
   - Ensure all required dependencies are installed

2. **Image Loading Issues**
   - Verify image paths in JSON data
   - Check if images exist in `public/images/`
   - Fallback images are implemented for missing images

3. **WhatsApp Links Not Working**
   - Verify phone number format in contact data
   - Check URL encoding in message parameters
   - Test on mobile devices for better WhatsApp integration

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licenses for any images or brand assets used in production.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support regarding this project:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ in Punjab for Aarti Fashion House**