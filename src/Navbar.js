import React from "react";
import { useGlobalContext } from "./context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
 const { amount } = useGlobalContext();
 return (
  <nav>
   <div className="nav-center">
    <h3>E-commerce cart</h3>
    <div className="nav-container">
     <ShoppingCartIcon />
     <div className="amount-container">
      <p className="total-amount">{amount}</p>
     </div>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
