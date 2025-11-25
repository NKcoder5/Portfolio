import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            institution: 'Kongu Engineering College',
            degree: 'B.E Computer Science & Engineering',
            period: '2023 - 2027',
            cgpa: '9.09',
            status: 'Pursuing',
            desc: 'Consistent academic topper with focus on Data Structures and Algorithms.'
        },
        {
            institution: 'Sairam Matric Hr Sec School',
            degree: 'Higher Secondary Certificate',
            period: '2022 - 2023',
            cgpa: '95.3%',
            status: 'Completed',
            desc: 'Graduated with distinction, excelling in Mathematics and Computer Science.'
        }
    ];

    return (
        <Section id="education" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="w-20 h-1.5 bg-gradient-primary rounded-full mx-auto"></div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    My academic journey has been driven by a passion for learning and excellence.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                                </div>
                                <p className="text-lg text-gray-700 font-medium mb-2">{edu.degree}</p>
                                <p className="text-gray-500">{edu.desc}</p>
                            </div>

                            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2">
                                <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${edu.status === 'Pursuing' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                    {edu.status}
                                </span>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <Calendar size={16} />
                                    {edu.period}
                                </div>
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-primary">
                                    {edu.cgpa}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
