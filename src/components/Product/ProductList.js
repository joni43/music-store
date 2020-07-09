import React from 'react';
import styled from 'styled-components';
import { Container, Row } from '../MainStyles/StyledComponents';
import { Product } from './Product';
import { Title } from './Title';
import { ProductConsumer } from '../../context';

const ProductContent = styled.div`
padding-bottom:3rem!important;
padding-top:3rem!important;
`;

export const ProductList = () => {

    return (
        <React.Fragment>
            < ProductContent>
                <Container>
                    <Title name="our" title="products" />

                    <Row>
                        <ProductConsumer>
                            {value => {

                                return value.products.map(product => {
                                    return <Product key={ product.id } product={ product } />;
                                });
                            }}
                        </ProductConsumer>
                    </Row>
                </Container>
            </ProductContent>
        </React.Fragment>
    );
};
