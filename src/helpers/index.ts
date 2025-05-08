import { Color, Product, VariantProduct } from "../interface";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
};

//Preparar los productos para la tienda
export const prepareProducts = (products: Product[]) => {
    return products.map((product) => {
        const colors = product.variants.reduce((acc: Color[],variant: VariantProduct) => {
            const exisitingcolor = acc.find(item => item.color === variant.color);

            if (exisitingcolor) {
                exisitingcolor.price = Math.min(exisitingcolor.price, variant.price);
            }
            else {
                acc.push({
                    color:variant.color,
                    price:variant.price,
                    name:variant.color_name,
                });
            }
            return acc;
        },[]);

        //Precio mas bajo
        const price = Math.min(...colors.map(item => item.price));

        //Devolver el producto formateado
        return{
            ...product,
            price,
            colors: colors.map(({name,color}) => ({name,color})),
            variants: product.variants,
        };
    });
};