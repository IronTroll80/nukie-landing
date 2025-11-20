import styles from './authButton.module.css'

interface Props{
    content: string;
}

export default function AuthButton({content}: Props){
    return(
        <>
        
        <button className= {styles.authButton}>{content}</button>

        </>
    )
}