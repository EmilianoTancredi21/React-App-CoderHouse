import { GiGamepadCross } from "react-icons/gi"
import styles from "./CartWidget.module.css"

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to= "/carritoCompra">
    <div>
      <span>0</span>
        <GiGamepadCross color="aliceblue" size={50} />
    </div>
    </Link>
  )
}

export default CartWidget