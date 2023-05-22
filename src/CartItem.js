/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "./context";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ id, img, title, price, amount }) => {
 const { remove, increase, decrease, toggleAmount } = useGlobalContext();
 return (
  <article className="cart-item">
   <img src={img} alt={title} />
   <div>
    <h4>{title}</h4>
    <h4 className="item-price">${price}</h4>
    <button className="remove-btn" onClick={() => remove(id)}>
     <DeleteIcon />
    </button>
   </div>
   <div>
    <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
     <ExpandLessIcon></ExpandLessIcon>
    </button>
    <p className="amount">{amount}</p>
    <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
     <ExpandMoreIcon></ExpandMoreIcon>
    </button>
   </div>
  </article>
 );
};

export default CartItem;
