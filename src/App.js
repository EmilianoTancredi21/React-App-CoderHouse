import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
import ItemCount from "./Components/ItemCount/ItemCount.jsx";
import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis.jsx";
import Carrito from "./Components/Carrito/Carrito.jsx";



let stock = 5;
let initial = 1;

const onAdd = (cantidad) => {
  if (cantidad == 1){
    alert(`Se agrego al carrito ${cantidad} elemento`)
  }else
  alert (`Se agrego al carrito ${cantidad} elementos`)
}

function App() {
  return ( 
    <BrowserRouter>

    <Navbar / >
    
    <Routes>

    <Route path="/" element={ <ItemListContainer />} />  

    <Route path="/category/:categoryId" element={<ItemListContainer />} />

    <Route path="/carritoCompra" element={<Carrito />} />

    <Route path="/item/:id" element={<ItemDetailContainer />} />

    <Route path="*" element={<h1> Página no disponible :( </h1>} />
    
    </Routes>
    
    <Footer / >
    
    </BrowserRouter>
    
)}

export default App;