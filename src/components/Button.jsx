import styled from 'styled-components';
import { motion } from "framer-motion"

const Button = () => {
  return (
    <GlobalButton initial={{x: -800, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: false, amount: 0}}>
        Contact Me
    </GlobalButton>
  )
}

// Styles

const GlobalButton = styled(motion.button) `

    width: 475px;
    height: 55px;
    background: rgb(250,110,5);
    background: linear-gradient(145deg, rgba(250,110,5,1) 11%, rgba(251,118,5,1) 55%, rgba(234,4,62,1) 94%);
    border: none;
    border-radius: 50px;
    color: white;
    font-size: 20px;
`

export default Button