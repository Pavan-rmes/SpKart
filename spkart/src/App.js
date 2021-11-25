import './App.css';
import * as React from 'react';
import { About } from './About';
import { Nav } from './Nav';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <navigator>
        <Nav />
        <hr></hr>
      </navigator>
      <About />
      <div className="products">
        {contents.map((content)=><Product content = {content} />)}
      </div>
    </div>
  );
}

function Product({content}){
  return(
    <div className="product">
      <div>
        <h3>{content.banner}</h3>
        <div className="catagoryImages">
          {content.images.map((image,index)=>{return(
            <div>
              <img className="productImage" src={image} />
              <p>{content.aboutimg[index]}</p>
            </div>
          )})}
        </div>
      </div>
    </div>
  )
}
export default App;

const contents = [
  {banner:"Upgrade your home | SpKart Brands & more",
    images:["https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg"],
    aboutimg:["smart LED TVs","Appliances","Furniture","Kitchen Products"]            
  },
  {
    banner:"Top rated, premium quality | SpKart Brands & more",
    images:["https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg",
             "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg",
             "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
             "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"],
    aboutimg:["Home Products","Furniture","Daily Essentials","Clothing Essentials"]
  },
  {
    banner:"Top picks for your home",
    images:["https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"],
    aboutimg:["ACs","Refrigerators","MicroWaves","Washing Machines"]
  },
  {
    banner:"Revamp your home in style",
    images:["https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"],
    aboutimg:["BedSheets Curtains","Home Decarations","Home Storage","Lightning Solutions"]
  }]

