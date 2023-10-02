import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <div className='padding-conatiner'>
            <section className='content-container'>
                <div className='content-div'>
                    <ul>
                        <li>Info</li>
                        <li>crr@likehero.dk</li>
                        <li>My resume</li>
                    </ul>
                </div>
                <div className='content-div content-div-right'>
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </section>
            <div className='line'></div>
            <section className='b-content-container'>
                <p>Ⓒ Christian Robbers Rasmussen 2023</p>
                <div className='socialmedia-container'>
                    <p>github</p>
                    <p>linkedin</p>
                </div>
            </section>
        </div>
    </FooterContainer>
  )
}

// Styles

const FooterContainer = styled.footer `
    background-color: #45255F;
    width: 100%;
    height: 550px;
    margin-top: 50px;
    display: flex;
    align-items: flex-end;

    .padding-conatiner {
        width: 100%;
        padding: 0px 185px 0px 185px;
        margin-bottom: 25px;
    }

    .content-container {
        width: 100%;
        display: flex;
        margin-bottom: 15px;
    }

    .content-div {
        width: 50%;
        display: flex;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 150px;

            li {
                list-style: none;
                color: #ffff;
            }
        }
    }

    .content-div-right {
        justify-content: flex-end;
    }

    .line {
        background-color: #ffff;
        height: 1px;
        width: 100%;
    }

    .b-content-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #ffff;
        margin-top: 15px;
    }

    .socialmedia-container {
        display: flex;
        justify-content: space-between;
        width: 120px;
    }

`

export default Footer