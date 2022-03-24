import React from "react";
import styled from "styled-components";

//Animation
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

//Images
import contact from "../img/contact.jpg";

const ContactPage = () => {
    return (
        <ContactStyled variants={pageAnim} initial="hidden" animate="show" exit="exit"> 
            <h2>Get in touch.</h2>
            <form className="form-wrapper"  action="https://formspree.io/f/xrgjlwvv" method="POST">
                <div className="name-form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required />
                </div>
                <div className="email-form">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" required />
                </div>
                <div className="message-form">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Submit</button>
                


            </form>
        
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
min-height: 90vh;
padding: 2rem 5rem;
color: #353535;
background: url(${contact});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;

h2 {
    padding: 5rem;
}

.form-wrapper {
    background: rgba(19, 28, 29, 0.8);
    width: 30%;
    color: white;
    border-radius: 20px;
    margin-left: 5rem;

    label {
    margin: 0rem 3rem;
}

button {
    width: 100%;
    padding: 2rem;
    margin-top: 5rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 2rem;
}
}



.name-form, .email-form, .message-form {
    padding: 3rem;
    text-align: center;
    font-size: 2rem;

    textarea {
        margin-top: 1rem;
    
    }

    input, textarea {
        padding: 1rem 2rem;
        width: 100%;
        font-size: 1rem;
        &:focus {
            outline: 2px solid #F08607;
        }
    }
}





@media (max-width: 1500px) {
    padding: 1rem;
    font-size: 1rem;

    h2 {
        padding: 1rem;
        text-align: center;
    }

    .name-form, .email-form, .message-form {
        padding: 1rem 1.5rem;
    }

    .form-wrapper {
        width: 90%;
        margin: auto;
    }

    textarea {
        width: 100%;
    }


}
`;

export default ContactPage;