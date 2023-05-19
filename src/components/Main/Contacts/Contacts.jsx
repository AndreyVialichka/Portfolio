import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.Contacts}>
          <h1>CONTACTS</h1>
          <form className={styles.Form} >
            <div>
              <label>EMAIL</label>
              <input />
            </div>  
            <div>
              <input />
            </div>
            <textarea></textarea>
            <button>SEND</button>
          </form>
        </div>
    )
}

export default Contacts