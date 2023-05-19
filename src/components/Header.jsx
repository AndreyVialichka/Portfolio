import styles from "./Header.module.css"

const Header = () => {
    return (
    <header className={styles.Header}>
        <div className={styles.Menu}>
          <a href="#" className={styles.Links}>HOME</a>
          <a href="#" className={styles.Links}>SKILLS</a>
          <a href="#" className={styles.Links}>WORKS</a>
          <a href="#" className={styles.Links}>CONTACTS</a>
        </div>
      </header>
    )
}

export default Header