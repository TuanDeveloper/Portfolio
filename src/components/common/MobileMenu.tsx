interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#120a2f] z-50 flex flex-col items-center justify-center">
      <button className="absolute top-6 right-6 text-white text-2xl" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
      <ul className="flex flex-col items-center space-y-8 text-lg">
        <li>
          <a className="text-white hover:text-purple-400 transition" href="#" onClick={onClose}>Home</a>
        </li>
        <li>
          <a className="text-white hover:text-purple-400 transition" href="#about" onClick={onClose}>About</a>
        </li>
        <li>
          <a className="text-white hover:text-purple-400 transition" href="#projects" onClick={onClose}>Projects</a>
        </li>
        <li>
          <a className="text-white hover:text-purple-400 transition" href="#contact" onClick={onClose}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;