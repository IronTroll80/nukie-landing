'use client'

import AuthButton from '@/app/components/authButton'
import styles from './screening.module.css'
import ScreeningQuestion from '@/app/components/screeningQuestion'
import { useState } from 'react'
import Image from 'next/image'
import AuthInput from '@/app/components/authInput'


export default function Screening(){


    const [activePage, setActivePage] = useState('verify-otp')

    return (
        <>
            <div className= {styles.body}>
                <div className = {styles.container}>

                    { activePage === "eligibility" && 
                        <>  
                            <h4>Quick Eligibility Check</h4>
                            <p className= {styles.subtext}>
                                To keep things simple, we ask a few quick questions first.
                                This <br/> helps us confirm you’re eligible to join as an agent and unlock<br/> full access to the app.
                            </p>
                            <ScreeningQuestion question='Do you have issues Accessing Cash?'/>
                            <ScreeningQuestion question='How much cash do you typically need daily?'/>
                            <ScreeningQuestion question='How do you currently access cash'/>
                            <ScreeningQuestion question='What state are you in?'/>
                            <AuthButton content='Continue'/>
                        </>
                     }

                     {
                        activePage === "verify-mobile" &&
                        <>
                            <div className= {styles.imgContainer}>
                                <Image src={'/logo.png'} width={110} height={22} alt='getstac-logo'/>
                            </div>
                            <h4>Create a Getstac Account</h4>
                            <p className= {styles.subtext}>Let's start by verifying your phone number</p>
                            <AuthInput label='Whatsapp Phone Number' placeholder='+234'type='number'/>
                            <AuthButton content='Send OTP Via SMS'/>
                            <br/>
                            <p className= {styles.subtext}>
                                By creating an account or 
                                logging in, you hereby agree to Getstac’s <br/>Terms of service and Privacy policy</p>
                        </>
                     }

                     {
                        activePage === "verify-otp" &&
                        <>
                            <div className= {styles.imgContainer}>
                                <Image src={'/logo.png'} width={110} height={22} alt='getstac-logo'/>
                            </div>
                            <h4>Verify Your Number</h4>
                            <p className= {styles.subtext}>Enter the OTP sent  to verify your account</p>
                            <AuthInput label='OTP' placeholder='******'type='number'/>
                            <p className= {styles.resend}>Resend OTP</p>
                            <AuthButton content='Verify'/>
                        </>
                     }
                </div>
                {
                    activePage !== "eligibility" && 
                    <>
                    <div className= {styles.footing}>
                    <p className= {styles.signupText}> Already a Getstac Agent? <b> Login </b></p>
                    <ul>
                        <li>© Getstac</li>
                        <li>Contact</li>
                        <li>Privacy & Terms</li>
                    </ul>
                </div>
                    </>
                }
            </div>
        </>
    )
}