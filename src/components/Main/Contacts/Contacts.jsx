import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.Contacts}>
          <h3>Контакты</h3>
          <form className={styles.Form} >
            <input />
            <input />
            <textarea></textarea>
            <button>Отправить</button>
          </form>
        </div>
    )
}

export default Contacts