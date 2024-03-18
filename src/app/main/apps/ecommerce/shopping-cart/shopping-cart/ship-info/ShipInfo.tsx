import CustomButton from "../../../../../../../components/CustomButton";
import CustomTextField from "../../../../../../../components/CustomTextField";
import Logo from "../../../../../../../components/Logo";

import { products } from "../../../../../../mocks";

const ShipInfo = (props: any) => {
  const { setStep } = props;

  const sizes = ["S", "M", "L", "XL"];

  const numberOfProducts = 5;
  const cartProducts = Array.from(Array(numberOfProducts).keys()).map(() => ({
    idProduct: Math.floor(Math.random() * products.length) + 1,
    sizeSelected: sizes[Math.floor(Math.random() * sizes.length)],
  }));

  return (
    <div className="grid grid-cols-2 p-10 gap-10">
      <div className="grid grid-cols-4 gap-5 items-end">
        <div className="col-span-3 flex flex-col gap-5">
          <Logo />
          <div className="font-bold uppercase underline">
            Tu carrito de compras
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-xl col-span-2">Contacto</div>
            <CustomTextField label="Correo electrónico" />
            <CustomTextField label="Teléfono" />
            <div className="text-xl col-span-2">Dirección de envío</div>
            <CustomTextField label="Nombre" />
            <CustomTextField label="Apellido" />
            <div className="col-span-2">
              <CustomTextField label="Cédula" />
            </div>
            <CustomTextField label="Departamento" />
            <CustomTextField label="Ciudad" />
            <div className="col-span-2">
              <CustomTextField label="Dirección" />
            </div>
          </div>
          <div className="text-xl font-black col-span-2">Comentarios</div>
          <div className="col-span-2">
            <textarea
              className="w-full h-40 border-2 border-terciary rounded-3xl bg-transparent p-3"
              placeholder="Ingresa tu comentario"
            ></textarea>
          </div>
          <div className="text-xl font-black col-span-2">Envío</div>
          <div className="col-span-2 border-2 border-terciary flex justify-between rounded-3xl p-3 items-center">
            <div className="flex gap-5 items-center">
              <div className="">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-full bg-gray-400"
                />
              </div>
              Entrega Estándar Nacional (4 a 6 días hábiles ciudades
              principales. más de 7 días hábiles otros municipios)
            </div>
            <div className="font-bold">$10.000</div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <CustomButton
            label="Volver al carrito"
            onClick={() => setStep((step: number) => step - 1)}
          />
          <CustomButton
            label="Continuar con el pago"
            onClick={() => setStep((step: number) => step + 1)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="rounded-3xl border-2 border-terciary p-5">
          <div className="text-xl mb-5">Tu Compra</div>
          <div className="flex flex-col gap-5">
            {cartProducts.map((product) => {
              const productsSelected = products.filter(
                (productsToBuy) =>
                  productsToBuy.id === product.idProduct &&
                  productsToBuy.sizes.includes(product.sizeSelected)
              );
              return (
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2">
                      <img
                        src={productsSelected[0]?.mainImage}
                        alt={productsSelected[0]?.name}
                        className="h-20 w-20"
                      />
                      <div className="text-center">Eliminar</div>
                    </div>
                    <div>{productsSelected[0]?.name}</div>
                  </div>
                  <div className="font-bold text-center">
                    ${productsSelected[0]?.price * productsSelected.length}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-full">
            <CustomTextField label="Código promocional" />
          </div>
          <CustomButton label="Validar" />
        </div>
        <div className="rounded-3xl border-2 border-terciary p-5 flex flex-col gap-5 font-semibold">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>$0</div>
          </div>
          <div className="flex justify-between">
            <div>Envío</div>
            <div>$20.000</div>
          </div>
          <div className="flex justify-between border-t-2 border-terciary pt-5 text-xl uppercase">
            <div>Total</div>
            <div>$0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipInfo;
