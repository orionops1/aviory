// ============================================================================
// AVIORY & CO - NAVIGATION CONFIGURATION
// Centralized navigation structure for Header mega-menu and Footer links
// ============================================================================

/**
 * PRIMARY NAVIGATION MENU DATA
 * Mega-menu structure with categorized sub-navigation
 * Used by: Header component (desktop mega-menu and mobile drawer)
 */
export const megaMenuData = [
  {
    key: 'gemstones',
    labelKey: 'common.gemstones',
    href: '/gemstones',
    mega: {
      columns: [
        {
          heading: 'By Rare Hue',
          links: [
            { label: 'Royal Blue Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Cornflower Sapphires', href: '/gemstones?category=blue-sapphires' },
            { label: 'Padparadscha (Sunset)', href: '/gemstones?category=padparadscha' },
            { label: 'Vivid Pink Sapphires', href: '/gemstones?category=pink-sapphires' },
            { label: 'Canary Yellow Sapphires', href: '/gemstones?category=yellow-sapphires' },
            { label: 'Pigeon Blood Rubies', href: '/gemstones?category=rubies' },
            { label: 'Cobalt Spinels', href: '/gemstones?category=spinels' },
          ],
        },
        {
          heading: 'Curated Selections',
          links: [
            { label: 'Collector Vault Specimens', href: '/gemstones?category=collector' },
            { label: 'Unheated Natural Stones', href: '/gemstones' },
            { label: 'Rare Fancy Colored Gems', href: '/gemstones?category=other' },
            { label: 'View All Gemstones', href: '/gemstones', accent: true },
          ],
        },
        {
          heading: 'Learn More',
          links: [
            { label: 'Ceylon Provenance Assurance', href: '/journal/the-heritage-of-ceylon-gemstones' },
            { label: 'GIA & Gubelin Certification', href: '/our-house' },
            { label: 'The Science of Sapphires', href: '/journal/the-science-of-sapphire' },
          ],
        },
      ],
      feature: {
        title: 'The Ceylon Heritage Vault',
        subtitle: 'Pure, unheated natural sapphires celebrated for over 2,000 years for unparalleled brilliance.',
        cta: { label: 'Explore Provenance', href: '/our-house' },
        accent: 'sapphire',
      },
    },
  },
  {
    key: 'fine-jewellery',
    labelKey: 'common.fineJewellery',
    href: '/fine-jewellery',
    mega: {
      columns: [
        {
          heading: 'By Category',
          links: [
            { label: 'High Jewellery Rings', href: '/fine-jewellery?collection=Rings' },
            { label: 'Earrings & Pendants', href: '/fine-jewellery?collection=Earrings' },
            { label: 'Statement Necklaces', href: '/fine-jewellery?collection=Necklaces' },
            { label: 'Diamond & Gem Bracelets', href: '/fine-jewellery?collection=Bracelets' },
            { label: 'Brooches & Art Objects', href: '/fine-jewellery?collection=Brooches' },
          ],
        },
        {
          heading: 'Signature Collections',
          links: [
            { label: 'Limited Edition Masterpieces', href: '/fine-jewellery?collection=Limited+Edition' },
            { label: 'Atelier Custom Commissions', href: '/fine-jewellery?collection=Custom' },
            { label: 'View All Fine Jewellery', href: '/fine-jewellery', accent: true },
          ],
        },
        {
          heading: 'Atelier Services',
          links: [
            { label: 'Bespoke Creation Process', href: '/bespoke' },
            { label: 'Private Atelier Appointments', href: '/private-consultations' },
            { label: 'Fine Jewellery Care Guide', href: '/journal/caring-for-your-sapphires' },
          ],
        },
      ],
      feature: {
        title: 'Atelier Craftsmanship',
        subtitle: 'Hand-wrought in 18K gold and platinum by Ceylon master goldsmiths.',
        cta: { label: 'Discover The Craft', href: '/journal/the-art-of-bespoke-jewellery' },
        accent: 'gold',
      },
    },
  },
  {
    key: 'engagement-rings',
    labelKey: 'common.engagementRings',
    href: '/engagement-rings',
    mega: {
      columns: [
        {
          heading: 'By Style',
          links: [
            { label: 'Solitaire Settings', href: '/engagement-rings?style=solitaire' },
            { label: 'Luminous Halo Designs', href: '/engagement-rings?style=halo' },
            { label: 'Three Stone Trilogies', href: '/engagement-rings?style=three-stone' },
            { label: 'Cushion Cut Mountings', href: '/engagement-rings?style=cushion' },
            { label: 'Oval & Emerald Cuts', href: '/engagement-rings?style=oval' },
            { label: 'Pear & Fancy Shapes', href: '/engagement-rings?style=pear' },
          ],
        },
        {
          heading: 'By Center Stone',
          links: [
            { label: 'Royal Sapphire Rings', href: '/engagement-rings?stone=blue-sapphire' },
            { label: 'Burma & Ceylon Ruby Rings', href: '/engagement-rings?stone=ruby' },
            { label: 'Pink & Padparadscha Rings', href: '/engagement-rings?stone=pink-sapphire' },
            { label: 'View All Engagement Rings', href: '/engagement-rings', accent: true },
          ],
        },
        {
          heading: 'Resources',
          links: [
            { label: 'Ring Sizing Guide', href: '/engagement-rings' },
            { label: 'The Story of Love', href: '/engagement-rings' },
            { label: 'Book a Consultation', href: '/private-consultations' },
            { label: 'Custom Design', href: '/bespoke/enquiry' },
          ],
        },
      ],
      feature: {
        title: 'A Love Beyond Diamonds',
        subtitle: 'Celebrate timeless commitment with rare unheated sapphires of royal lineage.',
        cta: { label: 'Begin Custom Ring', href: '/bespoke/enquiry' },
        accent: 'rose',
      },
    },
  },
  {
    key: 'bespoke',
    labelKey: 'common.bespoke',
    href: '/bespoke',
    mega: {
      columns: [
        {
          heading: 'Custom Creation',
          links: [
            { label: 'The 5-Stage Process', href: '/bespoke/process' },
            { label: 'Submit Custom Enquiry', href: '/bespoke/enquiry' },
            { label: 'Private Showroom Consultation', href: '/private-consultations' },
            { label: 'View All Bespoke', href: '/bespoke', accent: true },
          ],
        },
        {
          heading: 'Inspiration & Stories',
          links: [
            { label: 'Designing Your Dream Ring', href: '/journal/designing-your-dream-ring' },
            { label: 'The Art of Bespoke', href: '/journal/the-art-of-bespoke-jewellery' },
            { label: 'Ethical Mine-to-Market', href: '/journal/sustainable-luxury-and-ethical-sourcing' },
          ],
        },
      ],
      feature: {
        title: 'Vision to Masterpiece',
        subtitle: 'From a loose hand-selected gem to an heirloom that transcends generations.',
        cta: { label: 'Explore Bespoke', href: '/bespoke/process' },
        accent: 'champagne',
      },
    },
  },
  {
    key: 'our-house',
    labelKey: 'common.ourHouse',
    href: '/our-house',
  },
  {
    key: 'journal',
    labelKey: 'common.journal',
    href: '/journal',
  },
];

