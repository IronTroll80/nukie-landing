'use client'

import Image from 'next/image'
import styles from './features.module.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Features(){

    const [activeFeature, setActiveFeature] = useState(1)

    const features = [
        {
            title: 'Access Control',
            description: 'Verify and monitor who enters your space in real-time.',
            image: '/estate.png'
        },
        {
            title: 'Real-Time Tracking',
            description: 'Track movement and activity across locations with live updates.',
            image: '/estate.png'
        },
        {
            title: 'Analytics',
            description: 'Get insights into usage patterns and visitor behavior.',
            image: '/estate.png'
        },
        {
            title: 'Payments',
            description: 'Handle dues, levies, and transactions seamlessly.',
            image: '/estate.png'
        }
    ]

    return(
        <motion.div 
            className={styles.container}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >  

            <div className={styles.right}>
                <div className={styles.featureImage}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', height: '100%', position: 'relative' }}
                        >
                            < motion.video 
                                src="/hero.mp4" 
                                autoPlay 
                                muted 
                                loop 
                                playsInline 
                                className= {styles.featureImage}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            
            <div className={styles.left}>
                <div className={styles.leftInner}>

                    <div className={styles.badge}>
                        <span className={styles.dot}></span>
                        POINT OF SALE
                    </div>

                    <h1 className={styles.title}>
                        Everything You Need to 
                        <span> Manage Access Smarter</span>
                    </h1>

                    <p className={styles.intro}>
                        Control access, monitor activity, and manage operations seamlessly—all from one platform.
                    </p>

                    <div className={styles.features}>
                        {features.map((feature, index) => {

                            const isOpen = activeFeature === index

                            return(
                                <motion.div 
                                    key={index} 
                                    className={styles.featureItem}

                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    
                                    <div 
                                        className={styles.featureTitle} 
                                        onClick={() => 
                                            setActiveFeature(isOpen ? -1 : index)
                                        }
                                    >
                                        {feature.title}

                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {isOpen ? '−' : '+'}
                                        </motion.span>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.video
                                                className={styles.featureImageMobile}
                                                src="/hero.mp4" 
                                                autoPlay 
                                                muted 
                                                loop 
                                                playsInline 

                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                            </motion.video>
                                        )}
                                    </AnimatePresence>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0, y: -10 }}
                                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                exit={{ opacity: 0, height: 0, y: -10 }}
                                                transition={{ duration: 0.4 }}
                                                className={styles.featuresubTitle}
                                            >
                                                {feature.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </motion.div>
    )
}