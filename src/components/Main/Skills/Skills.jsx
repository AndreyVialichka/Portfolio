import SkillsComponent from "./SkillCompomnent"
import styles from "./Skills.module.css"
import react from '../../../assets/react.png'
import redux from '../../../assets/redux.jpg' 
import saga from '../../../assets/saga.png' 
import React from "react"

const Skills = () => {
    return (
    <React.Fragment>
      <h1>MY SKILS</h1>
        <div className={styles.Skills}>
          <SkillsComponent 
            skillName = {'React'}
            skillDescription = {'React description'}
            img = {react}
            />
          <SkillsComponent 
            skillName = {'Redux'}
            skillDescription = {'Redux description'}
            img = {redux}
          />
          <SkillsComponent
            skillName = {'React-Saga'}
            skillDescription = {'React-Saga description'}
            img = {saga}          
          />
          
        </div>
    </React.Fragment>
  )
}

export default Skills