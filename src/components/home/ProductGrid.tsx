// ProductGrid.jsx
import React from "react";
import "./ProductGrid.css";
import { PreparedProducts } from "../../interface";
import { CardProduct } from "../products/CardProducts";

interface Props {
  title: string;
  products: PreparedProducts[];
}

export const ProductGrid: React.FC<Props> = ({ title, products }) => {
  return (
    <section className="product-grid-section">
      <h2 className="product-grid-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            name={product.name}
            price={product.price}
            colors={product.colors}
            img={product.images[0]}
            slug={product.slug}
            variants={product.variants}
          />
        ))}
      </div>
    </section>
  );
};
