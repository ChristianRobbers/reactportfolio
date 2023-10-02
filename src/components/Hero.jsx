import styled from 'styled-components';
import Button from './Button';
import HeroImg from '../img/heroimg.png'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <HeroContainer>
        <section className='content-about'>
            <div className='content-about-wrapper'>
                <motion.h1 initial={{x: -800, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: false, amount: 0}}>Hi im Chiristian Robbers Rasmussen <br/> A software developer</motion.h1>
                <motion.p initial={{x: -800, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: false, amount: 0}}>lorem ipsum dollar dulus visum bingul murala fidumisum elem mit zu vildium gouna mifs lit de ples la de la vee im 
                    defendus mit salve alsa vamala mista mit du la vi rede mi lorem ipsum dollar dulus visum bingul murala fidumisum 
                    elem mit zu vildium gouna mifs lit de ples la de la vee im defendus mit salve alsa vamala mista mit du la vi rede 
                    lorem ipsum dollar dulus visum bingul murala fidumisum elem mit zu vildium gouna mifs lit de ples la de la vee im
                    <br/>
                    <br/>
                    lorem ipsum dollar dulus visum bingul murala fidumisum elem mit zu vildium gouna mifs lit de ples la de la vee im 
                    defendus mit salve alsa vamala mista mit du la vi rede mi lorem ipsum dollar dulus visum bingul murala fidumisum 
                    elem mit zu vildium gouna mifs lit de ples la de la vee im defendus mit salve alsa vamala mista mit du la vi rede 
                    lorem ipsum dollar dulus visum bingul murala fidumisum elem mit zu vildium gouna mifs lit de ples la de la vee im  
                </motion.p>
                <Button />
            </div>
        </section>

          <motion.svg initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 1}} xmlns="http://www.w3.org/2000/svg" className='hero-orange-lines-top hero-line-size' viewBox="0 0 89.971 39.855">
              <g id="hero-orange-lines-top" data-name="Group 11" transform="translate(-716.764 -229.323)">
                  <line id="Line_1" data-name="Line 1" x2="35" y2="38" transform="translate(717.5 230.5)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_2" data-name="Line 2" x2="35" y2="38" transform="translate(735 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_3" data-name="Line 3" x2="35" y2="38" transform="translate(753 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_4" data-name="Line 4" x2="35" y2="38" transform="translate(771 230)" fill="none" stroke="#fa7205" stroke-width="2" />
              </g>
          </motion.svg>
          <motion.svg initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 1}} xmlns="http://www.w3.org/2000/svg" className='hero-pink-lines-middle hero-line-size' viewBox="0 0 89.971 39.855">
              <g id="Group_12" data-name="Group 12" transform="translate(-839.764 -330.073)">
                  <line id="Line_5" data-name="Line 5" x2="35" y2="38" transform="translate(840.5 331.25)" fill="none" stroke="#ea043e" stroke-width="2" />
                  <line id="Line_6" data-name="Line 6" x2="35" y2="38" transform="translate(858 330.75)" fill="none" stroke="#ea043e" stroke-width="2" />
                  <line id="Line_7" data-name="Line 7" x2="35" y2="38" transform="translate(876 330.75)" fill="none" stroke="#ea043e" stroke-width="2" />
                  <line id="Line_8" data-name="Line 8" x2="35" y2="38" transform="translate(894 330.75)" fill="none" stroke="#ea043e" stroke-width="2" />
              </g>
          </motion.svg>
          <motion.svg initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: false, amount: 1}} xmlns="http://www.w3.org/2000/svg" className='hero-orange-lines-bottom hero-line-size' viewBox="0 0 89.971 39.855">
              <g id="hero-orange-lines-top" data-name="Group 11" transform="translate(-716.764 -229.323)">
                  <line id="Line_1" data-name="Line 1" x2="35" y2="38" transform="translate(717.5 230.5)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_2" data-name="Line 2" x2="35" y2="38" transform="translate(735 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_3" data-name="Line 3" x2="35" y2="38" transform="translate(753 230)" fill="none" stroke="#fa7205" stroke-width="2" />
                  <line id="Line_4" data-name="Line 4" x2="35" y2="38" transform="translate(771 230)" fill="none" stroke="#fa7205" stroke-width="2" />
              </g>
          </motion.svg>

        <section className='content-img'>
            <motion.img src={HeroImg} alt="Heroimg" initial={{x: 800, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: false, amount: 0.2}}/>
        </section>
    </HeroContainer>
  )
}

const HeroContainer = styled.section `

height: 80vh;
width: 100%;
display: flex;
color: white;
position: relative;

.hero-line-size {
    position: absolute;
    width: 89px;
    height: 39px;
}

.hero-orange-lines-top {
    top: 96px;
    right: 900px;
}

.hero-pink-lines-middle {
    top: 280px;
    right: 790px;
}

.hero-orange-lines-bottom {
    top: 492px;
    right: 890px;
}

.content-about {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: bold;
        font-size: 45px;
        margin-bottom: 35px;
    }

    p {
        font-weight: lighter;
        font-size: 20px;
        margin-bottom: 35px;
    }
}

.content-about-wrapper {
    width: 735px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 210px;
}

.content-img {
    height: 100%;
    width: 50%;
    position: relative;

    img {
        width: 1200px;
        height: 1200px;
        position: absolute;
        top: -90px;
        right: 20px;
    }
}
`

export default Hero