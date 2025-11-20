import styles from './altButton.module.css'

interface Props{
    content: string;
}

export default function AltButton({content}: Props){
    return(
        <>
        
        <button className= {styles.altButton}>{content}</button>

        </>
    )
}