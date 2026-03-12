import Header from './header'
import styles from './hero.module.css'

export default function Hero (){
    return(
        <>
        <Header/>
        <div className= {styles.container}>
            
            <div className= {styles.heroContent}>
            <h1 className= {styles.title}>Verify And Monitor Access In One Platform</h1>
            <p className= {styles.subtitle}>Transform how your estate, school, or office manages access, residents, payments, and community operations—all in one platform.</p>
            <button className= {styles.button}>See Products</button>
            </div>
        </div>
        
        </>
    )
}