


import React from 'react';
import styled from 'styled-components';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import connectWithUsImage from '../../assets/connectWithUsImage.png';
import letsgetintouch from '../../assets/letsgetintouch.jpg';
import TeamHero from '../TeamHero/TeamHero';


const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (  

        
      

      <FormContainer>
        
      
        <Form>
          <h1>Contact Us</h1>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <InputNeon type="text" id="name" name="name" required />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <InputNeon type="email" id="email" name="email" required />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message:</Label>
            <TextareaNeon id="message" name="message" rows="4" required />
          </FormField>
          <Button type="submit">Send Message</Button>
          
          <SocialIcons>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </SocialIcons>
        </Form>
        <ConnectWithUsImage src={connectWithUsImage} alt="Connect with Us" />
      </FormContainer>
    
  );
};

const FormContainer = styled.div`
  display: flex;
  background-color: #000;
  border-radius: 8px;
  border: 2px solid #ff0000;
  padding: 20px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ff0000;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #ff0000;
`;

const InputNeon = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 4px;
  box-shadow: 0 0 5px #ff0000;
`;

const TextareaNeon = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 4px;
  box-shadow: 0 0 5px #ff0000;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff0000;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff3333;
  }
  &:active {
    transform: translateY(1px);
    background-color: #cc0000;
  }
`;



const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  a {
    color: #f00;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff0000;
    }
  }
`;



const ConnectWithUsImage = styled.img`
width: 400px;
height: auto;
align-self: flex-end;
margin-top: 20px;
`;

export default ContactUsForm;













