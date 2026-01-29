import React from 'react';
import Countdowen from '../Countdowen/Countdowen'
import { Link } from 'react-router-dom';
import StyleProduct from '../Dress/StyleDress.module.css'
export default function allproduct({addToCart}) {
    const products = [
    { id: 1, name: "Dress", price: 400, oldPrice: 450, img: require("../img/dress1.png") , link:'BuyDressGreen'},
    { id: 2, name: "Shirt", price: 200, oldPrice: 250, img: require("../img/تيشرت1-removebg-preview.png") , link:'BuyShirtBlue'},
    { id: 3, name: "Dress", price: 370, oldPrice: 400, img: require("../img/dress2.png") , link:'#'},
    { id: 4, name: "Shirt", price: 300, oldPrice: 350, img: require("../img/تيشرت2-removebg-preview.png") , link:'BuyShirtBrowen'},
    { id: 5, name: "Dress", price: 300, oldPrice: 350, img: require("../img/dress3.png") , link:'#'},
    { id: 6, name: "Shirt", price: 400, oldPrice: 450, img: require("../img/تيشرت3-removebg-preview.png"), link:'#' },
    { id: 7, name: "Dress", price: 200, oldPrice: 250, img: require("../img/dress4.png") , link:'BuyDressBlue'},
    { id: 8, name: "Shirt", price: 500, oldPrice: 550, img: require("../img/تيشرت4-removebg-preview.png") , link:'#'},
    { id: 9, name: "Dress", price: 300, oldPrice: 350, img: require("../img/dress5.png") , link:'#'},
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
                    <div className={StyleProduct.btnPage}>
                        <Link className={StyleProduct.page} id={StyleProduct.active} >1</Link>
                        <Link to='/allproduct2' className={StyleProduct.page}>2</Link>
                    </div>
            </section>
          
        </div>
    );
}
