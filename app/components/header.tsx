'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './header.module.css'
import { FaBuilding, FaSchool, FaUsers, FaQuestionCircle, FaInfoCircle, FaPhone } from 'react-icons/fa'
import { MdSecurity, MdDirectionsBus, MdFamilyRestroom, MdGroup, MdVisibility, MdGavel, MdPeople, MdMonitorHeart, MdTask, MdArticle } from 'react-icons/md'
import Link from 'next/link'

const ChevronDown = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 8l5 5l5-5" />
  </svg>
)

const ChevronRight = () => (
  <svg width={14} height={14} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8 5l5 5l-5 5" />
  </svg>
)

const GlobeIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17" />
  </svg>
)

const HelpIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
      <path d="M12 13.5c0-2 2-1.5 2-3.5c0-2.5-4-2.5-4 0m2 6v-.5" />
    </g>
  </svg>
)

const UserIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0" />
  </svg>
)

type MegaFeature = {
  title: string
  description: string
  icon: ReactNode
}

type MegaSection = {
  id: number
  title: string
  icon: ReactNode
  description: string
  color: string
  accent: string
  features: MegaFeature[]
  promoLabel: string
  promoImage: string
  promoLink: string
}

type SimpleSection = {
  title: string
  description: string
  icon: ReactNode
  href: string
}

type NavItem =
  | { title: string; type: 'mega'; sections: MegaSection[] }
  | { title: string; type: 'simple'; sections: SimpleSection[] }
  | { title: string; type: 'link'; href: string }

const navData: NavItem[] = [
  {
    title: 'Products',
    type: 'mega',
    sections: [
      {
        id: 0,
        title: 'For Schools',
        icon: <FaSchool />,
        description: 'Smart security for every student, every day.',
        color: '#e8f0fe',
        accent: '#003883',
        features: [
          { title: 'Student Movement Verification', description: 'Track and verify students across campus in real time.', icon: <MdSecurity /> },
          { title: 'School Bus Handover Tracking', description: 'Ensure safe handovers from bus to authorized guardians.', icon: <MdDirectionsBus /> },
          { title: 'Parent-authorized Drop-off', description: 'Only pre-approved parents collect students from school.', icon: <MdFamilyRestroom /> },
        ],
        // promoLabel: 'Trusted by 200+ schools',
        promoLabel: '',
        promoImage: '/school.png',
        promoLink: '/schools',
      },
      {
        id: 1,
        title: 'For Estates',
        icon: <FaBuilding />,
        description: 'Complete control over who enters your community.',
        color: '#e8f0fe',
        accent: '#003883',
        features: [
          { title: 'Manage Residents', description: 'Maintain an up-to-date resident registry with ease.', icon: <MdGroup /> },
          { title: 'Manage Visitors', description: 'Pre-register and approve every visitor digitally.', icon: <MdVisibility /> },
          { title: 'Gate Approvals', description: 'Instant gate access approvals via mobile notification.', icon: <MdGavel /> },
        ],
        promoLabel: '',
        // promoLabel: 'Managing 500+ gated communities',
        promoImage: '/estate.png',
        promoLink: '/estates',
      },
      {
        id: 2,
        title: 'For Offices',
        icon: <FaUsers />,
        description: 'Seamless workforce management and productivity tools.',
        color: '#e8f0fe',
        accent: '#003883',
        features: [
          { title: 'Manage Employees', description: 'Centralized employee profiles, access levels and schedules.', icon: <MdPeople /> },
          { title: 'Monitor Staff Performance', description: 'Real-time attendance and performance dashboards.', icon: <MdMonitorHeart /> },
          { title: 'Keep Track Of Tasks', description: 'Assign, monitor and complete tasks effortlessly.', icon: <MdTask /> },
        ],
        // promoLabel: 'Powering 1,000+ workplaces',
        promoLabel: '',
        promoImage: '/hero.png',
        promoLink: '/offices',
      },
    ],
  },
  {
    title: 'Resources',
    type: 'simple',
    sections: [
      {
        title: 'Blog',
        description: 'Insights, guides, and product updates from our team.',
        icon: <MdArticle />,
        href: '/blog',
      },
      {
        title: 'Help Center',
        description: 'Find answers, tutorials, and support documentation.',
        icon: <FaQuestionCircle />,
        href: '/help',
      },
    ],
  },
  {
    title: 'Company',
    type: 'simple',
    sections: [
      {
        title: 'About Us',
        description: 'Our mission, story, and the team behind the product.',
        icon: <FaInfoCircle />,
        href: '/about',
      },
      {
        title: 'Contact',
        description: 'Get in touch with our sales or support team today.',
        icon: <FaPhone />,
        href: '/contact',
      },
    ],
  }
]

