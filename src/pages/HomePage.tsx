
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';

// Placeholder hospital image
const hospitalImage = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${hospitalImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                Your Health Is Our Priority
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl mb-8 text-gray-200">
                Welcome to Mirza Multispeciality Hospital, where we combine advanced medical technology with compassionate care.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/appointment" 
                  className="btn-primary"
                >
                  Book Appointment
                </Link>
                <Link 
                  to="/services" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal transition-colors duration-300 py-2 px-6 rounded-md font-medium"
                >
                  Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <div className="inline-block bg-gold text-royal px-6 py-3 rounded-full animate-pulse font-bold text-lg">
            24x7 Emergency Service
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Hospital Building" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-royal text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-playfair font-bold">20+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
            </ScrollReveal>
            <div>
              <SectionTitle 
                title="About Mirza Hospital" 
                subtitle="Quality Healthcare for Everyone" 
              />
              <ScrollReveal delay={200}>
                <p className="text-gray-600 mb-6">
                  Mirza Multispeciality Hospital is committed to providing quality, affordable healthcare with compassion to all patients. Located in the heart of Guwahati, our state-of-the-art facility combines cutting-edge technology with experienced medical professionals.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert doctors and specialists</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modern medical equipment and technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 emergency care services</span>
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-soft-grey">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer a wide range of medical services to meet your healthcare needs" 
            center
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Emergency Service"
              description="24/7 emergency care for critical medical situations."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8h-4l-2-2H9L7 8H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z" />
                  <path d="M16 19H8c0-3.771 0-5 4-5 4 0 4 1.229 4 5Z" />
                </svg>
              }
              delay={0}
            />
            
            <ServiceCard 
              title="OPD"
              description="Outpatient services with experienced specialists."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
                  <path d="M11 17a6 6 0 0 0-12 0 1 1 0 1 0 2 0c0-2.21 1.79-4 4-4s4 1.79 4 4a1 1 0 0 0 2 0Z" />
                  <path d="M14 12h5a1 1 0 0 0 1-1a9 9 0 1 0-9 9c4.97 0 9-4.03 9-9v-2h-5a1 1 0 0 0-1 1v2Z" />
                </svg>
              }
              delay={200}
            />
            
            <ServiceCard 
              title="Surgery"
              description="Advanced surgical procedures with precision care."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 12H7m5-4l-5 8m7-8l5 8m-5-8v8" />
                </svg>
              }
              delay={400}
            />
            
            <ServiceCard 
              title="Maternity"
              description="Complete maternal care before, during and after childbirth."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                  <path d="M12 6v4l3 3" />
                </svg>
              }
              delay={600}
            />
            
            <ServiceCard 
              title="Critical Care"
              description="Intensive care unit with advanced life support systems."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.17 16.83a4 4 0 1 0 5.66 0m-5.66 0A5.99 5.99 0 0 1 10 12v-2a2 2 0 1 1 4 0v2c0 1.82.82 3.44 2.12 4.52" />
                  <path d="M10 12H8m8 0h-2" />
                </svg>
              }
              delay={800}
            />
            
            <ServiceCard 
              title="Diabetology"
              description="Specialized care for diabetes management and treatment."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.42 18.61A2.4 2.4 0 1 0 19.5 17m-3.94 1.54-.82 2.1m.1-2.45-1.13-11.8m5.7 12.44A2.4 2.4 0 1 0 24 16.6m-4.58 2.03.7 1.86m-.9-2.23L17.1 6.47" />
                  <path d="M5.75 13.4h2.5v2.2h-2.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.34 10.55H5.45l-4.6-6.55h12.7l-4.6 6.55H5.76" />
                </svg>
              }
              delay={1000}
            />
          </div>
          
          <div className="text-center mt-12">
            <ScrollReveal delay={1200}>
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Departments" 
            subtitle="Specialized care across medical disciplines" 
            center
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DepartmentCard 
              name="Medicine"
              count={4}
              delay={0}
            />
            <DepartmentCard 
              name="General Surgery"
              count={6}
              delay={200}
            />
            <DepartmentCard 
              name="Pediatrics"
              count={3}
              delay={400}
            />
            <DepartmentCard 
              name="Obstetrics & Gynaecology"
              count={7}
              delay={600}
            />
          </div>
          
          <div className="text-center mt-12">
            <ScrollReveal delay={800}>
              <Link to="/departments" className="btn-primary">
                View All Departments
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Need Medical Assistance?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book an appointment online or call us for emergency services. We're available 24/7.
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
              <a 
                href="tel:+918011673568" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg"
              >
                Call Emergency: +91 8011673568
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 card-hover">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-bold text-royal mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link 
          to="/services" 
          className="inline-flex items-center text-royal hover:text-gold mt-4 transition-colors duration-300 font-medium"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </ScrollReveal>
  );
};

interface DepartmentCardProps {
  name: string;
  count: number;
  delay?: number;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ name, count, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-soft-grey p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 card-hover border-t-4 border-royal">
        <h3 className="text-xl font-playfair font-bold text-royal mb-2">{name}</h3>
        <p className="text-gray-600 mb-3">{count} Specialists</p>
        <Link 
          to="/departments" 
          className="inline-flex items-center text-royal hover:text-gold transition-colors duration-300 font-medium"
        >
          View Doctors
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </ScrollReveal>
  );
};

export default HomePage;
