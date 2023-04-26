import WorkComponent from "./WorkCompomnent"
import styles from "./Works.module.css"
import samurai from '../../../assets/samurai.jpg'
import todo from '../../../assets/todo.png'

const Links = {
  wayOfSamurai : 'https://github.com/AndreyVialichka/WayOfSamuray'
}

const Works = () => {
    return (
        <div className={styles.Works}>
          <WorkComponent 
            workName = {'Social Network'}
            workDescription = {'Social Network Description'}
            img = {samurai}
            link = {Links.wayOfSamurai}
            />
          <WorkComponent 
            workName = {'Todolist'}
            workDescription = {'Todolist Description'}
            img = {todo}
          />
        </div>
    )
}

export default Works