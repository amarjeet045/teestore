import React, { useEffect, useState } from "react";
import { productQuery } from "../helper";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productFunction = async () => {
      const productDetails = await productQuery();
      console.log(productDetails);
      setProducts(productDetails);
    };
    productFunction()
      .then()
      .catch((err) => console.error(err));
  }, []);
  return (


    <>

    {products.map(product =>{
        return(
            <>

            
            </>
        )
    })}
    </>
  );
}
