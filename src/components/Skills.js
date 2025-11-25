import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layers } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Programming Languages',
            skills: ['Python', 'Java', 'JavaScript', 'C'],
            icon: <Code2 size={24} />,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            category: 'Web Development',
            skills: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'Express.js', 'Tailwind CSS'],
            icon: <Globe size={24} />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            category: 'Database & Tools',
            skills: ['MongoDB', 'SQL', 'Git', 'GitHub', 'VS Code'],
            icon: <Database size={24} />,
            color: 'from-green-500 to-teal-500'
        },
        {
            category: 'Frameworks & Libraries',
            skills: ['Django', 'Socket.io', 'Bootstrap', 'Framer Motion'],
            icon: <Layers size={24} />,
            color: 'from-orange-500 to-red-500'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    };

    return (
        <Section id="skills" className="bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Technical Skills
                </motion.h2>
                <div className="w-20 h-1.5 bg-gradient-primary rounded-full mx-auto" />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
                >
                    A robust technical skillset built through hands-on projects and continuous learning.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        custom={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="relative group"
                    >
                        {/* Glassmorphism Card */}
                        <div className="relative bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Icon */}
                            <motion.div
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                {category.icon}
                            </motion.div>

                            {/* Category Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200/50 pb-4">
                                {category.category}
                            </h3>

                            {/* Skills */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skillIdx}
                                        variants={item}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                                        }}
                                        className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl shadow-sm border border-gray-100 text-sm font-medium hover:text-blue-600 hover:border-blue-200 hover:bg-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-20 text-center relative z-10"
            >
                <div className="inline-block bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                    <p className="text-gray-700 font-semibold mb-6 text-lg">Other Skills & Competencies</p>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                        {[
                            'Data Structures', 'Algorithms', 'Problem Solving',
                            'Team Leadership', 'Agile Methodology', 'Communication'
                        ].map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    color: 'rgb(37, 99, 235)'
                                }}
                                className="px-5 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium shadow-sm border border-gray-200/50 cursor-default transition-all"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default Skills;

