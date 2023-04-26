import styles from "./Header.module.css"

const Header = () => {
    return (
    <header className={styles.Header}>
        <div className={styles.Menu}>
          <a href="#" className={styles.Links}>Главная</a>
          <a href="#" className={styles.Links}>Скилы</a>
          <a href="#" className={styles.Links}>Работы</a>
          <a href="#" className={styles.Links}>Контакты</a>
        </div>
      </header>
    )
}

export default Header