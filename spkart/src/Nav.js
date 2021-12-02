import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Catgory } from './Catgory';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import {context} from "./App"
import { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';


export function Nav() {
  let {cart,setCart,clickCart,setClickCart,cartValue,setCartValue} = useContext(context)
  console.log(cartValue)
  function delItem(index){
    console.log(cart)
    cartValue[index].setAdd(false)
    setCartValue(cartValue.filter((item,id)=> id !==index))
  }

  return (
    <div>
        <div className="navBar">
        <div>
          <p className="siteName">SpKart</p>
        </div>
        <div>
          <p className="home">Home</p>
        </div>
        <div  className="catagory">
          <p className="shop">shop</p>
          <Catgory ></Catgory>
        </div>
        <div style={{marginLeft:"auto"}}>
        <Button variant="contained">Login</Button>
        </div>
        <div onClick={()=>setClickCart(true)} >
        <IconButton aria-label="delete">
          <Badge badgeContent={cart} color="primary">
            <LocalMallOutlinedIcon />
          </Badge>
        </IconButton>
        </div>
      </div>
      <dialog className="cart" open={clickCart===true?"open":false} >
        <CloseIcon onClick={()=>setClickCart(false)} className="closeCart" />
        {cartValue.length ===0 ? <h2 style={{color:"red"}}>No items</h2>:cartValue.map((item,index)=>{
          return(
            <div style={{margin:"20px"}}  key={index}>
              <img className="cartImg" src={item.img} alt="#" />
              <div style={{marginLeft:"10%"}}>
                <p>{item.name}</p>
                <Button onClick={()=>{setCart(cart-1); delItem(index)}} variant="contained" color="error">Remove</Button>
              </div>
            </div>
          )
        })}
      </dialog>
    </div>
  );
}

