import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const getApiData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>REDUX HOME COMPONENT</h1>

      {products.map((item) => {
        return (
          <div
            style={{
              display: "inline-block",
              width: "23%",
              height: "500px",
              border: "3px solid gold",
              margin: "10px",
              borderRadius: "15px",
              backgroundColor: "teal",
              
            }}
          >
            <h1>{item.title.slice(0, 15)}</h1>
            <img
              src={item.image}
              alt=""
              width="250px"
              height="300px"
              border="3px solid black"
              
            />
            <h5>{item.description.slice(0, 50)}</h5>
            <h2>${item.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
