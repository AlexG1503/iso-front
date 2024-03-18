import { useEffect, useState } from "react";
import { products } from "../../../../mocks";
import { Select } from "@mui/material";
import CustomButton from "../../../../../components/CustomButton";
import CustomTextField from "../../../../../components/CustomTextField";
import { useNavigate } from "react-router-dom";

const SingleProductApp = () => {
  const navigate = useNavigate();
  const link = new URL(window.location.href);
  const productId = link.pathname.split("/")[2];
  const [product, setProduct] = useState(products[0]);
  const [productsFiltered, setProductsFiltered] = useState(products);

  useEffect(() => {
    const productFiltered: any = products.find(
      (product) => product.id === Number(productId)
    );
    setProduct(productFiltered);
    if (productsFiltered.length > 0) return;
    const randomProducts = products
      .sort(() => Math.random() - Math.random())
      .slice(0, 5);
    setProductsFiltered(randomProducts);
  }, [link]);

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="grid grid-cols-5">
        <div className="col-span-2 grid grid-cols-2 gap-5">
          <div className="">
            <img src={product.mainImage} alt={product.name} />
          </div>
          <div className="grid grid-cols-2 gap-5">
            {product.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={product.name}
                className="h-36 w-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="col-span-3 p-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-black">{product.name}</p>
            <p>{product.description}</p>
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col gap-2">
                <div className="font-semibold flex flex-col gap-2 uppercase">
                  Talla
                  <Select variant="outlined">
                    {product.sizes.map((size, i) => (
                      <option key={i} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                  <CustomButton label="Guia de tallas" />
                </div>
                <div className="font-semibold flex flex-col gap-2 uppercase">
                  Cantidad
                  <div className="flex gap-2">
                    <CustomTextField type="number" />
                  </div>
                  <CustomButton label="Comprar ahora" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-2xl font-black">Precio</p>
                  <p className="text-2xl">${product.price}</p>
                </div>
                <div>
                  <p className="text-2xl font-black">Composición</p>
                  <p className="text-xl">{product.composition}</p>
                </div>
                <div>
                  <p className="text-2xl font-black">Color</p>
                  <div className="flex gap-2">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="h-7 w-7 rounded-full border-2 border-terciary"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-black text-center">Otros también compraron...</div>
      <div className="grid grid-cols-5 gap-20">
        {productsFiltered.map((product, i) => {
          if (i > 4) return;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-5 cursor-pointer"
              onClick={() => {
                setProductsFiltered([]);
                navigate(`/product/${product.id}`);
              }}
            >
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
          );
        })}
      </div>
    </div>
  );
};

export default SingleProductApp;
