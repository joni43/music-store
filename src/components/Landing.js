import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Landing = () => {
    return (
        <div className="hero">
            <div className="hero-container">
      
                <HeroContent>
                  
                    <H1>Album Store</H1>
                   
                    <ButtonContent>
                        <Link to="/products">
                            <Button class="button products">Go to Products
                    
                            </Button>
                        </Link>
                    </ButtonContent>

                </HeroContent>
            </div>
            <Footer>
                <p>Visit us at Hökarängen 13A, Stockholm 115 13. </p>
                <ul>
                    <li>Måndag - Fredag : 10.30-16.30 </li>
                    <li>Lördag: 11.30 - 15.00 </li>
                </ul>
                <p>Contact us: Album@albumstore.com</p>
            </Footer>
      
        </div>
    );
};

const ButtonContent = styled.div`
margin-top:50px;
`;
const Button = styled.button`

background: linear-gradient(to right, seashell 50%, gold 50%);
background-size: 200% 100%;
    background-position:left bottom;
font-family:"Permanent Marker";
border-radius: 3px;
background-position:left bottom;
    margin-left:10px;
    transition:all 1s ease;
&:hover {
    background-position:right bottom;
    background-color:red;
  }
`;
const H1 = styled.h1`
margin-top:200px;
font-size:3.5rem;
color:seashell;
background-color: black;
font-family: "Permanent Marker";
letter-spacing: 0.3rem;
text-transform: uppercase;
`;

const HeroContent = styled.div`
flex-direction: column;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
`;

const Footer = styled.footer`
background-color: var(--mainDark);
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    &>p,ul {
        font-family: "Permanent Marker";
  font-size:1.1rem;
  color:seashell;
  list-style: none;
    }

    @media(max-width:700px) {
        align-items:center;
        flex-direction:column;
        &>p,ul {
            font-size:12px;
        }

`;