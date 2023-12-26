import { useContext, useEffect } from "react";

import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./home.scss";

import { Context } from "../../utils/context";
import { fetchData } from "../../utils/api";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchData("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
    const res = fetchData("/api/categories?populate=*");
    setCategories(res);
  };
  // console.log(categories);

  const getProducts = () => {
    fetchData("/api/products?populate=*").then((res) => setProducts(res));
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category ory categories={categories} setCategories={setCategories} />
          <Products
            headingText="Popular Products"
            products={products}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
