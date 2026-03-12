import Product from './product'
import styles from './productsSection.module.css'

export default function ProductSection(){
    return(
        <>
        
        <div className= {styles.container}>
            <h1 className= {styles.sectionTitle}>Our Products</h1>
            <Product
                title='NukiePass School Verification System'
                subtitle='NukiePass for schools focuses on child safety, student movement verification,
                          parent-authorized drop-off and pickup, school bus handover tracking, attendance-linked
                          identity checks, and real-time notifications'
                offerings={["Scannable student ID cards", 'One-time numeric codes', 'Weekly child PIN changes']}
                image='/school.png'
                second = {false}
            />
            <Product
                title='NukiePass for Estates'
                subtitle='NukiePass for estates is intended to manage residents, visitors, domestic staff, delivery access, gate approvals, entry logs, and household-linked permissions.'
                offerings={["Scannable student ID cards", 'One-time numeric codes', 'Weekly child PIN changes']}
                image='/estate.png'
                second = {true}
            />
        </div>
        </>
    )
}