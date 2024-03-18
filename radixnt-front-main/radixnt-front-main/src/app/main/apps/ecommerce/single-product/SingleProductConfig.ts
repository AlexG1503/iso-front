import SingleProductApp from './SingleProductApp';

const SingleProductConfig = {
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
            path: 'product/:id',
            element: SingleProductApp
        },
    ],
};

export default SingleProductConfig;
