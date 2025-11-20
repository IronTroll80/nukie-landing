import styles from './signInCheckbox.module.css'

export default function SignInCheckbox(){
    return(
        <>
        
        <div className= {styles.checkbox}>
        <input type="checkbox" name="keep-sign-in"/>
        <label htmlFor="keep-sign-in">Stay signed in for a week</label>
        </div>
        </>
    )
}