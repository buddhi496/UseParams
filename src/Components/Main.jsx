import React, { useState } from "react";
import Product from "../Lists/Product";
import {Link} from 'react-router-dom';
import './main.css';

function Main() {

  const [shop, selectedSoap] = useState("");
  const newShopProduct = shop
  ? Product.filter((product) => product.shopName === shop)
  : Product;
  
  return (
    <>
    <div>
        <div className="shop" onClick={() => selectedSoap("Soap Emporium")}>
          Soap Emporium
        </div>

        <Link to={`/shopproduct/${shop}`}><div className="shop1">
          Soap Emporium
        </div></Link>

        <h1>Product List</h1>
        <ul>
            {newShopProduct.map((product, index) => (
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

export default Main;