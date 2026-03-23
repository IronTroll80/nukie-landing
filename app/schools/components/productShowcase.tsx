'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPhoneAlt, FaDoorOpen, FaBus, FaSchool } from 'react-icons/fa'
import styles from './productShowcase.module.css'

interface Portal {
  icon: React.ElementType
  title: string
  desc: string
  thumbnail: string
}

export default function ProductShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)

  const demoVideoUrl =
    'https://www.youtube.com/embed/yNgEtnQwF74?autoplay=1&mute=1&controls=1'

  // const portals: Portal[] = [
  //   {
  //     icon: FaPhoneAlt,
  //     title: 'Parent Portal',
  //     desc: 'Generate secure codes, view real-time status & get instant notifications',
  //     thumbnail: '/images/parent-portal-thumb.jpg',
  //   },
  //   {
  //     icon: FaDoorOpen,
  //     title: 'Gate Portal',
  //     desc: 'Fast QR/code/ID scan verification with instant logging',
  //     thumbnail: '/images/gate-portal-thumb.jpg',
  //   },
  //   {
  //     icon: FaBus,
  //     title: 'Bus Portal',
  //     desc: 'Mobile boarding scans, arrival marking & route alerts',
  //     thumbnail: '/images/bus-portal-thumb.jpg',
  //   },
  //   {
  //     icon: FaSchool,
  //     title: 'School Dashboard',
  //     desc: 'Live monitoring, exceptions, reports & full audit trail',
  //     thumbnail: '/images/school-dashboard-thumb.jpg',
  //   },
  // ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>See <span>NukiePass</span> in <span>Action</span></h2>
          <p className={styles.subtitle}>
            Watch how parents, staff, and administrators work together seamlessly — from code
            generation to verified handoff and instant confirmation.
          </p>
        </motion.div>

        <motion.div
          className={styles.videoWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {!isPlaying && (
            <div className={styles.overlay} onClick={() => setIsPlaying(true)}>
              <div className={styles.playButtonWrapper}>
                <div className={styles.playButton}>
                  <FaPlay className={styles.playIcon} />
                </div>
                <p className={styles.playText}>Watch the Full Demo</p>
              </div>
            </div>
          )}

          <iframe
            className={styles.iframe}
            src={isPlaying ? demoVideoUrl : demoVideoUrl.replace('autoplay=1', '')}
            title="NukiePass for Schools Product Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* <div className={styles.portalsGrid}>
          {portals.map((portal, idx) => {
            const Icon = portal.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={styles.portalCard}
              >
                <div className={styles.thumbnailWrapper}>
                  <img
                    src={portal.thumbnail}
                    alt={`${portal.title} preview`}
                    className={styles.thumbnail}
                  />
                  <div className={styles.iconOverlay}>
                    <Icon className={styles.portalIcon} />
                  </div>
                </div>
                <div className={styles.portalInfo}>
                  <h3 className={styles.portalTitle}>{portal.title}</h3>
                  <p className={styles.portalDesc}>{portal.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div> */}

          <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#demo" className={styles.ctaButton}>
            Request Your Personalized Demo
          </a>
          <p className={styles.ctaText}>See exactly how it fits your school's daily flow.</p>
        </motion.div>
      </div>
    </section>
  )
}