import { useState } from "react";
import Header from "./component/Header";
import Product from './component/Product';
import { Button } from "react-bootstrap";
import Home from "./page/Homepage";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";


import "./App.css";

function App () {
  //  {
  //   setCount(count - 1);
  // }
  // let [count,setCount] = useState(0);
  return(
    <>
      <Header/>
      <Outlet />
    </>
  );
}
export default App;
/* <Header/>
      <h1>Counter</h1>
      <p>{count}</p>
      <button
      className="btn btn-primary"
      onClick={() => {
          setCount(count +1);
      }}
      >
       Increment
      </button>
       <Button variant ="info" onClick={decrement}>
        Decrement
       </Button>

      <p className="ptext">this is a counter application</p> */