import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCategories } from './fetcher';
import ProductDetails from "./compoments/ProductDetails";
import Layout from "./compoments/layout";
import CheckOut from "./compoments/CheckOut";
import Category from "./compoments/category";
import Home from './compoments/Home'
import './App.css';
import Basket from './compoments/Basket';
import Orderconfirmation from './compoments/orderconfirmation';
import SearchResult from './compoments/searchResult';


function App() {
  const [categories, setcategories] = useState({ errorMessage: '', data: [] })
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories()
      setcategories(responseObject)
    }
    fetchData();

  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories}/>}>
            <Route index element={<Home/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route path="orderconfirmation" element={<Orderconfirmation/>}/>
            <Route path="checkout" element={<CheckOut />} />
            <Route path="categories/:categoryId" element={<Category />}/>
            <Route path="products/:productId" element={<ProductDetails />}/>
            <Route path="search" element={<SearchResult/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
