const categories = [
    "Camisetas",
    "Pantalones",
    "Hoodies",
    "Conjuntos",
    "Gorras",
    "Medias",
    "Accesorios",
    "Descuentos",
];

const defaultImage = "https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente.jpg";

export const products = [
    {
        id: 1,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Estampada Azul",
        price: 25000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta con un diseño estampado en color azul.",
        composition: "100% Algodón",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#0055FF", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 2,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Básica Negra",
        price: 22000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta básica en color negro.",
        composition: "95% Algodón, 5% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 3,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Deportiva Roja",
        price: 27000,  // Precio en COP
        category: categories[0],
        description: "Camiseta deportiva de manga corta en color rojo.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 4,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta de Rayas Blancas y Negras",
        price: 28000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta a rayas en blanco y negro.",
        composition: "100% Algodón",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 5,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Slim Fit Verde",
        price: 30000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta estilo slim fit en color verde.",
        composition: "95% Algodón, 5% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#008000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 6,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Oversize Amarilla",
        price: 26000,  // Precio en COP
        category: categories[0],
        description: "Camiseta oversize de manga corta en color amarillo.",
        composition: "100% Algodón",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFFF00", "#000000"],
        isDiscount: false,
    },
    {
        id: 7,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Clásica Blanca",
        price: 22000,  // Precio en COP
        category: categories[0],
        description: "Camiseta clásica de manga corta en color blanco.",
        composition: "100% Algodón",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FFFFFF", "#000000"],
        isDiscount: true,
    },
    {
        id: 8,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta con Bolsillo Gris",
        price: 28000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta con un bolsillo en color gris.",
        composition: "90% Algodón, 10% Poliéster",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#888888", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 9,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta Estampada Floral",
        price: 32000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta con un estampado floral.",
        composition: "100% Algodón",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FF3399", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 10,
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Camiseta de Cuello V Azul",
        price: 24000,  // Precio en COP
        category: categories[0],
        description: "Camiseta de manga corta con cuello en V en color azul.",
        composition: "95% Algodón, 5% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#0055FF", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 11,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Cargo Verde",
        price: 85000,  // Precio en COP
        category: categories[1],
        description: "Pantalón cargo de color verde para hombres.",
        composition: "100% Algodón",
        sizes: ["28", "30", "32", "34"],
        colors: ["#008000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 12,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Jeans Azul Oscuro",
        price: 95000,  // Precio en COP
        category: categories[1],
        description: "Pantalón de jeans de color azul oscuro para hombres.",
        composition: "98% Algodón, 2% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#000080", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 13,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Deportivo Negro",
        price: 78000,  // Precio en COP
        category: categories[1],
        description: "Pantalón deportivo de color negro para hombres.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 14,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Cargo Beige",
        price: 88000,  // Precio en COP
        category: categories[1],
        description: "Pantalón cargo de color beige para hombres.",
        composition: "100% Algodón",
        sizes: ["28", "30", "32", "34"],
        colors: ["#D2B48C", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 15,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Chino Marrón",
        price: 80000,  // Precio en COP
        category: categories[1],
        description: "Pantalón chino de color marrón para hombres.",
        composition: "98% Algodón, 2% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#8B4513", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 16,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Cargo Camuflaje",
        price: 90000,  // Precio en COP
        category: categories[1],
        description: "Pantalón cargo de camuflaje para hombres.",
        composition: "100% Algodón",
        sizes: ["28", "30", "32", "34"],
        colors: ["#228B22", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 17,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Vaquero Gris",
        price: 92000,  // Precio en COP
        category: categories[1],
        description: "Pantalón vaquero de color gris para hombres.",
        composition: "98% Algodón, 2% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#808080", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 18,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Deportivo Rojo",
        price: 82000,  // Precio en COP
        category: categories[1],
        description: "Pantalón deportivo de color rojo para hombres.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 19,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Slim Fit Negro",
        price: 97000,  // Precio en COP
        category: categories[1],
        description: "Pantalón estilo slim fit de color negro para hombres.",
        composition: "98% Algodón, 2% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 20,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pantalón Chino Azul",
        price: 88000,  // Precio en COP
        category: categories[1],
        description: "Pantalón chino de color azul para hombres.",
        composition: "98% Algodón, 2% Elastano",
        sizes: ["28", "30", "32", "34"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 31,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Deportivo Negro",
        price: 125000,  // Precio en COP
        category: categories[3],
        description: "Conjunto deportivo completo de color negro.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 32,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Casual Azul",
        price: 115000,  // Precio en COP
        category: categories[3],
        description: "Conjunto casual completo de color azul.",
        composition: "80% Algodón, 20% Poliéster",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 33,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Deportivo Gris",
        price: 130000,  // Precio en COP
        category: categories[3],
        description: "Conjunto deportivo completo de color gris.",
        composition: "85% Poliéster, 15% Algodón",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#808080", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 34,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto de Jogging Negro",
        price: 120000,  // Precio en COP
        category: categories[3],
        description: "Conjunto de jogging completo de color negro.",
        composition: "95% Algodón, 5% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 35,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Deportivo Rojo",
        price: 128000,  // Precio en COP
        category: categories[3],
        description: "Conjunto deportivo completo de color rojo.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 36,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto de Jogging Azul",
        price: 118000,  // Precio en COP
        category: categories[3],
        description: "Conjunto de jogging completo de color azul.",
        composition: "95% Algodón, 5% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 37,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Casual Negro",
        price: 110000,  // Precio en COP
        category: categories[3],
        description: "Conjunto casual completo de color negro.",
        composition: "80% Algodón, 20% Poliéster",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 38,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Deportivo Azul",
        price: 126000,  // Precio en COP
        category: categories[3],
        description: "Conjunto deportivo completo de color azul.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 39,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Casual Gris",
        price: 112000,  // Precio en COP
        category: categories[3],
        description: "Conjunto casual completo de color gris.",
        composition: "85% Algodón, 15% Poliéster",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#808080", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 40,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Conjunto Deportivo Verde",
        price: 124000,  // Precio en COP
        category: categories[3],
        description: "Conjunto deportivo completo de color verde.",
        composition: "90% Poliéster, 10% Elastano",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#008000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 41,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra de Béisbol Negra",
        price: 35000,  // Precio en COP
        category: categories[4],
        description: "Gorra de béisbol de color negro con cierre ajustable.",
        composition: "100% Algodón",
        sizes: ["Talla única"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 42,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra Snapback Azul",
        price: 38000,  // Precio en COP
        category: categories[4],
        description: "Gorra snapback de color azul con visera plana.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 43,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra de Béisbol Roja",
        price: 33000,  // Precio en COP
        category: categories[4],
        description: "Gorra de béisbol de color rojo con cierre ajustable.",
        composition: "100% Algodón",
        sizes: ["Talla única"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 44,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra Snapback Negra",
        price: 36000,  // Precio en COP
        category: categories[4],
        description: "Gorra snapback de color negro con visera plana.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 45,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra de Béisbol Azul",
        price: 34000,  // Precio en COP
        category: categories[4],
        description: "Gorra de béisbol de color azul con cierre ajustable.",
        composition: "100% Algodón",
        sizes: ["Talla única"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 46,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra Snapback Roja",
        price: 37000,  // Precio en COP
        category: categories[4],
        description: "Gorra snapback de color rojo con visera plana.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 47,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra de Béisbol Blanca",
        price: 32000,  // Precio en COP
        category: categories[4],
        description: "Gorra de béisbol de color blanco con cierre ajustable.",
        composition: "100% Algodón",
        sizes: ["Talla única"],
        colors: ["#FFFFFF", "#000000"],
        isDiscount: true,
    },
    {
        id: 48,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra Snapback Blanca",
        price: 39000,  // Precio en COP
        category: categories[4],
        description: "Gorra snapback de color blanco con visera plana.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FFFFFF", "#000000"],
        isDiscount: false,
    },
    {
        id: 49,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra de Béisbol Amarilla",
        price: 31000,  // Precio en COP
        category: categories[4],
        description: "Gorra de béisbol de color amarillo con cierre ajustable.",
        composition: "100% Algodón",
        sizes: ["Talla única"],
        colors: ["#FFFF00", "#000000"],
        isDiscount: false,
    },
    {
        id: 50,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gorra Snapback Amarilla",
        price: 38000,  // Precio en COP
        category: categories[4],
        description: "Gorra snapback de color amarillo con visera plana.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FFFF00", "#000000"],
        isDiscount: true,
    },
    {
        id: 51,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Deportivas Blancas",
        price: 18000,  // Precio en COP
        category: categories[5],
        description: "Medias deportivas blancas, ideales para actividades físicas.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FFFFFF", "#000000"],
        isDiscount: true,
    },
    {
        id: 52,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Casuales Negras",
        price: 15000,  // Precio en COP
        category: categories[5],
        description: "Medias casuales de color negro, perfectas para uso diario.",
        composition: "80% Algodón, 20% Poliéster",
        sizes: ["Talla única"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 53,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Deportivas Grises",
        price: 17000,  // Precio en COP
        category: categories[5],
        description: "Medias deportivas grises, ideales para actividades físicas.",
        composition: "75% Algodón, 25% Poliéster",
        sizes: ["Talla única"],
        colors: ["#808080", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 54,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Casuales Blancas",
        price: 16000,  // Precio en COP
        category: categories[5],
        description: "Medias casuales de color blanco, perfectas para uso diario.",
        composition: "80% Algodón, 20% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FFFFFF", "#000000"],
        isDiscount: true,
    },
    {
        id: 55,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Deportivas Negras",
        price: 18000,  // Precio en COP
        category: categories[5],
        description: "Medias deportivas negras, ideales para actividades físicas.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#000000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 56,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Casuales Grises",
        price: 16000,  // Precio en COP
        category: categories[5],
        description: "Medias casuales de color gris, perfectas para uso diario.",
        composition: "75% Algodón, 25% Poliéster",
        sizes: ["Talla única"],
        colors: ["#808080", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 57,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Deportivas Azules",
        price: 19000,  // Precio en COP
        category: categories[5],
        description: "Medias deportivas azules, ideales para actividades físicas.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 58,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Casuales Azules",
        price: 17000,  // Precio en COP
        category: categories[5],
        description: "Medias casuales de color azul, perfectas para uso diario.",
        composition: "75% Algodón, 25% Poliéster",
        sizes: ["Talla única"],
        colors: ["#0000FF", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 59,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Deportivas Rojas",
        price: 19000,  // Precio en COP
        category: categories[5],
        description: "Medias deportivas rojas, ideales para actividades físicas.",
        composition: "70% Algodón, 30% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: true,
    },
    {
        id: 60,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Medias Casuales Rojas",
        price: 17000,  // Precio en COP
        category: categories[5],
        description: "Medias casuales de color rojo, perfectas para uso diario.",
        composition: "75% Algodón, 25% Poliéster",
        sizes: ["Talla única"],
        colors: ["#FF0000", "#FFFFFF"],
        isDiscount: false,
    },
    {
        id: 61,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Pulsera de Cuero Negra",
        price: 25000,  // Precio en COP
        category: categories[6],
        description: "Pulsera de cuero genuino de color negro.",
        composition: "100% Cuero",
        sizes: ["Talla única"],
        colors: ["#000000"],
        isDiscount: false,
    },
    {
        id: 62,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Reloj Deportivo Digital",
        price: 75000,  // Precio en COP
        category: categories[6],
        description: "Reloj deportivo digital con funciones avanzadas.",
        composition: "Plástico y Metal",
        sizes: ["Talla única"],
        colors: ["#0000FF", "#FF0000"],
        isDiscount: true,
    },
    {
        id: 63,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Billetera de Cuero Marrón",
        price: 35000,  // Precio en COP
        category: categories[6],
        description: "Billetera de cuero genuino de color marrón.",
        composition: "100% Cuero",
        sizes: ["Talla única"],
        colors: ["#8B4513"],
        isDiscount: false,
    },
    {
        id: 64,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Collar de Plata con Diamantes",
        price: 95000,  // Precio en COP
        category: categories[6],
        description: "Collar de plata esterlina con diamantes incrustados.",
        composition: "Plata Esterlina",
        sizes: ["Talla única"],
        colors: ["#C0C0C0"],
        isDiscount: true,
    },
    {
        id: 65,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Gafas de Sol Polarizadas",
        price: 55000,  // Precio en COP
        category: categories[6],
        description: "Gafas de sol polarizadas con montura de acetato.",
        composition: "Acetato",
        sizes: ["Talla única"],
        colors: ["#000000", "#808080"],
        isDiscount: true,
    },
    {
        id: 66,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Bufanda de Lana Gris",
        price: 28000,  // Precio en COP
        category: categories[6],
        description: "Bufanda de lana suave de color gris.",
        composition: "100% Lana",
        sizes: ["Talla única"],
        colors: ["#808080"],
        isDiscount: false,
    },
    {
        id: 67,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Cinturón de Cuero Negro",
        price: 32000,  // Precio en COP
        category: categories[6],
        description: "Cinturón de cuero genuino de color negro con hebilla metálica.",
        composition: "100% Cuero",
        sizes: ["Talla única"],
        colors: ["#000000"],
        isDiscount: false,
    },
    {
        id: 68,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Anillo de Plata con Zafiro",
        price: 45000,  // Precio en COP
        category: categories[6],
        description: "Anillo de plata esterlina con zafiro azul.",
        composition: "Plata Esterlina",
        sizes: ["Talla única"],
        colors: ["#0000FF"],
        isDiscount: false,
    },
    {
        id: 69,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Sombrero de Paja Natural",
        price: 38000,  // Precio en COP
        category: categories[6],
        description: "Sombrero de paja natural con banda de tela.",
        composition: "Paja y Tela",
        sizes: ["Talla única"],
        colors: ["#D2B48C"],
        isDiscount: false,
    },
    {
        id: 70,  // ID único
        mainImage: defaultImage,
        images: [defaultImage, defaultImage, defaultImage, defaultImage, defaultImage, defaultImage],
        name: "Corbata de Seda Negra",
        price: 29000,  // Precio en COP
        category: categories[6],
        description: "Corbata de seda de color negro para ocasiones formales.",
        composition: "100% Seda",
        sizes: ["Talla única"],
        colors: ["#000000"],
        isDiscount: true,
    },
];