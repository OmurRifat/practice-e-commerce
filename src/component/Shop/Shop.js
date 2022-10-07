import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, storeAddedProduct } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, []);
    useEffect(() => {
        // console.log(products, "From the 2nd effect")
        const stroedProducts = storeAddedProduct();
        const newCart = [];
        // console.log(stroedProducts);
        for (const id in stroedProducts) {
            // console.log(id)
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                const newQuantity = stroedProducts[id];
                addedProduct.quantity = newQuantity;
                newCart.push(addedProduct);
            }
            setCart(newCart);
        }
    }, [products])
    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={ product.id }
                        product={ product }
                        handleAddToCart={ handleAddToCart }
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={ cart }></Cart>
            </div>
        </div>
    );
};

export default Shop;