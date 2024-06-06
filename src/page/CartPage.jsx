import React from "react";
import { useCart } from "../hooks/useCart";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Badge,
} from "react-bootstrap";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (itemId) => {
    console.log(itemId);
    dispatch({
      type:"DELETE",
      payload:itemId,
    });
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty <= 0) return;
    dispatch({
      type: "UPDATE",
      payload: { _id: itemId, qty: newQty },
    });
  };

  const handleClearCart = () => {
    dispatch({
      type:"CLEAR",
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item._id}>
              <Row>
                <Col md={2}>
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fluid rounded />
                  ) : (
                    <div>No image</div>
                  )}
                </Col>
                <Col md={4}>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </Col>
                <Col md={3}>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleUpdateQuantity(item._id, item.qty - 1)}
                  >
                    -
                  </Button>
                  <Badge pill variant="light" className="mx-2">
                    {item.qty}
                  </Badge>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => handleUpdateQuantity(item._id, item.qty + 1)}
                  >
                    +
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <Row>
              <Col md={6}>
                <h4>Total: ${total.toFixed(2)}</h4>
              </Col>
              <Col md={6} className="text-right">
                <Button variant="warning" onClick={handleClearCart}>
                  Clear Cart
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Container>
  );
};

export default CartPage;
