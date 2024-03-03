import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => getProducts(json));
  });

  const addToCart = (product) => {
    dispatch(add(product));
  };

  console.log(products);
  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "130px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(product)}>
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
