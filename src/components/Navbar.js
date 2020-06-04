import React from 'react';
import { Link } from 'react-router-dom'
import { ButtonContainer, NavWrapper } from './styled/Button'

import logo from '../logo.svg'


export const Navbar = () => {

    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        product
                </Link>
                </li>
            </ul>

            <Link to="./cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus">my cart</i>
                    </span>

                </ButtonContainer>
            </Link>

        </NavWrapper>
    )
}