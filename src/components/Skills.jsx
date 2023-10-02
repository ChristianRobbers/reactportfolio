import styled from 'styled-components'
import SkillsCard from './SkillsCard'
import skillsData from '../data/SkillsCard.json'
import { motion } from "framer-motion"


const Skills = () => {
  return (
    <SkillsContainer initial={{x: -400, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: false, amount: 0.2}}>
        <section className='header-container'>
            <h1>Skills</h1>
        </section>
        <section className='content-container'>
            {
                skillsData.map((data, key) => {

                return <SkillsCard key={key} dataname={data.codinglanguage} dataimg={data.imgpath} />

                })
            }
        </section>
    </SkillsContainer>
  )
}

//styles

const SkillsContainer = styled(motion.section) `
    width: 100%;

    .header-container {
        width: 100%;
        text-align: center;
        color: rgba(77, 77, 77, 33%);
        font-weight: bold;
        font-size: 95px;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .content-container {
        margin-top: 35px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 75px;
        width: 100%;
    }
`

export default Skills