import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

//components
import Item from './Item/Item'
import Cart from './Cart/Cart';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import LinearProgress  from '@mui/material/LinearProgress';
import Grid  from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
//styles
import { Wrapper, StyledButton } from './App.styles';

//Types
export type CartItemType = {
  id: number,
  catherory: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const  { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  )
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => 
  items.reduce((ack: number, items) => ack + items.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>


  return (
    <>
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart  
        cartItems={cartItems} 
        addToCart={handleAddToCart} 
        removeFromCart={handleRemoveCart}
        />
      </Drawer>
    <StyledButton onClick={() => setCartOpen(true)}>
      <Badge badgeContent={getTotalItems(cartItems)} color="error">
        <AddShoppingCartIcon />
      </Badge>
       </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}> 
          <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
    </>
  )
}
