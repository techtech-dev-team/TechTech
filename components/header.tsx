'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'About Us', href: '#aboutus' },
  { name: 'Contact Us', href: '#contact-us' }, 
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-transparent">
      <div
        className={`mx-auto border rounded-[50px] mt-5 flex items-center justify-between px-6 py-3 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-silver shadow-md' : 'container'}`}
        style={{
          height: '70px',
          maxWidth: '1200px',
          backgroundColor: isScrolled ? 'silver' : 'transparent',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={60} height={20} className="object-left" />
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={false} 
              className={`text-sm transition-colors duration-300 rounded-lg px-2 py-1 text-gray-600 hover:text-[#7045ff] hover:bg-[#f3f1f1]`}
              onClick={(e) => {
                if (item.name === 'Contact Us') {
                  e.preventDefault(); 
                  openModal(); 
                }

                if (item.name === 'Home') {
                  e.preventDefault(); 
                  const target = document.querySelector('main'); 
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' }); 
                  }
                }

                if (item.href.startsWith('#')) {
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:text-[#ffffff] transition-colors duration-300 rounded-xl border-none"
            onClick={openModal}
          >
            Get In Touch
          </Button>

          <Button
            variant="ghost"
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-12">
            <Image src="/logo.png" alt="Logo" width={80} height={30} className="object-left" />
            <Button
              variant="ghost"
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={toggleMobileMenu}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                className="block text-2xl font-semibold transition-colors duration-300 text-gray-800 hover:text-[#7045ff]"
                onClick={(e) => {
                  toggleMobileMenu();
                  if (item.name === 'Contact Us') {
                    e.preventDefault(); // Prevent navigation on mobile
                    openModal(); // Open the modal instead
                  }

                  if (item.name === 'Home') {
                    e.preventDefault(); // Prevent default behavior to allow smooth scroll to top
                    const target = document.querySelector('main');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }

                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="bg-black p-12 rounded-lg shadow-xl text-center w-full max-w-2xl animate__animated animate__fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-lg text-white mb-6">You can reach us at the following:</p>

            {/* Contact Information */}
            <div className="flex justify-center items-center space-x-8 text-white">
              {/* Phone Number */}
              <div className="flex items-center space-x-3">
                <Phone className="w-8 h-8 text-white" />
                <span className="text-xl font-semibold">9619555596</span>
              </div>

              {/* WhatsApp Link */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-8 h-8 text-white" />
                <a
                  href="https://wa.me/919619555596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline text-white"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:text-[#ffffff] text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Close 
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
