import { Mail } from "lucide-react";
import { Map } from "lucide-react";
export default function Header() {
    return (
      <header className="bg-white py-4 border-b hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left Side: Email & Location */}
          <div className="flex items-center gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-main">
                <Mail size="20" className="text-main" /> 
              </span>
              <a href="mailto:info@company.com" className="hover:text-orange-500">
                villaagency@gmail.com
              </a>
            </div>
  
            <div className="hidden md:flex items-center gap-2 border-l pl-4">
              <span className="text-main"><Map size={20}/></span>
              <p>Sunny Isles Beach, FL 33160</p>
            </div>
          </div>
  
          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-4">
            {["facebook", "twitter", "linkedin", "instagram"].map((icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-main">
                <i className={`fab fa-${icon} text-lg`}></i> {/* FontAwesome Icons */}
              </a>
            ))}
          </div>
        </div>
      </header>
    );
  }
  