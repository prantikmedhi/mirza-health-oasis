
/**
 * SEO Metadata for the website
 * Used to provide consistent meta information across pages
 */

export type PageMetadata = {
  title: string;
  description: string;
  keywords: string[];
};

// Base metadata object that's extended for each page
export const baseMetadata: PageMetadata = {
  title: "Mirza Multispeciality Hospital - Your Health Is Our Priority",
  description: "Mirza Multispeciality Hospital provides quality, affordable healthcare with compassion to all patients with modern facilities and expert doctors.",
  keywords: ["hospital", "healthcare", "doctors", "specialists", "Mirza", "Guwahati", "medical care"],
};

// Page specific metadata
export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    ...baseMetadata,
    description: "Mirza Multispeciality Hospital offers comprehensive healthcare services with a focus on patient comfort and advanced medical technology.",
    keywords: [...baseMetadata.keywords, "multispeciality", "emergency services", "quality healthcare"],
  },
  about: {
    ...baseMetadata,
    title: "About Us - Mirza Multispeciality Hospital | Our Mission & Values",
    description: "Learn about Mirza Multispeciality Hospital's mission, values, and our commitment to providing exceptional healthcare services to our community.",
    keywords: [...baseMetadata.keywords, "mission", "values", "hospital history", "healthcare team"],
  },
  services: {
    ...baseMetadata,
    title: "Our Services - Mirza Multispeciality Hospital | Comprehensive Healthcare",
    description: "Explore our wide range of medical services including emergency care, diagnostics, surgery, and specialized treatments at Mirza Hospital.",
    keywords: [...baseMetadata.keywords, "medical services", "emergency", "surgery", "diagnostics", "treatments"],
  },
  departments: {
    ...baseMetadata,
    title: "Departments - Mirza Multispeciality Hospital | Specialized Care Units",
    description: "Discover our specialized departments staffed with expert physicians and equipped with advanced technology for optimal patient care.",
    keywords: [...baseMetadata.keywords, "departments", "specializations", "cardiology", "neurology", "pediatrics", "gynecology"],
  },
  gallery: {
    ...baseMetadata,
    title: "Gallery - Mirza Multispeciality Hospital | Facilities & Events",
    description: "View our hospital facilities, medical equipment, team, and community events through our comprehensive gallery section.",
    keywords: [...baseMetadata.keywords, "hospital gallery", "facilities", "medical equipment", "hospital events"],
  },
  contact: {
    ...baseMetadata,
    title: "Contact Us - Mirza Multispeciality Hospital | Locations & Support",
    description: "Get in touch with Mirza Multispeciality Hospital for appointments, inquiries, or emergencies. Find our location, phone numbers, and contact form.",
    keywords: [...baseMetadata.keywords, "contact hospital", "appointment booking", "hospital location", "emergency contact"],
  },
  appointment: {
    ...baseMetadata,
    title: "Book an Appointment - Mirza Multispeciality Hospital",
    description: "Schedule an appointment with our specialists at Mirza Multispeciality Hospital. Easy online booking system available 24/7.",
    keywords: [...baseMetadata.keywords, "book appointment", "doctor consultation", "medical consultation", "online booking"],
  },
};

// Helper function to generate meta tags for a specific page
export function getPageMetadata(page: keyof typeof pageMetadata | string): PageMetadata {
  return pageMetadata[page as keyof typeof pageMetadata] || baseMetadata;
}
