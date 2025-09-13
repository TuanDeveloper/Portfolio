const FloatingNavigation = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">
      <a href="#" className="w-12 h-12 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card shadow-lg">
        <i className="fas fa-home"></i>
      </a>
      <a href="#about" className="w-12 h-12 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card shadow-lg">
        <i className="fas fa-user"></i>
      </a>
      <a href="#projects" className="w-12 h-12 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card shadow-lg">
        <i className="fas fa-briefcase"></i>
      </a>
      <a href="#contact" className="w-12 h-12 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card shadow-lg pulse">
        <i className="fas fa-paper-plane"></i>
      </a>
    </div>
  );
};

export default FloatingNavigation;