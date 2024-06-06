import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import LoginPage from "./page/Loginpage";
 import Home from "./page/Homepage";
 import ProductDetails from "./page/ProductDetails";
 import CartProvider from './context/CartContext';
 import AuthProvider from './context/AuthContext';
 import CartPage from "./page/CartPage";
 
// const router = createBrowserRouter([
//   {
//     path:"/",
//     eleement:<App />,
//     children:[
//       {
//         path:"",
//         element:<Home />,
//       },
//       {
//         path:"login",
//         element: <LoginPage />
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<App />}>
    <Route path ="" element={<Home />}  />
    <Route path ="Login" element={<LoginPage />}  />
    <Route path ="product/:productid" element={<ProductDetails />}  />
    <Route path ="/cart" element={<CartPage />}  />
    </Route>

  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <CartProvider>
      <RouterProvider router={router}/>
      </CartProvider>
    {/* <RouterProvider router={router}/> */}
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
