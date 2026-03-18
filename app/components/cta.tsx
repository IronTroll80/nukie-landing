import { FaCircle } from 'react-icons/fa'
import styles from './cta.module.css'
import Image from 'next/image'

export default function CTA (){
    const images = ['user.png','user.png','user.png','user.png','user.png']
    return(
        <>
        <div className= {styles.container}>
            <p className= {styles.sub}><i><FaCircle/></i> Your Move</p>
            <h1>
                Verify Access Today. 
                <span> Sign up with NukiePass</span> and take control.
            </h1>
            <div className= {styles.images}>
                {images.map((image, index)=>(
                    <Image src={'/' + image} alt='user' key={index} width={54} height={54}/>
                ))}
            </div>
            <button className= {styles.button}>Contact a Member of the team </button>
        </div>
        
        </>
    )
}