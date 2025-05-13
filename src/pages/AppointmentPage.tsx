
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

interface Doctor {
  id: number;
  name: string;
}

interface Department {
  id: number;
  name: string;
  doctors: Doctor[];
}

const departments: Department[] = [
  {
    id: 1,
    name: "Medicine",
    doctors: [
      { id: 1, name: "Dr. Arindam Roy Choudhury" },
      { id: 2, name: "Dr. Bikash Das" },
      { id: 3, name: "Dr. Jogesh Kalita" },
      { id: 4, name: "Dr. Annu Gupta" }
    ]
  },
  {
    id: 2,
    name: "General Surgery",
    doctors: [
      { id: 1, name: "Dr. Gautam Das" },
      { id: 2, name: "Dr. Kailash Thakuria" },
      { id: 3, name: "Dr. Rubul Das" },
      { id: 4, name: "Dr. John Kr. Kalita" },
      { id: 5, name: "Dr. Najim Haque" },
      { id: 6, name: "Dr. Ridip Mazumder" }
    ]
  },
  {
    id: 3,
    name: "Pediatrics",
    doctors: [
      { id: 1, name: "Dr. Trishna Moral" },
      { id: 2, name: "Dr. Pankaj Nath" },
      { id: 3, name: "Dr. Jadumoni Kataki" }
    ]
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
    ]
  },
  // Add other departments...
];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableDoctors, setAvailableDoctors] = useState<Doctor[]>([]);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    // Filter doctors based on selected department
    if (selectedDepartment) {
      const department = departments.find(dept => dept.name === selectedDepartment);
      if (department) {
        setAvailableDoctors(department.doctors);
        setSelectedDoctor(''); // Reset selected doctor when department changes
      }
    } else {
      setAvailableDoctors([]);
      setSelectedDoctor('');
    }
  }, [selectedDepartment]);

  const handlePayment = () => {
    setIsPaymentProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsPaymentProcessing(false);
      toast.success("Payment successful!");
      setStep(2);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !age || !gender || !selectedDepartment || !selectedDoctor || !date || !time) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Simulate appointment booking
    toast.success("Appointment booked successfully!");
    
    // Reset the form
    setName('');
    setAge('');
    setGender('');
    setSelectedDepartment('');
    setSelectedDoctor('');
    setDate('');
    setTime('');
    
    // Redirect to confirmation
    setStep(3);
  };

  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-royal py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                Book an Appointment
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl max-w-3xl mx-auto">
                Schedule a consultation with our specialized doctors
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Step Indicators */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-royal text-white' : 'bg-gray-300'}`}>1</div>
                <div className={`h-1 w-16 sm:w-32 ${step >= 2 ? 'bg-royal' : 'bg-gray-300'}`}></div>
              </div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-royal text-white' : 'bg-gray-300'}`}>2</div>
                <div className={`h-1 w-16 sm:w-32 ${step >= 3 ? 'bg-royal' : 'bg-gray-300'}`}></div>
              </div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-royal text-white' : 'bg-gray-300'}`}>3</div>
              </div>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className={`${step >= 1 ? 'text-royal' : 'text-gray-500'} -ml-4`}>Payment</span>
              <span className={`${step >= 2 ? 'text-royal' : 'text-gray-500'}`}>Registration</span>
              <span className={`${step >= 3 ? 'text-royal' : 'text-gray-500'} -mr-6`}>Confirmation</span>
            </div>
          </div>

          <ScrollReveal>
            {/* Step 1: Payment */}
            {step === 1 && (
              <div className="max-w-2xl mx-auto">
                <SectionTitle title="Step 1: Booking Fee Payment" subtitle="Pay the non-refundable booking fee to proceed" center />
                
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-playfair font-bold text-royal mb-2">₹100</div>
                    <p className="text-gray-600">Non-refundable booking fee</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h3 className="font-medium text-gray-800 mb-4">Booking Fee Information:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-royal mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        This is a non-refundable booking fee.
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-royal mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        The payment is required to confirm your appointment.
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-royal mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        After payment, you'll need to fill out the registration form.
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    className="w-full bg-royal text-white py-3 rounded-md hover:bg-royal-light transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    onClick={handlePayment}
                    disabled={isPaymentProcessing}
                  >
                    {isPaymentProcessing ? 'Processing...' : 'Pay ₹100 Booking Fee'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Registration Form */}
            {step === 2 && (
              <div className="max-w-2xl mx-auto">
                <SectionTitle title="Step 2: Registration Form" subtitle="Fill in your details to book an appointment" center />
                
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                          Full Name
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="age">
                          Age
                        </label>
                        <input 
                          type="number" 
                          id="age"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          placeholder="Enter your age"
                          min="1"
                          max="120"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="gender">
                          Gender
                        </label>
                        <select 
                          id="gender"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="department">
                          Department
                        </label>
                        <select 
                          id="department"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.name}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="doctor">
                          Doctor
                        </label>
                        <select 
                          id="doctor"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                          disabled={!selectedDepartment}
                          required
                        >
                          <option value="">Select Doctor</option>
                          {availableDoctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.name}>
                              {doctor.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
                          Preferred Date
                        </label>
                        <input 
                          type="date" 
                          id="date"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          min={getTomorrow()}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="time">
                          Preferred Time
                        </label>
                        <select 
                          id="time"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button 
                        type="submit"
                        className="w-full bg-royal text-white py-3 rounded-md hover:bg-royal-light transition-colors"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-playfair font-bold text-royal mb-4">Appointment Confirmed!</h2>
                  <p className="text-gray-600 mb-6">
                    Your appointment has been successfully booked. A confirmation has been sent to your phone number.
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h3 className="font-medium text-gray-800 mb-4">Important information:</h3>
                    <ul className="space-y-2 text-gray-600 text-left">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-royal mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Please arrive 15 minutes before your scheduled appointment.
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-royal mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Bring any previous medical records, prescriptions, and test reports.
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-royal mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        For any changes or cancellations, please contact us at least 24 hours before your appointment.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Link 
                      to="/" 
                      className="bg-royal text-white py-3 px-6 rounded-md hover:bg-royal-light transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
