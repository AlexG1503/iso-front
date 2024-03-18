import CustomTextField from "../../../components/CustomTextField";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Camisetas", path: "category/camisetas" },
  { label: "Pantalones", path: "category/pantalones" },
  { label: "Hoodies", path: "category/hoodies" },
  { label: "Conjuntos", path: "category/conjuntos" },
  { label: "Gorras", path: "category/gorras" },
  { label: "Medias", path: "category/medias" },
  { label: "Acccesorios", path: "category/accesorios" },
  { label: "Descuentos", path: "category/descuentos" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const link = new URL(window.location.href);

  return (
    <div className="w-screen flex justify-between p-5 items-center gap-5">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between gap-5 items-center">
          <div className="flex flex-col w-full">
            <CustomTextField label="Buscar productos" defaultValue="" />
          </div>
          <div className="flex gap-5">
            <div className="rounded-full bg-secondary p-5 cursor-pointer" onClick={() => navigate('/cart')}>
              <ShoppingCartOutlinedIcon />
            </div>
            <div className="rounded-full bg-secondary p-5 cursor-pointer">
              <AccountCircleOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly">
          {categories.map((category, i) => (
            <div
              key={i}
              className="font-bold cursor-pointer hover:text-secondary transition-all"
              style={{
                textDecoration: link.pathname.includes(category.path)
                  ? "underline"
                  : "none",
              }}
              onClick={() => navigate(category.path)}
            >
              {category.label}
            </div>
          ))}
        </div>
      </div>
      <div className="w-40">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
