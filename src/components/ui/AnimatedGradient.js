import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradient = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: ['-25%', '75%', '-25%'],
                    y: ['-25%', '50%', '-25%'],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0) 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: ['75%', '-25%', '75%'],
                    y: ['50%', '-25%', '50%'],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(236,72,153,0) 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: ['25%', '50%', '25%'],
                    y: ['75%', '25%', '75%'],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default AnimatedGradient;
