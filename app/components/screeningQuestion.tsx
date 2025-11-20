import CustomSelect from "./customSelect";
import styles from './screeningQuestion.module.css'

interface Props{
    question: string;
}

export default function ScreeningQuestion ({question} : Props){
    return (
        <>
        <div className= {styles.container}>
            <p>{question}</p>
            <CustomSelect/>
        </div>
        </>
    )
}