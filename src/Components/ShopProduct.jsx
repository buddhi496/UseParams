import React from "react";
import Product from "../Lists/Product";
import './main.css';

function ShopProduct() {
  
  return (
    <>
    <div>
        <h1>Product List</h1>
        <ul>
            {Product.map((product) => (
            <li key={product.id}>
                <img src={require(`../Images/${product.image}`)} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.detail}</p>
                <p>Price: ${product.currentPrice}</p>
                {product.prevPrice > 0 && (
                <p>Previous Price: ${product.prevPrice}</p>
                )}
                <p>Shop: {product.shopName}</p>
                <p>Rating: {product.rating} / 5</p>
            </li>
            ))}
        </ul>
    </div>
    </>
  );
}

export default ShopProduct;