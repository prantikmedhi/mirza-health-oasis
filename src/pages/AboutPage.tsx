import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-royal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                About Our Hospital
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl max-w-3xl mx-auto text-white font-medium">
                Discover our mission, values, and commitment to providing quality healthcare
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
                  alt="Hospital Building" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </ScrollReveal>
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="A Legacy of Excellence in Healthcare" 
              />
              <ScrollReveal delay={200}>
                <p className="text-gray-600 mb-6">
                  Mirza Multispeciality Hospital was established with a vision to provide quality, affordable healthcare with compassion to all patients. Over the years, we have grown into a leading healthcare provider in the region, known for our medical expertise, state-of-the-art facilities, and patient-centered care.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="text-gray-600 mb-6">
                  Located in Tech City, Mirza, near IITG, Bongora, Guwahati, Assam-781015, our hospital serves patients from across the region, offering a wide range of medical services and specialties.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-soft-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle 
              title="Our Vision & Mission" 
              subtitle="Guiding principles that drive our healthcare services" 
              center
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center mb-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-royal mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the premier healthcare provider in the region, recognized for excellence in medical care, innovation, and compassionate service. We strive to set new standards in healthcare delivery through continuous improvement and patient-centered approaches.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 text-royal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-royal mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver accessible, affordable, and high-quality healthcare services with compassion and integrity. We are committed to the well-being of our patients and community by providing comprehensive medical care, promoting health awareness, and fostering a culture of healing and respect.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Directors" 
            subtitle="Meet the experienced leadership team behind our hospital" 
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {directors.map((director, index) => (
              <DirectorCard 
                key={director.id}
                name={director.name}
                position={director.position}
                image={director.image}
                details={director.details}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="Principles that guide our actions and decisions" 
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <CoreValueCard 
              title="Excellence" 
              description="We are committed to delivering the highest standards of medical care and service excellence."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              } 
              delay={0}
            />
            <CoreValueCard 
              title="Compassion" 
              description="We provide care with kindness, empathy, and respect for the dignity of every individual."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              } 
              delay={200}
            />
            <CoreValueCard 
              title="Integrity" 
              description="We uphold the highest standards of honesty, transparency, and ethical conduct."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } 
              delay={400}
            />
            <CoreValueCard 
              title="Innovation" 
              description="We continuously seek new and better ways to improve healthcare delivery and patient outcomes."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              } 
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-soft-grey">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Location" 
                subtitle="Find us in the heart of Guwahati" 
              />
              <ScrollReveal delay={200}>
                <p className="text-gray-600 mb-6">
                  Mirza Multispeciality Hospital is strategically located in Tech City, Mirza, near IITG, making it easily accessible for patients from Guwahati and surrounding areas. Our modern facility is equipped with the latest medical technology to provide you with the best healthcare experience.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mb-6">
                  <h4 className="font-bold text-royal mb-2">Address:</h4>
                  <p className="text-gray-600">
                    Tech City, Mirza, Near IITG<br />
                    Bongora, Guwahati<br />
                    Assam-781015
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <div className="mb-6">
                  <h4 className="font-bold text-royal mb-2">Contact Numbers:</h4>
                  <p className="text-gray-600">
                    +91 8011673568 / +91 8011260929
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14323.58223171298!2d91.6357599!3d26.1805978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9e3adb%3A0xb53cc0c93252bb45!2sIIT%20Guwahati%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1653412513733!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Ready to Experience Our Quality Care?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-medium">
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
        </div>
      </section>
    </div>
  );
};

// Director data
const directors = [
  {
    id: 1,
    name: "Dr. Arjun Sharma",
    position: "Chief Medical Director",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    details: "Dr. Sharma brings over 25 years of medical expertise and healthcare management experience. He obtained his MD from AIIMS and has specialized training in Hospital Administration from Harvard Medical School."
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    position: "Director of Clinical Operations",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    details: "With a focus on quality patient care, Dr. Patel oversees all clinical operations. She holds an MBBS from Manipal University and an MPH from Johns Hopkins, with 18 years in healthcare management."
  },
  {
    id: 3,
    name: "Mr. Rajiv Mehta",
    position: "Director of Finance & Administration",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    details: "As a seasoned financial expert with an MBA from IIM Ahmedabad, Mr. Mehta ensures the hospital's financial stability and administrative efficiency with his 20 years of experience in healthcare finance."
  },
  {
    id: 4,
    name: "Dr. Meera Reddy",
    position: "Director of Research & Development",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    details: "Leading our research initiatives, Dr. Reddy has published over 50 research papers in international medical journals. She holds a PhD in Medical Sciences from Cambridge University and specializes in innovative medical technologies."
  }
];

interface DirectorCardProps {
  name: string;
  position: string;
  image: string;
  details: string;
  delay?: number;
}

const DirectorCard: React.FC<DirectorCardProps> = ({ name, position, image, details, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay}>
      <Card className="h-full hover:shadow-md transition-shadow duration-300">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="h-32 w-32 border-2 border-gold">
              <AvatarImage src={image} alt={name} className="object-cover" />
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-xl text-royal">{name}</CardTitle>
          <CardDescription className="text-md text-gold font-medium">{position}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-center">{details}</p>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

interface CoreValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
        <div className="w-20 h-20 mx-auto bg-royal/10 rounded-full flex items-center justify-center mb-6 text-royal">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-bold text-royal mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </ScrollReveal>
  );
};

export default AboutPage;
