
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-dm-serif font-bold mb-4 text-skyblue-light">Mirza Multispeciality Hospital</h3>
            <p className="mb-4">Your Health Is Our Priority</p>
            <p className="text-sm text-gray-200">
              Tech City, Mirza, Near IIITG<br />
              Bongora, Guwahati<br />
              Assam-781015
            </p>
          </div>

          <div>
            <h3 className="text-xl font-dm-serif font-bold mb-4 text-skyblue-light">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-skyblue-light transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-skyblue-light transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">Services</Link></li>
              <li><Link to="/departments" className="hover:text-skyblue-light transition-colors duration-300">Departments</Link></li>
              <li><Link to="/gallery" className="hover:text-skyblue-light transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-skyblue-light transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-dm-serif font-bold mb-4 text-skyblue-light">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">Emergency Service</Link></li>
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">OPD</Link></li>
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">Surgery</Link></li>
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">Maternity</Link></li>
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">Critical Care</Link></li>
              <li><Link to="/services" className="hover:text-skyblue-light transition-colors duration-300">Diabetology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-dm-serif font-bold mb-4 text-skyblue-light">Contact Us</h3>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-skyblue-light">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +91 8011260929
            </p>
            <p className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-skyblue-light">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              mirzamultispecialityhospital@gmail.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/share/15CB9kDF5G/?mibextid=wwXIfr" className="text-white hover:text-skyblue-light transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/mirza.multispeciality.hospital" className="text-white hover:text-skyblue-light transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-200">
  <p>&copy; {new Date().getFullYear()} Mirza Multispeciality Hospital. All rights reserved.</p>
  <p>
    Website Designed By{" "}
    <a
      href="https://growvaa.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-skyblue-light font-semibold hover:underline"
    >
      Growvaa
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
