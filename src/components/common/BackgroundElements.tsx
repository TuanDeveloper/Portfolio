const BackgroundElements = () => {
  return (
    <>
      <div className="background"></div>
      <div className="grid-pattern"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="particle-network" id="particleNetwork"></div>

      <div className="side-decoration side-left">
        <div className="dot"></div>
        <div className="line"></div>
        <div className="dot"></div>
        <div className="line"></div>
        <div className="dot"></div>
      </div>

      <div className="side-decoration side-right">
        <div className="dot"></div>
        <div className="line"></div>
        <div className="dot"></div>
        <div className="line"></div>
        <div className="dot"></div>
      </div>
    </>
  );
};

export default BackgroundElements;