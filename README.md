# Aarti Fashion House

A responsive, dynamic marketing/catalog website for a premium retail showroom in Punjab that sells fabrics and ready-to-wear suits. Built with Next.js, TypeScript, and Tailwind CSS with both static and dynamic rendering capabilities.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **8 Main Pages**: Home, About, Fabric Collection, Ready-to-Wear Suits, Brands, Gallery, Testimonials, Contact
- **WhatsApp Integration**: Direct contact via WhatsApp for inquiries and appointments
- **Gallery with Lightbox**: Masonry grid layout with image lightbox functionality
- **Appointment Booking**: Contact forms for appointments and general inquiries
- **Google Maps Integration**: Embedded map for showroom location

### Dynamic Features ✨
- **API-Driven Architecture**: RESTful APIs for all data operations
- **Real-time Filtering**: Server-side filtering with API calls
- **Dynamic Data Fetching**: Client-side and server-side data loading
- **Server-Side Rendering**: SEO-optimized pages with SSR
- **Dynamic Metadata**: SEO metadata generated dynamically
- **Performance Optimized**: Loading states and optimistic updates

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond, Inter)
- **API**: RESTful API routes with Next.js
- **Rendering**: Hybrid SSR/CSR for optimal performance
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
├── app/                    # Next.js App Router pages & API
│   ├── api/               # API routes (NEW - Dynamic backend)
│   │   ├── brands/        # Brands API endpoint
│   │   ├── contact/       # Contact form API
│   │   ├── fabrics/       # Fabrics API with filtering
│   │   ├── suits/         # Suits API with filtering
│   │   ├── testimonials/  # Testimonials API
│   │   └── metadata/      # Dynamic metadata API
│   ├── about/             # About page
│   ├── brands/            # Brands showcase (CSR)
│   ├── brands-ssr/        # Brands showcase (SSR for SEO)
│   ├── contact/           # Contact & appointment booking
│   ├── fabrics/           # Fabric collection with dynamic filters
│   ├── gallery/           # Image gallery with lightbox
│   ├── suits/             # Ready-to-wear suits
│   ├── testimonials/      # Customer testimonials
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page (now dynamic)
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── ProductCard.tsx    # Product display card
│   ├── FilterBar.tsx      # Product filtering
│   ├── Breadcrumbs.tsx    # Navigation breadcrumbs
│   └── CTA.tsx            # Call-to-action sections
├── data/                  # JSON data files (still used for API)
│   ├── fabrics.json       # Fabric products
│   ├── suits.json         # Suit products
│   ├── brands.json        # Brand information
│   ├── testimonials.json  # Customer reviews
│   └── contact.json       # Contact information
├── lib/                   # Utility functions (NEW)
│   └── api.ts            # API client functions
└── types/                 # TypeScript type definitions
    └── index.ts          # All interface definitions
```

## 🎨 Design System

### Colors (Premium Palette)
- **Gold Primary**: Custom gold (#D4AF37)
- **Charcoal**: Deep charcoal for text
- **Pearl**: Light cream background
- **Cream**: Warm cream sections
- **Sage**: Soft sage green accents
- **Slate**: Modern gray tones

### Typography
- **Display Font**: Playfair Display (elegant headings)
- **Serif Font**: Cormorant Garamond (body text, quotes)
- **Sans Font**: Inter (modern UI elements, navigation)

### Components
All components are built with Tailwind CSS classes and follow a consistent design pattern:
- Mobile-first responsive design
- Consistent spacing and typography
- Accessible color contrasts
- Hover and focus states

## 🔥 Dynamic Features Deep Dive

### API Architecture
The website now features a complete RESTful API built with Next.js API routes:

#### Available Endpoints
```
GET  /api/fabrics       - Get fabrics with optional filtering
POST /api/fabrics       - Submit fabric inquiry
GET  /api/suits         - Get suits with optional filtering
POST /api/suits         - Submit suit inquiry
GET  /api/brands        - Get brands with optional filtering
GET  /api/testimonials  - Get testimonials with optional filtering
POST /api/testimonials  - Submit new testimonial
GET  /api/contact       - Get contact information
POST /api/contact       - Submit contact form
GET  /api/metadata/[page] - Get dynamic metadata for SEO
```

#### Query Parameters (Filtering)
```
# Fabrics & Suits
?category=cotton,silk&season=summer&priceRange=premium&limit=10&search=luxury

# Brands
?featured=true&origin=Italy,India&sortBy=rating&limit=6

# Testimonials
?category=fabrics&rating=5&featured=true&limit=3
```

### Rendering Strategy
- **Homepage**: Dynamic CSR with API calls for real-time data
- **Product Pages**: Dynamic CSR with server-side filtering
- **Brands SSR**: Server-side rendering for optimal SEO
- **API Routes**: Server-side processing for all data operations

### Performance Features
- **Loading States**: Skeleton loading for better UX
- **Error Handling**: Graceful fallbacks for API failures
- **Optimistic Updates**: Immediate UI feedback
- **Caching Strategy**: Built-in Next.js caching for API routes

## 📊 Data & Content

### Sample Data Included
- **6 Fabric Products**: Various categories, seasons, and price ranges
- **6 Suit Products**: Different styles and occasions
- **6 Fashion Brands**: Leading Indian and international brands
- **5 Customer Testimonials**: Real-style customer reviews
- **Contact Information**: Showroom details and hours

### Data Management
- **JSON Source Files**: Easy content management via JSON
- **Type Safety**: Full TypeScript definitions for all data
- **API Validation**: Server-side validation for form submissions
- **Dynamic Metadata**: SEO metadata generated from content

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
2. Deploy the project folder to Netlify
3. Configure environment variables if needed
4. **Note**: API routes require serverless functions support

#### Deploy to Vercel (Alternative)
1. Connect GitHub repository to Vercel
2. Auto-deploy on push to main branch
3. Environment variables configured in dashboard

## 🧪 API Testing

### Test API Endpoints
Once the development server is running, you can test the API endpoints:

```bash
# Get all fabrics
curl http://localhost:3000/api/fabrics

# Get filtered fabrics
curl "http://localhost:3000/api/fabrics?category=silk&season=summer&limit=5"

# Get featured brands
curl "http://localhost:3000/api/brands?featured=true"

# Get testimonials with high ratings
curl "http://localhost:3000/api/testimonials?rating=5&limit=3"

# Submit contact form (POST)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","phone":"+91-9876543210","message":"Test inquiry"}'
```

### API Response Format
All API endpoints return a consistent response format:
```json
{
  "success": true,
  "data": [...],
  "total": 10,
  "filters": {
    "categories": ["cotton", "silk"],
    "seasons": ["summer", "winter"]
  },
  "statistics": {
    "averageRating": 4.5,
    "totalReviews": 25
  }
}
```

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