import { useState } from "react";
import { CardProduct } from "../components/products/CardProducts";
import { ContainerFilter } from "../components/products/ContainerFilter";

import { prepareProducts } from "../helpers";
import { useFilteredProducts } from "../hooks";
import "./ReciclajePage.css";
import { Paginación } from "../shared/Paginacion";

export const ReciclajePage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    brands: selectedBrands,
  });

  const preparedProducts = prepareProducts(products);

  return (
    <section className="reciclaje-page">
      <h1 className="reciclaje-title">Productos</h1>

      <div className="reciclaje-layout">
        {/* Filtros */}
        <aside className="reciclaje-filter">
          <ContainerFilter
            setSelectedBrands={setSelectedBrands}
            selectedBrands={selectedBrands}
          />
        </aside>

        {/* Contenido principal */}
        {isLoading ? (
          <div className="loading-container">
            <p className="loading-text">Cargando...</p>
          </div>
        ) : (
          <div className="reciclaje-content">
            <div className="products-grid">
              {preparedProducts.map((product) => (
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

            {/* TODO: Paginación aquí */}
            <Paginación 
              totalItems={totalProducts}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};
