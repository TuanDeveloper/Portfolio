import FlipCard from '../ui/FlipCard';
import tma from '../../assets/images/TMA-Technology-Group-Logo.webp';
import rikkei from '../../assets/images/logo-rikkei2.png';
import misa from '../../assets/images/Logo_MISA_JSC_Vie.jpg';
import mindx from '../../assets/images/mindx.jpg';

const Experience = () => {
  const experiences = [
        {
        company: "TMA Solutions",
        logo: tma,
      title: "FrontEnd Developer at TMA Solutions",
      description: "Your one stop destination to know everything about your bank accounts.",
      backContent: "Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      company: "Rikkei Education",
      logo: rikkei,
      title: "Lecturer & Mentor at Rikkei Education",
      description: "Your one stop destination to know everything about your bank accounts.",
      backContent: "Teaching front-end and full-stack development courses. Mentoring students through projects and career development. Creating curriculum and learning materials."
    },
    {
      company: "Misa",
      logo: misa,
      title: "FrontEnd Developer at Misa",
      description: "Your one stop destination to know everything about your bank accounts.",
      backContent: "Worked on financial software solutions. Implemented complex UI components and optimized performance for large-scale applications."
    },
    {
      company: "Mindx Technology School",
      logo: mindx,
      title: "Lecturer at Mindx Technology School",
      description: "Your one stop destination to know everything about your bank accounts.",
      backContent: "Conducted workshops and courses on web development. Guided students through real-world projects and portfolio development."
    }
  ];

  return (
    <section className="mt-16 max-w-4xl mx-auto" id="experience">
      <h3 className="text-white text-lg font-semibold mb-6" data-aos="fade-right">
        Work Experience
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <FlipCard
            key={index}
            delay={index * 100}
            frontContent={
              <div className="flex items-center space-x-4 w-full">
                {/* Logo lớn hơn và có container cố định */}
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white rounded-lg p-2">
                  <img
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain" // Giữ tỷ lệ ảnh
                    src={exp.logo}
                  />
                </div>
                <div className="flex-1 min-w-0"> {/* Đảm bảo text không tràn */}
                  <h4 className="text-white font-semibold text-sm mb-1 truncate"> {/* Truncate để không xuống dòng */}
                    {exp.title}
                  </h4>
                  <p className="text-xs text-white/50 mb-2 line-clamp-2"> {/* Giới hạn 2 dòng */}
                    {exp.description}
                  </p>
                  <div className="text-xs text-purple-400 font-semibold">
                    Click to learn more
                  </div>
                </div>
              </div>
            }
            backContent={
              <p className="text-xs text-white/80 text-center px-2">
                {exp.backContent}
              </p>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;