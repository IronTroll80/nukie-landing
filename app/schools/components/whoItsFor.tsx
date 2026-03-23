'use client'

import { useState } from 'react'
import styles from './whoItsFor.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSchool, FaUser, FaDoorOpen, FaBus, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa'

const roles = [
  {
    icon: FaUser,
    title: 'Parents & Guardians',
    text: 'Get instant updates on drop-offs, pickups, and bus activity — no more guessing.',
    accent: '#003883',
    tint: '#e8f0fe',
    stat: '98%',
    statLabel: 'Parent satisfaction rate',
    tag: 'Families',
  },
  {
    icon: FaDoorOpen,
    title: 'Gate & Front-Desk Staff',
    text: 'Verify people in seconds with QR, codes, or ID + PIN — fast and stress-free.',
    accent: '#003883',
    tint: '#e8f0fe',
    stat: '3s',
    statLabel: 'Avg verification time',
    tag: 'Security',
  },
  {
    icon: FaBus,
    title: 'Bus Personnel',
    text: 'Mark boarding and arrival easily, with instant updates — even with poor network.',
    accent: '#003883',
    tint: '#e8f0fe',
    stat: '100%',
    statLabel: 'Offline-ready',
    tag: 'Transport',
  },
  {
    icon: FaSchool,
    title: 'School Administrators',
    text: 'Track activity, handle issues, and access reports — all in one place.',
    accent: '#003883',
    tint: '#e8f0fe',
    stat: '200+',
    statLabel: 'Schools onboarded',
    tag: 'Admin',
  },
  {
    icon: FaClipboardCheck,
    title: 'Safety & Operations Teams',
    text: 'Manage pickups and monitor activity across all checkpoints in real time.',
    accent: '#003883',
    tint: '#e8f0fe',
    stat: '0',
    statLabel: 'Unauthorized entries',
    tag: 'Operations',
  },
]

export default function WhoItsFor() {
  const [active, setActive] = useState(0)
  const activeRole = roles[active]

  return (
    <section className={styles.section}>
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
            WHO IT'S FOR
          </span>
          <h2 className={styles.title}>
            Centered Around<br />
            <span>Real People</span>
          </h2>
          <p className={styles.subtitle}>
            Designed for parents, staff, and teams responsible for safe school movement every day.
          </p>
        </motion.div>

        <div className={styles.body}>
          <div className={styles.tabList}>
            {roles.map((role, idx) => {
              const Icon = role.icon
              const isActive = active === idx
              return (
                <motion.button
                  key={idx}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  style={isActive ? { borderLeftColor: role.accent, background: role.tint } : {}}
                  onClick={() => setActive(idx)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={{ x: 3 }}
                >
                  <span
                    className={styles.tabIcon}
                    style={isActive ? { background: role.accent, color: '#fff' } : { background: role.tint, color: role.accent }}
                  >
                    <Icon />
                  </span>
                  <div className={styles.tabText}>
                    <span className={styles.tabTag} style={isActive ? { color: role.accent } : {}}>{role.tag}</span>
                    <span className={styles.tabTitle}>{role.title}</span>
                  </div>
                  <span className={styles.tabArrow} style={isActive ? { color: role.accent } : {}}>→</span>
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.panel}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <div className={styles.panelGlow} style={{ background: activeRole.accent }} />

              <div className={styles.panelTop}>
                <span className={styles.panelIcon} style={{ background: activeRole.tint, color: activeRole.accent }}>
                  <activeRole.icon />
                </span>
                <span className={styles.panelTag} style={{ background: activeRole.tint, color: activeRole.accent }}>
                  {activeRole.tag}
                </span>
              </div>

              <h3 className={styles.panelTitle}>{activeRole.title}</h3>
              <p className={styles.panelText}>{activeRole.text}</p>

              <div className={styles.statBlock} style={{ borderColor: `${activeRole.accent}22`, background: activeRole.tint }}>
                <span className={styles.statNum} style={{ color: activeRole.accent }}>{activeRole.stat}</span>
                <span className={styles.statLabel}>{activeRole.statLabel}</span>
              </div>

              <div className={styles.shieldWrap}>
                <div className={styles.shieldRing} style={{ borderColor: `${activeRole.accent}22` }} />
                <div className={styles.shieldRing2} style={{ borderColor: `${activeRole.accent}11` }} />
                <span className={styles.shieldIcon} style={{ background: activeRole.accent }}>
                  <FaShieldAlt />
                </span>
              </div>

              <div className={styles.panelDots}>
                {roles.map((r, i) => (
                  <button
                    key={i}
                    className={`${styles.panelDot} ${active === i ? styles.panelDotActive : ''}`}
                    style={active === i ? { background: r.accent } : {}}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.mobileCards}>
          {roles.map((role, idx) => {
            const Icon = role.icon
            return (
              <motion.div
                key={idx}
                className={styles.mobileCard}
                style={{ borderTopColor: role.accent }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.08 }}
              >
                <div className={styles.mobileCardTop}>
                  <span className={styles.mobileCardIcon} style={{ background: role.tint, color: role.accent }}>
                    <Icon />
                  </span>
                  <span className={styles.mobileCardTag} style={{ color: role.accent, background: role.tint }}>{role.tag}</span>
                </div>
                <h4 className={styles.mobileCardTitle}>{role.title}</h4>
                <p className={styles.mobileCardText}>{role.text}</p>
                {/* <div className={styles.mobileCardStat} style={{ color: role.accent }}>
                  <strong>{role.stat}</strong> <span>{role.statLabel}</span>
                </div> */}
              </motion.div>
            )
          })}
        </div>

        <motion.p
          className={styles.closing}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          When the people who live the problem help build the solution — trust becomes automatic.
        </motion.p>
      </div>
    </section>
  )
}