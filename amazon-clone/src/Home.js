import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return ( 
  <div className="home">
     <div className="home_container">
      <img
      className="home_image"
        src="https://m.media-amazon.com/images/I/51sXRZqAk2L._SX1500_.jpg"
        alt=""
        />

        <div className='home_row'>
          <Product 
             id="8367283"
             title="The Road to React: Your journey to master plain yet pragmatic React.js"
             price={29.99}
             image="https://m.media-amazon.com/images/I/51EyrsWbMGL._AC_UL480_FMwebp_QL65_.jpg" 
             rating={5}
          />
          <Product
             id="6757439"
             title="9.5QT Stand Mixer, DOBBOR 7 Speeds 660W Electric Kitchen Stand Mixer, Tilt-Head Food Mixer, Splash Guard & Mixing Bowl for Baking - Red"
             price={259}
             image="https://m.media-amazon.com/images/I/71a2oItcDZL._AC_UY327_FMwebp_QL65_.jpg" 
             rating={5}
           />

        </div>
        <div className='home_row'>
          <Product
             id="9065468"
             title="Echo Dot (5th Gen, 2022 release) | Smart speaker with Alexa | Charcoal"
             price={49.99}
             image="https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_UY327_FMwebp_QL65_.jpg" 
             rating={3} />
         <Product
             id="0853538"
             title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (4th Generation)"
             price={799.99}
             image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg" 
             rating={4} />
          <Product
             id="8374893"
             title="Latest_Alien.Ware m15 R5 FHD 360Hz Gaming Laptop PC, AMD Ryzen 9 5900HX, GeForce RTX 3070, 32GB RAM 1TB PCIe SSD"
             price={1789.99}
             image="https://m.media-amazon.com/images/I/81zlTa1HP6S._AC_UY327_FMwebp_QL65_.jpg" 
             rating={5} />
        </div>
        <div className='home_row'>
          <Product
             id="0876554"
             title="SAMSUNG 49” Odyssey G9 Gaming Monitor, 1000R Curved Screen, QLED, Dual QHD Display, 240Hz, Black"
             price={1009.39}
             image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY327_FMwebp_QL65_.jpg" 
             rating={5} />
        </div>
     </div>
    </div>
  );
}

export default Home;