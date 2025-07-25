import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-14 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-2">
              Have <span className="text-yellow-500">any questions?</span>
            </h3>
            <p className="text-sm mb-6">Contact Us</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-yellow-600" />
                <span>(0324) 544 7574</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-600" />
                <span>hello@groosom.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-600 mt-1" />
                <span>
                  One Apple Park Way, Cupertino
                  <br /> CA 95014, U.S.A.
                </span>
              </div>
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Corporate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-yellow-600">About Us</Link></li>
              <li><Link to="/Certificates" className="hover:text-yellow-600">Certificates</Link></li>
              <li><Link to="/ourmission" className="hover:text-yellow-600">Our Mission</Link></li>
              <li><Link to="/ourvision" className="hover:text-yellow-600">Our Vision</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 w-full h-56 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531654!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776f9c7c8eabc1!2sApple!5e0!3m2!1sen!2sus!4v1629873745370!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6 pb-4 text-xs text-gray-500 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Groosom. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
