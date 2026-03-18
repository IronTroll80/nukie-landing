'use client'

import Image from 'next/image'
import {useState } from 'react'
import styles from './header.module.css'

const ChevronDown = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.7"
      d="m6 9l6 6l6-6"
    />
  </svg>
)

const ChevronUp = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.7"
      d="m18 15l-6-6l-6 6"
    />
  </svg>
)

const ChevronRight = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 18l6-6l-6-6"
    />
  </svg>
)

const globeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" 
  d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"/></svg>
)

const questionIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7">
    <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/><path d="M12 13.496c0-2.003 2-1.503 2-3.506c0-2.659-4-2.659-4 0m2 6.007v-.5"/></g></svg>
)

const userIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" d="M15 7.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0"/></svg>
)

const navItems = ['Products', 'Resources', 'Company', 'Wale']

const products = [
                  {
                    title: 'For Schools',
                    description: 'Streamline security with industry-leading most valuable assets.',
                    features: [{
                                  title: 'Student Movement Verification',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                                {
                                  title: 'School Bus Handover Tracking',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                                {
                                  title: 'Parent-authorized Drop-off',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                              ]
                  },
                  {
                    title: 'For Estates ',
                    description: 'Streamline security with industry-leading most valuable assets.',
                    features: [{
                                  title: 'Manage Residents',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                                {
                                  title: 'Manage Visitors',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                                {
                                  title: 'Gate Approvals',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                              ]
                  },
                  {
                    title: 'For Offices ',
                    description: 'Streamline security with industry-leading most valuable assets.',
                    features: [{
                                  title: 'Manage Employees',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                                {
                                  title: 'Monitor Staff Performance',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                                {
                                  title: 'Keep Track Of Tasks',
                                  description: 'Streamline security with industry-leading most valuable assets.'
                                },
                              ]
                  }
                ]

export default function Header() {
  const [active, setActive] = useState<number>(-1)
  const [activeProduct, setActiveProduct] = useState (0)
  const [mobileOpen, setMobileOpen] = useState(false)

  function toggleNav(index: number) {
    setActive(prev => (prev === index ? -1 : index))
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.bodyContainer}>
        <div className={styles.imageContainer}>
          <Image src="/logo.png" alt="logo" fill />
        </div>

        <div className={styles.navItems}>
          {navItems.map((item, index) => {
            const isActive = active === index

            return (
              <p
                key={index}
                onClick={() => toggleNav(index)}
                className={isActive ? styles.active : styles.inactive}
              >
                {item} {isActive ? ChevronUp : ChevronDown}
              </p>
            )
          })}
        </div>
        <div className = {styles.extras}>
          <button className={styles.navButton}>Book a demo</button>
            {globeIcon}
            {questionIcon}
            <button className= {styles.signIn}>{userIcon}</button>
        </div>

        <div className={styles.hamburger} onClick={() => setMobileOpen(prev => !prev)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {active !== -1 && (
        <div className={styles.dropdown} >
          <div className={styles.itemContent}>
            
            <div className={styles.productList}>
              {products.map((product, index) => (
                <div key={index} className={activeProduct === index ? `${styles.activeProduct} ${styles.product}`: styles.product } onClick={()=>{setActiveProduct(index)}}>
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <span>{ChevronRight}</span>
                </div>
              ))}
            </div>

            <div className={styles.productList}>
              {products[activeProduct].features?.map((feature, index) => (
                  <div key={index} className={styles.product}>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className={styles.promotional}>
              <div className={styles.promoImage}>
                <Image src="/estate.png" alt="promo" fill />
              </div>

              <div className={styles.details} >
                {products.map((product, index) => (
                <div key={index} className={styles.product}>
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
      {/* {mobileOpen && (
        <div className={styles.mobileNav}>
          {navItems.map((item, index) => {
            const isActive = active === index

            return (
              <div key={index}>
                <p
                  onClick={() => toggleNav(index)}
                  className={isActive ? styles.active : styles.inactive}
                >
                  {item} {isActive ? ChevronUp : ChevronDown}
                </p>

                {isActive && (
                  <div className={styles.mobileDropdown}>
                    {products.map((product, i) => (
                      <div key={i} className={styles.product}>
                        <h4>{product.title}</h4>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )} */}
    </div>
  )
}