import styled from 'styled-components';

const Header = () => {
  return (
    <GlobalHeader>
        <p>Portfolio.</p>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Skills</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
    </GlobalHeader>
  )
}


  //Styles

  const GlobalHeader = styled.header `

  height: 50px;
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    height: 100%;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    list-style: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  p {
    color: white;
    font-size: 25px;
  }
  `

export default Header