'use client'

import { useRef, useState } from 'react'
import styles from './coreFeatures.module.css'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaSun, FaSchool, FaBus, FaQrcode, FaUserCheck, FaBell, FaShieldAlt } from 'react-icons/fa'

const dayStages = [
  {
    time: 'Morning',
    icon: FaSun,
    feature: 'OTP Login',
    description: 'Parents and staff log in quickly with a one-time code — simple and secure.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    time: 'Drop-Off',
    icon: FaSchool,
    feature: 'Drop-Off Code',
    description: 'Parents generate a code, staff verify — smooth and quick check-in.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    time: 'Bus Arrival',
    icon: FaBus,
    feature: 'Bus Tracking',
    description: 'Staff scan codes to mark boarding and arrival. Parents get updates instantly.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    time: 'Midday',
    icon: FaQrcode,
    feature: 'QR & ID Scans',
    description: 'Movements are tracked with QR codes or PIN-linked IDs.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    time: 'Pickup',
    icon: FaUserCheck,
    feature: 'Secure Pickup',
    description: 'Guardians generate a code, staff verify, and handover is logged.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    time: 'End of Day',
    icon: FaBell,
    feature: 'Instant Updates',
    description: 'Parents get notified when their child is picked up or arrives safely.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
  {
    time: 'Ongoing',
    icon: FaShieldAlt,
    feature: 'PIN Updates',
    description: 'PINs refresh weekly, with full logs for tracking and accountability.',
    accent: '#003883',
    tint: '#e8f0fe',
  },
]

export default function CoreFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            A FULL SCHOOL DAY
          </span>
          <h2 className={styles.title}>
            A School Day Protected<br />
            <span>by NukiePass</span>
          </h2>
          <p className={styles.subtitle}>
            From the first bell to final pickup, every moment is verified, tracked, and shared for complete safety and peace of mind.
          </p>
        </motion.div>

        {/* <div className={styles.timelineWrapper}>
          <div className={styles.timelineRail}>
            <motion.div className={styles.timelineFill} style={{ width: lineWidth }} />

            {dayStages.map((stage, idx) => {
              const isHovered = hovered === idx
              return (
                <motion.div
                  key={idx}
                  className={styles.railNode}
                  style={{ left: `${(idx / (dayStages.length - 1)) * 100}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200 }}
                >
                  <motion.button
                    className={styles.nodeDot}
                    style={isHovered ? { background: stage.accent, borderColor: stage.accent, boxShadow: `0 0 0 6px ${stage.accent}33` } : {}}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  <span className={styles.nodeTime} style={isHovered ? { color: stage.accent, fontWeight: 700 } : {}}>
                    {stage.time}
                  </span>
                </motion.div>
              )
            })}
          </div>

          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                className={styles.tooltip}
                style={{
                  left: `${(hovered / (dayStages.length - 1)) * 100}%`,
                  background: dayStages[hovered].accent,
                }}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className={styles.tooltipIcon} style={{ background: 'rgba(255,255,255,0.2)' }}>
                  {(() => { const Icon = dayStages[hovered].icon; return <Icon /> })()}
                </span>
                <div>
                  <p className={styles.tooltipFeature}>{dayStages[hovered].feature}</p>
                  <p className={styles.tooltipTime}>{dayStages[hovered].time}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}

        <div className={styles.grid}>
          {dayStages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={idx}
                className={`${styles.card} ${hovered === idx ? styles.cardHovered : ''}`}
                style={hovered === idx ? { borderColor: stage.accent, boxShadow: `0 12px 40px ${stage.accent}22` } : {}}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className={styles.cardTop}>
                  <span
                    className={styles.iconWrapper}
                    style={{ background: stage.tint, color: stage.accent }}
                  >
                    <Icon />
                  </span>
                  <span
                    className={styles.cardTime}
                    style={hovered === idx ? { color: stage.accent, background: stage.tint } : {}}
                  >
                    {stage.time}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{stage.feature}</h3>
                <p className={styles.cardDesc}>{stage.description}</p>

                <div
                  className={styles.cardBar}
                />
              </motion.div>
            )
          })}
        </div>

        {/* <motion.p
          className={styles.closing}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          Safe Arrival. Verified Handoff. Trusted Every Day.
        </motion.p> */}
      </div>
    </section>
  )
}