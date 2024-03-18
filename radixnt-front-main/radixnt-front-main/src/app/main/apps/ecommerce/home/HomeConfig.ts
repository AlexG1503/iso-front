import HomeApp from './HomeApp';

const HomeConfig = {
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
            path: 'home',
            element: HomeApp
        },
    ],
};

export default HomeConfig;
