import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
const dispatch=useDispatch()
  const products = useSelector((state) => state.cart);
  const removeToCart=(id)=>{
     dispatch(remove(id))
  }

  const cards = products.map((product) => (
    <div
      className="col-md-12"
      key={product.id}
      style={{ marginBottom: "10px" }}
    >
      <Card key={product.id} className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "130px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            remove item
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
