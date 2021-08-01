import React from "react";
import "../../css/containers/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Stick-it</h1>
        <p className="text-muted">sticky notes to your sticky ideias</p>
      </div>

        {/*Products*/}
        <div className="ProductsGalery">
          
          <div class="card">
            <img src="/img/logoFBpng.png" alt="Denim Jeans" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p>
          </div>

        </div>
    </div>
  );
}