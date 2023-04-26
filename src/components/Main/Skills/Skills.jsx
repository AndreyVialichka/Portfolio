import SkillsComponent from "./SkillCompomnent"
import styles from "./Skills.module.css"
import react from '../../../assets/react.png'
import redux from '../../../assets/redux.jpg' 
import saga from '../../../assets/saga.png' 

const Skills = () => {
    return (
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
    )
}

export default Skills