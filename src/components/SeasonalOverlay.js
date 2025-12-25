import React from 'react';
import { motion } from 'framer-motion';

const SeasonalOverlay = ({ season }) => {
    const particles = Array.from({ length: 25 });

    const getParticleProps = (season) => {
        switch (season) {
            case 'Winter':
                return {
                    content: '❄',
                    color: '#ffffff',
                    size: [10, 20],
                    animation: {
                        y: ['-10vh', '110vh'],
                        x: ['-5vw', '5vw'],
                        rotate: [0, 360],
                    },
                };
            case 'Spring':
                return {
                    content: '🌸',
                    color: '#ffc0cb',
                    size: [15, 25],
                    animation: {
                        y: ['-10vh', '110vh'],
                        x: ['-10vw', '10vw'],
                        rotate: [0, 720],
                    },
                };
            case 'Autumn':
                return {
                    content: '🍂',
                    color: '#d2b48c',
                    size: [20, 30],
                    animation: {
                        y: ['-10vh', '110vh'],
                        x: ['20vw', '-20vw'],
                        rotate: [0, 1080],
                    },
                };
            case 'Summer':
                return {
                    content: '☀',
                    color: '#ffcc33',
                    size: [30, 50],
                    // Summer is different, maybe just floating sunbeams or sparkles
                    animation: {
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                    },
                };
            default:
                return null;
        }
    };

    const props = getParticleProps(season);
    if (!props) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                overflow: 'hidden',
            }}
        >
            {season === 'Summer' ? (
                // Summer "Heat/Sun" effect
                <motion.div
                    animate={props.animation}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '5%',
                        right: '5%',
                        fontSize: '100px',
                        color: props.color,
                        filter: 'blur(10px)',
                        opacity: 0.3,
                    }}
                >
                    {props.content}
                </motion.div>
            ) : (
                particles.map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            top: `${Math.random() * -20}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0
                        }}
                        animate={{
                            ...props.animation,
                            x: [
                                `${(Math.random() - 0.5) * 50}px`,
                                `${(Math.random() - 0.5) * 150}px`
                            ],
                            opacity: [0, 0.8, 0.8, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear",
                        }}
                        style={{
                            position: 'absolute',
                            fontSize: `${Math.random() * (props.size[1] - props.size[0]) + props.size[0]}px`,
                            color: props.color,
                            userSelect: 'none',
                        }}
                    >
                        {props.content}
                    </motion.div>
                ))
            )}
        </div>
    );
};

export default SeasonalOverlay;
