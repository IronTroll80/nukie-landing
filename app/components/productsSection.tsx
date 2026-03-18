'use client'

import Image from 'next/image'
import { useRef } from 'react'
import styles from './productsSection.module.css'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'

export default function ProductSection() {

    const products = [
        {
            title: 'NukiePass For Schools',
            description: 'Manage and verify entry seamlessly for schools.'
        },
        {
            title: 'NukiePass For Estates',
            description: 'Manage and verify entry seamlessly for schools.'
        },
        {
            title: 'NukiePass For Offices',
            description: 'Manage and verify entry seamlessly for schools.'
        }
    ]

    const scrollRef = useRef<HTMLDivElement>(null)

    const arrowLeft = (
        <CgArrowLeft/>
    )

    const arrowRight = (
        <CgArrowRight/>
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
                        What NukiePass Has <br/>
                        <span> To Offer You</span>
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