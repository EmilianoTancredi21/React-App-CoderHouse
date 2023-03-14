// import "./Navbar.css"
//Modulo de CSS
import CartWidget  from "../CartWidget/CartWidget";
import estilos from "./Navbar.module.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={estilos.containerNavbar}>
      <Link to= "/">
      <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1677341497/Logo-Game-Shop-OK-01_pid6vp.png" width = "135px" alt="Logo-Empresa" />
      </Link>
      <ul className={estilos.containerList} id="list">
        <Link to="/category/PS2">PS2</Link>
        <Link to="/category/PS3">PS3</Link>
        <Link to="category/PS4">PS4</Link>
      </ul>
      < CartWidget />
    </div>

  );
};

export default Navbar
