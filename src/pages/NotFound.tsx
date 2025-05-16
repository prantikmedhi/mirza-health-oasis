
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-soft-grey relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-royal/10"></div>
        <div className="absolute right-10 bottom-10 w-96 h-96 rounded-full bg-royal/5"></div>
      </div>
      
      {/* Content */}
      <div className="text-center relative z-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
        <h1 className="text-8xl font-bold text-royal mb-4 font-playfair">404</h1>
        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
        <h2 className="text-2xl font-medium text-royal mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We're sorry, the page you requested could not be found. 
          It seems that the page you were trying to access doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="default"
            className="bg-royal hover:bg-royal/90 text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
          <Button 
            variant="outline"
            className="border-royal text-royal hover:bg-royal/5"
            onClick={() => window.location.href = "/"}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
