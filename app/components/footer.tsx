import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer (){
    return(
        <>
        
        <div className= {styles.container}>
            <div className= {styles.top}>
                <Image src = '/logoWhite.png' alt = 'logo' width = {150} height = {120}/>
                <div className= {styles.footerSection}>
                    <b>Learn</b>
                    <p>How It Works</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                </div>
                <div className= {styles.footerSection}>
                    <b>Platform</b>
                    <Link href="/estates"><p>For Estates</p></Link>
                    <Link href="/schools"><p>For Schools</p></Link>
                    <Link href="/offices"><p>For Offices</p></Link>
                </div>
                <div className= {styles.footerSection}>
                    <b>Get In Touch</b>
                    <p>Request Demo</p>
                    <p>Support</p>
                    <p>hello@nukiepass.com</p>
                </div>
            </div>
            <div className= {styles.bottom}>
                <p>
                    Nukie use cookies, pixel and site tracking to provide a good user experience.
                    review, amend or delete your data via our privacy policy.
                </p>
                <p>copyright © Nukie, 2026</p>
            </div>
        </div>
        
        </>
    )
}