'use client'

import Image from 'next/image'
import styles from './product.module.css'
import { useEffect, useRef, useState } from 'react'

interface ProductProps{
    title: string,
    subtitle: string,
    offerings: string[],
    image: string,
    second: boolean,
}

export default function Product({title, subtitle, offerings, image, second}: ProductProps){

    const ref = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if(ref.current){
            observer.observe(ref.current)
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return(
        <div 
            ref={ref}
            className={`${styles.container} ${visible ? styles.show : ''}`}
        >
            <div className={second ? `${styles.left} ${styles.orderSecond}` : `${styles.left}`}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <button className={styles.learnMore}>Learn More</button>

                <div className={styles.offerings}>
                    {offerings.map((offering, i) => (
                        <p key={i}>{offering}</p>
                    ))}
                </div>
            </div>

            <div className={second ? `${styles.right} ${styles.orderFirst}` : `${styles.right}`}>
                <Image src={image} alt={image} fill />
            </div>
        </div>
    )
}