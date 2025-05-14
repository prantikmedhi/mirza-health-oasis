
import { useState, useEffect } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    alt: "Hospital Building",
    category: "facilities"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Doctor Examining Patient",
    category: "staff"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    alt: "Hospital Reception",
    category: "facilities"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1666214280349-48e12f4a51d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Doctor Consultation",
    category: "care"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "ICU Room",
    category: "facilities"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Surgery Team",
    category: "staff"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1666214277649-7b17c24f47da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Patient Checkup",
    category: "care"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
    alt: "Laboratory Equipment",
    category: "facilities"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80",
    alt: "Nursing Staff",
    category: "staff"
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-royal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white">
                Gallery
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl max-w-3xl mx-auto text-white font-medium">
                Take a visual tour of our hospital facilities, staff, and patient care
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hospital Gallery" 
            subtitle="Images from our facilities, staff, and patient care" 
            center
          />

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-royal text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'facilities' 
                    ? 'bg-royal text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('facilities')}
              >
                Facilities
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'staff' 
                    ? 'bg-royal text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('staff')}
              >
                Medical Staff
              </button>
              <button 
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === 'care' 
                    ? 'bg-royal text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('care')}
              >
                Patient Care
              </button>
            </div>
          </ScrollReveal>

          {/* Gallery Grid - Show all images with opacity effect for non-selected categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={image.id} delay={index * 100}>
                <div 
                  className={`overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    selectedCategory !== "all" && image.category !== selectedCategory ? "opacity-40" : ""
                  }`}
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-lg font-medium">{image.alt}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="max-h-[80vh] max-w-full rounded-lg"
            />
            <button 
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-medium text-royal">{lightboxImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
