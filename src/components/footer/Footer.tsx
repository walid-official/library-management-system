import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
    <footer className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">LibraryPro</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Your ultimate solution for modern library management. Streamline operations, enhance user experience.
            </p>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} LibraryPro. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Features
              </Link>
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Pricing
              </Link>
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                About Us
              </Link>
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Legal</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info (Optional, if 4 columns) */}
          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>123 Library Lane, Booktown, BL 12345</p>
              <p>Email: support@librarypro.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            {/* Social Media Icons Placeholder */}
            <div className="flex gap-4 pt-2">
              <Link to="/" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="/" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.7c-.097 0-.19-.007-.283-.015a4.106 4.106 0 003.29 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link to="/" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.86 8.17 6.84 9.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.6.07-.6.07-.6 1.02.07 1.56 1.05 1.56 1.05.9 1.56 2.34 1.1 2.9 1.1.09-.85.35-1.1.63-1.34-2.22-.25-4.55-1.1-4.55-4.95 0-1.1.39-2 .99-2.7-.1-.25-.43-1.27.09-2.65 0 0 .8-.25 2.6.95.76-.2 1.56-.3 2.36-.3.8 0 1.6.1 2.36.3 1.8-1.2 2.6-.95 2.6-.95.52 1.38.19 2.4.09 2.65.6.7.99 1.6.99 2.7 0 3.87-2.33 4.7-4.55 4.95.35.3.67.8.67 1.6v2.35c0 .26.18.57.68.48C19.14 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;