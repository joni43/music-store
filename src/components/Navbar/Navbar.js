import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../styled/Button';
import { NavWrapper,StyledImg,StyledUL,StyledLi,StyledSpan } from './styled';
import logo from '../../cd.svg';

export const Navbar = () => {

    return (
        <NavWrapper>

            <Link to='/'>
                <StyledImg src={ logo } alt="store" />
            </Link>

            <StyledUL>
                <StyledLi >
                    <Link to="/products" className="navbar-link">
                        product
                    </Link>
                </StyledLi>
            </StyledUL>

            <Link to="./cart" className="cart-link">
                <ButtonContainer>
                    <StyledSpan>
                        <i className="fas fa-cart-plus">my cart</i>
                    </StyledSpan>

                </ButtonContainer>
            </Link>

        </NavWrapper>
    );
};