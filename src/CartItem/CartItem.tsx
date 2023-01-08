import * as React from "react";
import Button from '@mui/material/Button';
//Types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './CartItem.styles'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


const CartItem : React.FC<Props> = () => {
    return (
        <></>
    )
}

export default CartItem;