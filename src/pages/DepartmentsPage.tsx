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

  const location = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);

  const departmentsData: Department[] = [
  
    
    // Set departments data with enhanced doctor information
  
      {
        id: 1,
        name: "Medicine",
        doctors: [
          { 
            id: 1, 
            name: "Dr. Arindam Roy Choudhury",
            specialty: "Internal Medicine",
            education: "MBBS, MD (Medicine)",
            experience: "15+ years",
            bio: "Dr. Arindam is a seasoned internist with extensive experience in treating complex medical conditions."
          },
          { 
            id: 2, 
            name: "Dr. Bikash Das",
            specialty: "General Medicine",
            education: "MBBS, DNB",
            experience: "12+ years",
            bio: "Dr. Bikash specializes in preventive care and management of chronic diseases."
          },
          { 
            id: 3, 
            name: "Dr. Jogesh Kalita",
            specialty: "Pulmonology",
            education: "MBBS, MD (Pulmonary Medicine)",
            experience: "10+ years",
            bio: "Dr. Jogesh is an expert in respiratory disorders and sleep medicine."
          },
          { 
            id: 4, 
            name: "Dr. Annu Gupta",
            specialty: "Medical Oncology",
            education: "MBBS, MD, DM (Medical Oncology)",
            experience: "8+ years",
            bio: "Dr. Annu specializes in medical management of various cancer treatments."
          }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M19 15V9c0-1.7-1.3-3-3-3h-8L3 12v6c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3M9 9h.01M15 9h.01"></path>
            <path d="M9 12h6"></path>
          </svg>
        )
      },
      {
        id: 2,
        name: "General Surgery",
        doctors: [
          { 
            id: 1, 
            name: "Dr. Gautam Das",
            specialty: "General Surgery",
            education: "MBBS, MS (General Surgery)",
            experience: "18+ years",
            bio: "Dr. Gautam is an experienced general surgeon specializing in minimally invasive procedures."
          },
          { 
            id: 2, 
            name: "Dr. Kailash Thakuria",
            specialty: "Surgical Oncology",
            education: "MBBS, MS, MCh (Surgical Oncology)",
            experience: "16+ years",
            bio: "Dr. Kailash is a surgical oncologist with expertise in complex cancer surgeries."
          },
          { 
            id: 3, 
            name: "Dr. Rubul Das",
            specialty: "Laparoscopic Surgery",
            education: "MBBS, MS, FMAS",
            experience: "12+ years",
            bio: "Dr. Rubul specializes in advanced laparoscopic and robotic surgical techniques."
          },
          { 
            id: 4, 
            name: "Dr. John Kr. Kalita",
            specialty: "Gastrointestinal Surgery",
            education: "MBBS, MS, DNB",
            experience: "13+ years",
            bio: "Dr. John focuses on gastrointestinal surgeries and has pioneered several new techniques in the field."
          },
          { 
            id: 5, 
            name: "Dr. Najim Haque",
            specialty: "Vascular Surgery",
            education: "MBBS, MS (Surgery), DNB (Vascular Surgery)",
            experience: "9+ years",
            bio: "Dr. Najim is specialized in vascular and endovascular surgeries."
          },
          { 
            id: 6, 
            name: "Dr. Ridip Mazumder",
            specialty: "Plastic Surgery",
            education: "MBBS, MS, MCh (Plastic Surgery)",
            experience: "11+ years",
            bio: "Dr. Ridip is a skilled plastic surgeon specializing in reconstructive procedures."
          }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M13 12H7m5-4l-5 8m7-8l5 8m-5-8v8"></path>
          </svg>
        )
      },
      {
        id: 3,
        name: "Pediatrics",
        doctors: [
          { id: 1, name: "Dr. Trishna Moral" },
          { id: 2, name: "Dr. Pankaj Nath" },
          { id: 3, name: "Dr. Jadumoni Kataki" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path>
            <path d="M12 6v4l3 3"></path>
          </svg>
        )
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
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"></path>
            <path d="M12 6v4l3 3"></path>
          </svg>
        )
      },
      {
        id: 5,
        name: "Urology",
        doctors: [
          { id: 1, name: "Dr. Debangya Sarma" },
          { id: 2, name: "Dr. Sovik Dey" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9.17 16.83a4 4 0 1 0 5.66 0m-5.66 0A5.99 5.99 0 0 1 10 12v-2a2 2 0 1 1 4 0v2c0 1.82.82 3.44 2.12 4.52"></path>
            <path d="M10 12H8m8 0h-2"></path>
          </svg>
        )
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
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M8.5 14.5A2.5 2.5 0 1 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-1.5-4.5 0-8 0 0-2.5 1-2.5 5 0 2 1 3 1 4s-.5 2-2.5 3c-1 .5-1.5 2-1.5 3.5.423-.966 1.405-1.5-2.5-1.5-2.5 0-2.5 2.5-2.5 2.5V20c0 .5-.5 1.5-2.5 1.5S3 19.5 3 17.5c0-1.5.5-3-2-4-1.5-1-2-2-2-2"></path>
            <path d="M15.5 14.5A2.5 2.5 0 1 1 13 12c0-1.38.5-2 1-3 1.072-2.143 1.5-4.5 0-8 0 0 2.5 1 2.5 5 0 2-1 3-1 4s.5 2 2.5 3c1 .5 1.5 2 1.5 3.5-.423-.966-1.405-1.5-2.5-1.5-2.5 0-2.5 2.5-2.5 2.5V20c0 .5.5 1.5 2.5 1.5s2.5-2 2.5-4c0-1.5-.5-3-2-4-1.5-1-2-2-2-2"></path>
          </svg>
        )
      },
      {
        id: 7,
        name: "Neurosurgery",
        doctors: [
          { id: 1, name: "Dr. Hriday Haloi" },
          { id: 2, name: "Dr. Kishore Sarma" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M15.5 3a2.5 2.5 0 0 1 0 5h-12a2.5 2.5 0 0 1 0-5Z"></path>
            <path d="M12.5 8v5.5a2.5 2.5 0 0 1-5 0V8"></path>
            <path d="M5 8v5.5a2.5 2.5 0 0 0 5 0V8"></path>
            <path d="M15.1 21H9l-4-7h9l-1 7"></path>
            <path d="m16 11 4.2 7.4A2 2 0 0 1 18.7 21H16v-3"></path>
          </svg>
        )
      },
      {
        id: 8,
        name: "Cardiology",
        doctors: [
          { id: 1, name: "Dr. Anupam Das" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9.17 16.83a4 4 0 1 0 5.66 0m-5.66 0A5.99 5.99 0 0 1 10 12v-2a2 2 0 1 1 4 0v2c0 1.82.82 3.44 2.12 4.52"></path>
            <path d="M10 12H8m8 0h-2"></path>
          </svg>
        )
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
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="m2 12 8 8 12-12"></path>
            <path d="m2 12 8-8 12 12"></path>
          </svg>
        )
      },
      {
        id: 10,
        name: "Dermatology",
        doctors: [
          { id: 1, name: "Dr. Syed Adam Mouom" },
          { id: 2, name: "Dr. Shabana Choudhury" },
          { id: 3, name: "Dr. Prajyaklira Sarma" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M5 5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v9a5 5 0 0 1-7 0 5 5 0 0 0-7 0Z"></path>
            <path d="M5 5v14"></path>
          </svg>
        )
      },
      {
        id: 11,
        name: "Oncosurgery",
        doctors: [
          { id: 1, name: "Dr. Kailash Thakuria" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M13 12H7m5-4l-5 8m7-8l5 8m-5-8v8"></path>
          </svg>
        )
      },
      {
        id: 12,
        name: "Diabetology",
        doctors: [
          { id: 1, name: "Dr. Mukib Akhtar Hussain" }
        ],
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M15.42 18.61A2.4 2.4 0 1 0 19.5 17m-3.94 1.54-.82 2.1m.1-2.45-1.13-11.8m5.7 12.44A2.4 2.4 0 1 0 24 16.6m-4.58 2.03.7 1.86m-.9-2.23L17.1 6.47"></path>
            <path d="M5.75 13.4h2.5v2.2h-2.5z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.34 10.55H5.45l-4.6-6.55h12.7l-4.6 6.55H5.76"></path>
          </svg>
        )
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
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9.17 16.83a4 4 0 1 0 5.66 0m-5.66 0A5.99 5.99 0 0 1 10 12v-2a2 2 0 1 1 4 0v2c0 1.82.82 3.44 2.12 4.52"></path>
            <path d="M10 12H8m8 0h-2"></path>
          </svg>
        )
      }
    setDepartments(departmentsData);

  // Get department name from URL and activate that tab
  const params = new URLSearchParams(location.search);
  const deptName = params.get("name");

  if (deptName) {
    const matching = departmentsData.find((d) => d.name.toLowerCase() === deptName.toLowerCase());
    if (matching) {
      setActiveTab(matching.id);
    }
  }
}, [location.search]);


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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
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
                            <div className="mt-2 text-sm text-gray-600">
                              <p>Click for more details</p>
                            </div>
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

      {/* Doctor Details Dialog */}
      <Dialog open={selectedDoctor !== null} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-royal">{selectedDoctor?.name}</span>
              <button 
                onClick={closeDialog} 
                className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogTitle>
            <DialogDescription>
              {selectedDoctor?.specialty}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="h-48 overflow-hidden bg-royal/5 flex items-center justify-center rounded-md">
              <div className="text-royal/70">
                <UserRound size={64} strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="space-y-4">
              {selectedDoctor?.bio && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">About</h4>
                  <p className="text-sm">{selectedDoctor.bio}</p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                {selectedDoctor?.education && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Education</h4>
                    <p className="text-sm">{selectedDoctor.education}</p>
                  </div>
                )}
                
                {selectedDoctor?.experience && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Experience</h4>
                    <p className="text-sm">{selectedDoctor.experience}</p>
                  </div>
                )}
              </div>
              
              <div className="pt-2">
                <button 
                  onClick={() => window.location.href = "/appointment"}
                  className="bg-royal text-white px-4 py-2 rounded hover:bg-royal/90 transition-colors w-full"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Statistics */}
      <section className="py-16 bg-soft-grey">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="13+" text="Departments" />
            <StatCard number="50+" text="Doctors" />
            <StatCard number="100+" text="Staff Members" />
            <StatCard number="10000+" text="Patients Served" />
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
