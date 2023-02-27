import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

export default function QtyCounter(values) {
  console.log(values);
  const [qty, setQty] = useState(1);
  const [qtyExceed, setQtyExceed] = useState(false);

  const incNum = (e) => {
    console.log(values.vals.quantity);

    const val = qty + 1;
    if (val > values.vals.quantity) {
      setQtyExceed(true);
    } else {
      setQtyExceed(false);
      setQty(val);

      const currentCart = window.sessionStorage.getItem("cartProduct")
      console.log(currentCart)
      // update in the session storage and take values from the 
    }
  };

  const decNum = (e) => {

    if(qty>1)
    {
      const val =  qty-1;
      setQty(val)
    }
  };
  return (
    <>
      {/* <div className="input-group">
        <div className="input-group-prepend">
          <Button onClick={incNum} variant="contained">-</Button>
        </div>
        <input type="text" className="form-control" defaultValue={qty}/>
        <div className="input-group-prepend">
          <Button variant="contained">+</Button>
        </div>
      </div> */}

      <ButtonGroup
        variant="contained"
        aria-label="outlined  button group"
        style={{ backgroundColor: "#000" }}
      >
        <Button onClick={incNum}>+</Button>
        <Button>{qty}</Button>
        <Button onClick={decNum}>-</Button>
      </ButtonGroup>


      {qtyExceed ? <p>You are Exceeding the Available Quantity</p> : ""}
    </>
  );
}
