import React, { useState } from 'react';
import { Github, ExternalLink, Trophy, Sparkles } from 'lucide-react';
import Section from './ui/Section';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'News Curator',
            description: 'Personalized news curation platform leveraging Ollama-powered AI and API integrations to deliver tailored, relevant, and distraction-free news content.',
            technologies: ['AI/LLM', 'React', 'Node.js', 'Tailwind'],
            github: 'https://github.com/NKcoder5/news_curator_deployed',
            live: 'https://news-curator-deployed-1.onrender.com',
            award: 'Best Solution Fit - ₹5000',
            image: '/news-curator.png',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'AI Virtual Study Assistant',
            description: 'An AI-powered study companion providing career guidance, college and course recommendations, personalized learning paths, and progress tracking.',
            technologies: ['AI/ML', 'React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/NKcoder5/E-Buddy_deployed',
            live: 'https://e-buddy-deployed-1.onrender.com',
            award: '2nd Prize - ₹3000',
            image: '/e-buddy.png',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Real-time Chat Application',
            description: 'Multi-user chat application using WebSocket APIs enabling seamless, instant messaging between users with efficient and scalable communication.',
            technologies: ['WebSocket', 'React', 'Node.js', 'Socket.io'],
            github: 'https://github.com/NKcoder5/DuoChat_Deployed',
            live: 'https://duochat-deployed-1.onrender.com',
            award: null,
            image: '/duochat.png',
            gradient: 'from-green-500 to-teal-500'
        },
        {
            title: 'Slot Machine Simulation',
            description: 'Interactive slot machine game replicating traditional slot game mechanics with dynamic results and engaging user experience.',
            technologies: ['Python', 'Django', 'JavaScript', 'CSS3'],
            github: 'https://github.com/NKcoder5/slot-game',
            live: 'https://slot-game-deployed.onrender.com',
            award: null,
            image: '/slot-game.png',
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    const ProjectCard = ({ project, index }) => {
        const [isHovered, setIsHovered] = useState(false);
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const rotateX = useTransform(y, [-100, 100], [10, -10]);
        const rotateY = useTransform(x, [-100, 100], [-10, 10]);

        const handleMouseMove = (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set(event.clientX - centerX);
            y.set(event.clientY - centerY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
            setIsHovered(false);
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                {/* Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={isHovered ? { x: '100%' } : { x: '-100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    style={{ transform: 'translateZ(10px)' }}
                />

                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 flex items-end p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex gap-3">
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-all shadow-lg"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            {project.live && (
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-all shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ExternalLink size={20} />
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                    />

                    {project.award && (
                        <motion.div
                            className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl z-20"
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Trophy size={14} />
                            {project.award}
                        </motion.div>
                    )}
                </div>

                <div className="p-8 flex-1 flex flex-col relative" style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, i) => (
                            <motion.span
                                key={i}
                                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-semibold tracking-wide border border-blue-100/50 backdrop-blur-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <Section id="projects" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4"
                >
                    <Sparkles size={16} className="text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">Featured Work</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                <div className="w-20 h-1.5 bg-gradient-primary rounded-full mx-auto" />
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                    Showcasing innovation through code. Here are some of my recent builds.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 relative z-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;

