'use client'

import Image from 'next/image'
import styles from './offering.module.css'
import { FaGamepad, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const offeringsData = [
  {
    title: 'Access Control',
    description: 'Easily monitor and manage who has access to your office spaces with a centralized, intelligent system designed for modern workplaces. Set up custom access levels for different roles, departments, or time schedules, ensuring that only the right people can enter specific areas. Eliminate the risks associated with lost keycards or manual access systems, while maintaining full control over permissions. With automated rules and real-time updates, you can instantly grant, restrict, or revoke access — keeping unauthorized personnel out without slowing down daily operations.',
    image: '/access.jpg',
    hasIcons: true,
    icons: ['Easy Integration', 'Real-Time Alerts', 'Custom Levels', 'Audit Logs'],
  },
  {
    title: 'Staff Monitoring',
    description: 'Get a comprehensive, real-time view of employee activity across your office environment. Track check-ins, movement between different areas, and total time spent on-site with accurate, automated logs. This allows you to better understand staff patterns, improve operational efficiency, and ensure compliance with company policies. All data is securely stored and easily exportable, making reporting, audits, and performance reviews seamless. Whether managing a small team or a large workforce, you gain full visibility without micromanaging.',
    image: '/staff.jpg',
    hasIcons: false,
    icons: [],
  },
  {
    title: 'Visitor Management',
    description: 'Streamline and modernize how you handle office visitors with a fully digital, hassle-free system. Pre-register guests before arrival, send them secure single-use access codes, and ensure a smooth check-in experience without delays or confusion. Every entry and exit is automatically logged, giving you complete visibility and control over who is in your building at any time. Replace outdated paper sign-in sheets with a professional, secure process that enhances both security and the visitor experience.',
    image: '/visitor.jpg',
    hasIcons: true,
    icons: ['Digital Sign-In', 'Pre-Registration', 'Host Alerts', 'Auto Expiry'],
  },
  {
    title: 'Task Tracking',
    description: 'Assign, monitor, and manage tasks across your team with a system that connects productivity directly to presence and accountability. Easily delegate responsibilities, track progress in real time, and ensure tasks are completed efficiently without constant follow-ups. With built-in reminders, status updates, and detailed reporting, managers can stay informed while teams stay organized. By linking task tracking with access and attendance data, you gain deeper insights into performance and operational effectiveness.',
    image: '/task.jpg',
    hasIcons: true,
    icons: ['Assignment', 'Progress Tracking', 'Reminders', 'Reports'],
  },
]

export default function Offering() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.headerBlock}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <p className={styles.sub}>WHAT DOES NUKIEPASS FOR OFFICES OFFER?</p>
        <h2 className={styles.header}>A Comprehensive Office Security Tool That Helps You Manage Your Workspace.</h2>
        <p className={styles.description}>
          With NukiePass, you can easily monitor and manage who has access to your office spaces, set up custom access levels, and receive real-time notifications of any unauthorized access attempts.
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
                        <FaGamepad className={styles.icon} />
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