import { useState, useEffect } from "react";
import CustomButton from "../../../../../components/CustomButton";
import { products } from "../../../../mocks";
import { useNavigate } from "react-router-dom";

const ProductsApp = () => {
  const navigate = useNavigate();

  const link = new URL(window.location.href);
  const category = link.pathname.split("/")[2];
  const [productsFiltered, setProductsFiltered] = useState(products);

  useEffect(() => {
    if (!category) {
      setProductsFiltered(products);
    } else if (category.toUpperCase().includes("Descuentos".toUpperCase())) {
      setProductsFiltered(
        products.filter((product) => product.isDiscount === true)
      );
    } else {
      setProductsFiltered(
        products.filter((product) =>
          category.toUpperCase().includes(product.category.toUpperCase())
        )
      );
    }
  }, [link]);

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="my-5 font-bold text-xl uppercase underline">
        {category}
      </div>
      <div className="grid grid-cols-4 gap-20">
        {productsFiltered.map((product, i) => (
          <div key={i} className="flex flex-col items-center gap-5 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="h-52 w-full object-cover">
              <img
                src={product.mainImage}
                alt={product.name}
                className="h-full"
              />
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

export default ProductsApp;
