import React from 'react'
import { getProductsByQuery } from '../fetcher';
import { useSearchParams } from 'react-router-dom';
import CategoryProduct from './Category_product';
function SearchResult() {
  const [products,setProducts]=React.useState({errorMessage:"",data:[]})
  const [searchParams]=useSearchParams();
  //the product is the one wich we call it in the search component
  const query=searchParams.get("s")

  React.useEffect(()=>{
    const fetchData=async ()=>{
      const responseObject=await getProductsByQuery(query)
      setProducts(responseObject)
    };
    fetchData()
  },[query])

  const renderProducts=()=>{
    return products.data.map((p)=>(
      <CategoryProduct key={p.id} {...p}>
        {p.title}
      </CategoryProduct>  
    ))
  }
  return (
    <div>
      {products.errorMessage && <div>Error:{products.errorMessage}</div>}
      {products.data.length>0? renderProducts():<lable>no result for the product you search for sir </lable>}
    </div>
  )
}

export default SearchResult