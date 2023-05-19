import styles from "./WorkCompoment.module.css"

const WorkComponent = (props) => {
    return (
          <div className={styles.WorksComponent}>
            <div className={styles.Works_logo}>
                <img src={props.img}>
                </img>
            </div>
            <div className={styles.Works_desk}>
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