import './App.css';
import * as React from 'react';
import { About } from './About';
import { Nav } from './Nav';

function App() {
  const [cart,setcart] = React.useState(0)
  const [clickCart,setClickCart]= React.useState(false)
  console.log(clickCart)
  return (
    <div>
        <div>
          
          <Nav cart={cart} setcart={setcart} clickCart={clickCart} setClickCart={setClickCart} />
          <hr></hr>
        </div>
        <div className="App">
        
        <About />
        <div className="products">
          {products.map((product)=><Product content={product} cart={cart} setcart={setcart} />)}
        </div>
        </div>
    </div>
  );
}

function Product({content,cart,setcart}){
  const [add,setAdd] =React.useState(false)
  console.log(content)
  let addStyle
  function addClick(){
    if(add === false){
      setcart(cart +1)
    }
    setAdd(true)
  }
  if(add === true){
    addStyle = {cursor:"auto",backgroundColor:"gray",color:"black"}
  }

  return(
    <div className="product">
      <div style={{textAlign:"center"}}>
        <img className="productImage" src={content.img} />
      </div>
      <div className="productInfo">
        <h4 style={{fontWeight:"700",fontFamily:"Arial, Helvetica, sans-serif"}}>{content.name}</h4>
        <p >{content.star}</p>
        {content.sale===true?<div>
          <h2 style={{fontSize:"15px",display:"inline"}}><del><span>&#8377;</span>{content.oldprice}</del></h2>
          <h2 style={{color:"red",display:"inline"}}><span>&#8377;</span>{content.price}</h2>
        </div>:
        <div>
          <h2 style={{color:"red",display:"inline"}}><span>&#8377;</span>{content.price}</h2>
        </div>}
        <div className="addToCart" style={addStyle} onClick={()=>addClick()}>
          <p>ADD</p>
        </div>
      </div>
      

      
    </div>
  )
}
export default App;

const products=
  [
    {
      name:"NIBOSI",
      img:"https://m.media-amazon.com/images/I/71JExAGyjuL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:true,
      oldprice:"2,500",
      price:"1,599"
    },
    {
      name:"TIMEWEAR",
      img:"https://m.media-amazon.com/images/I/71BaB0PSPOL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐",
      sale:true,
      oldprice:"1,300",
      price:"379"
    },
    {
      name:"TIMEWEAR",
      img:"https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"1,799",
      price:"339"
    },
    {
      name:"V2A",
      img:"https://m.media-amazon.com/images/I/51OUMrOSPWL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:true,
      oldprice:"2,490",
      price:"660"
    },
    {
      name:"TIMEX",
      img:"https://m.media-amazon.com/images/I/71Kx6rgmlRS._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"1,595",
      price:"1095"
    },
    {
      name:"REDUX",
      img:"https://m.media-amazon.com/images/I/81BDpSIwu3L._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"2,199",
      price:"399"
    },
    {
      name:"TIMEX",
      img:"https://m.media-amazon.com/images/I/71uYLvTxsQL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"1,595",
      price:"1,095"
    },
    {
      name:"Acnos",
      img:"https://m.media-amazon.com/images/I/41EjE3W0jgL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:true,
      oldprice:"2,499",
      price:"399"
    }
  ]


