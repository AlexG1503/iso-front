import ShoppingCartApp from "./ShoppingCartApp";

const ShoppingCartConfig = {
    settings: {
        layout: {
            config: {
                navbar: true,
                sidebar: false,
                footer: true,
            },
        },
    },
    routes: [
        {
            path: 'cart',
            element: ShoppingCartApp
        },
    ],
};

export default ShoppingCartConfig;
