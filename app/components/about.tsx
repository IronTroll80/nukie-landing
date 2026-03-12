'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './about.module.css'

export default function About(){

    
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
        <>
        
        <div 
            ref={ref}
            className={`${styles.container} ${visible ? styles.show : ''}`}>
            <h1>About <span>Nukiepass</span></h1>
            <p>
                NukiePass is the access control and verification layer within the broader Nukie security ecosystem.
                It is designed to help organizations manage identity, movement, approval,
                and entry across physical spaces using a mix of software, operational workflows, and hardware-enabled verification
            </p>
            <b>
                “NukiePass transformed how we manage our community.
                Everything from visitor access to bill collection is now seamless. Our residents love it.”
            </b>
            <button>
                Learn More
            </button>
        </div>
        
        </>
    )
}