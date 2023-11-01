import React from 'react';

function StarRating({ rating }) {
  const starIcons = [];
  const maxStars = 5;

  for (let i = 0; i < maxStars; i++) {
    if (i < rating) {
      // Filled star
      starIcons.push(<span key={i}>&#9733;</span>);
    } else if (i === Math.ceil(rating) - 1 && rating % 1 !== 0) {
      // Half-filled star
      starIcons.push(<span key={i}>&#9734;&#9733;</span>);
    } else {
      // Empty star
      starIcons.push(<span key={i}>&#9734;</span>);
    }
  }

  return (
    <div className="star-rating">
      {starIcons}
    </div>
  );
}

function ProductCard({ name, rating }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <StarRating rating={rating} />
    </div>
  );
}

function Stars() {
    const products = [
        { name: 'Product 1', rating: 4.5 },
        { name: 'Product 2', rating: 3.0 },
        // Add more products here
      ];
    
      return (
        <div>
          {products.map((product, index) => (
            <ProductCard key={index} name={product.name} rating={product.rating} />
          ))}
        </div>
      );
    }
    

export default Stars;
