import React from 'react';
import { Trophy, Award, Star, Code } from 'lucide-react';
import Section from './ui/Section';

const Achievements = () => {
    return (
        <Section id="achievements" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
                <div className="w-20 h-1.5 bg-gradient-primary rounded-full mx-auto"></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Milestones that mark my journey of growth and excellence.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border border-yellow-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Trophy size={120} className="text-yellow-500" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Hackathon Winner</h3>
                        <p className="text-gray-600 mb-4">Byts'25 - Best Solution Fit</p>
                        <div className="text-3xl font-bold text-yellow-600">₹5,000</div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Award size={120} className="text-blue-500" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <Award size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">HackBuzz'25</h3>
                        <p className="text-gray-600 mb-4">2nd Prize Winner</p>
                        <div className="text-3xl font-bold text-blue-600">₹3,000</div>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
                {[
                    { icon: <Star className="text-purple-500" />, title: "Academic Excellence", desc: "9.09 CGPA" },
                    { icon: <Code className="text-green-500" />, title: "10+ Projects", desc: "Built & Deployed" },
                    { icon: <Award className="text-pink-500" />, title: "5+ Certifications", desc: "Industry Recognized" }
                ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