/**
 * FOOTER NAVIGATION LINKS
 * Organized by section: collections, service (support), company (about), concierge (contact)
 * Used by: Footer component
 * 
 * FIXED LINKS:
 * - #shipping → /contact?subject=shipping
 * - #returns → /contact?subject=returns
 * - #faq → /blog?category=faq
 */
export const footerLinks = {
  collections: [
    {
      label: 'Royal Ceylon Sapphires',
      href: '/gemstones',
    },
    {
      label: 'Padparadscha & Spinels',
      href: '/gemstones?category=padparadscha',
    },
    {
      label: 'Haute Joaillerie Suites',
      href: '/fine-jewellery',
    },
    {
      label: 'AVIORY Love Collection',
      href: '/engagement-rings',
    },
    {
      label: 'Collector Vault Pieces',
      href: '/gemstones?category=collector',
    },
  ],
  service: [
    {
      label: 'Shipping & Delivery',
      href: '/contact?subject=shipping',
    },
    {
      label: 'Returns & Exchanges',
      href: '/contact?subject=returns',
    },
    {
      label: 'Care & Maintenance',
      href: '/journal/caring-for-your-sapphires',
    },
    {
      label: 'FAQ',
      href: '/blog?category=faq',
    },
    {
      label: 'Gemological Certification',
      href: '/contact',
    },
  ],
  company: [
    {
      label: 'Heritage & Artisans',
      href: '/our-house',
    },
    {
      label: 'The 5-Stage Bespoke Journey',
      href: '/bespoke/process',
    },
    {
      label: 'The Aviory Journal',
      href: '/journal',
    },
    {
      label: 'Mine-to-Market Provenance',
      href: '/journal/sustainable-luxury-and-ethical-sourcing',
    },
    {
      label: 'Private Atelier Showing',
      href: '/private-consultations',
    },
  ],
  concierge: [
    {
      label: 'Contact Concierge',
      href: '/contact',
    },
    {
      label: 'Book a Consultation',
      href: '/private-consultations',
    },
    {
      label: 'WhatsApp Concierge',
      href: 'https://wa.me/94776100099',
      isExternal: true,
    },
    {
      label: 'Custom Enquiry',
      href: '/bespoke/enquiry',
    },
    {
      label: 'Armoured Courier Details',
      href: '/contact',
    },
  ],
};

/**
 * SIMPLIFIED NAVIGATION ITEMS (for reference/other uses)
 * Primary navigation categories with routes
 */
export const primaryNavigation = [
  {
    label: 'Gemstones',
    route: '/gemstones',
    key: 'gemstones',
  },
  {
    label: 'Fine Jewellery',
    route: '/fine-jewellery',
    key: 'fine-jewellery',
  },
  {
    label: 'Engagement Rings',
    route: '/engagement-rings',
    key: 'engagement-rings',
  },
  {
    label: 'Bespoke',
    route: '/bespoke',
    key: 'bespoke',
  },
  {
    label: 'The Maison',
    route: '/our-house',
    key: 'our-house',
  },
  {
    label: 'Journal',
    route: '/journal',
    key: 'journal',
  },
];

/**
 * NAVIGATION SECTIONS (organizational structure)
 * Useful for organizing navigation by category
 */
export const navigationSections = {
  collections: {
    title: 'Collections',
    items: [
      { label: 'Gemstones', href: '/gemstones', key: 'gemstones' },
      { label: 'Fine Jewellery', href: '/fine-jewellery', key: 'fine-jewellery' },
      { label: 'Engagement Rings', href: '/engagement-rings', key: 'engagement-rings' },
    ],
  },
  editorial: {
    title: 'Editorial',
    items: [
      { label: 'The Maison', href: '/our-house', key: 'our-house' },
      { label: 'Journal', href: '/journal', key: 'journal' },
    ],
  },
  services: {
    title: 'Services',
    items: [
      { label: 'Bespoke', href: '/bespoke', key: 'bespoke' },
      { label: 'Private Consultations', href: '/private-consultations', key: 'consultations' },
      { label: 'Contact', href: '/contact', key: 'contact' },
    ],
  },
};

export default {
  megaMenuData,
  footerLinks,
  primaryNavigation,
  navigationSections,
};
