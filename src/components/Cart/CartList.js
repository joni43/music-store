import React from 'react'
import { CartItem } from './CartItem'
export const CartList = ({ value }) => {

    return (
        <div className="container-fluid">

            {value.cart.map(item => {
                return (<CartItem item={item} value={value} key={item.id} />)
            })}

        </div>
    )
}
