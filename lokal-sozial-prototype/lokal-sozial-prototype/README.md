# Lokal & Sozial - High-Fidelity Prototype

A comprehensive prototype website for Lokal & Sozial, an intergenerational housing platform that connects older individuals with spare rooms to younger people seeking affordable housing.

## 🎯 Project Overview

This prototype demonstrates the complete user experience for both room seekers and room providers, featuring:

- **Modern, trustworthy design** with warm orange and green color scheme
- **Comprehensive user journey** from landing page to profile creation and matching
- **Interactive functionality** including matching simulation and messaging system
- **Responsive design** optimized for desktop and mobile devices
- **Accessibility features** following modern web standards

## 🚀 Features Implemented

### Core Pages
- **Homepage (Landing Page)** - Hero section, value propositions, how it works, testimonials
- **How It Works (Room Seekers)** - Step-by-step guide for young people
- **How It Works (Room Providers)** - Step-by-step guide for older adults
- **About Us** - Mission, story, team, and impact metrics
- **Contact Us** - Contact form, office information, FAQ, and support options

### Key Functionalities
- **User Profile Creation** - Multi-step form with progress tracking
- **Matching System** - Simulated matches with compatibility scores
- **Messaging Interface** - Chat system with conversation management
- **Interactive Elements** - Tabs, modals, forms, and CTAs
- **Navigation** - Seamless routing between all pages

### Technical Features
- **React 18** with modern hooks and components
- **React Router** for client-side navigation
- **Tailwind CSS** for responsive styling
- **Shadcn/UI** components for professional interface
- **Lucide Icons** for consistent iconography
- **Production Build** optimized for deployment

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
lokal-sozial-prototype/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with navigation
│   │   └── ui/                 # Reusable UI components
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── HowItWorksSeekers.jsx
│   │   ├── HowItWorksProviders.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Profile.jsx         # Multi-step profile creation
│   │   ├── Matches.jsx         # Matching system simulation
│   │   └── Messages.jsx        # Chat interface
│   ├── App.jsx                 # Main app with routing
│   └── main.jsx               # Entry point
├── dist/                      # Production build
└── README.md                  # This file
```

## 🎨 Design Highlights

### Color Scheme
- **Primary Orange**: #EA580C (trust, warmth)
- **Primary Green**: #16A34A (growth, harmony)
- **Supporting Colors**: Blue, purple accents for variety
- **Neutral Grays**: Professional text and backgrounds

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, accessible font sizes
- **Interactive Elements**: Clear visual feedback

### User Experience
- **Intuitive Navigation**: Clear menu structure
- **Progressive Disclosure**: Multi-step forms with progress indicators
- **Visual Feedback**: Hover states, loading states, success messages
- **Accessibility**: Proper contrast ratios, keyboard navigation

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm)

### Installation
```bash
cd lokal-sozial-prototype
pnpm install
```

### Development
```bash
pnpm run dev
```
Visit http://localhost:5173

### Production Build
```bash
pnpm run build
```
Serve the `dist/` folder with any static file server.

## 🔍 Testing the Prototype

### Key User Flows to Test

1. **Homepage Experience**
   - Navigate through all sections
   - Test interactive tabs in "How It Works"
   - Click CTAs to see profile creation

2. **Profile Creation**
   - Complete the 4-step form
   - Test form validation
   - Experience the redirect to matches

3. **Matching System**
   - Browse potential matches
   - Test messaging modal
   - Explore filtering options

4. **Messaging Interface**
   - View conversation list
   - Send messages in chat
   - Test responsive design

5. **Information Pages**
   - Read comprehensive About Us content
   - Test contact form functionality
   - Explore How It Works guides

## 📱 Responsive Design

The prototype is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Collapsible navigation on mobile
- Stacked layouts for smaller screens
- Touch-friendly interactive elements
- Optimized typography scaling

## 🎯 Business Value Demonstrated

### For Room Seekers (Young People)
- Clear value proposition: affordable housing + community
- Step-by-step guidance through the process
- Matching system with compatibility scores
- Safety tips and support resources

### For Room Providers (Older Adults)
- Emphasis on companionship and mutual benefit
- Simple, accessible interface design
- Trust indicators and verification badges
- Community support and ongoing assistance

### Platform Benefits
- Professional, trustworthy brand presentation
- Comprehensive user journey mapping
- Interactive functionality demonstration
- Scalable technical architecture

## 🚀 Deployment Ready

The prototype includes:
- **Optimized Production Build** (445KB JS, 100KB CSS)
- **Static File Compatibility** for easy hosting
- **SEO-Friendly Structure** with proper meta tags
- **Performance Optimized** with code splitting

## 📞 Support & Documentation

For questions about the prototype implementation or to request modifications, please refer to the comprehensive codebase with:
- Clear component structure
- Consistent naming conventions  
- Reusable UI components
- Well-documented functionality

---

**Built with ❤️ for connecting generations and creating meaningful communities.**

