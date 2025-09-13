const Navigation = () => {
  return (
    <ul className="hidden md:flex space-x-10 text-xs text-white/80 font-semibold tracking-wide">
      <li>
        <a className="nav-link hover:text-purple-400 transition" href="#">Home</a>
      </li>
      <li>
        <a className="nav-link hover:text-purple-400 transition" href="#about">About</a>
      </li>
      <li>
        <a className="nav-link hover:text-purple-400 transition" href="#projects">Projects</a>
      </li>
      <li>
        <a className="nav-link hover:text-purple-400 transition" href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;