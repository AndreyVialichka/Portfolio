import styles from "./RemoteWorkcomponen.module.css"

const RemoteWork = () => {
    const onClickHandler = () => {
      console.log('Potom dodelat')
    }
    return (
        <div className={styles.Remote_work}>
          <h3>Рассматриваю варианты удаленной работы</h3>
          <button onClick={onClickHandler}>Нанять меня</button>
        </div>
    )
}

export default RemoteWork