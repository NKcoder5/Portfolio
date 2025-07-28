import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X, Award, Code, Users, Briefcase } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'Java', level: 70, category: 'Programming' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'SQL', level: 70, category: 'Database' },
    { name: 'C', level: 65, category: 'Programming' }
  ];

  const projects = [
    {
      title: 'Lucky Slots Casino Game',
      description: 'Interactive slot machine game with realistic gameplay mechanics, smooth animations, and engaging user interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
      github: 'https://github.com/NKcoder5/slot-game',
      live: 'https://slot-game-deployed.onrender.com',
      image: 'slot-game.png'
    },
    {
      title: 'OS Page Algorithm Simulator',
      description: 'Educational tool for simulating operating system page replacement algorithms with interactive visualization and performance metrics.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Algorithm Visualization'],
      github: 'https://github.com/NKcoder5/page_algorithm_simulator',
      live: 'https://os-page-algorithm-simulator.onrender.com',
      image: 'os-page-simulator.png'
    },
    {
      title: 'News Curator Platform',
      description: 'Personalized news aggregation platform with category-based filtering and modern, responsive design for optimal reading experience.',
      technologies: ['React', 'Node.js', 'News API', 'CSS3'],
      github: 'https://github.com/NKcoder5/news_curator_deployed',
      live: 'https://news-curator-deployed-1.onrender.com',
      image: 'news-curator.png'
    },
    {
      title: 'DuoChat Real-time Messaging',
      description: 'Real-time chat application with file sharing capabilities, user authentication, and modern messaging interface.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/NKcoder5/DuoChat_Deployed',
      live: 'https://duochat-deployed-1.onrender.com',
      image: 'duochat.png'
    },
    {
      title: 'Job Letter PDF Generator',
      description: 'Automated tool for generating professional job application letters and cover letters in PDF format with customizable templates.',
      technologies: ['JavaScript', 'PDF Generation', 'HTML5', 'CSS3'],
      github: 'https://github.com/NKcoder5/Job-Letter-Pdf-Generator',
      live: '#',
      image: 'job-letter-generator.png'
    }
  ];

  const experience = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      period: 'Jun 2024 - Aug 2024',
      description: 'Developed responsive web applications using React.js and collaborated with cross-functional teams to deliver high-quality user interfaces.',
      type: 'Internship'
    },
    {
      title: 'Web Development Freelancer',
      company: 'Self-Employed',
      period: 'Jan 2024 - Present',
      description: 'Built custom websites for small businesses, focusing on modern design principles and optimal user experience.',
      type: 'Freelance'
    }
  ];

  const achievements = [
    { icon: <Code className="w-6 h-6" />, title: '15+ Projects', subtitle: 'Completed Successfully' },
    { icon: <Award className="w-6 h-6" />, title: '8.5 CGPA', subtitle: 'Academic Excellence' },
    { icon: <Users className="w-6 h-6" />, title: '8+ Clients', subtitle: 'Satisfied Customers' },
    { icon: <Briefcase className="w-6 h-6" />, title: '4.5 Years', subtitle: 'Coding Experience' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nandha Kumar S
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className={`capitalize font-medium transition-all duration-300 relative ${
                    activeSection === item 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item)} 
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <div className="bg-white rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  👋 Welcome to my portfolio
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Nandha Kumar S
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Computer Science student passionate about creating innovative web solutions. 
              Ready to contribute to cutting-edge projects and make a meaningful impact in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                Get In Touch
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 mb-3 flex justify-center">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Driven by curiosity and powered by code
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Computer Science Student & Future Innovator
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a final-year Computer Science student with an insatiable passion for technology 
                and innovation. My journey began with a simple "Hello World" and has evolved into 
                creating comprehensive web applications that solve real-world problems.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                What drives me is the endless possibility to learn, create, and impact lives through 
                technology. I believe in writing code that's not just functional, but elegant and 
                maintainable. Every project is an opportunity to push boundaries and deliver excellence.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">🎓 Education</h4>
                  <p className="text-gray-700 font-medium">B.Tech Computer Science</p>
                  <p className="text-gray-500">Expected Graduation: 2025</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">📊 Academic Performance</h4>
                  <p className="text-gray-700 font-medium">CGPA: 8.5/10</p>
                  <p className="text-gray-500">Top 10% of Class</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">What Sets Me Apart</h4>
              <div className="space-y-6">
                {[
                  { icon: '🚀', title: 'Quick Learner', desc: 'Rapidly adapt to new technologies and frameworks' },
                  { icon: '💡', title: 'Problem Solver', desc: 'Love tackling complex challenges with creative solutions' },
                  { icon: '🤝', title: 'Team Player', desc: 'Collaborate effectively in diverse, cross-functional teams' },
                  { icon: '🎯', title: 'Detail Oriented', desc: 'Focus on code quality, performance, and user experience' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Proficient in modern technologies with a focus on full-stack development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="font-bold text-gray-900 text-lg">{skill.name}</span>
                    <span className="ml-3 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{skill.category}</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git & GitHub', 'Express.js', 'REST APIs', 'VS Code', 'LeetCode', 'Data Structures', 
                'Algorithms', 'Bootstrap', 'Tailwind CSS', 'Postman', 'Firebase', 'Problem Solving'
              ].map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-white text-gray-700 px-6 py-3 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Showcasing my technical skills through real-world applications
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div
                  className="h-48 relative overflow-hidden bg-gray-50"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                      >
                        <Github size={18} className="text-gray-700" />
                      </a>
                      {project.live !== '#' && (
                        <a 
                          href={project.live} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                        >
                          <ExternalLink size={18} className="text-gray-700" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Building experience through internships and real-world projects
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Ready to make an impact? I'm excited to discuss opportunities, collaborate on projects, 
              or simply connect with fellow developers and industry professionals.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-lg mb-2">Email</p>
                    <a href="mailto:nandhakumar4115@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      nandhakumar4115@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-lg mb-2">Phone</p>
                    <a href="tel:+917558154644" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +91 7558154644
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-6 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-lg mb-2">Location</p>
                    <p className="text-gray-600">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="font-bold text-gray-900 mb-6 text-xl text-center">Connect on Social Media</h4>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://github.com/NKcoder5" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nandha-kumar-842a74320" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://leetcode.com/u/NandhaCoder5/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-orange-500 text-white rounded-xl flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Code size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Nandha Kumar S
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Nandha Kumar S. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;