'use client'

import { FaCircle } from 'react-icons/fa'
import styles from './cta.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CTA (){

    const images = ['user.png','user.png','user.png','user.png','user.png']
    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add(styles.ripple)

    const ripple = button.getElementsByClassName(styles.ripple)[0]
    if (ripple) ripple.remove()

    button.appendChild(circle)
}

    return(
        <motion.div 
            className={styles.container}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
        >
            <motion.div className={styles.bg}/>

            {/* SUBTEXT */}
            <motion.p 
                className={styles.sub}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <i><FaCircle/></i> Your Move
            </motion.p>

            {/* TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Verify Access Today. 
                <span> Sign up with NukiePass</span> and take control.
            </motion.h1>

            {/* AVATARS */}
            <div className={styles.images}>
                {images.map((image, index)=>(
                    <motion.div
                        key={index}

                        initial={{ opacity: 0, scale: 0.6, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}

                        transition={{ 
                            delay: 0.3 + index * 0.1,
                            type: 'spring',
                            stiffness: 120
                        }}
                    >
                        <Image 
                            src={'/' + image} 
                            alt='user' 
                            width={54} 
                            height={54}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.button 
                className={styles.button}
                onMouseOver={createRipple}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ delay: 0.6 }}

                whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.15)'
                }}

                whileTap={{ scale: 0.95 }}
            >
                <p>Sign Up With NukiePass</p>
            </motion.button>

        </motion.div>
    )
}