import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { products} from "../mockProducts"
import styles from "./ItemListContainer.module.css"


const ItemListContainer = () => {
  
  const { categoryId } = useParams();


  const [items, setItems] = useState([])


  const productosFiltrados = products.filter(
    (element) => element.plataforma === categoryId
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryId ? productosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  console.log(items)
 
  return (
    <div>

      <ItemList items ={items} />
      
    </div>
  )
}

export default ItemListContainer