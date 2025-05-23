import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { X, UserRound } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty?: string;
  education?: string;
  experience?: string;
  bio?: string;
  image?: string;
}

interface Department {
  id: number;
  name: string;
  doctors: Doctor[];
  icon?: React.ReactNode;
}

const DepartmentsPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set departments data with enhanced doctor information
    setDepartments([
      {
        id: 1,
        name: "Medicine",
        doctors: [
          { 
            id: 1, 
            name: "Dr. Arindam Roy Choudhury",
               },
          { 
            id: 2, 
            name: "Dr. Bikash Das",
              },
          { 
            id: 3, 
            name: "Dr. Jogesh Kalita",
              },
          { 
            id: 4, 
            name: "Dr. Annu Gupta",
              }
        ],





        
      },
      {
        id: 2,
        name: "General Surgery",
        doctors: [
          { 
            id: 1, 
            name: "Dr. Gautam Das",
                 },
          { 
            id: 2, 
            name: "Dr. Kailash Thakuria",
              },
          { 
            id: 3, 
            name: "Dr. Rubul Das",
              },
          { 
            id: 4, 
            name: "Dr. John Kr. Kalita",
               },
          { 
            id: 5, 
            name: "Dr. Najim Haque",
              },
          { 
            id: 6, 
            name: "Dr. Ridip Mazumder",
            }
        ],
        
      },
      {
        id: 3,
        name: "Pediatrics",
        doctors: [
          { id: 1, name: "Dr. Trishna Moral" },
          { id: 2, name: "Dr. Pankaj Nath" },
          { id: 3, name: "Dr. Jadumoni Kataki" }
        ],
        
      },
      {
        id: 4,
        name: "Obstetrics & Gynaecology",
        doctors: [
          { id: 1, name: "Dr. Sasindra Kr. Das" },
          { id: 2, name: "Dr. Pinki Mazumdar" },
          { id: 3, name: "Dr. Dhiraj Das" },
          { id: 4, name: "Dr. Pranab Mahanta" },
          { id: 5, name: "Dr. Sumi Deka" },
          { id: 6, name: "Dr. Manisha Paul" },
          { id: 7, name: "Dr. Hiranya Kr. Baishya" }
        ],
        
      },
      {
        id: 5,
        name: "Urology",
        doctors: [
          { id: 1, name: "Dr. Debangya Sarma" },
          { id: 2, name: "Dr. Sovik Dey" }
        ],
        
      },
      {
        id: 6,
        name: "Orthopaedics & Sports Medicine",
        doctors: [
          { id: 1, name: "Dr. Jugantar Roy" },
          { id: 2, name: "Dr. Rituraj Neo" },
          { id: 3, name: "Dr. Bikash Bordoloi" },
          { id: 4, name: "Dr. Neelkamal Kalita" },
          { id: 5, name: "Dr. Bishal Deka" }
        ],
        
      },
      {
        id: 7,
        name: "Neurosurgery",
        doctors: [
          { id: 1, name: "Dr. Hriday Haloi" },
          { id: 2, name: "Dr. Kishore Sarma" }
        ],
        
      },
      {
        id: 8,
        name: "Cardiology",
        doctors: [
          { id: 1, name: "Dr. Anupam Das" }
        ],
        
      },
      {
        id: 9,
        name: "ENT",
        doctors: [
          { id: 1, name: "Dr. Taufikul Islam" },
          { id: 2, name: "Dr. N.N. Talukdar" },
          { id: 3, name: "Dr. P.K. Choudhury" },
          { id: 4, name: "Dr. Tapan Sarma" },
          { id: 5, name: "Dr. Rajkumar Mahanta" }
        ],
        
      },
      {
        id: 10,
        name: "Dermatology",
        doctors: [
          { id: 1, name: "Dr. Syed Adam Mouom" },
          { id: 2, name: "Dr. Shabana Choudhury" },
          { id: 3, name: "Dr. Prajyaklira Sarma" }
        ],
        
      },
      {
        id: 11,
        name: "Oncosurgery",
        doctors: [
          { id: 1, name: "Dr. Kailash Thakuria" }
        ],
        
      },
      {
        id: 12,
        name: "Diabetology",
        doctors: [
          { id: 1, name: "Dr. Mukib Akhtar Hussain" }
        ],
        
      },
      {
        id: 13,
        name: "Anesthesia & Critical Care",
        doctors: [
          { id: 1, name: "Dr. Bitupan Das" },
          { id: 2, name: "Dr. Angshuman Kalita" },
          { id: 3, name: "Dr. Pranab Rabha" },
          { id: 4, name: "Dr. Amal Choudhury" }
        ],
        
      }
    ]);
  }, []);

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeDialog = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-royal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <ScrollReveal>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
  Our Departments
</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl max-w-3xl mx-auto text-white font-medium">
                Specialized medical departments staffed by experienced professionals
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Medical Departments" 
            subtitle="Our hospital offers comprehensive care across various medical specialties" 
            center
          />
          
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              {/* Tabs navigation */}
              <div className="overflow-x-auto">
                <div className="flex min-w-max border-b">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      className={`px-6 py-4 text-center whitespace-nowrap font-medium transition-colors duration-300 ${
                        activeTab === dept.id
                          ? 'text-royal border-b-2 border-royal bg-blue-50'
                          : 'text-gray-600 hover:text-royal'
                      }`}
                      onClick={() => setActiveTab(dept.id)}
                    >
                      <span className="flex items-center">
                        {dept.icon && <span className="mr-2">{dept.icon}</span>}
                        <span>{dept.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              <div className="p-6">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className={`${activeTab === dept.id ? 'block animate-fade-in' : 'hidden'}`}
                  >
                    <h3 className="text-2xl font-playfair font-bold text-royal mb-6">
                      {dept.name} Department
                    </h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dept.doctors.map((doctor) => (
                        <Card 
                          key={doctor.id}
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer"
                          onClick={() => handleDoctorClick(doctor)}
                        >
                          <div className="h-48 overflow-hidden bg-royal/5 flex items-center justify-center">
                            <div className="text-royal/70">
                              <UserRound size={64} strokeWidth={1.5} />
                            </div>
                          </div>
                          
                          <CardContent className="p-4">
                            <h4 className="text-lg font-medium text-royal">
                              {doctor.name}
                            </h4>
                            {doctor.specialty && (
                              <p className="text-gray-500 text-sm mt-1">
                                {doctor.specialty}
                              </p>
                            )}





                            
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      


    
      {/* Statistics */}
<section className="py-16 bg-soft-grey">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <StatCard number="13+" text="Departments" />
      <StatCard number="50+" text="Doctors" />
      <StatCard number="100+" text="Staff Members" />
    </div>
  </div>
</section>

      
      {/* CTA */}
      <section className="py-16 bg-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Need to Consult a Specialist?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-medium">
              Book an appointment with our experienced doctors today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/appointment" 
                className="bg-gold text-royal hover:bg-gold-light transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg"
              >
                Book Appointment
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal transition-colors duration-300 py-3 px-8 rounded-md font-medium text-lg"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

interface StatCardProps {
  number: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, text }) => {
  return (
    <ScrollReveal>
      <div className="p-6">
        <h3 className="text-4xl font-playfair font-bold text-royal mb-2">{number}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </ScrollReveal>
  );
};

export default DepartmentsPage;
