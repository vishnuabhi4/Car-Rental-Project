import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/themeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white  shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white dark:text-gray-300 font-bold text-lg">CR</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:bg-gray-800 dark:text-white ">CarRental Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <button className="text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200">
              Become a Host
            </button>
            <button className="text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200">
              Get the App
            </button>
            <div className="flex items-center space-x-3">
              <button className="text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200">
                Login
              </button>
              <span className="text-gray-300 dark:bg-gray-800 dark:text-white">|</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                Sign Up
              </button>
               <ThemeToggle/>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white  dark:bg-gray-800 dark:text-white">
              <button className="block w-full text-left px-3 py-2 text-black  dark:bg-gray-800 dark:text-white font-semibold hover:text-blue-600 hover:bg-gray-50 rounded-md  transition-colors duration-200">
                Become a Host
              </button>
              <button className="block w-full text-left px-3 py-2 text-black  dark:bg-gray-800 dark:text-white hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200">
                Get the App
              </button>
              <div className="border-t border-gray-100 pt-2">
                <button className="block w-full text-left px-3 py-2 bg-blue-600 text-black  dark:bg-gray-800 dark:text-white hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200">
                  Login
                </button>
                <button className="block w-full text-left px-3 py-2 bg-blue-600  dark:bg-gray-800 dark:text-white hover:text-blue-700 text-white rounded-md font-medium transition-colors duration-200 mt-1">
                  Sign Up
                </button>
               <ThemeToggle/>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}