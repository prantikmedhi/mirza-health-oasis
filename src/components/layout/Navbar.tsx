
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

// Logo URL - replace with your actual logo
const logoUrl = 'https://i.postimg.cc/KckSmbGh/IMG-7163.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sticky top-0' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3" aria-label="Return to homepage">
          <img src={logoUrl} alt="Mirza Hospital Logo" className="h-12 md:h-14 object-contain" />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold leading-tight text-royal">
              Mirza 
            </span>
            <span className="text-md md:text-lg font-semibold text-royal">
              Multispeciality Hospital
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/departments">Departments</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link 
            to="/appointment" 
            className="bg-teal hover:bg-teal-light text-white px-5 py-2 rounded-md transition-colors duration-300 shadow-sm"
            aria-label="Book an appointment"
          >
            Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-teal focus:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden bg-white/95 backdrop-blur-md shadow-md absolute top-full left-0 right-0 animate-fade-in z-50"
          id="mobile-menu"
          role="menu"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/departments" onClick={() => setIsMobileMenuOpen(false)}>Departments</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            <Link 
              to="/appointment" 
              className="bg-teal text-white hover:bg-teal-light px-4 py-3 rounded text-center transition-colors duration-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Book an appointment"
            >
              Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-charcoal hover:text-teal transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal hover:after:w-full after:transition-all after:duration-300"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-charcoal hover:text-teal transition-colors duration-300 font-medium py-2 border-b border-coolgray/30"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
