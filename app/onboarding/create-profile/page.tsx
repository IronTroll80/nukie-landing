'use client'

import styles from './createProfile.module.css'
import { useState } from 'react'
import Image from 'next/image'
import AuthInput from '@/app/components/authInput'
import AuthButton from '@/app/components/authButton'


export default function Screening(){


    const [activePage, setActivePage] = useState('verify-otp')

    return (
        <>
            <div className= {styles.body}>
                <div className = {styles.container}>
                    <div className= {styles.imgContainer}>
                        <Image src={'/logo.png'} width={110} height={22} alt='getstac-logo'/>
                    </div>
                    <h4>Create a Getstac Account</h4>
                    <p className= {styles.subtext}>Let's start by verifying your phone number</p>
                    <AuthInput label='Full Name' placeholder='e.g Alice Otedola' type='text'/>
                    <AuthInput label='Email' placeholder='jane.doe@gmail.com' type='email'/>
                    <AuthInput label='Password' placeholder='******' type='password'/>

                    <div className= {styles.loadingContainer}>
                        <div className= {styles.loader}>
                        </div>
                    </div>
                    <p className= {styles.subtext}>
                        Use at least <b>8 characters</b> and include an <b>uppercase letter</b>,
                         <br/> a lowercase letter, a number, and a special character.
                    </p>
                    <AuthInput label='Referral Code (OPTIONAL)' placeholder='e.g GETST3898GH' type='text'/>
                    <AuthButton content='Verify'/>
            </div>
            </div>
            
        </>
    )
}