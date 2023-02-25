// import "./Navbar.css"
//Modulo de CSS
import CartWidget  from "../CartWidget/CartWidget";
import estilos from "./Navbar.module.css"


export const Navbar = () => {
  return (
    <div className={estilos.containerNavbar}>
      <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1677341497/Logo-Game-Shop-OK-01_pid6vp.png" width = "135px" alt="Logo-Empresa" />
      <ul className={estilos.containerList}>
        <li>PS2</li>
        <li>PS3</li>
        <li>PS4</li>
        <li>PS5</li>
      </ul>
      < CartWidget />
    </div>

  );
};

export default Navbar
