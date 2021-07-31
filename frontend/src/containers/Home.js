import React from "react";
import "./Home.css";
import exampleCard from '/Images/exampleCard.jpg';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Stick-it</h1>
        <p className="text-muted">sticky notes to your sticky ideias</p>
      </div>

      {/*Products*/}
      <div className="ProductFilter">
        <div className="Sort">
          <section className="Products">
            
            <div className="ProductCard">
              <div className="ProductImage">
                <a className="Product1link" >
                  <exampleCard
                    alt="Product 1"
                    scr="/exampleCard.jpg"
                    objectFit="fill"
                    layout="fill"
                    quality={100}
                    width={300}
                    height={300}
                    className="ProductImage"
                  />
                  Product 1
                </a>
              </div>
              <div className="ProductInfo">
                <h5>Example Product 1</h5>
                <h6>$12.50</h6>
              </div>
            </div>

            <div className="ProductCard">
              <div className="ProductImage">
                <img src="./Images/exampleCard.jpg" alt="2" />
              </div>
              <div className="ProductInfo">
                <h5>Example Product 2</h5>
                <h6>$12.50</h6>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}