import styled from 'styled-components';

export const NavWrapper = styled.nav`
    background:var(--mainDark);
    posiiton:relative;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    padding:.5rem 1rem;
    .navbar-link {
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize !important;
    }
    .cart-link {
        margin-left:auto!important;
    }
    @media (min-width:576px) {
        padding-left:3rem!important;
        padding-right:3rem!important;
        flex-flow:row nowrap;
        justify-content:flex-start
    }
`; 

export const StyledImg = styled.img`
width:2rem;
display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`;

export const StyledUL = styled.ul`
display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    margin-top:0;
    list-style: none;
    align-items: center!important;
`;

export const StyledLi = styled.li`
margin-left: 3rem!important;
`;

export const StyledSpan = styled.span`
margin-right:.5rem!important;
`;