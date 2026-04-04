'use client'

import styles from './officeHero.module.css'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function OfficeHero() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />

      <div className={styles.hero}>
        <motion.span
          className={styles.tag}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          NukiePass for Offices
        </motion.span>

        <motion.h1
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
        >
          Control and Manage Access in Your Office Spaces with <b>NukiePass</b>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          Verify every entry, monitor your team in real time, and maintain a complete audit trail — all from one platform built for modern workplaces.
        </motion.p>

        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.3 }}
        >
          <motion.button
            className={styles.primary}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started <FaArrowRight style={{ fontSize: 12 }} />
          </motion.button>
          <motion.button
            className={styles.secondary}
            whileHover={{ background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <div className={styles.stripe} />
    </div>
  )
}