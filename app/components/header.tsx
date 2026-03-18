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

        <button className={styles.navButton}>Book a demo</button>
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