import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from 'lucide-react';
import Section from './ui/Section';

const Contact = () => {
    return (
        <Section id="contact" className="bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 bg-gray-900 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                                <p className="text-gray-400 mb-12 leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                                </p>

                                <div className="space-y-8">
                                    <a href="mailto:nandhakumar4115@gmail.com" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email Me</p>
                                            <p className="font-medium group-hover:text-blue-400 transition-colors">nandhakumar4115@gmail.com</p>
                                        </div>
                                    </a>

                                    <a href="tel:+917558154644" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Call Me</p>
                                            <p className="font-medium group-hover:text-green-400 transition-colors">+91 7558154644</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Location</p>
                                            <p className="font-medium">Madurai, Tamil Nadu, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <p className="text-sm text-gray-400 mb-4">Follow Me</p>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: <Github size={20} />, href: "https://github.com/NKcoder5", color: "hover:bg-gray-700" },
                                            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/nandha-kumar-s-842a74320", color: "hover:bg-blue-600" },
                                            { icon: <Code size={20} />, href: "https://leetcode.com/u/NandhaCoder5/", color: "hover:bg-yellow-600" }
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all ${social.color}`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 lg:p-16 flex flex-col justify-center bg-white">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send me a message</h3>
                                <p className="text-gray-600 mb-8">
                                    Got a question or proposal? I'd love to hear from you.
                                </p>
                                <a
                                    href="mailto:nandhakumar4115@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                                >
                                    Say Hello
                                    <Send size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
