import "./Productskeleton.css"

interface Props {
	numberOfProducts: number;
}

export const ProductGridSkeleton = ({ numberOfProducts }: Props) => {
	return (
		<div className="skeleton-wrapper">
			<div className="skeleton-grid">
				{Array.from({ length: numberOfProducts }).map((_, index) => (
					<div key={index} className="skeleton-card" />
				))}
			</div>
		</div>
	);
};
