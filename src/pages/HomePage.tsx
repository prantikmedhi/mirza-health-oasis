import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import { Card, CardContent } from '../components/ui/card';

// Placeholder hospital image
const hospitalImage = '/IMG_7550.JPEG';

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-dm-serif font-bold mb-4 text-white">
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
                <Link to="/appointment" className="btn-primary">
                  Book Appointment
                </Link>
                <Link 
                  to="/services" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal transition-colors duration-300 py-2 px-6 rounded-md font-medium"
                >
                  Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-softwhite">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src="/IMG_7558.JPG" 
                  alt="Mirza Multispeciality Hospital" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </ScrollReveal>
            <div>
              <SectionTitle 
                title="About Mirza Multispeciality Hospital" 
                subtitle="Quality Healthcare for Everyone" 
              />
              <ScrollReveal delay={200}>
                <p className="text-charcoal mb-6">
                  Mirza Multispeciality Hospital is dedicated to delivering high-quality, affordable healthcare with compassion. Located in Tech City near IIIT Guwahati, our state-of-the-art facility serves South Kamrup, combining advanced medical technology with skilled professionals to ensure exceptional patient care.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert doctors and specialists</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modern medical equipment and technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      
      {/* Departments Preview */}
      <section className="py-20 bg-softwhite">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Departments" 
            subtitle="Specialized care across medical disciplines" 
            center
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DepartmentCard name="Medicine" count={4} delay={0} />
            <DepartmentCard name="General Surgery" count={6} delay={200} />
            <DepartmentCard name="Pediatrics" count={3} delay={400} />
            <DepartmentCard name="ENT" count={5} delay={600} />
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

      {/* Services Preview */}
      <section className="py-20 bg-skyblue-light">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer a wide range of medical services to meet your healthcare needs" 
            center
            titleClassName="!text-customBlue"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Emergency Service" description="24/7 emergency care for critical medical situations." delay={0} />
            <ServiceCard title="OPD" description="Outpatient services with experienced specialists." delay={200} />
            <ServiceCard title="Surgery" description="Advanced surgical procedures with precision care." delay={400} />
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

      {/* Call to Action */}
      <section className="py-16 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-dm-serif font-bold mb-4 text-white">
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
                className="bg-white text-teal hover:bg-gray-100 transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg luxury-shadow"
              >
                Book Appointment
              </Link>
              
              <a href="tel:+918011673568" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg">
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
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay}>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-dm-serif font-bold text-teal mb-3">{title}</h3>
          <p className="text-charcoal mb-4">{description}</p>
          <Link to="/services" className="inline-flex items-center text-teal hover:text-skyblue-medium transition-colors duration-300 font-medium">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </CardContent>
      </Card>
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
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 card-hover border-t-4 border-teal">
        <h3 className="text-xl font-dm-serif font-bold text-teal mb-2">{name}</h3>
        <p className="text-charcoal mb-3">{count} Specialists</p>
        <Link 
          to={`/departments?name=${encodeURIComponent(name)}`}
          className="inline-flex items-center text-teal hover:text-skyblue-medium transition-colors duration-300 font-medium"
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
