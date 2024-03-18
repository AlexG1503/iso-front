import HomeConfig from "./home/HomeConfig";
import ProductsConfig from "./products/ProductsConfig";
import ShoppingCartConfig from "./shopping-cart/ShoppingCartConfig";
import SingleProductConfig from "./single-product/SingleProductConfig";


export const ecommerceConfig = [
    HomeConfig,
    ProductsConfig,
    SingleProductConfig,
    ShoppingCartConfig,
];

export const navigationConfig = [
    {
        id: "home",
        path: "/",
        name: "Inicio",
    },
    {
        id: "categorias",
        path: "/category/:id",
        name: "Categorías",
    },
];
