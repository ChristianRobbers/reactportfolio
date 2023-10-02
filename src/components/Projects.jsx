import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import cardData from '../data/ProjectCard.json'

const Projects = () => {

  return (
    <ProjectContainer>
        <section className='header-container'>
            <h1>Projects</h1>
        </section>
        <section className='content-container'>
            {
                cardData.map((data, key) => {

                return <ProjectCard key={key} dataname={data.headline} dataimg={data.imgpath} datalivelink={data.livelink} datagithublink={data.githublink} />

                })
            }
        </section>
    </ProjectContainer>
  )
}

//Styles

const ProjectContainer = styled.section `
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default Projects