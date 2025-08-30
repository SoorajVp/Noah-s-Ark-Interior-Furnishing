import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Wrench' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Image' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Resources', path: '/resources', icon: 'BookOpen' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-sanctuary shadow-sanctuary-md' 
          : 'bg-background/95'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 sanctuary-hover"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-white" 
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-semibold text-lg text-primary leading-tight">
                Noah's Ark
              </span>
              <span className="text-xs text-muted-foreground font-inter font-light tracking-wide">
                Interior Furnishing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg sanctuary-transition ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-inter font-medium">{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="default"
                className="bg-forest-green hover:bg-forest-green/90 text-white font-inter font-medium"
                iconName="Calendar"
                iconPosition="left"
                iconSize={18}
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`hidden md:flex items-center space-x-2 px-3 py-2 rounded-lg sanctuary-transition ${
                isActivePath('/contact')
                  ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
              }`}
            >
              <Icon name="Phone" size={18} />
              <span className="font-inter font-medium">Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg sanctuary-transition hover:bg-muted"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-sanctuary-lg">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg sanctuary-transition ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-inter font-medium">{item?.name}</span>
                </Link>
              ))}
              
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg sanctuary-transition ${
                  isActivePath('/contact')
                    ? 'text-accent bg-accent/10' :'text-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name="Phone" size={20} />
                <span className="font-inter font-medium">Contact</span>
              </Link>

              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-forest-green hover:bg-forest-green/90 text-white font-inter font-medium"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={18}
                >
                  Schedule Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;