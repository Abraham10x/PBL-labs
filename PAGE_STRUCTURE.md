# Page Structure & Section Guide

A complete breakdown of every section on your website and how to customize it.

---

## Page Layout Overview

```
┌─────────────────────────────────────────┐
│         NAVBAR (Sticky)                 │  components/navbar.tsx
│  EduLearn | Programs | Why Us | Contact │
│                        Get Started ────►│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│           HERO SECTION                  │  components/hero.tsx
│                                         │
│  Transform Your Educational Journey     │  Headline (Cormorant 700)
│                                         │
│  World-class learning programs...       │  Subheading (Inter 400)
│                                         │
│  [Explore Programs] [Learn More]        │  Dual CTAs
│                                         │
│  Trusted by leading institutions        │  Trust badges
│  Oxford | Cambridge | Tech Leaders      │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         TRUST STRIP (Stats)             │  components/trust-strip.tsx
├────────┬────────┬────────┬──────────────┤
│ 5,000+ │  95%   │  50+   │   4.9/5      │  4-column grid
│Students│Success │Industry│  Students    │  (2 cols on mobile)
│        │  Rate  │Partners│    Rating    │
└────────┴────────┴────────┴──────────────┘

┌─────────────────────────────────────────┐
│                                         │
│    OUR LEARNING PROGRAMS                │  components/offerings.tsx
│                                         │
│    Choose the program that fits...      │  Section header
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌────────┐ │  3-card grid
│  │Founding  │  │Professional│ Masterclass
│  │Cohort ★  │  │Bootcamp   │          │
│  │(Featured)│  │           │          │
│  │          │  │           │          │
│  │✓ Mentor  │  │✓ Evening  │ ✓ Expert│
│  │✓ Hands-on│  │✓ Weekend  │ ✓ Monthly
│  │✓ Job plc.│  │✓ Coaching │ ✓ Peer  │
│  │✓ Network │  │✓ Cert.    │ ✓ Library
│  │          │  │           │          │
│  │Apply Now │  │Learn More │ Learn More
│  └──────────┘  └──────────┘  └────────┘
│                                         │
│  ★ Featured card is 105% scale on      │
│    desktop, normal on mobile            │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│   Ready to Transform Your Future?       │  components/newsletter-form.tsx
│                                         │
│  Join thousands building careers...     │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Full Name                       │   │  3-field form
│  │ Your full name                  │   │  (optimal for Nigerian market)
│  ├─────────────────────────────────┤   │
│  │ Email Address                   │   │
│  │ you@example.com                 │   │
│  ├─────────────────────────────────┤   │
│  │ Phone Number                    │   │
│  │ +234 (0) XXX XXX XXXX           │   │
│  ├─────────────────────────────────┤   │
│  │  Get Free Consultation          │   │  Primary CTA button
│  └─────────────────────────────────┘   │
│                                         │
│  We respect your privacy...             │
│                                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           FOOTER (Navy bg)              │  components/footer.tsx
├──────────┬──────────┬──────────┬────────┤
│EduLearn  │PROGRAMS  │RESOURCES │LEGAL   │  4-column layout
│          │          │          │        │
│Transform │Founding  │Blog      │Privacy │
│lives     │Cohort    │FAQ       │Terms   │
│through   │          │Careers   │Cookies │
│education │Pro Boot. │Contact   │Access. │
│          │Masterc.  │          │        │
│          │Scholar.  │          │        │
│          │          │          │        │
│ © 2026 EduLearn. All rights reserved    │
│ [Twitter] [LinkedIn] [Instagram]       │
└──────────┴──────────┴──────────┴────────┘

┌─────────────────────────────────────────┐
│        WhatsApp Button (Fixed)          │  components/whatsapp-button.tsx
│        (Bottom-right corner)            │
│          [💬]                           │  Green circle with icon
│                                         │
│  - Respects safe-area-inset-bottom      │
│  - Scales on hover                      │
│  - Pre-fills message                    │
└─────────────────────────────────────────┘
```

---

## Section-by-Section Customization

### 1. NAVBAR

**File:** `components/navbar.tsx`

**Customizable:**
- Logo text: "EduLearn"
- Navigation links: Programs, Why Us, Contact
- Button text: "Get Started"
- Color: Uses `bg-background` / `bg-card` (changes on scroll)

**Key Feature:**
- Sticky positioning
- Smooth shadow on scroll
- Mobile hamburger menu

---

### 2. HERO SECTION

**File:** `components/hero.tsx`

**Customizable:**
- Main headline: "Transform Your Educational Journey"
- Subheading: "World-class learning programs..."
- Button 1: "Explore Our Programs" (primary)
- Button 2: "Learn More" (secondary)
- Trust badges: Oxford Partnership, Cambridge Network, Tech Leaders Alliance

**Design Notes:**
- Headline uses Cormorant Garamond (serif, 700)
- Subheading uses Inter (sans, 400)
- Full-screen height with centered content
- Text is balanced for optimal line breaks

---

### 3. TRUST STRIP

**File:** `components/trust-strip.tsx`

