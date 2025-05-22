import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

interface Department {
  id: number;
  name: string;
}

const departments: Department[] = [
  { id: 1, name: "General Medicine" },
  { id: 2, name: "General Surgery" },
  { id: 3, name: "Gynecology & Obstetrics" },
  { id: 4, name: "Pediatrics & Neonatology" },
  { id: 5, name: "Orthopedics" },
  { id: 6, name: "ENT (Ear, Nose & Throat)" },
  { id: 7, name: "Dermatology" },
  { id: 8, name: "Cardiology (Non-invasive)" },
  { id: 9, name: "Radiology & Imaging" },
  { id: 10, name: "Pathology & Diagnostics" },
  { id: 11, name: "Urology" },
  { id: 12, name: "Gastroenterology" },
  { id: 13, name: "Anesthesiology" },
  { id: 14, name: "Physiotherapy & Rehabilitation" },
  { id: 15, name: "Emergency & Trauma Care" },
  { id: 16, name: "Psychiatry & Mental Health" },
  { id: 17, name: "Ophthalmology" },
  { id: 18, name: "Dental Care" }
];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    dob: '',
    age: '',
    gender: '',
    nationality: '',
    maritalStatus: '',
    passportNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    phoneNumber: '',
    mobileNumber: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  useEffect(() => {
    if (formData.dob) {
      const today = new Date();
      const birthDate = new Date(formData.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      setFormData(prev => ({ ...prev, age: age.toString() }));
    }
  }, [formData.dob]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      'name', 'fathersName', 'dob', 'age', 'gender', 'nationality', 'maritalStatus',
      'address', 'city', 'state', 'country', 'pincode', 'phoneNumber', 'mobileNumber',
      'department'
    ];

    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    if (formData.nationality !== 'India' && !formData.passportNumber) {
      toast.error("Passport number is required for foreign nationals");
      return;
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyeKx60rcTYEgEWnwZM3LbdlszRYWsdt46PeUJKyQacTcV7u1cQpSffDCbFfT59Wjxn/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(2);
      } else {
        toast.error("Failed to submit appointment. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-[#197C6E] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                Book an Appointment
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl max-w-3xl mx-auto">
                Fill in your details to book an appointment with our specialists
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C8E6F6]">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#197C6E] text-white' : 'bg-gray-300'}`}>1</div>
                <div className={`h-1 w-16 sm:w-32 ${step >= 2 ? 'bg-[#197C6E]' : 'bg-gray-300'}`}></div>
              </div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#197C6E] text-white' : 'bg-gray-300'}`}>2</div>
              </div>
            </div>
            <div className="flex justify-between text-sm mt-2 max-w-xs mx-auto">
              <span className={`${step >= 1 ? 'text-[#197C6E]' : 'text-gray-500'}`}>Registration</span>
              <span className={`${step >= 2 ? 'text-[#197C6E]' : 'text-gray-500'}`}>Confirmation</span>
            </div>
          </div>

          <ScrollReveal>
            {step === 1 && (
              <div className="max-w-4xl mx-auto">
                <SectionTitle title="Patient Registration Form" subtitle="Fill in your details to book an appointment" center />

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Personal Information */}
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Full Name*</label>
                        <input
                          type="text"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Father's/Spouse's Name*</label>
                        <input
                          type="text"
                          name="fathersName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.fathersName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Date of Birth*</label>
                        <input
                          type="date"
                          name="dob"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Age*</label>
                        <input
                          type="number"
                          name="age"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.age}
                          readOnly
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Gender*</label>
                        <select
                          name="gender"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Nationality*</label>
                        <select
                          name="nationality"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.nationality}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Nationality</option>
                          <option value="India">India</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {formData.nationality === 'Other' && (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">Passport Number*</label>
                          <input
                            type="text"
                            name="passportNumber"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                            value={formData.passportNumber}
                            onChange={handleChange}
                            required={formData.nationality === 'Other'}
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Marital Status*</label>
                        <select
                          name="maritalStatus"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.maritalStatus}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Status</option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                        </select>
                      </div>

                      {/* Contact Information */}
                      <div className="md:col-span-2 border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-medium text-[#197C6E] mb-4">Contact Information</h3>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Address*</label>
                        <input
                          type="text"
                          name="address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">City*</label>
                        <input
                          type="text"
                          name="city"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">State*</label>
                        <input
                          type="text"
                          name="state"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Country*</label>
                        <input
                          type="text"
                          name="country"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Pincode*</label>
                        <input
                          type="text"
                          name="pincode"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number*</label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number*</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Appointment Information */}
                      <div className="md:col-span-2 border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-medium text-[#197C6E] mb-4">Appointment Information</h3>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Department*</label>
                        <select
                          name="department"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#197C6E]"
                          value={formData.department}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.name}>{dept.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button type="submit" className="w-full bg-[#197C6E] text-white py-3 rounded-md hover:bg-[#156354] transition-colors">
                        Submit Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-playfair font-bold text-[#197C6E] mb-4">Appointment Request Submitted!</h2>
                  <p className="text-gray-600 mb-6">
                    Your appointment request has been successfully submitted. Our team will contact you shortly to confirm your appointment.
                  </p>

                  <div className="border-t border-gray-200 pt-6 mb-6 text-left">
                    <h3 className="text-lg font-medium text-[#197C6E] mb-4">Patient Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Patient Name</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium">{formData.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Contact Number</p>
                        <p className="font-medium">{formData.mobileNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{formData.email || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <ul className="space-y-2 text-gray-600 text-left">
                      <li>Please keep your phone available for our call.</li>
                      <li>Have your medical records ready if needed.</li>
                      <li>Contact us if you need to make any changes.</li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Link to="/" className="bg-[#197C6E] text-white py-3 px-6 rounded-md hover:bg-[#156354] transition-colors">
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
