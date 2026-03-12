'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './header.module.css'

export default function Header() {
  const [showNav, setShowNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Header */}
      <div
        className={styles.headerContainer}
        style={{
          backdropFilter: scrolled ? 'blur(50px)' : 'none',
          background: scrolled ? 'rgba(255,255,255,0.1)' : 'transparent',
          border: scrolled ? '1px solid rgba(74, 51, 169, 0.16)': 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)': 'none',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div className={styles.imageContainer}>
          <Image src={'/logo.png'} alt='logo' fill />
        </div>

        <div className={styles.navItems}>
          <p>Products</p>
          <p>Pricing</p>
          <p>About us</p>
          <p>Contact Us</p>
        </div>

        <button className={styles.navButton}>Book a demo</button>

        <div className={styles.navMobile}>
          <button
            className={`${styles.navTrigger} ${showNav ? styles.active : ''}`}
            onClick={() => setShowNav(!showNav)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className={`${styles.navItemsMobile} ${showNav ? styles.open : ''}`}
        style={{
          backdropFilter: 'blur(50px)',
          position: 'fixed',
          top: 70,
          left: 0,
          width: '90%',
          zIndex: 9998,
          marginLeft: '5%',
        }}
      >
        <p>Products</p>
        <p>Pricing</p>
        <p>About us</p>
        <p>Contact Us</p>
        <button className={styles.navButtonMobile}>Book a demo</button>
      </div>
    </>
  )
}