import styles from './Description.module.css'
import thor from '../../../assets/thor.jpg'

const Description = () => {
    return (
    <div className={styles.Description}>
        <div className= {styles.Text_description}>
            Привет ! Меня зовут Андрей Величко
            я Front-end разработчик  
        </div>
        <div className= {styles.Photo_description}>
            <img src={thor}></img>
        </div>
    </div>
  )
}

export default Description