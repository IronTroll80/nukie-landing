import Header from './header'
import styles from './hero.module.css'

export default function Hero (){
    return(
        <>
        <div className= {styles.container}>            
            <div className= {styles.left}>
                <div className= {styles.leftContent}>
                    <h1 className={styles.title}>
                        Control Access. <br />
                        <span>Secure Everything.</span>
                    </h1>
                    <p className= {styles.subtitle}>Transform how your estate, school, or office manages access, residents, payments, and community operations—all in one platform.</p>
                    <div className= {styles.buttonGroup}>
                        <button className= {styles.secondaryButton}>Learn More</button>
                        <button className= {styles.mainButton}>Get 1 Month Free</button>
                    </div>
                </div>
            </div>
            <div className= {styles.right}>
                <video 
                    src="/hero2.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    />
            </div>
        </div>
        
        </>
    )
}