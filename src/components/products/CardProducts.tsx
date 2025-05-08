import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { VariantProduct } from "../../interface";
import "./CardProducts.css";
import { formatPrice } from "../../helpers";

interface Props {
  img: string;
  name: string;
  price: number;
  slug: string;
  colors: { name: string; color: string }[];
  variants: VariantProduct[];
}

export const CardProduct = ({
  img,
  name,
  price,
  slug,
  colors,
  variants,
}: Props) => {
  const [activeColor, setActiveColor] = useState(colors[0]);

  // Encuentra la variante activa según el color
  const selectedVariant = variants.find(
    (v) => v.color === activeColor.color
  );
  const stock = selectedVariant?.stock ?? 0;

  return (
    <div className="card-product">
      <Link to={`/celulares/${slug}`} className="card-link">
        <div className="card-image-container">
          <img src={img} alt={name} className="card-image" />
        </div>

        <button className="card-button">
          <FiPlus />
          Añadir
        </button>
      </Link>

      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-price">{formatPrice(price)}</p>

        <div className="card-colors">
          {colors.map((c) => (
            <span
              key={c.color}
              className={`color-circle${
                c.color === activeColor.color ? " active" : ""
              }`}
              title={c.name}
              style={{ borderColor: c.color }}
              onClick={() => setActiveColor(c)}
            >
              <span
                className="color-inner"
                style={{ backgroundColor: c.color }}
              />
            </span>
          ))}
        </div>
      </div>

      {stock === 0 && (
        <div className="card-stock">Agotado</div>
      )}
    </div>
  );
};
