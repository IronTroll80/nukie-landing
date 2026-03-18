'use client'

import { useRef, useState } from 'react'
import styles from './productsSection.module.css'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'
import { motion } from 'framer-motion'

export default function ProductSection() {

    const products = [
        {
            title: 'NukiePass For Schools',
            description: 'Manage and verify entry seamlessly for schools.'
        },
        {
            title: 'NukiePass For Estates',
            description: 'Manage and verify entry seamlessly for estates.'
        },
        {
            title: 'NukiePass For Offices',
            description: 'Manage and verify entry seamlessly for offices.'
        }
    ]

    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const scroll = (direction: string) => {
        if (!scrollRef.current) return

        const scrollAmount = 400

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        })
    }

    // detect scroll position → active card
    const handleScroll = () => {
        if (!scrollRef.current) return

        const scrollLeft = scrollRef.current.scrollLeft
        const cardWidth = scrollRef.current.offsetWidth

        const index = Math.round(scrollLeft / cardWidth)
        setActiveIndex(index)
    }

    return (
        <motion.div 
            className={styles.container}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
        >
            
            <div className={styles.top}>
                <div>
                    <h1 className={styles.title}>
                        What NukiePass Has <br/>
                        <span> To Offer You</span>
                    </h1>
                </div>

                <div className={styles.buttons}>
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scroll('left')}
                    >
                        <CgArrowLeft/>
                    </motion.button>

                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scroll('right')}
                    >
                        <CgArrowRight/>
                    </motion.button>
                </div>
            </div>

           
            <div 
                className={styles.productContainer} 
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {products.map((product, index) => {

                    const isActive = index === activeIndex

                    return (
                        <motion.div 
                            key={index}
                            className={styles.product}

                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.15 }}

                            animate={{
                                opacity: isActive ? 1 : 0.4
                            }}

                        >
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}