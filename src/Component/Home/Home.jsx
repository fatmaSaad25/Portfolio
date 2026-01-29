import React from "react";
import { Link } from "react-router-dom";
import StyleHome from "./Home.module.css";

export default function Home({ addToCart }) {
  const products = [
    { id: 1, name: "Dress", price: 400, oldPrice: 450, img: require("../img/dress1.png") , link:'BuyDressGreen'},
    { id: 2, name: "Dress", price: 370, oldPrice: 400, img: require("../img/dress2.png") , link:'#'},
    { id: 3, name: "Dress", price: 300, oldPrice: 350, img: require("../img/dress3.png") , link:'#'},
    { id: 5, name: "Shirt", price: 200, oldPrice: 250, img: require("../img/تيشرت1-removebg-preview.png") , link:'BuyShirtBlue'},
    { id: 6, name: "Shirt", price: 200, oldPrice: 250, img: require("../img/تيشرت2-removebg-preview.png") , link:'BuyShirtBrowen'},
    { id: 7, name: "Shirt", price: 200, oldPrice: 250, img: require("../img/تيشرت3-removebg-preview.png") , link:'#'},
  ];

  return (
  <div>
    <section className={StyleHome.heroSection}>
      <div className={StyleHome.texthero}>
        <h1>Shine this summer</h1>
      <h4>Discover our new collection <br/>of summer clothes</h4>
      <Link className={StyleHome.btnhero} to="/AllProduct">Shop Now</Link>
      </div>
    </section>
    <section className={StyleHome.someProdectDress}>
        <h2>Some Products</h2>
        <p>Here you check out iur new products with fair price on Women Style</p>
         <div className="container">
      <div className="row">
        {products.map((product,index) => (
          <div className="col-lg-4 col-md-4 mt-5" key={index}>
            <div className={StyleHome.someDress}>
              <div className={StyleHome.imgDress}>
                <img src={product.img} alt={product.name} />
              </div>
              <div className={StyleHome.dressText}>
                <h3>{product.name}</h3>
                <p>
                  <span>{product.oldPrice}$</span> {product.price}$
                </p>
                <Link className={StyleHome.btnBuy} to={`/${product.link}`}>
                  Buy Now
                </Link>
                <div className={StyleHome.cart}>
                  <button
                    className={StyleHome.btnCart}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  </div>
   
  );
}


