import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const  handleAddtoCart = (product) =>{
        console.log(product)
           const newCart = [...cart, product];
           setCart(newCart);        
    }
    return (
        <div className='shop-container'>
             <div className="producs-container">
              {
                products.map(product => <Product key={product.id}
                product ={product}
                handleAddtoCart ={handleAddtoCart}
                >

                </Product>
                    )
              }
             </div>
             <div className="card-container">
               <h3>order summery</h3>
               <p>Selected Items: {cart.length}</p>
             </div>
        </div>
    );
};

export default Shop;