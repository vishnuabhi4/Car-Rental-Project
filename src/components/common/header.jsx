import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/themeToggle';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom';


export default function Header({ onLoginClick, onSignupClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const dispatch = useDispatch();
const user = useSelector((state) => state.auth.user);
const navigateTo = useNavigate()


  return (
    <header className="bg-gray-50 dark:bg-gray-800 dark:text-white shadow-sm border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-white dark:text-gray-300 font-bold text-lg">CR</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:bg-gray-800 dark:text-white">CarRental Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={()=>navigateTo('/')} className='text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200'>Home</button>
            <button onClick={()=>navigateTo('/cart')} className="text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200">
              Cart
            </button>
            
            <div className="flex items-center space-x-3">
              {user ? (
                <>
                  <span className="text-gray-700 dark:text-white">Welcome, {user.username}</span>
                  <button 
                    onClick={() => dispatch(logout())}
                    className="text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={onLoginClick}
                    className="text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    Login
                  </button>
                  <span className="text-gray-300 dark:bg-gray-800 dark:text-white">|</span>
                  <button onClick={()=>navigateTo('/about')} className='text-gray-700 dark:bg-gray-800 dark:text-white hover:text-blue-600 font-medium transition-colors duration-200'>
                    About us
                  </button>
                </>
              )}
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 dark:text-white">
              <div className="border-t border-gray-100 pt-2">
                {user ? (
                  <>
                    <button className="block w-full text-left px-3 py-2 text-black dark:bg-gray-800 dark:text-white hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200">
                      Profile
                    </button>
                    <button 
                      onClick={onLogout}
                      className="block w-full text-left px-3 py-2 text-black dark:bg-gray-800 dark:text-white hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 mt-1"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={onLoginClick}
                      className="block w-1/2 text-left px-3 py-2 bg-blue-600 text-white dark:bg-gray-800 dark:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200"
                    >
                      Login
                    </button>
                    <button 
                      onClick={()=>navigateTo('/about')}
                      className="block w-1/2 text-left px-2 py-2 mb-1 bg-blue-600 dark:bg-gray-800 dark:text-white hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200 mt-1"
                    >
                      About Us
                    </button>
                  </>
                )}
                <ThemeToggle/>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}