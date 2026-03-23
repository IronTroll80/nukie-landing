'use client'

import styles from './problemStatement.module.css'
import { motion } from 'framer-motion'
import {
  FaCarCrash,
  FaUserTimes,
  FaBusAlt,
  FaFileSignature,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaArrowRight,
} from 'react-icons/fa'

const painPoints = [
  {
    icon: FaCarCrash,
    title: 'Chaotic Drop-Off & Pickup',
    description: 'Traffic jams, double parking, and risky driving are common during school drop-offs.',
    stat: '98%',
    statLabel: 'of schools affected',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    icon: FaUserTimes,
    title: 'No Proper ID Checks',
    description: 'Most schools rely on word of mouth or lists, making pickups hard to verify.',
    stat: '1 in 3',
    statLabel: 'pickups unverified',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    icon: FaBusAlt,
    title: 'Bus Boarding Blind Spots',
    description: 'No real-time tracking, and limited visibility during boarding and drop-off.',
    stat: '62%',
    statLabel: 'incidents at loading',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    icon: FaFileSignature,
    title: 'No Clear Records',
    description: 'Paper logs are messy and unreliable when issues need to be checked.',
    stat: '0',
    statLabel: 'verified records',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    icon: FaQuestionCircle,
    title: 'Late Notifications',
    description: 'Parents often don’t know when their child arrives or gets picked up.',
    stat: '4.2h',
    statLabel: 'avg delay',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    icon: FaExclamationTriangle,
    title: 'Weak ID Systems',
    description: 'Static IDs become predictable over time, making them easier to exploit.',
    stat: '↑34%',
    statLabel: 'fraud increase',
    accent: '#003883',
    tint: '#e8f0fe',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function ProblemStatement() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            THE PROBLEM
          </span>
          <h2 className={styles.title}>
            The Hidden Risks in<br />
            <span>Everyday School Handoffs</span>
          </h2>
          <p className={styles.subtitle}>
            Every day, millions of children move between home, school, and the bus, but most systems still rely on verbal trust and scattered tracking. This leaves real safety gaps that schools should not ignore.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={idx}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={styles.cardBar} style={{ background: point.accent }} />

                <div className={styles.cardTop}>
                  <span className={styles.cardIcon} style={{ background: point.tint, color: point.accent }}>
                    <Icon />
                  </span>
                  <div className={styles.cardStat}>
                    <span className={styles.statNum} style={{ color: point.accent }}>{point.stat}</span>
                    <span className={styles.statLabel}>{point.statLabel}</span>
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardDesc}>{point.description}</p>

                <div className={styles.cardFooter} style={{ borderTopColor: `${point.accent}22` }}>
                  <span className={styles.cardLearnMore} style={{ color: point.accent }}>
                    See how we fix this <FaArrowRight style={{ fontSize: 10 }} />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className={styles.bridge}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className={styles.bridgeInner}>
            <div className={styles.bridgeIconRow}>
              {painPoints.map((p, i) => {
                const Icon = p.icon
                return (
                  <span key={i} className={styles.bridgeIcon} style={{ background: p.tint, color: p.accent }}>
                    <Icon />
                  </span>
                )
              })}
            </div>
            <p className={styles.bridgeText}>
              These are not isolated incidents. They are gaps in verification, visibility, and communication.{' '}
              <strong>NukiePass for Schools </strong>fixes them with one secure, dynamic system.
            </p>
            <a href="#how-it-works" className={styles.bridgeCta}>
              See How We Solve This
              <FaArrowRight className={styles.bridgeCtaIcon} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}