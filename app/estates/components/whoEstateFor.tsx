'use client'

import styles from './whoEstateFor.module.css'
import { motion } from 'framer-motion'
import { FaHome, FaShieldAlt, FaUserCheck, FaClipboardList } from 'react-icons/fa'

const audience = [
  {
    icon: FaHome,
    title: 'Residents & Homeowners',
    description: 'Pre-register visitors, approve gate access, and stay informed of every entry — all from your phone.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security Personnel',
    description: 'Verify visitors instantly at the gate with QR codes or PINs — no phone calls, no delays.',
  },
  {
    icon: FaUserCheck,
    title: 'Estate Managers',
    description: 'Oversee resident records, monitor access activity, and resolve incidents with a full audit trail.',
  },
  {
    icon: FaClipboardList,
    title: 'Facility & Ops Teams',
    description: 'Coordinate contractor access, track deliveries, and keep estate operations running smoothly.',
  },
]

export default function WhoEstateFor() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>Who it's for</p>
          <h2 className={styles.title}>Built for everyone in your community</h2>
        </motion.div>

        <div className={styles.grid}>
          {audience.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                className={styles.card}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
              >
                <span className={styles.icon}><Icon /></span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
