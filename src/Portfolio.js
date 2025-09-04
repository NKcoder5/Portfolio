import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X, Award, Code, Users, GraduationCap, Trophy, Target, Star } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const skillCategories = [
        {
            category: 'Programming Languages',
            skills: ['Python', 'Java', 'JavaScript', 'C']
        },
        {
            category: 'Web Development',
            skills: ['React.js', 'Node.js', 'HTML/CSS', 'Express.js']
        },
        {
            category: 'Database & Tools',
            skills: ['MongoDB', 'SQL', 'Git & GitHub']
        },
        {
            category: 'Frameworks & Libraries',
            skills: ['Django', 'Socket.io', 'Bootstrap', 'Tailwind CSS']
        }
    ];

    const projects = [
        {
            title: 'News Curator',
            description: 'Personalized news curation platform leveraging Ollama-powered AI and API integrations to deliver tailored, relevant, and distraction-free news content based on user interests.',
            technologies: ['AI/LLM', 'API Integration', 'React', 'Node.js'],
            github: 'https://github.com/NKcoder5/news_curator_deployed',
            live: 'https://news-curator-deployed-1.onrender.com',
            award: 'Best Solution Fit - ₹5000',
            event: "Byts'25 Hackathon",
            image: '/news-curator.png'
        },
        {
            title: 'AI Virtual Study Assistant',
            description: 'An AI-powered study companion providing career guidance, college and course recommendations, personalized learning paths, curated materials, quizzes, and progress tracking with AI-driven insights.',
            technologies: ['AI/ML', 'React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/NKcoder5/E-Buddy_deployed',
            live: 'https://e-buddy-deployed-1.onrender.com',
            award: '2nd Prize - ₹3000',
            event: "HackBuzz'25 (CodeBuilders)",
            image: '/e-buddy.png'
        },
        {
            title: 'Real-time Chat Application',
            description: 'Multi-user chat application using WebSocket APIs enabling seamless, instant messaging between users with efficient and scalable communication.',
            technologies: ['WebSocket', 'React', 'Node.js', 'Socket.io'],
            github: 'https://github.com/NKcoder5/DuoChat_Deployed',
            live: 'https://duochat-deployed-1.onrender.com',
            award: null,
            event: null,
            image: '/duochat.png'
        },
        {
            title: 'Slot Machine Simulation',
            description: 'Interactive slot machine game replicating traditional slot game mechanics with dynamic results and engaging user experience.',
            technologies: ['Python', 'Django', 'JavaScript', 'CSS3'],
            github: 'https://github.com/NKcoder5/slot-game',
            live: 'https://slot-game-deployed.onrender.com',
            award: null,
            event: null,
            image: '/slot-game.png'
        }
    ];

    const education = [
        {
            institution: 'Kongu Engineering College',
            degree: 'B.E Computer Science & Engineering',
            period: '2023 - 2027',
            cgpa: '9.09',
            status: 'Pursuing'
        },
        {
            institution: 'Sairam Matric Hr Sec School',
            degree: 'Higher Secondary Certificate',
            period: '2022 - 2023',
            cgpa: '95.3%',
            status: 'Completed'
        }
    ];

    const certifications = [
        'NPTEL: Cyber Security & Privacy',
        'NPTEL: Demystifying Networks',
        'Oracle University: Oracle Java SE17 Developer',
        'Oracle University: Oracle Apex Cloud Developer',
    ];

    const achievements = [
        { icon: <Trophy className="w-6 h-6" />, title: '₹8000', subtitle: 'Hackathon Winnings' },
        { icon: <GraduationCap className="w-6 h-6" />, title: '9.09 CGPA', subtitle: 'Academic Excellence' },
        { icon: <Code className="w-6 h-6" />, title: '10+ Projects', subtitle: 'Built & Deployed' },
        { icon: <Award className="w-6 h-6" />, title: '5+ Certifications', subtitle: 'Industry Recognition' }
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
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
                            {['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
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
                                {['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
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
                <div className="hero-gradient"></div>
                <div className="hero-animations">
                    <div className="floating-circle floating-circle-1"></div>
                    <div className="floating-circle floating-circle-2"></div>
                    <div className="floating-circle floating-circle-3"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Image Section */}
                        <div className="flex justify-center lg:order-2">
                            <div className="profile-container">
                                <div className="profile-frame">
                                    <img 
                                        src="/myProfilePic.jpeg" 
                                        alt="Nandha Kumar S" 
                                        className="profile-image"
                                    />
                                </div>
                                <div className="profile-glow"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="text-center lg:text-left lg:order-1">
                            <div className="mb-6">
                                <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                                    <div className="bg-white rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                                        👋 Welcome to my portfolio
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Nandha Kumar S
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
                                CSE Student | Tech Enthusiast
                            </p>
                            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                                Enthusiastic Computer Science student with strong fundamentals in programming, 
                                data structures, and software development. Passionate about building meaningful 
                                tools that solve real-world problems.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-16">
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
                        </div>
                    </div>

                    {/* Achievement Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="achievement-card">
                                <div className="text-blue-600 mb-3 flex justify-center">{achievement.icon}</div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.title}</div>
                                <div className="text-sm text-gray-600">{achievement.subtitle}</div>
                            </div>
                        ))}
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
                                I'm a passionate Computer Science Engineering student at Kongu Engineering College 
                                with a strong academic foundation (9.09 CGPA) and hands-on experience in full-stack 
                                development, AI applications, and problem-solving.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                My journey includes winning hackathons with innovative AI-powered solutions, 
                                building practical applications that solve real-world problems, and continuously 
                                learning cutting-edge technologies to make a meaningful impact in the tech industry.
                            </p>
                            
                            <div className="space-y-6 mt-8">
                                <h4 className="text-xl font-bold text-gray-900">Goals & Vision</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                                        <div>
                                            <h5 className="font-semibold text-gray-900">Short-Term Goal</h5>
                                            <p className="text-gray-600">Enhance development and AI skills through open source contributions and impactful tech internships</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Star className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                                        <div>
                                            <h5 className="font-semibold text-gray-900">Long-Term Vision</h5>
                                            <p className="text-gray-600">Become a full-stack or AI engineer building meaningful tools that solve real-world problems to support students</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-100">
                            <h4 className="text-2xl font-bold text-gray-900 mb-8">What Sets Me Apart</h4>
                            <div className="space-y-6">
                                {[
                                    { icon: '🚀', title: 'Hackathon Winner', desc: 'Won awards worth ₹8000 in prestigious hackathons' },
                                    { icon: '💡', title: 'AI Enthusiast', desc: 'Built AI-powered solutions for real-world problems' },
                                    { icon: '🏆', title: 'Academic Excellence', desc: 'Maintaining 9.09 CGPA with top-tier performance' },
                                    { icon: '🔧', title: 'Full-Stack Developer', desc: 'Proficient in modern web technologies and frameworks' },
                                    { icon: '🌟', title: 'Open Source Contributor', desc: 'Active in competitive programming and open source' }
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

            {/* Education Section */}
            <section id="education" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                            Academic excellence and continuous learning
                        </p>
                    </div>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <GraduationCap className="text-blue-600" size={24} />
                                            <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                edu.status === 'Pursuing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                                {edu.status}
                                            </span>
                                        </div>
                                        <p className="text-xl text-gray-600 font-semibold">{edu.degree}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full block mb-2">
                                            {edu.period}
                                        </span>
                                        <span className="text-2xl font-bold text-blue-600">{edu.cgpa}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Certifications */}
                    <div className="mt-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Award className="text-yellow-500" size={20} />
                                        <span className="font-semibold text-gray-900">Certification</span>
                                    </div>
                                    <p className="text-gray-700">{cert}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                            Proficient in modern technologies with focus on full-stack development
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="skill-category-card">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                                    {category.category}
                                </h3>
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-tag">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Skills & Tools</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                'Agile SDLC', 'Software Engineering', 
                                'Active Listening', 'Critical Thinking', 
                                'Logical Reasoning', 'Puzzle Solving', 'Competitive Programming',
                                'Open Source Contribution', 'Problem Solving', 'Team Collaboration'
                            ].map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="additional-skill-tag"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                            Award-winning projects showcasing technical skills and innovation
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card group">
                                <div className="project-header">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    {project.award && (
                                        <div className="award-badge">
                                            <Trophy size={16} />
                                            <span>{project.award}</span>
                                        </div>
                                    )}
                                    <div className="project-links">
                                        <a 
                                            href={project.github} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn"
                                        >
                                            <Github size={18} />
                                        </a>
                                        {project.live !== '#' && (
                                            <a 
                                                href={project.live} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link-btn"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.event && (
                                        <p className="text-blue-600 font-semibold mb-4">{project.event}</p>
                                    )}
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

            {/* Achievements Section */}
            <section id="achievements" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Key Achievements</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                            Recognition and accomplishments in academics and technology
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="achievement-highlight">
                            <div className="achievement-icon">
                                <Trophy className="w-8 h-8 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hackathon - Byts'25</h3>
                                <p className="text-gray-600 mb-4">Developed News Curator, a personalized news app using Ollama-powered AI and APIs. Secured an award in Best Solution Fit category.</p>
                                <div className="award-amount">₹5,000 Prize Winner</div>
                            </div>
                        </div>
                        
                        <div className="achievement-highlight">
                            <div className="achievement-icon">
                                <Award className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hackathon - HackBuzz'25</h3>
                                <p className="text-gray-600 mb-4">Created AI Virtual Study Assistant offering career guidance, personalized learning, quizzes, and profiles. Secured 2nd prize.</p>
                                <div className="award-amount">₹3,000 Prize Winner</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="achievement-card-alt">
                            <GraduationCap className="w-8 h-8 text-green-500 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h4>
                            <p className="text-gray-600 mb-2">9.09 CGPA in Computer Science Engineering</p>
                            <p className="text-sm text-gray-500">Strong academic background with dedication and fast learning</p>
                        </div>
                        
                        <div className="achievement-card-alt">
                            <Code className="w-8 h-8 text-purple-500 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Project Portfolio</h4>
                            <p className="text-gray-600 mb-2">10+ Practical Projects Built</p>
                            <p className="text-sm text-gray-500">Full-stack applications, AI solutions, and innovative tools</p>
                        </div>
                        
                        <div className="achievement-card-alt">
                            <Users className="w-8 h-8 text-indigo-500 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Community Involvement</h4>
                            <p className="text-gray-600 mb-2">Active Club Member</p>
                            <p className="text-sm text-gray-500">ISTE Club CSE, English Proficiency Club participation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
                                <div className="contact-card group">
                                    <div className="contact-icon">
                                        <Mail className="text-blue-600" size={24} />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-gray-900 text-lg mb-2">Email</p>
                                        <a href="mailto:nandhakumar4115@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            nandhakumar4115@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-card group">
                                    <div className="contact-icon">
                                        <Phone className="text-blue-600" size={24} />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-gray-900 text-lg mb-2">Phone</p>
                                        <a href="tel:+917558154644" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            +91 7558154644
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-card group">
                                    <div className="contact-icon">
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
                                        className="social-link social-github"
                                    >
                                        <Github size={24} />
                                    </a>
                                    <a 
                                        href="https://linkedin.com/in/nandha-kumar-s-842a74320" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link social-linkedin"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                    <a 
                                        href="https://leetcode.com/u/NandhaCoder5/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link social-leetcode"
                                    >
                                        <Code size={24} />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Interests & Languages */}
                            <div className="grid md:grid-cols-2 gap-8 mt-16">
                                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Interests</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            'Life Goals & Vision', 'Competitive Programming', 'Open Source Contribution', 
                                            'Logical Reasoning', 'Puzzle Solving', 'AI/ML Research'
                                        ].map((interest, index) => (
                                            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Languages</h4>
                                    <div className="space-y-3">
                                        {[
                                            { lang: 'Tamil', level: 'Native' },
                                            { lang: 'English', level: 'Fluent' },
                                            { lang: 'Hindi', level: 'Conversational' }
                                        ].map((language, index) => (
                                            <div key={index} className="flex justify-between items-center">
                                                <span className="text-gray-700 font-medium">{language.lang}</span>
                                                <span className="text-blue-600 text-sm bg-blue-50 px-2 py-1 rounded">{language.level}</span>
                                            </div>
                                        ))}
                                    </div>
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
                        <p className="text-gray-400 mb-4">CSE Student | Tech Enthusiast | Problem Solver</p>
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