import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer (){
    return(
        <>
        
        <div className= {styles.container} style={{ backdropFilter: 'blur(15px)' }}>
            <div className= {styles.top}>
                <Image src = '/logo.png' alt = 'logo' width = {150} height = {120}/>
                <div className= {styles.footerSection}>
                    <b>Learn</b>
                    <p>How It Works</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                </div>
                <div className= {styles.footerSection}>
                    <b>Platform</b>
                    <p>For Estates</p>
                    <p>For Schools</p>
                    <p>For Offices</p>
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