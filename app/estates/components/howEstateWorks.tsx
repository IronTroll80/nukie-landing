'use client'

import styles from './howEstateWorks.module.css'
import { motion } from 'framer-motion'
import { FaUserFriends, FaMobileAlt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'

const steps = [
  {
    number: '01',
    icon: FaUserFriends,
    title: 'Register Residents',
    description: 'Add households, assign unit numbers, and set access permissions in minutes.',
  },
  {
    number: '02',
    icon: FaMobileAlt,
    title: 'Pre-register Visitors',
    description: 'Residents generate secure, single-use codes for expected guests before they arrive.',
  },
  {
    number: '03',
    icon: FaCheckCircle,
    title: 'Approve Gate Access',
    description: 'Residents approve or deny entry requests from their phone — instantly.',
  },
  {
    number: '04',
    icon: FaShieldAlt,
    title: 'Monitor & Audit',
    description: 'Security teams review logs, flag incidents, and export reports anytime.',
  },
]

export default function HowEstateWorks() {
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
          <h2 className={styles.title}>Your estate secured in four steps</h2>
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
