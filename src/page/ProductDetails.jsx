import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Image, ListGroup, Badge, Button } from "react-bootstrap";
import Ratings from "../component/Ratings";
import {useCart} from "../hooks/useCart";

const ProductDetails = () => {
  const {cart,dispatch} =useCart();
  console.log(cart);
  const [product, setProduct] = useState({});
  const { productid } = useParams();
  useEffect(() => {
    axios
      .get("/api/products?productId=" + productid)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err.message));
  }, []);
   const addToCart =() => {
    dispatch({
      type:"ADD" ,
      payload: {
        _id:product._id,
        image:product.image,
        name:product.name,
        price: product.price,
      },
    });
   };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={product.image} />
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>{product.name}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
              <ListGroup.Item>
                {product.category}-{product.brand} -${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                {product.countInStock > 0 ? (
                  <Badge bg="success">In Stock</Badge>
                ) : (
                  <Badge bg="danger">Out of Stock</Badge>
                )}
                <Ratings rating={product.rating}/>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button onClick = {addToCart} disabled={product.countInStock ==0}>Add to Cart</Button>
                </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;