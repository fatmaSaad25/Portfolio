import React, { useState } from 'react';
import StyleBuy from '../BuyDress1/StyleBuyDress.module.css'
import shirt1 from "../img/تيشرت2-removebg-preview.png";
import shirt2 from "../img/shirtbrowen1.png";
import shirt3 from "../img/shirtbrowen2.png";
import shirt4 from "../img/shirtbrowen3.png";
import { Link } from 'react-router-dom';
const BuyDressGreen = () => {
    const[mainDress,setMainDress]=useState(shirt1)
    const [showModel,setShowModel]=useState(false)
    const dresses = [
  { id: 1, src: shirt2, alt: "shirt" },
  { id: 2, src: shirt3, alt: "shirt" },
  { id: 3, src: shirt4, alt: "shirt" },
];
const someProduct=[
     { id: 2, name: "Shirt", price: 200, oldPrice: 350, img: require("../img/تيشرت1-removebg-preview.png") , link:'BuyShirtBlue'},
    { id: 3, name: "Shirt", price: 350, oldPrice: 400, img: require("../img/تيشرت8-removebg-preview.png"), link:'.#' },
    { id: 4, name: "Shirt", price: 250, oldPrice: 300, img: require("../img/تيشرت6-removebg-preview.png"), link:'.#' },
]
    return (
        <div>
            <section className={StyleBuy.BuyDressGreen}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={StyleBuy.partImg}>
                              <div className={StyleBuy.mainImg}>
                                <img src={mainDress} alt="main dress" />
                              </div>
                                <div className={StyleBuy.secImg}>
                                      {dresses.map((dress, index) => (
                  <div key={index} className={StyleBuy.img}>
                    <img
                      src={dress.src}
                      alt={dress.alt}
                      onClick={() => setMainDress(dress.src)}
                    />
                               </div>
                                   
                                ) )}
                               
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={StyleBuy.partText}>
                                <h2>Fashion Shirt</h2>
                                <h3>300$</h3>
                                <select name="greenDress" id="dress">
                                    <option value="greenDress">Large</option>
                                    <option value="greenDress">X Large</option>
                                    <option value="greenDress">XX Large</option>
                                </select>
                                <input type="number"/>
                                <h4>Product Details</h4>
                                <p>The Gildan Ultra Cotton dress is made from a substantial 6.0 oz . sq . yd fabric constructed from 100 % cotton , this classic fit preshrunkjersey knit provides unmatched comfort with each wearFeaturing a taped neck and shoulder , and a seamless double - needle collar and available in a range of colors ,it 
                                </p>
                                <button onClick={()=> setShowModel(true)} className={StyleBuy.buyDress}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {
                        showModel && (
                            <div className={StyleBuy.partBuy}>
                                <div className={StyleBuy.close}>
                                    <button onClick={()=> setShowModel(false)}>X</button>
                                </div>
                                <h3>Buyer's information</h3>
                                <form action="#">
                                <div className={StyleBuy.partInput1}>
                                <input type="text" name='name' placeholder='Enter Your Name'/> <br/>
                                <input type='number' name='number' placeholder='Enter Your Phone Number' /> <br/>
                                <input type='text' name="address" placeholder='Enter Your Address' /> <br/>
                                </div>
                                <h4>Card Information</h4>
                                <div className={StyleBuy.imgBuy}>
                                    <img src={require('../img/visa.png')} alt="visa" />
                                    <img src={require('../img/mastercard.png')} alt="mastercard" />
                                </div>
                                <div className={StyleBuy.partInput2}>
                                <input type="password" name='password' placeholder='Card Number' id={StyleBuy.pass} /> <br/>
                                <input type="number" placeholder='mm' />
                                <input type="number" placeholder='yyyy' />
                                <input type="number" placeholder='cvv' />
                                </div>
                                <br/>
                                <input type="submit" id={StyleBuy.send}/>
                                </form>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className={StyleBuy.showSomeProduct}>
                <h1>Featured Products</h1>
                <h5>Summer collection new modern design</h5>
                <div className="container">
                    <div className="row">
                       {someProduct.map((product,index)=>(
                        <div className="col-lg-4 col-md-6 sol-sm-12" key={index}>
                              <div className={StyleBuy.dress}>
                                 <div className={StyleBuy.imgPage}>
                                    <img src={product.img} alt={product.name} />
                                    </div>
                                     <div className={StyleBuy.textPage}>
                                        <h3>{product.name}</h3>
                                    <p> ${product.price}</p>
                                     <Link to={`/${product.link}`} className={StyleBuy.btnBuy}>Buy Now</Link>          
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

export default BuyDressGreen;
