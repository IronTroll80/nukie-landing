import styles from './authInput.module.css'

interface Props{
    label: string;
    supportText? : string;
    placeholder: string;
    type: string;
}


export default function AuthInput({label, supportText, placeholder, type}: Props){
    return(
        <>
        <div>
            <div className= {styles.labelContainer}>
            <p className= {styles.label}>{label}</p>
            <span className= {styles.supportText}>{supportText}</span>
            </div>
            <input type= {type} name= {label} placeholder= {placeholder} className= {styles.input}/>
        </div>
        </>
    )
}