import React from "react";

import { useParams } from "react-router-dom";

import { products } from "../mockProducts";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{
    console.log(`se agrego al carrito ${cantidad} productos `)
  }

  return (
    <div>
      <h1>{productSelected.titulo}</h1>
      <img src={productSelected.imagen} alt="" width={500} />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;