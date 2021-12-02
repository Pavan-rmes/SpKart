import * as React from 'react';

export function Product({ content, cart, setcart }) {

  const [add, setAdd] = React.useState(false);

  console.log(content);

  let addStyle;

  function addClick() {

    if (add === false) {

      setcart(cart + 1);

    }
    setAdd(true);
  }
  if (add === true) {

    addStyle = { cursor: "auto", backgroundColor: "gray", color: "black" };

  }

  return (
    <div className="product">

      <div style={{ textAlign: "center" }}>

        <img className="productImage" src={content.img} />

      </div>

      <div className="productInfo">

        <h4 style={{ fontWeight: "700", fontFamily: "Arial, Helvetica, sans-serif" }}>{content.name}</h4>

        <p>{content.star}</p>

        {content.sale === true ? <div>

          <h2 style={{ fontSize: "15px", display: "inline" }}><del><span>&#8377;</span>{content.oldprice}</del></h2>

          <h2 style={{ color: "red", display: "inline" }}><span>&#8377;</span>{content.price}</h2>

        </div> :

          <div>

            <h2 style={{ color: "red", display: "inline" }}><span>&#8377;</span>{content.price}</h2>

          </div>}

        <div className="addToCart" style={addStyle} onClick={() => addClick()}>

          <p>ADD</p>

        </div>
        
      </div>



    </div>
  );
}
