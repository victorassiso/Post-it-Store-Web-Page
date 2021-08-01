import React from "react";
import "../../css/containers/Home.css";
import data from './data';
import Basket from "./Basket";

export default function Home() {
  
  const { products } = data;

  return (
    <div className="home">
      <div className="block Banner">
        <h1>Stick-it</h1>
        <p className="text-muted">sticky notes to your sticky ideias</p>
      </div>

      <div className="row">
        <div className="block col-2">
          <div class="card">
            <img src="/img/blockNotes.jpg" alt="Block Notes" />
            <h2>Sticky Notes</h2>
            <p class="price">$19.99</p>
            <p>Super Sticky Notes</p>
            <p><button className="addToCartButton">Add to Cart</button></p>
          </div>
        </div>

        <Basket></Basket>

      </div>
      

    </div>
  );
}