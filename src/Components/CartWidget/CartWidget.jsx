import { GiGamepadCross } from "react-icons/gi"
import styles from "./CartWidget.module.css"

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
        <GiGamepadCross color="aliceblue" size={50} />
    </div>
  )
}

export default CartWidget