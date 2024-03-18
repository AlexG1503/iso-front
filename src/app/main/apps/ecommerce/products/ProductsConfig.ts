import ProductsApp from './ProductsApp';

const ProductsConfig = {
    settings: {
        layout: {
            config: {
                navbar: true,
                sidebar: true,
                footer: true,
            },
        },
    },
    routes: [
        {
            path: 'category/:id',
            element: ProductsApp
        },
    ],
};

export default ProductsConfig;
