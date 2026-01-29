import React from 'react';
import Countdowen from '../Countdowen/Countdowen'
import { Link } from 'react-router-dom';
import StyleProduct from '../Dress/StyleDress.module.css'
export default function Shirt({addToCart}) {
    const products = [
    { id: 1, name: "Shirt", price: 200, oldPrice: 250, img: require("../img/تيشرت1-removebg-preview.png") , link:'BuyShirtBlue' },
    { id: 2, name: "Shirt", price: 300, oldPrice: 350, img: require("../img/تيشرت2-removebg-preview.png") , link:'BuyShirtBrowen'},
    { id: 3, name: "Shirt", price: 400, oldPrice: 450, img: require("../img/تيشرت3-removebg-preview.png") , link:'#'},
    { id: 4, name: "Shirt", price: 500, oldPrice: 550, img: require("../img/تيشرت4-removebg-preview.png") , link:'#'},
    { id: 5, name: "Shirt", price: 550, oldPrice: 600, img: require("../img/تيشرت5-removebg-preview.png") , link:'#'},
    { id: 6, name: "Shirt", price: 250, oldPrice: 300, img: require("../img/تيشرت6-removebg-preview.png"), link:'#' },
    { id: 7, name: "Shirt", price: 450, oldPrice: 500, img: require("../img/تيشرت7-removebg-preview.png"), link:'#' },
    { id: 8, name: "Shirt", price: 350, oldPrice: 400, img: require("../img/تيشرت8-removebg-preview.png") , link:'#'},
    { id: 9, name: "Shirt", price: 550, oldPrice: 600, img: require("../img/تيشرت9-removebg-preview.png"), link:'#' },
  ];
    return (
        <div>
            <Countdowen/>
            <section className={StyleProduct.pageDress}>
                <div className="container">
                    <div className="row">
                        {products.map((product,index)=> (
                            <div className="col-lg-4 col-md-4 mt-5" key={index}>
                                <div className={StyleProduct.dress}>
                                    <div className={StyleProduct.imgPage}>
                                        <img src={product.img} alt={product.name} />
                                    </div>
                                    <div className={StyleProduct.textPage}>
                                        <h3>{product.name}</h3>
                                        <p>
                                         <span>{product.oldPrice}$</span> {product.price}$
                                         </p>
                                         <Link to={`/${product.link}`} className={StyleProduct.btnBuy}>Buy Now</Link>
                                        <div className="cart">
                                            <button className={StyleProduct.btnCart} onClick={()=> addToCart(product)}>  Add to Cart</button>
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
