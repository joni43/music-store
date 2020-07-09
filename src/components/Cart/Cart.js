import React from 'react'
import { Title } from '../Product/Title'
import { CartColumns } from './CartColumns'
import { EmptyCart } from './EmptyCart'
import { ProductConsumer } from '../../context'
import { CartList } from './CartList'
import { CartTotals } from './CartTotals'
export const Cart = (props) => {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    if (value.cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="Your" title="cart"></Title>
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} history={props.history} />
                            </React.Fragment>
                        )
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
    )
}
