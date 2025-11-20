'use client'

import styles from './login.module.css'
import AuthButton from "@/app/components/authButton";
import AuthInput from "@/app/components/authInput";
import SignInCheckbox from "@/app/components/signInCheckbox";
import { useState } from 'react';

export default function Login(){

    const [activePage, setActivePage] = useState ('resetPassword')

    return(

        <>
            <div className= {styles.body}>
                <div className= {styles.container}>
                   {activePage === 'signin' && <>
                        <h4>Sign in to your account</h4>
                        <AuthInput type = 'email' label = "Email" placeholder='Enter your email'/>
                        <AuthInput type = 'password'  label = "Password" supportText="Forgot Your Password?" placeholder='Enter Your Password' />
                        <SignInCheckbox/>
                        <AuthButton content="Continue"/>
                    </>}

                    {activePage === 'forgotPassword' && <>    
                        <h4>Forgot Password</h4>
                        <AuthInput type = 'email'  label = "Email" placeholder='Enter your email'/>
                        <AuthButton content="Continue"/>
                    </>}

                    {activePage === 'resetPassword' && <>    
                        <h4>Reset Password</h4>
                        <AuthInput type = 'email' label = "Email" placeholder='Enter your email'/>
                        <AuthInput type = 'number'  label = "OTP" placeholder='Enter the six-digit otp sent to your email address'/>
                        <AuthInput type = 'password' label = "New Password" placeholder='Enter your new password'/>
                        <AuthButton content="Update"/>
                    </>}

                </div>
                <div className= {styles.footing}>
                    <p className= {styles.signupText}>Don't have an account? <b>Create an account</b></p>
                    <ul>
                        <li>© Getstac</li>
                        <li>Contact</li>
                        <li>Privacy & Terms</li>
                    </ul>
                </div>
            </div>
        </>

        
    )
}