import React from "react";

import styles from "./Item.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 700,
        backgroundColor: "black",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        sx={{ height: 500, backgroundColor: "whitesmoke", objectFit: "cover" }}
        image={element.imagen}
        title={element.titulo}
      />
      <CardContent sx={{ height: 130 }}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.titulo}
        </Typography>
        <Typography display={"flex"} justifyContent={"center"} fontSize={20} variant="body">${element.precio} .-</Typography> 
      </CardContent>
      <CardActions>
        <Link to={`/item/${element.id}`}>
          <Button className="detalles" size="large" variant="contained" color="primary" sx={{m: 1, mx: 12.5}}>
            DETALLES
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
