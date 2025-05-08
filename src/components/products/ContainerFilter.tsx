import { Separator } from "../../shared/separator";
import "./ContainerFilter.css";

const availableBrands = [
  "EcoBag",
  "GreenNotes",
  "EcoLight",
  "ReCase",
  "EcoBox",
  "GreenPot",
  "EcoVision",
];

interface Props {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
}

export const ContainerFilter = ({selectedBrands, setSelectedBrands}: Props) => {

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  }


  return (
    <aside className="filter-box">
      <h3 className="filter-title">Filtros</h3>

      <Separator />

      <div className="filter-section">
        <h4 className="filter-subtitle">Marcas</h4>

        <div className="filter-options">
          {availableBrands.map((brand) => (
            <label key={brand} className="filter-label">
              <input type="checkbox" className="filter-checkbox" onChange={() => handleBrandChange(brand)} checked={selectedBrands.includes(brand)} />
              <span className="filter-label-text">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
