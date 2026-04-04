'use client'

import Image from 'next/image'
import styles from './estateOffering.module.css'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const offeringsData = [
  {
    title: 'Resident Management',
    description: 'Maintain a centralized, always up-to-date registry of every resident in your estate. Assign access permissions by household, unit, or individual — making it easy to control who can move freely and who requires additional verification. Instantly update records when residents move in or out, and keep a full history of changes for accountability. With automated tools and an intuitive interface, managing hundreds of residents is as simple as managing ten.',
    image: '/residents.jpg',
    hasIcons: true,
    icons: ['Household Profiles', 'Unit-level Access', 'Move-in/out Logs', 'Instant Updates'],
  },
  {
    title: 'Visitor Management',
    description: 'Give residents the power to pre-register their guests before arrival. Visitors receive a secure, single-use access code that expires automatically — no paper logs, no guesswork at the gate. Security personnel can verify identity in seconds, and every entry and exit is logged with a timestamp. Whether it\'s a delivery, a guest, or a contractor, you always know exactly who is on the premises.',
    image: '/visitor.jpg',
    hasIcons: false,
    icons: [],
  },
  {
    title: 'Gate Access & Approvals',
    description: 'Streamline gate operations with mobile-first approvals that put residents in control. When a visitor arrives, the resident receives an instant notification and can approve or deny entry with a single tap — from anywhere. Security staff see a live feed of approvals, pending requests, and denied entries, with full logs maintained for every decision. No more phone calls to the gatehouse, no more delays.',
    image: '/gate.jpg',
    hasIcons: true,
    icons: ['Mobile Approvals', 'Instant Alerts', 'Denial Logging', 'Live Gate Feed'],
  },
  {
    title: 'Security & Audit Trail',
    description: 'Every movement in and out of your estate is automatically recorded, timestamped, and stored. Security teams can review incidents, resolve disputes, and generate reports with a few clicks. Automated alerts flag unusual activity — repeated failed entries, after-hours access, or unrecognized vehicles — so your team can respond before situations escalate. Full compliance-ready exports available at any time.',
    image: '/access.jpg',
    hasIcons: true,
    icons: ['Auto Logging', 'Incident Alerts', 'Export Reports', 'Compliance Ready'],
  },
]

export default function EstateOffering() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.headerBlock}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <p className={styles.sub}>WHAT DOES NUKIEPASS FOR ESTATES OFFER?</p>
        <h2 className={styles.header}>A Complete Estate Security Platform That Keeps Your Community Safe.</h2>
        <p className={styles.description}>
          With NukiePass, manage residents, control gate access, pre-register visitors, and maintain a full audit trail — all from one platform built for gated communities.
        </p>
      </motion.div>

      <div className={styles.offerings}>
        {offeringsData.map((item, index) => {
          const isEven = index % 2 !== 0
          return (
            <motion.div
              className={styles.offering}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className={styles.image}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <Image src={item.image} alt={item.title} fill />
              </motion.div>

              <motion.div
                className={styles.content}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <h3 className={styles.offeringHeader}>{item.title}</h3>
                <p className={styles.offeringDescription}>{item.description}</p>

                {/* {item.hasIcons && (
                  <motion.div
                    className={styles.iconDescription}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {item.icons.map((text, i) => (
                      <div className={styles.item} key={i}>
                        <span className={styles.itemDot} />
                        <span>{text}</span>
                      </div>
                    ))}
                  </motion.div>
                )} */}

                <motion.button
                  className={styles.learnMore}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More <FaArrowRight style={{ fontSize: 11 }} />
                </motion.button>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}