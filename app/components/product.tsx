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

    return(
        <div className={`${styles.container} ${styles.show }`} >
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