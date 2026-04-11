import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-extrabold tracking-wide text-white">
                SHUBHSURFACE
              </span>

              <span className="text-gray-400 tracking-[0.3em] text-sm mt-1 pl-24">
                Solutions
              </span>
            </div>

            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Reliable partner in acrylic sheet manufacturing, providing precision-cut, durable materials to enhance industrial, commercial, and creative applications.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16eKycYor9/" target="_blank">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/shubham-verma-19b533208" target="_blank">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/s_s_surface?igsh=eHQxcGdpYnc1d2pz" target="_blank">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Plant Setup</li>
              <li>Acrylic Laminate</li>
              <li>UV Coating</li>
              <li>Extruder</li>
              <li>Technical Support</li>
              <li>Strategic Planning & Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">Rajkot, Gujarat</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:8112518917" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  8382075386
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:1998shubham2017@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  s.s.s.solutions07@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2025 SHUBHSURFACE. All rights reserved. Built with passion and innovation.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
