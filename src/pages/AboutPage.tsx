import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const promoters = [
    {
      name: "Dr. Chakradhar Das",
      image: "/promoters/chakradhar.jpg",
    },
    {
      name: "Sri Manabendra Das",
      image: "/promoters/manabendra.jpg",
    },
    {
      name: "Sri Dhiraj Thakuria",
      image: "/promoters/dhiraj.jpg",
    },
    {
      name: "Dr. Bitopan Das",
      image: "/promoters/bitopan.jpg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-royal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
              About Our Hospital
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl max-w-3xl mx-auto font-medium">
              Discover our mission, values, and commitment to providing quality healthcare
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img 
              src="/IMG_7550.JPEG" 
              alt="Hospital Building" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </ScrollReveal>
          <div>
            <SectionTitle 
              title="Our Story" 
              subtitle="A Legacy of Excellence in Healthcare" 
            />
            <ScrollReveal delay={200}>
              <p className="text-gray-600 mb-6">
                Mirza Multispeciality Hospital was established with a vision to provide quality, affordable healthcare with compassion to all patients...
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-gray-600 mb-6">
                Located in Tech City, Mirza, near IITG, Bongora, Guwahati, Assam-781015...
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Promoters Section */}
      <section className="py-16 md:py-24 bg-soft-grey">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle
            title="Our Promoters"
            subtitle="Meet the Visionaries Behind the Hospital"
            center
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {promoters.map((person, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src={person.image} alt={person.name} />
                    <AvatarFallback>{person.name.split(" ")[0][0]}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold text-royal">{person.name}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle 
              title="Our Vision & Mission" 
              subtitle="Guiding principles that drive our healthcare services" 
              center
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center mb-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-royal mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the premier healthcare provider...
                </p>
              </div>
            </ScrollReveal>
            {/* Mission */}
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 text-royal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2..." />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-royal mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver accessible, affordable...
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-soft-grey">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Our Location" 
              subtitle="Find us in the heart of Guwahati" 
            />
            <ScrollReveal delay={200}>
              <p className="text-gray-600 mb-6">
                Mirza Multispeciality Hospital is strategically located...
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mb-6">
                <h4 className="font-bold text-royal mb-2">Address:</h4>
                <p className="text-gray-600">
                  Tech City, Mirza, Near IIITG<br />
                  Bongora, Guwahati<br />
                  Assam-781015
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <div className="mb-6">
                <h4 className="font-bold text-royal mb-2">Contact Numbers:</h4>
                <p className="text-gray-600">
                  +91 8011260929
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={300}>
            <div className="h-96 rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?q=Mirza%20Multispeciality%20Hospital&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Hospital Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-royal text-white text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Experience Our Quality Care?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Book an appointment with our specialists or contact us for more information.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/appointment" 
              className="bg-gold text-royal hover:bg-gold-light transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg"
            >
              Book Appointment
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default AboutPage;
