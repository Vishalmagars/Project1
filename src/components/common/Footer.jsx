import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 pt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-extrabold uppercase tracking-widest mb-4">
              Have <span className="bg-black text-white px-1">Any Questions?</span>
            </h3>
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wide">
              Contact Us
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-black" />
                <span>(0324) 544 7574</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-black" />
                <span>hello@groosom.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-black mt-1" />
                <span>
                  One Apple Park Way, Cupertino
                  <br /> CA 95014, U.S.A.
                </span>
              </div>
            </div>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-gray-500 mb-4">
              Corporate
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gray-500 transition-colors">About Us</Link></li>
              <li><Link to="/Certificates" className="hover:text-gray-500 transition-colors">Certificates</Link></li>
              <li><Link to="/ourmission" className="hover:text-gray-500 transition-colors">Our Mission</Link></li>
              <li><Link to="/ourvision" className="hover:text-gray-500 transition-colors">Our Vision</Link></li>
              <li><Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2 w-full h-60 rounded-2xl overflow-hidden shadow-md">
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
        <div className="border-t border-gray-200 pt-6 pb-8 text-center">
          <p className="text-xs text-gray-500 mb-3">
            © {new Date().getFullYear()} <span className="font-semibold">Groosom</span>. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
