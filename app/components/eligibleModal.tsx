import Image from 'next/image'
import styles from './eligiblemodal.module.css'
import AuthButton from './authButton'
import AltButton from './AltButton'
import { useState } from 'react'

export default function EligibleModal (){

    const [verified, setverified] = useState(true)

    return(
        <>
        
        <div className = {styles.container}>
            <div className= {styles.top}>
                <Image src = '/user-icon.svg' width = {40} height={40} alt='icon'/>
                <Image src = '/close.svg' width = {40} height={40} alt='icon'/>
            </div>
            {!verified && <>
                <h4>Unfortunately, you're not eligble right now</h4>
                <p>
                    Based on your answers, you don’t currently meet the requirements to join as a Getstac Agent.<br/>
                    Don’t worry, you can always check back later once you’re ready.
                </p>
                <AuthButton content='Contact Support on Whatsapp'/>
                <AltButton content='Go back'/>
            </>}

             {verified && <>
                <h4>🎉 Congratulations! You’re eligible to join.</h4>
                <p>
                    You meet the requirements to sign up as a Getstac Agent.<br/>
                     Complete your registration to get instant float, track sales, and grow your business.
                </p>
                <AuthButton content='Continue'/>
            </>}
        </div>
        
        </>
    )
}