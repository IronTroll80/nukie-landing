'use client'

import styles from './features.module.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdSecurity, MdLocationOn, MdBarChart, MdPayment } from 'react-icons/md'

const features = [
  {
    id: 0,
    title: 'Access Control',
    description: 'Verify and monitor who enters your space in real-time. Set permission levels, schedule access windows, and get instant alerts on unauthorized attempts.',
    icon: <MdSecurity />,
    accent: '#003883',
    tint: '#e8f0fe',
    number: '01',
  },
  {
    id: 1,
    title: 'Real-Time Tracking',
    description: 'Track movement and activity across locations with live updates. See a full timeline of entries, exits, and incidents as they happen.',
    icon: <MdLocationOn />,
    accent: '#003883',
    tint: '#e8f0fe',
    number: '02',
  },
  {
    id: 2,
    title: 'Analytics',
    description: 'Get insights into usage patterns and visitor behavior. Export reports, visualize trends, and make data-driven decisions about your security operations.',
    icon: <MdBarChart />,
    accent: '#003883',
    tint: '#e8f0fe',
    number: '03',
  },
  {
    id: 3,
    title: 'Payments',
    description: 'Handle dues, levies, and transactions seamlessly. Automated billing, instant receipts, and a full payment history for every resident or employee.',
    icon: <MdPayment />,
    accent: '#003883',
    tint: '#e8f0fe',
    number: '04',
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const active = features[activeFeature]

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            PLATFORM FEATURES
          </div>

          <h1 className={styles.title}>
            Everything You Need to
            <span> Manage Access Smarter</span>
          </h1>

          <p className={styles.intro}>
            Control access, monitor activity, and manage operations seamlessly — all from one platform.
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => {
              const isOpen = activeFeature === index

              return (
                <motion.div
                  key={index}
                  className={`${styles.featureItem} ${isOpen ? styles.featureItemOpen : ''}`}
                  style={isOpen ? { borderLeftColor: feature.accent } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={styles.featureHeader}>
                    <div className={styles.featureLeft}>
                      <span
                        className={styles.featureIconWrap}
                        style={isOpen ? { background: feature.tint, color: feature.accent } : {}}
                      >
                        {feature.icon}
                      </span>
                      <span className={styles.featureTitle}>{feature.title}</span>
                    </div>

                    <div className={styles.featureRight}>
                      <span className={styles.featureNumber}>{feature.number}</span>
                      <motion.span
                        className={styles.toggle}
                        style={isOpen ? { background: feature.accent, color: '#fff', borderColor: feature.accent } : {}}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        +
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <>
                        <motion.div
                          className={styles.featureImageMobile}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <video
                            src="/hero.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className={styles.mobileVideo}
                          />
                        </motion.div>

                        <motion.p
                          className={styles.featureDesc}
                          initial={{ opacity: 0, y: -8, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -8, height: 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          {feature.description}
                        </motion.p>
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stickyPanel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              className={styles.videoWrapper}
              style={{ '--accent': active.accent, '--tint': active.tint } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -16 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              <div className={styles.videoGlow}/>

              <div className={styles.videoCard}>
                <div className={styles.videoTopBar}>
                  <span className={styles.videoIconBadge} style={{ background: active.tint, color: active.accent }}>
                    {active.icon}
                  </span>
                  <div>
                    <p className={styles.videoLabel}>Feature Preview</p>
                    <p className={styles.videoTitle}>{active.title}</p>
                  </div>
                  <span className={styles.videoLiveDot}>
                    <span style={{ background: active.accent }} />
                    Live
                  </span>
                </div>

                <video
                  src="/hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                />

                <div className={styles.videoBottomBar}>
                  <p className={styles.videoDesc}>{active.description}</p>
                  <div className={styles.featureDots}>
                    {features.map((f, i) => (
                      <button
                        key={i}
                        className={`${styles.featureDot} ${activeFeature === i ? styles.featureDotActive : ''}`}
                        style={activeFeature === i ? { background: f.accent } : {}}
                        onClick={() => setActiveFeature(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}