import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

//components
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import LinearProgress  from '@mui/material/LinearProgress';
import Grid  from '@mui/material/Grid';
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';

//import { Wrapper } from './App.styles';

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

  const  { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  )
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>


  return (
    <>
    My shopping Cart
    </>
  )
}
