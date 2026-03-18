'use client'

import { useRef, useState } from 'react'
import styles from './productsSection.module.css'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSchool, FaBuilding, FaUsers } from 'react-icons/fa'
import { MdSecurity, MdDirectionsBus, MdFamilyRestroom, MdGroup, MdVisibility, MdGavel, MdPeople, MdMonitorHeart, MdTask } from 'react-icons/md'

const products = [
  {
    title: 'NukiePass For Schools',
    description: 'Manage and verify entry seamlessly for schools. Keep every student safe with smart tracking and authorized handovers.',
    icon: <FaSchool />,
    color: '#e8f0fe',
    accent: '#003883',
    gradient: 'linear-gradient(135deg, #003883 0%, #1a5fb4 60%, #2d7dd2 100%)',
    tag: 'Education',
    // stat: '200+',
    // statLabel: 'Schools trust NukiePass',
    stat: '',
    statLabel: '',
    features: [
      { icon: <MdSecurity />, label: 'Student Movement Verification' },
      { icon: <MdDirectionsBus />, label: 'Bus Handover Tracking' },
      { icon: <MdFamilyRestroom />, label: 'Parent-authorized Drop-off' },
    ],
  },
  {
    title: 'NukiePass For Estates',
    description: 'Complete control over who enters your community. Pre-register visitors and approve gate access instantly from your phone.',
    icon: <FaBuilding />,
    color: '#e8f0fe',
    accent: '#003883',
    gradient: 'linear-gradient(135deg, #003883 0%, #1a5fb4 60%, #2d7dd2 100%)',
    tag: 'Residential',
    stat: '',
    statLabel: '',
    features: [
      { icon: <MdGroup />, label: 'Manage Residents' },
      { icon: <MdVisibility />, label: 'Visitor Management' },
      { icon: <MdGavel />, label: 'Instant Gate Approvals' },
    ],
  },
  {
    title: 'NukiePass For Offices',
    description: 'Seamless workforce management and productivity tools. Track attendance, monitor performance, and assign tasks all in one place.',
    icon: <FaUsers />,
    color: '#e8f0fe',
    accent: '#003883',
    gradient: 'linear-gradient(135deg, #003883 0%, #1a5fb4 60%, #2d7dd2 100%)',
    tag: 'Corporate',
    stat: '',
    statLabel: '',
    features: [
      { icon: <MdPeople />, label: 'Employee Management' },
      { icon: <MdMonitorHeart />, label: 'Staff Performance' },
      { icon: <MdTask />, label: 'Task Tracking' },
    ],
  },
]

export default function ProductSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: string) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.offsetWidth
    scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth)
    setActiveIndex(index)
  }

  const active = products[activeIndex]

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.top}>
        <div className={styles.titleBlock}>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex + '-tag'}
              className={styles.tag}
              style={{ background: active.color, color: active.accent }}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
            >
              {active.tag}
            </motion.span>
          </AnimatePresence>
          <h1 className={styles.title}>
            What NukiePass Has <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                style={{ color: active.accent }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                To Offer You
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.dots}>
            {products.map((p, i) => (
              <button
                key={i}
                className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ''}`}
                style={activeIndex === i ? { background: p.accent } : {}}
                onClick={() => {
                  if (!scrollRef.current) return
                  scrollRef.current.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: 'smooth' })
                  setActiveIndex(i)
                }}
              />
            ))}
          </div>
          <div className={styles.buttons}>
            <motion.button whileTap={{ scale: 0.88 }} onClick={() => scroll('left')} style={activeIndex > 0 ? { borderColor: active.accent, color: active.accent } : {}}>
              <CgArrowLeft />
            </motion.button>
            <motion.button whileTap={{ scale: 0.88 }} onClick={() => scroll('right')} style={activeIndex < products.length - 1 ? { borderColor: active.accent, color: active.accent } : {}}>
              <CgArrowRight />
            </motion.button>
          </div>
        </div>
      </div>

      <div className={styles.productContainer} ref={scrollRef} onScroll={handleScroll}>
        {products.map((product, index) => {
          const isActive = index === activeIndex
          return (
            <motion.div
              key={index}
              className={styles.product}
              style={{ background: product.gradient }}
              animate={{ opacity: isActive ? 1 : 0.35, scale: isActive ? 1 : 0.97 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.cardNoise} />

              <div className={styles.cardTop}>
                <span className={styles.cardIcon} style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {product.icon}
                </span>
                <span className={styles.cardTagBadge}>{product.tag}</span>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.features}>
                  {product.features.map((f, i) => (
                    <span key={i} className={styles.featurePill}>
                      <span className={styles.pillIcon}>{f.icon}</span>
                      {f.label}
                    </span>
                  ))}
                </div>

                <div className={styles.cardText}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>{product.stat}</span>
                    <span className={styles.statLabel}>{product.statLabel}</span>
                  </div>
                  <a href="#" className={styles.cardCta}>
                    Learn more <CgArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
