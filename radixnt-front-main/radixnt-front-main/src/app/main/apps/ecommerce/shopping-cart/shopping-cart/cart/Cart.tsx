import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../../../../components/CustomButton";
import { products } from "../../../../../../mocks";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = (props: any) => {
  const sizes = ["S", "M", "L", "XL"];

  const numberOfProducts = 5;
  const cartProducts = Array.from(Array(numberOfProducts).keys()).map(() => ({
    idProduct: Math.floor(Math.random() * products.length) + 1,
    sizeSelected: sizes[Math.floor(Math.random() * sizes.length)],
  }));
  const { setStep } = props;

  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col gap-32">
      <div className="flex flex-col gap-5">
        <div className="font-bold uppercase underline">
          Tu carrito de compras
        </div>
        <div className="grid grid-cols-8 gap-10">
          <div className="font-bold col-span-4">Productos</div>
          <div className="font-bold uppercase text-center">Precio</div>
          <div className="font-bold uppercase text-center">Cantidad</div>
          <div className="font-bold uppercase text-center">Total</div>
          <div></div>
          <div className="flex flex-col gap-10 col-span-8">
            {cartProducts.map((product, i) => {
              const productsSelected = products.filter(
                (productsToBuy) =>
                  productsToBuy.id === product.idProduct &&
                  productsToBuy.sizes.includes(product.sizeSelected)
              );
              return (
                <div className="grid grid-cols-8 items-center">
                  <div key={i} className="flex gap-5 col-span-4">
                    <div className="h-20 w-20">
                      <img
                        src={productsSelected[0]?.mainImage}
                        alt={productsSelected[0]?.name}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="font">{productsSelected[0]?.name}</div>
                      <div className="font-bold">
                        Talla:{" "}
                        <span className="font-normal">
                          {product.sizeSelected}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    ${productsSelected[0]?.price}
                  </div>
                  <div className="text-center">{productsSelected.length}</div>
                  <div className="text-center">
                    ${productsSelected[0]?.price * productsSelected.length || 0}
                  </div>
                  <div
                    className="flex justify-center"
                    // onClick={() => {
                    //   const newCartProducts = cartProducts.filter(
                    //     (cartProduct) =>
                    //       cartProduct.idProduct !== product.idProduct
                    //   );
                    // }}
                  >
                    <DeleteIcon />
                  </div>
                  {i === cartProducts.length - 1 && (
                    <div className="col-start-5 col-span-4 grid grid-cols-4 border-2 border-terciary rounded-full p-7 text-center">
                      <div className="font-bold uppercase">Total</div>
                      <div className="font-bold uppercase col-start-3">
                        ${productsSelected[0]?.price * productsSelected.length}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-end">
        <div>
          <CustomButton
            label="Seguir comprando"
            onClick={() => navigate("/category")}
          />
        </div>
        <div>
          <CustomButton label="Comprar ahora" onClick={() => setStep(2)} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
