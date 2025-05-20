
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

// Service images
const serviceImages = {
  emergency: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  opd: 'https://images.unsplash.com/photo-1666214280349-48e12f4a51d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  surgery: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  maternity: 'https://images.unsplash.com/photo-1632053002424-602900664db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  criticalCare: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  diabetology: 'https://images.unsplash.com/photo-1576671414121-aa7c5830366b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
};

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section - improved contrast */}
      <section className="bg-teal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-dm-serif font-bold mb-4 text-white">
                Our Services
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl max-w-3xl mx-auto text-white/90">
                Comprehensive healthcare services delivered with excellence and compassion
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <ServiceSection 
        title="Emergency Service"
        description="Our 24/7 emergency department is equipped to handle all medical emergencies with speed, precision, and care. We have a dedicated team of emergency physicians, trained nurses, and support staff ready to provide immediate care when you need it most."
        imageSrc={serviceImages.emergency}
        imageAlt="Emergency Department"
        reverse={false}
        features={[
          "24/7 availability",
          "Advanced life support systems",
          "Quick response teams",
          "Trauma care specialists",
          "Critical care ambulances",
        ]}
      />

      const serviceImages = {
  opd: '/IMG_7211.JPG',


      {/* OPD */}
      <ServiceSection 
        title="Outpatient Department (OPD)"
        description="Our Outpatient Department provides consultation and treatment for patients who do not require overnight hospitalization. With experienced specialists across various medical disciplines, we offer comprehensive outpatient care with minimal waiting times."
        imageSrc={serviceImages.opd}
        imageAlt="Outpatient Department"
        reverse={true}
        features={[
          "Specialist consultations",
          "Diagnostic services",
          "Treatment procedures",
          "Follow-up care",
          "Health check-up packages",
        ]}
      />

      {/* Surgery */}
      <ServiceSection 
        title="Surgery"
        description="Our surgical department offers a wide range of surgical procedures performed by highly skilled surgeons using advanced techniques and equipment. From minor procedures to complex surgeries, we prioritize patient safety and optimal outcomes."
        imageSrc={serviceImages.surgery}
        imageAlt="Surgery Department"
        reverse={false}
        features={[
          "General surgery",
          "Specialized surgical procedures",
          "Minimally invasive surgery",
          "Advanced surgical equipment",
          "Comprehensive pre and post-operative care",
        ]}
      />

      {/* Maternity */}
      <ServiceSection 
        title="Maternity"
        description="Our maternity services provide comprehensive care for mothers and babies before, during, and after childbirth. With state-of-the-art facilities and a team of experienced obstetricians, gynecologists, and pediatricians, we ensure a safe and comfortable birthing experience."
        imageSrc={serviceImages.maternity}
        imageAlt="Maternity Ward"
        reverse={true}
        features={[
          "Antenatal care",
          "Labor and delivery services",
          "Postnatal care",
          "Neonatal intensive care",
          "Breastfeeding support",
        ]}
      />

      {/* Critical Care */}
      <ServiceSection 
        title="Critical Care"
        description="Our Intensive Care Unit (ICU) provides specialized care for critically ill patients who require close monitoring and advanced life support. With cutting-edge technology and a team of critical care specialists, we deliver round-the-clock intensive care services."
        imageSrc={serviceImages.criticalCare}
        imageAlt="Critical Care Unit"
        reverse={false}
        features={[
          "Advanced monitoring systems",
          "Life support equipment",
          "Specialized intensive care beds",
          "24/7 intensivist coverage",
          "Multidisciplinary critical care team",
        ]}
      />

      {/* Diabetology */}
      <ServiceSection 
        title="Diabetology"
        description="Our diabetology department specializes in the diagnosis, treatment, and management of diabetes and related conditions. We provide comprehensive diabetes care, including education, dietary counseling, and regular monitoring to help patients manage their condition effectively."
        imageSrc={serviceImages.diabetology}
        imageAlt="Diabetology Department"
        reverse={true}
        features={[
          "Diabetes diagnosis and monitoring",
          "Blood glucose management",
          "Dietary counseling",
          "Insulin therapy management",
          "Diabetic foot care",
        ]}
      />

      {/* CTA - improved with luxury styling */}
      <section className="py-16 bg-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-dm-serif font-bold mb-4 text-white">
              Need Our Medical Services?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Book an appointment with our specialists or contact us for more information about our services.
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
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg"
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

interface ServiceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
  features: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse, 
  features 
}) => {
  return (
    <section className={`py-16 md:py-24 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <ScrollReveal className="md:w-1/2">
            <div className="relative">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-auto rounded-lg shadow-lg object-cover luxury-shadow"
                style={{ height: '400px' }}
              />
            </div>
          </ScrollReveal>
          <div className="md:w-1/2">
            <SectionTitle title={title} />
            <ScrollReveal delay={200}>
              <p className="text-gray-700 mb-6">
                {description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal font-bold mr-2">•</span>
                    <span className="text-gray-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
