import {
  Navbar
} from "./Components/Navbar/Navbar.jsx"

import Footer from "./Components/Footer/Footer.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";

function App() {
  return ( 
  <div >
    <Navbar / >
    <ItemListContainer greeting = {"Bienvenido a nuestra tienda, Tutor corrector :D!"} / >
    <ProductCard title = {"Producto 1"} price = {60} itsColor={true}/> 
    <ProductCard title = {"Producto 2"} price = {55} itsColor={false}/>   
    <Footer / >
    </div>
  );
}

export default App;