export default function Header() {
  const [activeNav, setActiveNav] = useState<number>(-1)
  const [activeProduct, setActiveProduct] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<number | null>(null)
  const [activeSub, setActiveSub] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveNav(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleNav = (index: number) => {
    setActiveNav(prev => prev === index ? -1 : index)
    setActiveProduct(0)
  }

  const currentNav = navData[activeNav]
  const currentMega = currentNav?.type === 'mega' ? currentNav.sections[activeProduct] : null

  return (
    <div className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ''}`} ref={dropdownRef}>
      <div className={styles.bodyContainer}>
        <Link href="/">
        <div className={styles.imageContainer}>
          <Image src="/logo.png" alt="logo" fill style={{ objectFit: 'contain' }} />
        </div>
        </Link>

        <nav className={styles.navItems}>
          {navData.map((item, index) => {
            const isActive = activeNav === index
            return item.type === 'link' ? (
              <a key={index} href={item.href} className={styles.navLink}>{item.title}</a>
            ) : (
              <button
                key={index}
                onClick={() => toggleNav(index)}
                className={`${styles.navBtn} ${isActive ? styles.active : ''}`}
                aria-expanded={isActive}
              >
                {item.title}
                <span className={`${styles.chevron} ${isActive ? styles.chevronUp : ''}`}>
                  <ChevronDown />
                </span>
              </button>
            )
          })}
        </nav>

        <div className={styles.extras}>
          <button className={styles.iconBtn} aria-label="Language"><GlobeIcon /></button>
          <button className={styles.iconBtn} aria-label="Help"><HelpIcon /></button>
          <button className={styles.signInBtn}><UserIcon /> Sign in</button>
          <button className={styles.navButton}>Book a demo</button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {activeNav !== -1 && currentNav?.type !== 'link' && (
        <div className={styles.dropdown}>
          <div className={styles.itemContent}>

            {currentNav?.type === 'mega' && (
              <>
                <div className={styles.productTabs}>
                  <p className={styles.sectionLabel}>Products</p>
                  {currentNav.sections.map((section, index) => (
                      <button
                        key={index}
                        className={`${styles.productTab} ${activeProduct === index ? styles.activeTab : ''}`}
                        onMouseEnter={() => setActiveProduct(index)}
                        onClick={() => setActiveProduct(index)}
                        style={activeProduct === index && 'accent' in section ? { borderLeftColor: section.accent, background: section.color } : {}}
                      >
                      <span className={styles.tabIcon} style={{ color: activeProduct === index ? section.accent : '' }}>
                        {section.icon}
                      </span>
                      <div>
                        <span className={styles.tabTitle}>{section.title}</span>
                        <span className={styles.tabDesc}>{section.description}</span>
                      </div>
                      <ChevronRight />
                    </button>
                  ))}
                </div>

                {currentMega && (
                  <div className={styles.featuresPanel} key={activeProduct}>
                    <p className={styles.sectionLabel}>Features</p>
                    {currentMega.features.map((f, i) => (
                      <div key={i} className={styles.featureItem}>
                        <span className={styles.featureIcon} style={{ color: currentMega.accent, background: currentMega.color }}>
                          {f.icon}
                        </span>
                        <div>
                          <h4 className={styles.featureTitle}>{f.title}</h4>
                          <p className={styles.featureDesc}>{f.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentMega && (
                  <div className={styles.promoCard} key={`promo-${activeProduct}`}>
                    <div className={styles.promoImage}>
                      <Image src={currentMega.promoImage} alt="promo" fill style={{ objectFit: 'cover' }} />
                      <div className={styles.promoOverlay} style={{ background: `${currentMega.accent}cc` }}>
                        <span className={styles.promoLabel}>{currentMega.promoLabel}</span>
                        <span className={styles.promoTitle}>{currentMega.title}</span>
                        <a href={currentMega.promoLink} className={styles.promoLink} style={{ color: currentMega.color }}>
                          Learn more <ChevronRight />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {currentNav?.type === 'simple' && (
              <div className={styles.simpleMenu}>
                {currentNav.sections.map((item, i) => (
                  <a key={i} href={(item as any).href || '#'} className={styles.simpleItem}>
                    <span className={styles.simpleIcon}>{item.icon}</span>
                    <div>
                      <h4 className={styles.simpleTitle}>{item.title}</h4>
                      <p className={styles.simpleDesc}>{item.description}</p>
                    </div>
                    <span className={styles.simpleArrow}><ChevronRight /></span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavInner}>
          {navData.map((item, idx) => {
            const isOpen = activeTab === idx
            return (
              <div key={idx} className={styles.mobileSection}>
                {item.type === 'link' ? (
                  <a href={(item as any).href} className={styles.mobileLinkItem} onClick={() => setMobileOpen(false)}>
                    {item.title}
                    <ChevronRight />
                  </a>
                ) : (
                  <>
                    <button
                      className={`${styles.mobileTopItem} ${isOpen ? styles.mobileTopItemOpen : ''}`}
                      onClick={() => { setActiveTab(isOpen ? null : idx); setActiveSub(null) }}
                    >
                      {item.title}
                      <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}><ChevronDown /></span>
                    </button>

                    <div className={`${styles.mobileAccordionContent} ${isOpen ? styles.mobileAccordionOpen : ''}`}>
                      {item.type === 'mega' && item.sections.map((section, sIdx) => {
                        const isSubOpen = activeSub === sIdx
                        return (
                          <div key={sIdx} className={styles.mobileMegaSection}>
                            <button
                              className={`${styles.mobileMegaHeader} ${isSubOpen ? styles.mobileMegaHeaderOpen : ''}`}
                              style={isSubOpen ? { borderLeftColor: section.accent, background: section.color } : {}}
                              onClick={() => setActiveSub(isSubOpen ? null : sIdx)}
                            >
                              <span style={{ color: isSubOpen ? section.accent : '' }}>{section.icon}</span>
                              <span className={styles.mobileMegaTitle}>{section.title}</span>
                              <span className={`${styles.chevron} ${isSubOpen ? styles.chevronUp : ''}`}><ChevronDown /></span>
                            </button>
                            <div className={`${styles.mobileMegaFeatures} ${isSubOpen ? styles.mobileMegaFeaturesOpen : ''}`}>
                              {section.features.map((f, fIdx) => (
                                <a key={fIdx} href="#" className={styles.mobileFeatureItem}>
                                  <span className={styles.mobileFeatureIcon} style={{ color: section.accent }}>{f.icon}</span>
                                  <div>
                                    <p className={styles.mobileFeatureTitle}>{f.title}</p>
                                    <p className={styles.mobileFeatureDesc}>{f.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        )
                      })}

                      {item.type === 'simple' && item.sections.map((section, sIdx) => (
                        <a key={sIdx} href={(section as any).href || '#'} className={styles.mobileSimpleItem}>
                          <span className={styles.mobileSimpleIcon}>{section.icon}</span>
                          <div>
                            <p className={styles.mobileSimpleTitle}>{section.title}</p>
                            <p className={styles.mobileSimpleDesc}>{section.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )
          })}

          <div className={styles.mobileCTA}>
            <button className={styles.mobileSignIn}><UserIcon /> Sign in</button>
            <button className={styles.mobileBookDemo}>Book a demo</button>
          </div>
        </div>
      </div>

      {mobileOpen && <div className={styles.mobileBackdrop} onClick={() => setMobileOpen(false)} />}
    </div>
  )
}
