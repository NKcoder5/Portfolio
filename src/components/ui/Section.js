import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, className, children }) => {
    return (
        <section id={id} className={`py-12 md:py-16 relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
