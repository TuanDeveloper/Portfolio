const Contact = () => {
  return (
    <section className="mt-20 max-w-4xl mx-auto text-center" id="contact">
      <h3 className="text-white font-semibold text-2xl mb-4 text-gradient">Contact Information</h3>
      <p className="text-sm text-white/70 mb-8 max-w-md mx-auto">
        Feel free to reach out to me for collaboration, questions, or just to say hello!
      </p>
      <div className="flex justify-center flex-wrap gap-6">
        {/* Facebook */}
        <a href="https://facebook.com/tuanmentor" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card">
          <i className="fab fa-facebook-f fa-lg" style={{ color: '#1877f2' }}></i>
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/TuanDeveloper" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card">
          <i className="fab fa-github fa-lg" style={{ color: '#fff' }}></i>
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/tuanmentor" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card">
          <i className="fab fa-linkedin-in fa-lg" style={{ color: '#0e76a8' }}></i>
        </a>

        {/* Discord */}
        <a href="https://discord.gg/RMa7DnvJJr" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card">
          <i className="fab fa-discord fa-lg" style={{ color: '#C13584' }}></i>
        </a>

        {/* Email */}
        <a href="mailto:it.coder.quoctuan@gmail.com" className="w-16 h-16 rounded-full bg-[#2a1e4d] flex items-center justify-center text-white hover-lift interactive-card pulse">
          <i className="fas fa-envelope fa-lg" style={{ color: '#ea4335' }}></i>
        </a>
      </div>
      
      {/* Email Form */}
      <div className="mt-12 bg-[#2a1e4d] rounded-xl p-6 max-w-md mx-auto interactive-card">
        <h4 className="text-white font-semibold mb-4">Send me a message</h4>
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-xs text-white/70 mb-1">Your Name</label>
            <input type="text" className="w-full bg-[#1a0f3a] border border-[#3b2a6e] rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs text-white/70 mb-1">Your Email</label>
            <input type="email" className="w-full bg-[#1a0f3a] border border-[#3b2a6e] rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-xs text-white/70 mb-1">Message</label>
            <textarea rows={4} className="w-full bg-[#1a0f3a] border border-[#3b2a6e] rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-purple-500 rounded-md py-2 text-sm font-semibold hover-lift">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;