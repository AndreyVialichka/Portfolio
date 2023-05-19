import WorkComponent from "./WorkCompomnent"
import styles from "./Works.module.css"
import samurai from '../../../assets/samurai.png'
import todo from '../../../assets/todo.png'
import React from "react"

const Links = {
  wayOfSamurai : 'https://github.com/AndreyVialichka/WayOfSamuray'
}

const Works = () => {
    return (
      <React.Fragment>
      <h1>MY WORKS</h1>
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
        </React.Fragment>  
    )
}

export default Works