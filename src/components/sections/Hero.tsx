const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:space-x-6 max-w-4xl mx-auto" data-aos="fade-up">
      <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 mb-6 md:mb-0 mx-auto md:mx-0">
        <img
          alt="Illustration of a person with black hair looking at a silver laptop with a glowing purple halo behind"
          className="w-full h-full object-contain rounded-full floating interactive-card"
          height="192"
          src="https://storage.googleapis.com/a1aa/image/534f5699-0d9b-414a-3f62-bcc2a2cb47e4.jpg"
          width="192"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-700 to-purple-900 opacity-70 blur-[30px] glow"
          style={{ filter: 'blur(30px)' }}
        ></div>
        <div className="absolute -inset-4 rounded-full border-2 border-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      </div>
      <div className="text-white max-w-xl text-center md:text-left">
        <p className="text-sm font-semibold mb-1" data-aos="fade-left" data-aos-delay="100">
          Hello! I Am
          <a className="text-gradient hover:underline font-bold" href="#"> Tran Quoc Tuan</a>
        </p>
        <p className="text-sm font-semibold mb-1 text-gradient" data-aos="fade-left" data-aos-delay="200">
          A Lecturer & Software Engineer
        </p>
        <h1 className="text-white text-2xl md:text-4xl font-semibold leading-snug max-w-[18rem] md:max-w-none mx-auto md:mx-0" data-aos="fade-left" data-aos-delay="300">
          "Crafting elegant code and cultivating future talent."<br />
        </h1>
        <p className="text-xs text-white/50 mt-2 max-w-[18rem] md:max-w-none mx-auto md:mx-0" data-aos="fade-left" data-aos-delay="400">
          Because technology's true potential lies in its creation and its custodians.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a href="#projects" className="px-6 py-2 bg-gradient-to-r from-purple-700 to-purple-500 rounded-md text-sm font-semibold hover-lift interactive-card">
            View Work
          </a>
          <a href="#contact" className="px-6 py-2 border border-purple-500 rounded-md text-sm font-semibold hover-lift interactive-card">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;