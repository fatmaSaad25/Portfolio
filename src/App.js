import React, { useState } from 'react';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import About from './Component/About/About';
import Signup from './Component/Signup/Signup';
import Dress from './Component/Dress/Dress';
import Shirt from './Component/Shirt/Shirt';
import AllProduct from './Component/AllProduct/AllProduct';
import ProductPage2 from './Component/AllProduct2/AllProduct2';
import Layout from'./Component/Layout/Layout'
import Cart from './Component/Cart/Cart';
import BuyDressGreen from './Component/BuyDress1/BuyDressGreen'
import BuyDressBlue from './Component/BuyDressBlue/BuyDressBlue'
import BuyShirtBlue from './Component/BuyShirtBlue/BuyShirtBlue'
import BuyShirtBrowen from './Component/BuyShirtBrowen/BuyShirtBrowen'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const App = () => {
    const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
   const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item, index) => index !== id));
  };
let projectShop=createBrowserRouter([
  {path:'' , element: <Layout cartCount={cartItems.length}/>, children:[
    {index:true , element:<Home addToCart={addToCart}/>},
    {path:'shop', element:<Shop/>},
    {path:'dress', element:<Dress addToCart={addToCart} />},
    {path:'shirt', element:<Shirt addToCart={addToCart}/>},
    {path:'allproduct', element:<AllProduct addToCart={addToCart} />},
    {path:'about', element:<About/>},
    {path:'signup', element:<Signup/>},
    { path: "cart", element: <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> },
    { path: "allproduct2", element: <ProductPage2 addToCart={addToCart}/> },
    { path: "BuyDressGreen", element: < BuyDressGreen/> },
    { path: "BuyDressBlue", element: < BuyDressBlue/> },
    { path: "BuyShirtBlue", element: < BuyShirtBlue/> },
    { path: "BuyShirtBrowen", element: < BuyShirtBrowen/> },
  ]}
])
  return (
    <div>
      <RouterProvider router={projectShop}></RouterProvider>
    </div>
  );
}
export default App;