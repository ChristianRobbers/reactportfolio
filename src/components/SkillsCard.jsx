import styled from "styled-components"

const SkillsCard = ({dataname, dataimg}) => {
  return (
    <Container>
      <Hexagon>
        <div className="hex-background">
          <img className="hex-img" src={dataimg} alt={dataname} />
        </div>
      </Hexagon>
      <h4>{dataname}</h4>
    </Container>
  )
}

// Styles

const Hexagon = styled.div `
  display: block;
  margin: 0 auto;
  position: relative;
  width: 320px;
  height: 277.12px; /* width * 0.866 */
  background: #7948BE;
  box-sizing: border-box;
  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);

  .hex-background {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #260f24; /*color of the main-background*/
  top: 2px; /* equal to border thickness */
  left: 2px; /* equal to border thickness */
  width: 316px; /* container height - (border thickness * 2) */
  height: 273.12px; /* container height - (border thickness * 2) */
  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
  clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
  }

  .hex-img {
  width: 50%; 
  height: 50%;
  }

`

const Container = styled.div `
  color: white;
  text-align: center;

  h4 {
    margin-top: 25px;
    font-size: 20px;
    font-weight: bold;
  }
`

export default SkillsCard