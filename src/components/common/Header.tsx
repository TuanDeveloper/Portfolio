import { useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-[#2a1e4d] sticky top-0 z-50 bg-[#120a2f]/90 backdrop-blur-sm">
      <div aria-label="Logo symbol" className="text-white text-2xl font-code tracking-widest select-none floating">
        <span className="block leading-none">⌛</span>
      </div>
      <Navigation />
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMobileMenu}>
        <i className="fas fa-bars text-xl"></i>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </nav>
  );
};

export default Header;