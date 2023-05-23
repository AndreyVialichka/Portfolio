import styles from './Description.module.css'
import thor from '../../../assets/thor.jpg'

const Description = () => {
    return (
    <div className={styles.Description}>
        <div className= {styles.Text_description}>
            <div className= {styles.Typing}>
                    HI MY NAME IS ANDREW <br />
                AND I AM FRONT-END DEV.
                    </div>  
        </div>
        <div className= {styles.Photo_description}>
            <img src={thor}></img>
        </div>
    </div>
  )
}

export default Description