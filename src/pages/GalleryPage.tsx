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
  { id: 1, src: "IMG_7198.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 2, src: "IMG_7199.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 3, src: "IMG_7203.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 4, src: "IMG_7204.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 5, src: "IMG_7205.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 6, src: "IMG_7206.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 7, src: "IMG_7207.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 8, src: "IMG_7208.JPG", alt: "Attendent Hall", category: "Attendent hall" },
  { id: 9, src: "IMG_7200.JPG", alt: "Cafe", category: "Cafe" },
  { id: 10, src: "IMG_7201.JPG", alt: "Cafe", category: "Cafe" },
  { id: 11, src: "IMG_7202.JPG", alt: "Cafe", category: "Cafe" },
  { id: 12, src: "IMG_7238.JPG", alt: "ECG", category: "ECG" },
  { id: 13, src: "IMG_7239.JPG", alt: "ECG", category: "ECG" },
  { id: 14, src: "IMG_7219.JPG", alt: "Emergency", category: "Emergency" },
  { id: 15, src: "IMG_7222.JPG", alt: "Emergency", category: "Emergency" },
  { id: 16, src: "IMG_7223.JPG", alt: "Emergency", category: "Emergency" },
  { id: 17, src: "IMG_7224.JPG", alt: "Emergency", category: "Emergency" },
  { id: 18, src: "IMG_7225.JPG", alt: "Emergency", category: "Emergency" },
  { id: 19, src: "IMG_7226.JPG", alt: "Emergency", category: "Emergency" },
  { id: 20, src: "IMG_7227.JPG", alt: "Emergency", category: "Emergency" },
  { id: 21, src: "IMG_7211.JPG", alt: "Opd", category: "Opd" },
  { id: 22, src: "IMG_7212.JPG", alt: "Opd", category: "Opd" },
  { id: 23, src: "IMG_7213.JPG", alt: "Opd", category: "Opd" },
  { id: 24, src: "IMG_7214.JPG", alt: "Opd", category: "Opd" },
  { id: 25, src: "IMG_7215.JPG", alt: "Opd", category: "Opd" },
  { id: 26, src: "IMG_7216.JPG", alt: "Opd", category: "Opd" },
  { id: 27, src: "IMG_7217.JPG", alt: "Opd", category: "Opd" },
  { id: 28, src: "IMG_7218.JPG", alt: "Opd", category: "Opd" },
  { id: 29, src: "IMG_7209.JPG", alt: "Pharmacy", category: "Pharmacy" },
  { id: 30, src: "IMG_7296.JPG", alt: "Pharmacy", category: "Pharmacy" },
  { id: 31, src: "IMG_7297.JPG", alt: "Pharmacy", category: "Pharmacy" },
  { id: 32, src: "IMG_7298.JPG", alt: "Pharmacy", category: "Pharmacy" },
  { id: 33, src: "IMG_7192.JPG", alt: "Reception", category: "Reception" },
  { id: 34, src: "IMG_7193.JPG", alt: "Reception", category: "Reception" },
  { id: 35, src: "IMG_7194.JPG", alt: "Reception", category: "Reception" },
  { id: 36, src: "IMG_7195.JPG", alt: "Reception", category: "Reception" },
  { id: 37, src: "IMG_7196.JPG", alt: "Reception", category: "Reception" },
  { id: 38, src: "IMG_7235.JPG", alt: "Sample collection", category: "Sample collection" },
  { id: 39, src: "IMG_7236.JPG", alt: "Sample collection", category: "Sample collection" },
  { id: 40, src: "IMG_7237.JPG", alt: "Sample collection", category: "Sample collection" },
  { id: 41, src: "IMG_7240.JPG", alt: "Sample collection", category: "Sample collection" },
  { id: 42, src: "IMG_7241.JPG", alt: "Sample collection", category: "Sample collection" },
  { id: 43, src: "IMG_7242.JPG", alt: "Sample collection", category: "Sample collection" }
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
      <section className="bg-royal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-white">
              Gallery
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl max-w-3xl mx-auto text-white font-medium">
              Take a visual tour of our hospital's departments and services
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hospital Gallery" 
            subtitle="Explore our hospital's facilities and services visually" 
            center
          />

          <ScrollReveal>
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {["all", "Attendent hall", "Cafe", "ECG", "Emergency", "Opd", "Pharmacy", "Reception", "Sample collection"].map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-royal text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={image.id} delay={index * 100}>
                <div 
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
      </section>
    </div>
  );
};

export default GalleryPage;
