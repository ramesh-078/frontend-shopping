import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Product({product}) {
  return (
    <Card style={{ width: '18rem' }} className="my-2 p-2">
      <Card.Img variant="top" src= {product.image} />
      <Card.Body>
        <Link to ={ `/product/${product._id}`} >
        <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
          </Card.Body>
    </Card>
  );
}

export default Product;