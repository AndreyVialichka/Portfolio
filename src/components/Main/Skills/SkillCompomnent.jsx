import styles from "./SkillCompoment.module.css"

const SkillsComponent = (props) => {
    return (
          <div className={styles.SkillsComponent}>
            <div className={styles.Skills_logo}>
                <img src={props.img}>
                </img>
            </div>
            <div className={styles.Skills_desk}>
                <h3>{props.skillName}</h3>
                <p>{props.skillDescription}</p>
            </div>
          </div>
    )
}

export default SkillsComponent