import React from 'react';
import { Target, Star, Code, Trophy, GraduationCap, Zap, Lightbulb, Rocket, Heart, Brain } from 'lucide-react';
import Section from './ui/Section';
import FloatingIcon from './ui/FloatingIcon';

const About = () => {
    const highlights = [
        { icon: <Trophy className="w-6 h-6 text-yellow-500" />, title: 'Hackathon Winner', desc: '₹8000+ Won' },
        { icon: <Code className="w-6 h-6 text-blue-500" />, title: 'Full-Stack Dev', desc: 'MERN Stack' },
        { icon: <GraduationCap className="w-6 h-6 text-green-500" />, title: '9.09 CGPA', desc: 'Academic Topper' },
        { icon: <Zap className="w-6 h-6 text-purple-500" />, title: 'Problem Solver', desc: 'DSA Enthusiast' },
    ];

    return (
        <Section id="about" className="bg-white">
            {/* Floating Icons */}
            <FloatingIcon icon={Lightbulb} position="top-left" delay={0} color="text-yellow-300" size={50} />
            <FloatingIcon icon={Rocket} position="top-right" delay={0.2} color="text-blue-300" size={45} />
            <FloatingIcon icon={Heart} position="bottom-left" delay={0.4} color="text-pink-300" size={40} />
            <FloatingIcon icon={Brain} position="bottom-right" delay={0.6} color="text-purple-300" size={48} />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                        <div className="w-20 h-1.5 bg-gradient-primary rounded-full"></div>
                    </div>

                    <div className="prose prose-lg text-gray-600">
                        <p className="leading-relaxed">
                            I'm a passionate <span className="font-semibold text-gray-900">Computer Science Engineering student</span> at Kongu Engineering College with a strong academic foundation and hands-on experience in full-stack development.
                        </p>
                        <p className="leading-relaxed mt-4">
                            My journey is defined by a relentless curiosity and a drive to build. From winning hackathons with innovative AI solutions to maintaining a <span className="font-semibold text-gray-900">9.09 CGPA</span>, I strive for excellence in everything I do.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Goal</h4>
                                    <p className="text-sm text-gray-600">To build impactful tech that solves real problems.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Vision</h4>
                                    <p className="text-sm text-gray-600">Becoming a world-class Full Stack Engineer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-3 opacity-10"></div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">What Sets Me Apart</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;

