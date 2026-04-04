'use client'

import styles from './whoOfficeFor.module.css'
import { motion } from 'framer-motion'
import { FaUserTie, FaUsers, FaShieldAlt, FaBuilding } from 'react-icons/fa'

const audience = [
  {
    icon: FaUserTie,
    title: 'HR & Admin Teams',
    description: 'Manage employee records, track attendance, and handle onboarding without the paperwork.',
  },
  {
    icon: FaUsers,
    title: 'Team Managers',
    description: 'Monitor your team\'s check-ins, approve access, and assign tasks from one place.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security Personnel',
    description: 'Verify staff and visitor identity at entry points quickly and with full confidence.',
  },
  {
    icon: FaBuilding,
    title: 'Office Operators',
    description: 'Keep a real-time view of who\'s in the building and maintain a clean audit trail.',
  },
]

export default function WhoItsForOffice() {
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
          <h2 className={styles.title}>Built for everyone in your office</h2>
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