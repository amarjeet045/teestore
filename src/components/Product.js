import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductDetails } from "../Contexts/ProductContext";
export default function Product() {
    const {products} = ProductDetails();

    const [currentProduct,setCurrentProduct] = useState([])

    const params = useParams()
    console.log(params.id)
    useEffect(() =>{
        const productFilter =  products.filter(val=>val.id===params.id);
        console.log(productFilter)
        setCurrentProduct(productFilter)


    },[])
  return (
    <>
    {currentProduct.map(val =>{
        return(
// just add the mdc grid 
// 
            <>
            <Card>
            <img src={val.imageURL} alt="product" />
            </Card>
            
            </>
        )
    })}
    </>
  )
}
