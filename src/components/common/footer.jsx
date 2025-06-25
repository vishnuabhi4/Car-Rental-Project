import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './footer.css'

export default function CarRentalFooter() {
  return (
    <footer className="footer bg-gray-50 text-black dark:bg-gray-800 dark:text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CR</span>
              </div>
              <h3 className="text-xl font-bold">CarRental Pro</h3>
            </div>
            <p className="text-black text-sm leading-relaxed dark:bg-gray-800 dark:text-white">
              Your trusted partner for premium car rental services. We provide reliable, 
              affordable, and convenient transportation solutions for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-balc-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-balc-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-balc-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-balc-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Fleet', 'Pricing', 'Locations', 'Special Offers', 'Corporate Rentals'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-balc-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {['Economy Cars', 'Luxury Vehicles', 'SUVs & Trucks', 'Long-term Rental', 'One-way Rental', 'Airport Pickup'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-balc-300 hover:text-sky-700 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-balc-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-balc-300 text-sm">123 Main Street</p>
                  <p className="text-balc-300 text-sm">Downtown, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-balc-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-balc-300 hover:text-sky-700 text-sm transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-balc-400 flex-shrink-0" />
                <a href="mailto:info@carrentalpro.com" className="text-balc-300 hover:text-sky-700 text-sm transition-colors">
                  info@carrentalpro.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-balc-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-balc-300 text-sm">Mon-Fri: 7:00 AM - 9:00 PM</p>
                  <p className="text-balc-300 text-sm">Sat-Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-balc-800 border-t border-balc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-balc-300 text-sm">Subscribe to get special offers and updates</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-balc-700 border border-balc-600 rounded-lg text-white placeholder-balc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-balc-950 border-t border-balc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-balc-400 text-sm mb-4 md:mb-0">
              © 2025 CarRental Pro. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-balc-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-balc-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-balc-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-balc-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}