import styles from "./WorkCompoment.module.css"

const WorkComponent = (props) => {
    return (
          <div className={styles.SkillsComponent}>
            <div className={styles.Skills_logo}>
                <img src={props.img}>
                </img>
            </div>
            <div className={styles.Skills_desk}>
                <h3>{props.workName}</h3>
                <p>{props.workDescription}</p>
                <div className={styles.look}>
                    <a href = {props.link}>
                        Смотреть
                    </a>
                </div>    
            </div>
          </div>
    )
}

export default WorkComponent