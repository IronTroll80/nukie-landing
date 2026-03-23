'use client'

import { motion, cubicBezier, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowRight, FaBell, FaQrcode, FaShieldAlt, FaUserCheck, FaBus, FaCheckCircle } from 'react-icons/fa'
import styles from './schoolHero.module.css'

const ease = cubicBezier(0.22, 1, 0.36, 1)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}

const upVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

const rightVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.94 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease, delay: 0.25 } }
}

const notifications = [
  { icon: <FaCheckCircle />, accent: '#1a7f4e', tint: '#e6f4ea', title: 'Drop-off Confirmed', body: 'Ade has arrived safely at school — 7:48 AM', time: 'Just now' },
  { icon: <FaBus />, accent: '#7c3aed', tint: '#f3f0ff', title: 'Bus Boarded', body: 'Temi is on Bus Route 3 — departing shortly', time: '2m ago' },
  { icon: <FaUserCheck />, accent: '#003883', tint: '#e8f0fe', title: 'Pickup Verified', body: 'Authorized guardian collected Kemi at gate', time: '12m ago' },
  { icon: <FaShieldAlt />, accent: '#e65100', tint: '#fff3e0', title: 'PIN Refreshed', body: "This week's child PINs have been rotated", time: '1h ago' },
]

const stats = [
  { value: '200+', label: 'Schools' },
  { value: '98%', label: 'Satisfaction' },
  { value: '3s', label: 'Verify time' },
  { value: '0', label: 'Breaches' },
]

export default function SchoolHero() {
  const [activeNotif, setActiveNotif] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveNotif(p => (p + 1) % notifications.length), 2800)
    return () => clearInterval(t)
  }, [])

  const notif = notifications[activeNotif]

  return (
    <section className={styles.container}>
      <div className={styles.bgOverlay}>
        <div className={styles.bgRadialOne} />
        <div className={styles.bgRadialTwo} />
        <div className={styles.bgGrid} />
      </div>

      <motion.div
        className={styles.inner}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.left}>
          <motion.div className={styles.topBadge} variants={upVariant}>
            <span className={styles.topBadgeDot} />
            NukiePass For Schools
          </motion.div>

          <motion.h1 className={styles.title} variants={upVariant}>
            Secure Every School
            <span className={styles.highlight}>Handoff With Confidence</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={upVariant}>
            NukiePass For Schools delivers verified drop-offs, secure pickups, bus boarding, and instant notifications, giving parents peace of mind, staff fast workflows, and schools full accountability.
          </motion.p>

          <motion.div className={styles.actions} variants={upVariant}>
            <a href="#demo" className={styles.primaryBtn}>
              Request a Demo
              <FaArrowRight className={styles.btnIcon} />
            </a>
            <a href="#how-it-works" className={styles.secondaryBtn}>
              See How It Works
            </a>
          </motion.div>

          <motion.div className={styles.featureGrid} variants={upVariant}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}><FaShieldAlt /></span>
              <span>Weekly rotating child PIN + OTP login</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}><FaBell /></span>
              <span>Real-time SMS / email / push confirmations</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}><FaQrcode /></span>
              <span>QR codes, ID scans & full audit logs</span>
            </div>
          </motion.div>

          {/* <motion.div className={styles.statsRow} variants={upVariant}>
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* <motion.div className={styles.right} variants={rightVariant}>
          <div className={styles.mockupShell}>
            <div className={styles.mockupGlow} />

            <div className={styles.mockup}>
              <div className={styles.mockupBar}>
                <span className={styles.mockupDot} style={{ background: '#ff5f57' }} />
                <span className={styles.mockupDot} style={{ background: '#febc2e' }} />
                <span className={styles.mockupDot} style={{ background: '#28c840' }} />
                <span className={styles.mockupTitle}>NukiePass Parent Portal</span>
              </div>

              <div className={styles.mockupBody}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupAvatar}>A</div>
                  <div>
                    <p className={styles.mockupName}>Good morning, Mrs. Adeyemi</p>
                    <p className={styles.mockupSub}>3 children tracked today</p>
                  </div>
                  <span className={styles.mockupLive}>● Live</span>
                </div>

                <div className={styles.mockupCards}>
                  {[
                    { name: 'Ade', status: 'In School', color: '#1a7f4e', tint: '#e6f4ea' },
                    { name: 'Temi', status: 'On Bus', color: '#7c3aed', tint: '#f3f0ff' },
                    { name: 'Kemi', status: 'Collected', color: '#003883', tint: '#e8f0fe' },
                  ].map((child, i) => (
                    <div key={i} className={styles.childCard} style={{ borderLeftColor: child.color }}>
                      <span className={styles.childAvatar} style={{ background: child.tint, color: child.color }}>
                        {child.name[0]}
                      </span>
                      <span className={styles.childName}>{child.name}</span>
                      <span className={styles.childStatus} style={{ color: child.color, background: child.tint }}>
                        {child.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={styles.notifSection}>
                  <p className={styles.notifHeading}>Recent Alerts</p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNotif}
                      className={styles.notifCard}
                      style={{ borderLeftColor: notif.accent, background: notif.tint }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <span className={styles.notifIcon} style={{ color: notif.accent }}>
                        {notif.icon}
                      </span>
                      <div className={styles.notifText}>
                        <p className={styles.notifTitle} style={{ color: notif.accent }}>{notif.title}</p>
                        <p className={styles.notifBody}>{notif.body}</p>
                      </div>
                      <span className={styles.notifTime}>{notif.time}</span>
                    </motion.div>
                  </AnimatePresence>

                  <div className={styles.notifDots}>
                    {notifications.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.notifDot} ${activeNotif === i ? styles.notifDotActive : ''}`}
                        style={activeNotif === i ? { background: notifications[i].accent } : {}}
                        onClick={() => setActiveNotif(i)}
                      />
                    ))}
                  </div>
                </div>

                <a href="#demo" className={styles.mockupCta}>
                  Generate Pickup Code
                  <FaArrowRight style={{ fontSize: 11 }} />
                </a>
              </div>
            </div>

            <motion.div
              className={styles.floatBadge}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease }}
            >
              <FaCheckCircle style={{ color: '#1a7f4e' }} />
              100% Verified Handoffs · Real-time Audit Trail
            </motion.div>
          </div>
        </motion.div> */}
        <motion.div className= {styles.rightVideo}>
          <video 
                    src="/hero.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    />
        </motion.div>
      </motion.div>
    </section>
  )
}