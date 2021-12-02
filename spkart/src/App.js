import './App.css';
import * as React from 'react';
import { About } from './About';
import { Nav } from './Nav';
import { useContext } from 'react';
import { createContext } from 'react';


export const context = createContext()

function App() {

  const [cartValue,setCartValue] = React.useState([])

  const [cart,setCart] = React.useState(0)

  const [clickCart,setClickCart]= React.useState(false)

  const obj = {cart,setCart,cartValue,setCartValue,clickCart,setClickCart}

  return (

    <context.Provider value={obj}>

    <div>

        <div>

          <Nav />
          <hr></hr>

        </div>

        <div className="App">
        
        <About />

        <div className="products">

          {products.map((product,index)=><Product content={product} index={index} />)}

        </div>

        </div>

    </div>

    </context.Provider>
  );
}

function Product({content,index}){

  let {cart,setCart,cartValue,setCartValue} =useContext(context)

  const [add,setAdd] =React.useState(false)

  let addStyle

  function addClick(){

    if(add === false){

      setCartValue([...cartValue,{img:content.img,name:content.name,setAdd:setAdd}])

      setCart(cart +1)

      content.status =true

    }
    setAdd(content.status)
  }
  if(add === true){

    addStyle = {cursor:"auto",backgroundColor:"gray",color:"black"}

  }

  return(
    <div key={index} className="product">

      <div style={{textAlign:"center"}}>

        <img className="productImage" src={content.img} alt="#" />

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
      price:"1,599",
      status:false
    },
    {
      name:"TIMEWEAR",
      img:"https://m.media-amazon.com/images/I/71BaB0PSPOL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐",
      sale:true,
      oldprice:"1,300",
      price:"379",
      status:false
    },
    {
      name:"TIMEWEAR",
      img:"https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"1,799",
      price:"339",
      status:false
    },
    {
      name:"V2A",
      img:"https://m.media-amazon.com/images/I/51OUMrOSPWL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:true,
      oldprice:"2,490",
      price:"660",
      status:false
    },
    {
      name:"TIMEX",
      img:"https://m.media-amazon.com/images/I/71Kx6rgmlRS._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"1,595",
      price:"1095",
      status:false
    },
    {
      name:"REDUX",
      img:"https://m.media-amazon.com/images/I/81BDpSIwu3L._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"2,199",
      price:"399",
      status:false
    },
    {
      name:"TIMEX",
      img:"https://m.media-amazon.com/images/I/71uYLvTxsQL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:false,
      oldprice:"1,595",
      price:"1,095",
      status:false
    },
    {
      name:"Acnos",
      img:"https://m.media-amazon.com/images/I/41EjE3W0jgL._AC_UL480_FMwebp_QL65_.jpg",
      star:"⭐⭐⭐⭐",
      sale:true,
      oldprice:"2,499",
      price:"399",
      status:false
    }
  ]


