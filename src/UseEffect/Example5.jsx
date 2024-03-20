import React, { useEffect, useState } from "react";
import axios from "axios";

function Example5() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  const fetchData = async (url) => {
    let result = await axios.get(url);
    console.log(result);
    setProduct(result.data.products);
  };
  return (
    <>
      <h1 className="head" align="center">
        Fetch dummy json url "product"
      </h1>
      <hr />
      {product.map((e) => {
        return (
          <div className="card col-12 col-md-3 col-sm-6 d-flex justify-content-center align-items-center m-2">
            <img
              src={e.images[0]}
              classname="card-img-top"
              alt="..."
              height="200px"
              width="150px"
            />
            <div className="card-body">
              <h4 className="card-title">{e.brand}</h4>
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.description}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary m-2">ADD TO CART</button>
              <button className="btn btn-secondary m-2">BUY NOW</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Example5;
