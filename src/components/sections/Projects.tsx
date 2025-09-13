const Projects = () => {
  const projects = [
    {
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      technologies: [<i key="react" className="fab fa-react"></i>, <i key="node" className="fab fa-node-js"></i>, <i key="css" className="fab fa-css3-alt"></i>],
      image: "https://storage.googleapis.com/a1aa/image/70e11fa9-f498-4c96-4ddc-fe268d09ce26.jpg",
      alignment: "left"
    },
    {
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      technologies: [<i key="vue" className="fab fa-vuejs"></i>, <i key="js" className="fab fa-js-square"></i>, <i key="sass" className="fab fa-sass"></i>],
      image: "https://storage.googleapis.com/a1aa/image/90345587-86bb-4be2-0c53-45d92706984b.jpg",
      alignment: "right"
    }
  ];

  return (
    <section className="mt-20 max-w-5xl mx-auto space-y-20" id="projects">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col ${project.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:space-x-6 interactive-card`}
          data-aos={project.alignment === 'right' ? "fade-left" : "fade-right"}
        >
          <div className="flex flex-col space-y-1 max-w-sm">
            <p className={`text-xs text-purple-500 font-semibold uppercase ${project.alignment === 'right' ? 'text-right md:text-left' : ''}`}>
              Featured Project
            </p>
            <h4 className={`text-white font-semibold text-lg ${project.alignment === 'right' ? 'text-right md:text-left' : ''}`}>
              {project.title}
            </h4>
            <p className={`text-sm text-white/70 bg-[#2a1e4d] rounded-md p-3 leading-relaxed ${project.alignment === 'right' ? 'text-right md:text-left' : ''}`}>
              {project.description}
            </p>
            <div className={`flex ${project.alignment === 'right' ? 'justify-end md:justify-start' : ''} space-x-2 mt-2 text-white/70 text-base`}>
              {project.technologies}
            </div>
          </div>
          <div className="relative mt-6 md:mt-0 flex-shrink-0 hover-lift">
            <img
              alt={`Screenshot of ${project.title}`}
              className="rounded-md shadow-[0_0_40px_#6e4fff] interactive-card"
              height="160"
              src={project.image}
              width="320"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;