import React, { useEffect, useState } from "react";
import { productQuery } from "../helper";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import {
  Card,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AddToCart from "./AddToCart";
import QtyCounter from "./QtyCounter";
import { ProductDetails } from "../Contexts/ProductContext";
import { useNavigate } from "react-router-dom";
export default function Products() {
  const {products} = ProductDetails();


  const [gender, setGender] = useState(["Men", "Women"]);
  // const [pric]
  const [color, setColor] = useState(["Red", "Blue", "Green"]);
  const [price, setPrice] = useState(["0 - Rs250", "Rs251 - 450", "Rs450"]);

  const [category, setCategory] = useState(["Polo", "Hoodie", "Basic"]);

  const [addToCartClick, setAddToCartClick] = useState(false);

  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
   
  }, []);

  const filteronChange = (value, val, type) => {
    console.log(value, val, type);

    // get the filter array and remove if that value exists
    // and at last filter the value

    if (type === "gender") {
      if (value) {
        filter.push({
          gender: val,
        });
        setFilter(filter)
      } else {

        const unchecked = filter.filter(val =>val.gender!==val)
        
        setFilter(unchecked)
        // check value exist
      }
      // store in an array

      // const genderBasedFilter =  products.filter(val =>val.ty)
    }
    if (type === "color") {
      if (value) {
        filter.push({
          color: val,
        });
        setFilter(filter)
      } else {
        console.log("dhdh",val)

        const unchecked = filter.filter(val =>val.color!==val)
        console.log(unchecked)
        setFilter(unchecked)
        // check value exist
      }
    }
    if (type === "price") {
    }
    if (type === "gender") {
    }

    console.log(filter)
    // store the value and
  };

  const [addToCartId, setAddToCartId] = useState("");

  const [selectedProduct,setSelectedproduct] = useState({})

  const handleAddToCart = (e, id) => {


    // console.log(id);
    // setAddToCartClick(true);
    // setAddToCartId(id);

    // const currentProduct =  products.find(vals =>vals.id===id);
    // console.log(currentProduct);
    // setSelectedproduct(currentProduct)

    navigate(`/product/${id}`)


  };
  return (
    <>
      <section className="">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Card>
                <section className="">
                  <h3>Colour</h3>
                  <FormGroup>
                    {color.map((col) => {
                      return (
                        <>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={col}
                            onChange={(e) =>
                              filteronChange(
                                e.currentTarget.checked,
                                col,
                                "color"
                              )
                            }
                          />
                        </>
                      );
                    })}
                  </FormGroup>

                  <h3>Gender</h3>
                  <FormGroup>
                    {gender.map((col) => {
                      return (
                        <>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={col}
                            onChange={(e) =>
                              filteronChange(
                                e.currentTarget.checked,
                                col,
                                "gender"
                              )
                            }
                          />
                        </>
                      );
                    })}
                  </FormGroup>

                  <h3>Price</h3>
                  <FormGroup>
                    {price.map((col) => {
                      return (
                        <>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={col}
                            onChange={(e) =>
                              filteronChange(
                                e.currentTarget.checked,
                                col,
                                "price"
                              )
                            }
                          />
                        </>
                      );
                    })}
                  </FormGroup>

                  <h3>Type</h3>
                  <FormGroup>
                    {category.map((col) => {
                      return (
                        <>
                          <FormControlLabel
                            control={<Checkbox />}
                            label={col}
                            onChange={(e) =>
                              filteronChange(
                                e.currentTarget.checked,
                                col,
                                "type"
                              )
                            }
                          />
                        </>
                      );
                    })}
                  </FormGroup>
                </section>
              </Card>
            </Grid>

            <Grid item xs={12} md={9}>
              <h2>Search for products</h2>

              <Grid container spacing={2}>
                {products.map((product) => {
                  return (
                    <>
                      <Grid item xs={12} md={4}>
                        <Card key={product.id}>
                          <img
                            src={product.imageURL}
                            alt={product.name}
                            className="productImage"
                          />

                          <h3 className="productName">{product.name}</h3>

                          <div className="priceSection">
                            <h3>RS {product.price}</h3>

                            {/* {addToCartClick ? (
                              addToCartId === product.id ? (
                                <>
                                <QtyCounter vals= {selectedProduct}/>
                                </> */}
                              {/* // ) */}
                               {/* : ( */}
                                <Button
                                  variant="contained"
                                  style={{ backgroundColor: "#000" }}
                                  onClick={(e) =>
                                    handleAddToCart(e, product.id)
                                  }
                                >
                                  Add to cart
                                </Button>
                              {/* )
                            ) : (
                              <Button
                                variant="contained"
                                style={{ backgroundColor: "#000" }}
                                onClick={(e) => handleAddToCart(e, product.id)}
                              >
                                Add to cart
                              </Button>
                            )} */}
                          </div>
                        </Card>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
}
