import styles from "./RemoteWorkcomponen.module.css"

const RemoteWork = () => {
    const onClickHandler = () => {
      console.log('Potom dodelat')
    }
    return (
        <div className={styles.Remote_work}>
          <h1>READY FOR REMOTE JOB</h1>
          <button onClick={onClickHandler}>HIRE ME</button>
        </div>
    )
}

export default RemoteWork