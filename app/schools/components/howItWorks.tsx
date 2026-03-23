'use client'

import { useRef, useState } from 'react'
import styles from './howItWorks.module.css'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaQrcode, FaUserCheck, FaBell, FaSchool, FaShieldAlt } from 'react-icons/fa'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'

const steps = [
  {
    number: '01',
    title: 'Parent Generates Code',
    description: 'Parents create a secure QR or code for pickup, drop-off, or bus use.',
    icon: FaQrcode,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Authentication',
  },
  {
    number: '02',
    title: 'Quick Verification',
    description: 'Staff scan or enter the code for fast, easy confirmation.',
    icon: FaUserCheck,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Verification',
  },
  {
    number: '03',
    title: 'Instant Updates',
    description: 'Every action is logged, and parents get notified immediately.',
    icon: FaBell,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Notifications',
  },
  {
    number: '04',
    title: 'School Monitoring',
    description: 'Admins track activity, handle issues, and review reports.',
    icon: FaSchool,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Administration',
  },
  {
    number: '05',
    title: 'Weekly PIN Updates',
    description: 'PINs refresh weekly to keep security strong and up to date.',
    icon: FaShieldAlt,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Security',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 30%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const slide = (dir: 'left' | 'right') => {
    setActive(prev => {
      if (dir === 'left') return Math.max(0, prev - 1)
      return Math.min(steps.length - 1, prev + 1)
    })
  }

  const activeStep = steps[active]

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            HOW IT WORKS
          </span>
          <h2 className={styles.title}>
            How NukiePass<br />
            <span>Builds Protection</span>
          </h2>
          <p className={styles.subtitle}>
            A simple flow where each step adds another layer of verified safety from parent to school and back.
          </p>
        </motion.div>

        <div className={styles.body}>

          <div className={styles.chainColumn}>
            <div className={styles.chainTrack}>
              <div className={styles.chainLine}>
                <motion.div className={styles.chainFill} style={{ height: lineHeight }} />
              </div>

              {steps.map((step, idx) => {
                const Icon = step.icon
                const isPast = idx <= active
                return (
                  <motion.button
                    key={idx}
                    className={`${styles.chainNode} ${isPast ? styles.chainNodeActive : ''}`}
                    style={isPast ? { background: step.accent, borderColor: step.accent, boxShadow: `0 0 0 6px ${step.accent}22` } : {}}
                    onClick={() => setActive(idx)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Icon />
                    <span
                      className={`${styles.nodeLabel} ${isPast ? styles.nodeLabelActive : ''}`}
                      style={active === idx ? { color: step.accent } : {}}
                    >
                      {step.tag}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className={styles.contentColumn}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.card}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className={styles.cardGlow} style={{ background: activeStep.accent }} />

                <div className={styles.cardInner}>
                  <div className={styles.cardTop}>
                    <span
                      className={styles.cardIcon}
                      style={{ background: activeStep.tint, color: activeStep.accent }}
                    >
                      <activeStep.icon />
                    </span>
                    <div>
                      <span className={styles.cardTag} style={{ color: activeStep.accent, background: activeStep.tint }}>
                        {activeStep.tag}
                      </span>
                      <span className={styles.cardNumber}>{activeStep.number}</span>
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{activeStep.title}</h3>
                  <p className={styles.cardDesc}>{activeStep.description}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.progressPills}>
                      {steps.map((s, i) => (
                        <button
                          key={i}
                          className={`${styles.pill} ${active === i ? styles.pillActive : ''} ${i < active ? styles.pillDone : ''}`}
                          style={active === i ? { background: s.accent } : i < active ? { background: s.accent + '55' } : {}}
                          onClick={() => setActive(i)}
                        />
                      ))}
                    </div>

                    <div className={styles.navButtons}>
                      <motion.button
                        className={styles.navBtn}
                        onClick={() => slide('left')}
                        disabled={active === 0}
                        whileTap={{ scale: 0.9 }}
                        style={active > 0 ? { borderColor: activeStep.accent, color: activeStep.accent } : {}}
                      >
                        <CgArrowLeft />
                      </motion.button>
                      <motion.button
                        className={styles.navBtn}
                        onClick={() => slide('right')}
                        disabled={active === steps.length - 1}
                        whileTap={{ scale: 0.9 }}
                        style={active < steps.length - 1 ? { borderColor: activeStep.accent, color: activeStep.accent } : {}}
                      >
                        <CgArrowRight />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className={styles.cardVideo}>
                  <video src="/hero.mp4" autoPlay muted loop playsInline className={styles.video} />
                  <div className={styles.videoSheen} style={{ background: `linear-gradient(to top, ${activeStep.accent}cc, transparent)` }} />
                  <span className={styles.videoLabel} style={{ background: activeStep.tint, color: activeStep.accent }}>
                    Step {activeStep.number} — {activeStep.tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className={styles.stepList}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {steps.map((step, idx) => {
                const Icon = step.icon
                const isActive = active === idx
                return (
                  <motion.button
                    key={idx}
                    className={`${styles.stepRow} ${isActive ? styles.stepRowActive : ''}`}
                    style={isActive ? { borderLeftColor: step.accent, background: step.tint } : {}}
                    onClick={() => setActive(idx)}
                    whileHover={{ x: 4 }}
                  >
                    <span className={styles.stepRowIcon} style={isActive ? { background: step.accent, color: '#fff' } : { color: step.accent, background: step.tint }}>
                      <Icon />
                    </span>
                    <div className={styles.stepRowText}>
                      <span className={styles.stepRowNum} style={isActive ? { color: step.accent } : {}}>{step.number}</span>
                      <span className={styles.stepRowTitle}>{step.title}</span>
                    </div>
                  </motion.button>
                )
              })}
            </motion.div>
          </div>

        </div>

        {/* <motion.p
          className={styles.closing}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
        >
          Every link forged — every handoff protected and trusted.
        </motion.p> */}
      </div>
    </section>
  )
}