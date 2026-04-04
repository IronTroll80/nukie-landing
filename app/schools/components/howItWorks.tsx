'use client'

import { useRef, useState, useEffect } from 'react'
import styles from './howItWorks.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQrcode, FaUserCheck, FaBell, FaSchool, FaShieldAlt } from 'react-icons/fa'

const steps = [
  {
    number: '01',
    title: 'Parent Generates Code',
    description: 'Using OTP login, parents create a time-sensitive QR or numeric code for drop-off, pickup, or bus boarding — with single or multi-child support built in.',
    icon: FaQrcode,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Authentication',
  },
  {
    number: '02',
    title: 'Quick Verification',
    description: 'Gate staff scan the QR, input the code, or scan student ID linked to a weekly rotating PIN. Frictionless and fast — even during peak congestion.',
    icon: FaUserCheck,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Verification',
  },
  {
    number: '03',
    title: 'Instant Updates',
    description: 'Every handoff is timestamped and logged automatically. Parents receive real-time SMS, email, or push notification — complete visibility from anywhere.',
    icon: FaBell,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Notifications',
  },
  {
    number: '04',
    title: 'School Monitoring',
    description: 'Admins see a live dashboard, review exceptions, generate reports, and maintain full accountability across all movements throughout the day.',
    icon: FaSchool,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Administration',
  },
  {
    number: '05',
    title: 'Weekly PIN Updates',
    description: "Each child's PIN rotates automatically every week. Parents are notified instantly — maintaining dynamic, active security without any manual effort.",
    icon: FaShieldAlt,
    accent: '#003883',
    tint: '#e8f0fe',
    tag: 'Security',
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    stepRefs.current.forEach((el, idx) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(idx) },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const activeStep = steps[active]

  return (
    <section ref={sectionRef} className={styles.section}>
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
            HOW IT WORKS
          </span>
          <h2 className={styles.title}>
            How NukiePass
            <span> Builds Protection</span>
          </h2>
          <p className={styles.subtitle}>
            A simple flow where each step adds another layer of verified safety from parent to school and back.
          </p>
        </motion.div>

        <div className={styles.body}>

          <div className={styles.stickyCol}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.panelCard}
                initial={{ opacity: 0, y: 14, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className={styles.panelGlow} style={{ background: activeStep.accent }} />

                <div className={styles.panelVideoWrap}>
                  <video src="/hero.mp4" autoPlay muted loop playsInline className={styles.video} />
                  <div className={styles.videoSheen} style={{ background: `linear-gradient(to top, ${activeStep.accent}ee 0%, ${activeStep.accent}33 55%, transparent 100%)` }} />
                  <div className={styles.videoTopRow}>
                    <span className={styles.videoLive}>
                      <span className={styles.liveDot} style={{ background: activeStep.accent }} />
                      Live Preview
                    </span>
                    <span className={styles.videoStepNum}>{activeStep.number}</span>
                  </div>
                  <div className={styles.videoBottomRow}>
                    <span className={styles.videoTag} style={{ background: activeStep.tint, color: activeStep.accent }}>
                      {activeStep.tag}
                    </span>
                  </div>
                </div>

                <div className={styles.panelBody}>
                  <div className={styles.panelTopRow}>
                    <span className={styles.panelIcon} style={{ background: activeStep.tint, color: activeStep.accent }}>
                      <activeStep.icon />
                    </span>
                    <div className={styles.panelPills}>
                      {steps.map((s, i) => (
                        <div
                          key={i}
                          className={`${styles.pill} ${active === i ? styles.pillActive : ''} ${i < active ? styles.pillPast : ''}`}
                          style={
                            active === i ? { background: s.accent, width: 24 } :
                            i < active ? { background: `${s.accent}66` } : {}
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className={styles.panelTitle}>{activeStep.title}</h3>
                  <p className={styles.panelDesc}>{activeStep.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.scrollCol}>
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = active === idx
              const isPast = idx < active
              return (
                <div
                  key={idx}
                  ref={el => { stepRefs.current[idx] = el }}
                  className={styles.stepRow}
                >
                  <div className={styles.stepSpine}>
                    <motion.div
                      className={styles.stepDot}
                      animate={
                        isActive
                          ? { background: step.accent, borderColor: step.accent, scale: 1.15 }
                          : isPast
                          ? { background: step.accent, borderColor: step.accent, scale: 1 }
                          : { background: '#fff', borderColor: '#ddd', scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      style={{ boxShadow: isActive ? `0 0 0 6px ${step.accent}22` : 'none' }}
                    >
                      <span style={{ color: isActive || isPast ? '#fff' : '#ccc', fontSize: 13, display: 'flex' }}>
                        <Icon />
                      </span>
                    </motion.div>
                    {idx < steps.length - 1 && (
                      <div className={styles.stepLine}>
                        <motion.div
                          className={styles.stepLineFill}
                          animate={{ scaleY: isPast ? 1 : 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          style={{ background: step.accent, transformOrigin: 'top' }}
                        />
                      </div>
                    )}
                  </div>

                  <motion.div
                    className={`${styles.stepCard} ${isActive ? styles.stepCardActive : ''}`}
                    animate={isActive
                      ? { borderColor: step.accent, opacity: 1 }
                      : { borderColor: '#efefef', opacity: isPast ? 0.6 : 0.45 }
                    }
                    transition={{ duration: 0.35 }}
                  >
                    <div className={styles.stepCardTop}>
                      <span className={styles.stepTag} style={isActive ? { color: step.accent, background: step.tint } : {}}>
                        {step.tag}
                      </span>
                      <span className={styles.stepNum}>{step.number}</span>
                    </div>

                    <h3 className={styles.stepTitle} style={isActive ? { color: step.accent } : {}}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className={styles.stepMobileVideo}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className={styles.mobileVideoInner}>
                            <video src="/hero.mp4" autoPlay muted loop playsInline className={styles.mobileVideo} />
                            <div className={styles.videoSheen} style={{ background: `linear-gradient(to top, ${step.accent}cc, transparent)` }} />
                            <span className={styles.videoTag} style={{ background: step.tint, color: step.accent }}>{step.tag}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}