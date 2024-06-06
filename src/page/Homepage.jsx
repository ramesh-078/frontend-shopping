import { MdDescription } from "react-icons/md";
import Product from "../component/Product";
import{Row,Col,Container} from "react-bootstrap";
import productList from "../data/products";
import axios from "axios";
import { useEffect,useState } from "react";
import{useAuth} from '../hooks/useAuth';


// const productlist = [
//     {
//         title:"csk logo",
//         description:"this is an",
//         image:"/images/csk.png"
//     },
//     {
//         title:"csk logo",
//         description:"this is an",
//         image:"/images/csk.png"
//     },
//     {
//         title:"csk logo",
//         description:"this is an",
//         image:"/images/csk.png"
//     },
//     {
//         title:"csk logo",
//         description:"this is an",
//         image:"/images/csk.png"
//     },
// ]

function Home(){
  const [data, setData]= useState([]);
  useEffect(() =>{
    axios 
    // .get("http://localhost:3000/api/products")
        .get("/api/products")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log("Err",err));
    
  },[]);
    return(
        <Container>
               <Row>
      {data.map((p) => (
        <Col key={p._id}> 
      <Product product ={p}/>
      </Col>
      ))}
      </Row>
      </Container>
    );
}
export default Home;