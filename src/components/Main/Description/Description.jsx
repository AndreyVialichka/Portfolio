import styles from './Description.module.css'
import thor from '../../../assets/thor.jpg'

const Description = () => {
    return (
    <div className={styles.Description}>
        <div className= {styles.Text_description}>
            HI MY NAME IS ANDREW AND I AM FRONT-END DEVELOPER  
        </div>
        <div className= {styles.Photo_description}>
            <img src={thor}></img>
        </div>
    </div>
  )
}

export default Description