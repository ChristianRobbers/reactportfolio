import styled from 'styled-components'
import Button from './Button'

const Contact = () => {
  return (
    <ContactContainer>
        <section className='header-container'>
            <h1>Contact</h1>
        </section>
        <section className='content-container'>
            <div className='welcome-message'>
                <h5>Send me a message!</h5>
                <p>Got any questions, or you might want to work with me? Shoot me a message!</p>
            </div>
            <form className='form-message'>
                <div className='form-input'>
                    <div className='input-conatiner'>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name'/>
                    </div>

                    <div className='input-conatiner'>
                        <label htmlFor="">Your Email</label>
                        <input type="text" placeholder='Enter your email'/>
                    </div>
                </div>
                <div className='form-send-message'>
                    <label htmlFor="">Your Message</label>
                    <textarea name="" id="" placeholder='Hi Christian, your work is awsome! Lets work together ?'></textarea>
                </div>
                <div className='button-container'>
                    <Button />
                </div>
            </form>
        </section>

    </ContactContainer>
  )
}

// Styles

const ContactContainer = styled.section `

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
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .welcome-message {
        margin-top: 35px;
        margin-bottom: 35px;
        width: 385px;
        display: flex;
        flex-direction: column;
        color: white;

        h5 {
            font-size: 45px;
        }

        p {
            font-size: 20px;
        }
        
    }

    .form-message {
        width: 80%;
        display: flex;
        flex-direction: column;
        color: white;
    }

    .form-input {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
    }

    .input-conatiner {
        display: flex;
        flex-direction: column;
        width: 45%;

        input {
            outline: none;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid white;
            margin-top: 15px;
            color: white;
        }

        input::placeholder {
            color: white;
        }
    }

    .form-send-message {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;

        textarea {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid white;
            resize: none;
            color: white;
            outline: none;
            font-family: Arial, Helvetica, sans-serif;
        }

        textarea::placeholder {
            color: white;
            padding-top: 10px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .button-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

`

export default Contact
