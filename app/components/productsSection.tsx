'use client'

import Image from 'next/image'
import { useRef } from 'react'
import styles from './productsSection.module.css'

export default function ProductSection() {

    const products = [
        {
            title: 'Access Control',
            description: 'Manage and verify entry seamlessly across locations.'
        },
        {
            title: 'Real-Time Tracking',
            description: 'Track movement and activity across locations with live updates.'
        },
        {
            title: 'Analytics',
            description: 'Get insights into usage patterns and visitor behavior.'
        }
    ]

    const scrollRef = useRef<HTMLDivElement>(null)

    const arrowLeft = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7">
                <path d="M13.25 15.5L9.75 12l3.5-3.5"/>
                <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>
            </g>
        </svg>
    )

    const arrowRight = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7">
                <path d="m10.75 8.5l3.5 3.5l-3.5 3.5"/>
                <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>
            </g>
        </svg>
    )

    const scroll = (direction: string) => {
        if (!scrollRef.current) return
        const scrollAmount = 400
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        })
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.top}>
                <div>
                    <h1 className={styles.title}>
                        What Nukie Has <br />
                        <span>To Offer You</span>
                    </h1>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => scroll('left')}>{arrowLeft}</button>
                    <button onClick={() => scroll('right')}>{arrowRight}</button>
                </div>
            </div>

            {/* Product carousel */}
            <div className={styles.productContainer} ref={scrollRef}>
                {products.map((product, index) => (
                    <div className={styles.product} key={index}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}