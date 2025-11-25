import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcon = ({ icon: Icon, delay = 0, position, size = 40, color = 'text-blue-200', opacity = 0.15 }) => {
    const positions = {
        'top-left': 'top-10 left-10',
        'top-right': 'top-10 right-10',
        'bottom-left': 'bottom-10 left-10',
        'bottom-right': 'bottom-10 right-10',
        'middle-left': 'top-1/2 left-10 -translate-y-1/2',
        'middle-right': 'top-1/2 right-10 -translate-y-1/2',
        'top-center': 'top-10 left-1/2 -translate-x-1/2',
        'bottom-center': 'bottom-10 left-1/2 -translate-x-1/2',
    };

    return (
        <motion.div
            className={`absolute ${positions[position]} ${color} pointer-events-none z-0`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
            }}
            style={{ width: size, height: size }}
        >
            <Icon size={size} strokeWidth={1.5} />
        </motion.div>
    );
};

export default FloatingIcon;
