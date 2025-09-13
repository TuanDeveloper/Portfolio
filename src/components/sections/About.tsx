import TypingText from '../ui/TypingText';

const About = () => {
  const typingTexts = [
    "I'm a Software Engineer.",
    "I'm a Lecturer & Mentor.",
    "I'm a Problem Solver.",
    "I am willing to support you with what I have.",
  ];

  return (
    <section className="mt-14 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200" id="about">
      <h2 className="font-code text-xl md:text-2xl text-white mb-1">
        <TypingText texts={typingTexts} />
      </h2>
      <p className="text-sm text-white/70 mb-6 max-w-md" data-aos="fade-up" data-aos-delay="300">
        Currently, I'm a Lecturer & Software Engineer at
        <a className="text-purple-500 hover:underline" href="https://rikkei.edu.vn/"> Rikkei Education</a>.
      </p>
      <p className="text-sm text-white/70 max-w-md leading-relaxed" data-aos="fade-up" data-aos-delay="400">
        As a Software Engineer with over years in the industry now.<br />
        I am also a dedicated University Lecturer, mentoring the next generation of developers.<br />
      </p>
    </section>
  );
};

export default About;