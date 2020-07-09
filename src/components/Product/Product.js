import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../../context';

export const Product = (props) => {

    const { id, title, img, price, inCart } = props.product;
    return (
        <ProductWrapper >
            <Card>
                <ProductConsumer>
                    {value => (
                        <ImageContainer
                            onClick={ () => value.handleDetail(id) }
                        >
                            <Link to="/details">
                                <StyledImg src={ img } alt="product" ></StyledImg>
                            </Link>
                            <button
                                className="cart-btn"
                                disabled={ inCart ? true : false }
                                onClick={ () => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                } }
                            >
                                {inCart
                                    ? (<p className="text-capitalize mb-0" disabled>inCart</p>)
                                    : (<i className="fas fa-cart-plus" />)
                                }
                            </button>
                        </ImageContainer>
                    )}

                </ProductConsumer>
                {/* Cart footer */}
                < CardFooter className="footer">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </CardFooter>

            </Card>

        </ProductWrapper >
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};
const Card = styled.div`
border-color:transparent;
transition:all 1s linear;
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
&:hover{
    border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
`;
const ImageContainer = styled.div`
position:relative;
overflow:hidden;
padding:3rem;
`;
const StyledImg = styled.img`
flex-shrink: 0;
width: 100%;
height: 13rem;
border-top-left-radius: calc(.25rem - 1px);
border-top-right-radius: calc(.25rem - 1px);
transition:all 1s linear;
&:hover {
    transform:scale(1.2);
  
}

`;

const CardFooter = styled.div`
display:flex;
justify-content: space-between;
padding: .75rem 1.25rem;
background-color: rgba(0,0,0,.03);
border-top: 1px solid rgba(0,0,0,.125);
background:transparent;
border-top:transparent;
transition:all 1s linear;
&:hover {
    background-color:rgba(247,247,247);
}
`;
const ProductWrapper = styled.div`
margin-bottom:1rem;
margin-top:1rem;
flex: 0 0 75%;
 max-width: 75%;

 position:relative;
 width:100%;
 padding-right:15px;
 padding-left:15px;
@media (min-width:768px) {
flex:0 0 50%;
max-width:50%;
}
@media (min-width:992px) {
    flex:0 0 25%;
    max-width:25%;
}

&:hover .footer{
    background-color:rgba(247,247,247);
}





.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--mainDark);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition:all 1s linear;

}
&:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:gold;
    cursor:pointer;
}
`;