**Customizable:**
- 4 stats with numbers and labels:
  1. 5,000+ | Students Transformed
  2. 95% | Success Rate
  3. 50+ | Industry Partners
  4. 4.9/5 | Student Rating

**Design Notes:**
- 2-column grid on mobile
- 4-column grid on desktop
- Uses primary color for numbers
- Light gray for labels

---

### 4. OFFERINGS (Programs)

**File:** `components/offerings.tsx`

**Customizable (3 cards):**
- Card 1: Title, Description, 4 Features, Button (isPrimary: true)
- Card 2: Title, Description, 4 Features, Button (isPrimary: false)
- Card 3: Title, Description, 4 Features, Button (isPrimary: false)

**Important:**
- Only ONE card should have `isPrimary: true`
- Featured card shows "Featured Program" badge
- Featured card scales 105% on desktop only
- Featured card CTA is "Apply Now" (gold button)
- Other cards CTA is "Learn More" (navy button)

**Design Notes:**
- Never show more than 3 cards (extends viewport)
- Each card has 4 features max
- Checkmark icons auto-generated
- Cards have hover effects

---

### 5. NEWSLETTER FORM

**File:** `components/newsletter-form.tsx`

**Fields (Exactly 3):**
1. Full Name (text input)
2. Email Address (email input)
3. Phone Number (tel input)

**Features:**
- Client-side validation (all fields required)
- Success message feedback
- UTM parameter injection (for analytics)
- Privacy statement included

**Don't:**
- Add more than 3 fields (reduces submission rate)
- Use it for complex data collection
- Hide fields below fold

---

### 6. FOOTER

**File:** `components/footer.tsx`

**Customizable:**
- Company name: "EduLearn"
- Company description: "Transforming lives..."
- 4 footer sections with links:
  - PROGRAMS: Founding Cohort, Pro Bootcamp, Masterclass, Scholarships
  - RESOURCES: Blog, FAQ, Careers, Contact
  - LEGAL: Privacy, Terms, Cookies, Accessibility
- Social icons: Twitter, LinkedIn, Instagram

**Design Notes:**
- Navy background (uses primary color)
- Year auto-updates (2026 in this build)
- Links have hover opacity effect
- Social icons are functional links

---

### 7. WHATSAPP BUTTON

**File:** `components/whatsapp-button.tsx`

**Customizable:**
- Phone number: +234901234567 (must include country code)
- Message: "Hello! I'm interested..."
- Icon: WhatsApp SVG logo

**Key Features:**
- Fixed positioning (bottom-right)
- Respects notched device safe areas
- Mobile behavior: Opens wa.me link directly
- Desktop behavior: Opens in new tab
- Iframe detection: Opens new tab in preview
- Green color (WhatsApp standard)
- Scales on hover

**Important:**
- Format: +[country code][number]
- Example for Nigeria: +234912345678

---

## Responsive Behavior

### Mobile (375px - 639px)
- Navbar: Logo + hamburger menu
- Hero: Stack buttons vertically
- Trust: 2-column stats grid
- Offerings: Single column cards
- Form: Full-width inputs
- Footer: Single column
- WhatsApp: Bottom-right, respects insets

### Tablet (640px - 1023px)
- Navbar: Logo + menu items visible
- Hero: Side-by-side buttons
- Trust: 2-column stats grid (top/bottom)
- Offerings: Hover effects active
- Form: Full-width inputs
- Footer: 2-column layout
- WhatsApp: Same position

### Desktop (1024px+)
- Navbar: Full horizontal layout
- Hero: Hero + CTAs fully optimized
- Trust: 4-column stats grid
- Offerings: 3 columns, featured card scales
- Form: Max-width container
- Footer: 4-column layout
- WhatsApp: Standard positioning

---

## Color Usage by Section

| Section | Background | Text | Accent |
|---------|-----------|------|--------|
| Navbar | card/trans | foreground | primary |
| Hero | background | foreground | primary |
| Trust | card | primary | - |
| Offerings | background | foreground | primary/accent |
| Form | card | foreground | primary |
| Footer | primary | primary-fg | accent |
| WhatsApp | green-500 | white | - |

---

## Typography by Section

| Section | Headlines | Body |
|---------|-----------|------|
| Navbar | Inter 500 | Inter 400 |
| Hero | Cormorant 700 | Inter 400 |
| Trust | Cormorant 700 | Inter 400 |
| Offerings | Cormorant 700 | Inter 400 |
| Form | Inter 500 | Inter 400 |
| Footer | Cormorant 700 | Inter 400 |

---

## Performance Checklist

✓ Fonts: Cormorant + Inter only  
✓ Font loading: display=swap  
✓ Images: WebP with JPEG fallback  
✓ Form fields: 3 maximum  
✓ CTAs: Single primary action per view  
✓ Colors: 5 total (no gradients)  
✓ Mobile: Tested at 375px minimum  
✓ Load time: Under 800KB  

---

## Next Actions

1. Customize program names in offerings.tsx
2. Update WhatsApp number
3. Change trust metrics if needed
4. Update footer company info
5. Deploy to Vercel
6. Test on actual Nigerian mobile devices

See CUSTOMIZATION.md and QUICK_START.md for detailed instructions.
