'use client'

import styles from './howOfficeWorks.module.css'
import { motion } from 'framer-motion'
import { FaUserPlus, FaMobileAlt, FaCheckCircle, FaChartBar } from 'react-icons/fa'

const steps = [
  {
    number: '01',
    icon: FaUserPlus,
    title: 'Onboard Your Team',
    description: 'Add employees and set access levels in minutes. No hardware needed.',
  },
  {
    number: '02',
    icon: FaMobileAlt,
    title: 'Staff Check In',
    description: 'Employees verify entry via QR code or PIN — fast and contactless.',
  },
  {
    number: '03',
    icon: FaCheckCircle,
    title: 'Approvals & Alerts',
    description: 'Managers approve access requests and get instant notifications.',
  },
  {
    number: '04',
    icon: FaChartBar,
    title: 'Track & Report',
    description: 'View attendance, monitor tasks, and export reports from one dashboard.',
  },
]

export default function HowOfficeWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>HOW IT WORKS</span>
          <h2 className={styles.title}>Up and running in four steps</h2>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                className={styles.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {idx < steps.length - 1 && <div className={styles.connector} />}

                <div className={styles.iconWrap}>
                  <Icon />
                </div>

                <span className={styles.stepNum}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}