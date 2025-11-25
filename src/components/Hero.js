import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedGradient from './ui/AnimatedGradient';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Nandha kumar S';

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.substring(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            {/* Animated Gradient Background */}
            <AnimatedGradient />

            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-primary-50/30 to-secondary-50/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        <motion.div variants={itemVariants} className="inline-block mb-6">
                            <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50 text-sm font-medium text-gray-700 flex items-center gap-2 mx-auto lg:mx-0 w-fit hover:shadow-xl transition-shadow">
                                <motion.span
                                    className="w-2 h-2 rounded-full bg-green-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                Available for opportunities
                                <Sparkles size={14} className="text-yellow-500" />
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
                        >
                            Hi, I'm <br />
                            <span className="relative inline-block">
                                <span className="text-gradient">{typedText}</span>
                                <motion.span
                                    className="inline-block w-1 h-16 md:h-20 bg-gradient-primary ml-1"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            CSE Student & Tech Enthusiast. I build{' '}
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative">
                                flawless
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.5, duration: 0.8 }}
                                />
                            </span>{' '}
                            web experiences and solve real-world problems with code.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                        >
                            <motion.button
                                onClick={scrollToContact}
                                className="group relative bg-gray-900 text-white px-8 py-4 rounded-full font-medium overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Let's Talk
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>

                            <motion.button
                                className="group bg-white/80 backdrop-blur-sm text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-medium hover:border-gray-300 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-lg"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} className="group-hover:animate-bounce" />
                                Download Resume
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Animated Ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-dashed border-primary-300"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Glow Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            {/* Image Container */}
                            <motion.div
                                className="absolute inset-4 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white"
                                whileHover={{ rotate: 0, scale: 1.05 }}
                                style={{ rotate: 3 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src="/myProfilePic.jpeg"
                                    alt="Nandha kumar S"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -left-8 top-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        🚀
                                    </motion.div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Hackathon Winner</p>
                                        <p className="text-sm font-bold text-gray-900">₹8000+ Won</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -right-8 bottom-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-2xl"
                                        animate={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    >
                                        ⚡
                                    </motion.div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Projects</p>
                                        <p className="text-sm font-bold text-gray-900">10+ Built</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

