'use client'

import Image from 'next/image'
import styles from './features.module.css'
import { useState } from 'react'

export default function Features(){

    const [activeFeature, setActiveFeature] = useState(0)

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
        <div className={styles.container}>  

            <div className={styles.left}>
                <div className={styles.leftInner}>
                     <div className={styles.badge}>
                            <span className={styles.dot}></span>
                            POINT OF SALE
                    </div>

                    <h1 className={styles.title}>
                        Everything You Need to <br />
                        <span>Manage Access Smarter</span>
                    </h1>

                    <p className={styles.intro}>
                        Control access, monitor activity, and manage operations seamlessly—all from one platform.
                    </p>

                    <div className={styles.features}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                
                                <h1 
                                    className={styles.featureTitle} 
                                    onClick={() => 
                                        setActiveFeature(activeFeature === index ? -1 : index)
                                    }
                                >
                                    {feature.title}
                                    <span>
                                        {activeFeature === index ? ' − ' : ' + '}
                                    </span>
                                </h1>

                                {activeFeature === index && (
                                    <div 
                                        className={styles.featureImageMobile} 
                                        style={{backgroundImage: `url(${feature.image})`}}
                                    >
                                        <div className={styles.mobileImageContainer}>
                                            <Image 
                                                src="/screen.png"
                                                alt="feature"
                                                fill
                                            />
                                        </div>
                                    </div>
                                )}

                                <p className={
                                    activeFeature === index
                                    ? `${styles.featuresubTitle} ${styles.showFeature}`
                                    : `${styles.featuresubTitle} ${styles.noShowFeature}`
                                }>
                                    {feature.description}
                                </p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.featureImage}>
                    {activeFeature !== -1 && (
                        <Image 
                            key={activeFeature}
                            src={features[activeFeature].image}
                            alt="feature"
                            fill
                        />
                    )}
                </div>
            </div>

        </div>
    )
}