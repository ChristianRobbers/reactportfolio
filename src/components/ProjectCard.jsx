import styled from 'styled-components';
import githubLogo from '../img/githublogo.png'
import { motion } from "framer-motion"

const ProjectCard = ({dataname, dataimg, datalivelink, datagithublink}) => {



  return (
    <ProjectCardContainer initial={{x: -400, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: false, amount: 0.4}}>
        <div className='cardimg-container'>
            <img src={dataimg} alt={dataname} />
        </div>
        <div className='svg-container'>
        <svg xmlns="http://www.w3.org/2000/svg" className='projectcard-orange-lines-top projectcard-line-size' viewBox="0 0 89.971 39.855">
              <g id="hero-orange-lines-top" data-name="Group 11" transform="translate(-716.764 -229.323)">
                  <line id="Line_1" data-name="Line 1" x2="35" y2="38" transform="translate(717.5 230.5)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_2" data-name="Line 2" x2="35" y2="38" transform="translate(735 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_3" data-name="Line 3" x2="35" y2="38" transform="translate(753 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_4" data-name="Line 4" x2="35" y2="38" transform="translate(771 230)" fill="none" stroke="#fa7205" stroke-width="2" />
              </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='projectcard-pink-lines-middle projectcard-line-size' viewBox="0 0 89.971 39.855">
              <g id="Group_12" data-name="Group 12" transform="translate(-839.764 -330.073)">
                  <line id="Line_5" data-name="Line 5" x2="35" y2="38" transform="translate(840.5 331.25)" fill="none" stroke="#ea043e" stroke-width="2" />
                  <line id="Line_6" data-name="Line 6" x2="35" y2="38" transform="translate(858 330.75)" fill="none" stroke="#ea043e" stroke-width="2" />
                  <line id="Line_7" data-name="Line 7" x2="35" y2="38" transform="translate(876 330.75)" fill="none" stroke="#ea043e" stroke-width="2" />
                  <line id="Line_8" data-name="Line 8" x2="35" y2="38" transform="translate(894 330.75)" fill="none" stroke="#ea043e" stroke-width="2" />
              </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className='projectcard-orange-lines-bottom projectcard-line-size' viewBox="0 0 89.971 39.855">
              <g id="hero-orange-lines-top" data-name="Group 11" transform="translate(-716.764 -229.323)">
                  <line id="Line_1" data-name="Line 1" x2="35" y2="38" transform="translate(717.5 230.5)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_2" data-name="Line 2" x2="35" y2="38" transform="translate(735 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_3" data-name="Line 3" x2="35" y2="38" transform="translate(753 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_4" data-name="Line 4" x2="35" y2="38" transform="translate(771 230)" fill="none" stroke="#fa7205" stroke-width="2" />
              </g>
          </svg>
        </div>
          <div className='info-container'>
            <div className='info-wrapper'>
                <h3>{dataname}</h3>
                <a href='#'>The story behind</a>
                <a href={datalivelink}>See live</a>
                <span className='line'></span>
                <div className='codeused-container'>
                    <span>c#</span>
                    <span>Javascript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Node.js</span>
                    <span>sql</span>
                    <span>mongodb</span>
                </div>
                <div className='iconlink-container'>
                    <a href={datagithublink}><img src={githubLogo} alt="githublogo" /></a>
                </div>
              </div>
          </div>

    </ProjectCardContainer>
  )
}

//Styles

const ProjectCardContainer = styled(motion.section) `
    width: 1085px;
    height: 380px;
    background: rgb(25,20,28);
    background: linear-gradient(180deg, rgba(25,20,28,1) 0%, rgba(35,24,36,1) 40%, rgba(61,21,56,1) 100%);
    border-radius: 50px;
    display: flex;
    margin-bottom: 65px;

    .cardimg-container {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 330px;
            width: 485px;
            border-radius: 50px;
        }
    }

    .svg-container {
        width: 10%;
        height: 100%;
        position: relative;

        .projectcard-line-size {
            position: absolute;
            width: 89px;
            height: 39px;
        }

        .projectcard-orange-lines-top {
            top: 35px;
            right: 7px;
        }

        .projectcard-pink-lines-middle {
            top: 168px;
            right: -49px;
        }

        .projectcard-orange-lines-bottom {
            top: 295px;
            right: 6px;
        }
    }

    .info-container {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info-wrapper {
        display: flex;
        flex-direction: column;
        width: 300px;

        h3 {
            color: white;
            font-size: 45px;
            margin-bottom: 15px;
        }

        a {
            text-decoration: none;
            color: white;
            font-size: 25px;
            margin-bottom: 15px;
        }

        .line {
            background-color: white;
            width: 100%;
            height: 2px;
        }
    }

    .codeused-container {
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        span {
            background-color: #B9B9B9;
            height: 20px;
            padding: 3px;
            margin: 3px;
        }
    }

    .iconlink-container {
        margin-top: 15px;
    }


`

export default ProjectCard