import { useState } from 'react';

interface Props {
	images: string[];
}

export const GridImages = ({ images }: Props) => {
	const [activeImage, setActiveImage] = useState(images[0]);

	const handleImageClick = (image: string) => {
		setActiveImage(image);
	};

	return (
        <div className="image-gallery">
            <div className="main-image-container">
                <img
                    src={activeImage}
                    alt="Imagen de Producto"
                    className="main-image"
                />
            </div>
    
            {/* Miniaturas */}
            <div className="thumbnails">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageClick(image)}
                        className={`thumbnail-button ${
                            activeImage === image ? 'active' : ''
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="thumbnail-image"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
    
};
