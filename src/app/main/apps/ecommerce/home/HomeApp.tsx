import { useState, useEffect } from "react";
import Carousel from "../../../../../components/Carousel";
import CustomButton from "../../../../../components/CustomButton";
import { products } from "../../../../mocks";

const HomeApp = () => {
  const [productsFiltered, setProductsFiltered] = useState(products);

  useEffect(() => {
    const randomProducts = products.sort(() => Math.random() - Math.random()).slice(0, 5);
    setProductsFiltered(randomProducts);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <Carousel />
      <div className="my-5 font-bold text-center text-xl">Camisetas</div>
      <div className="grid grid-cols-5 gap-16 px-10">
        {productsFiltered.map((product, i) => (
          <div key={i} className="flex flex-col items-center gap-5">
            <div className="h-52 w-full object-cover">
              <img src={product.mainImage} alt={product.name} className="h-full" />
            </div>
            <div>
              <div className="">{product.name}</div>
              <div className="font-bold">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <CustomButton label="Mostrar más" />
      </div>
    </div>
  );
};

export default HomeApp;
