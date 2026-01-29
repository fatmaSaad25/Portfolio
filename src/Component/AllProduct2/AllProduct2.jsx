import React from 'react';
import Countdowen from '../Countdowen/Countdowen'
import { Link } from 'react-router-dom';
import StyleProduct from '../Dress/StyleDress.module.css'
export default function allproduct({addToCart}) {
    const products = [
    { id: 1, name: "Shirt", price: 550, oldPrice: 600, img: require("../img/تيشرت5-removebg-preview.png") },
    { id: 2, name: "Dress", price: 400, oldPrice: 450, img: require("../img/dress6.png") },
    { id: 3, name: "Shirt", price: 250, oldPrice: 300, img: require("../img/تيشرت6-removebg-preview.png") },
    { id: 4, name: "Dress", price: 450, oldPrice: 500, img: require("../img/dress7.png") },
    { id: 5, name: "Shirt", price: 400, oldPrice: 450, img: require("../img/تيشرت7-removebg-preview.png") },
    { id: 6, name: "Dress", price: 100, oldPrice: 150, img: require("../img/dress8.png") },
    { id: 7, name: "Shirt", price: 350, oldPrice: 400, img: require("../img/تيشرت8-removebg-preview.png") },
    { id: 8, name: "Dress", price: 150, oldPrice: 200, img: require("../img/dress9.png") },
    { id: 9, name: "Shirt", price: 550, oldPrice: 600, img: require("../img/تيشرت9-removebg-preview.png") },
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
                                         <Link className={StyleProduct.btnBuy}>Buy Now</Link>
                                        <div className="cart">
                                            <button className={StyleProduct.btnCart} onClick={()=> addToCart(product)}>  Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={StyleProduct.btnPage}>
                        <Link to='/allproduct' className={StyleProduct.page}>1</Link>
                        <Link to='/allproduct2' className={StyleProduct.page} id={StyleProduct.active}>2</Link>
                    </div>
            </section>

        </div>
    );
}
