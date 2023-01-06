import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher'
import styled from "styled-components";

import image3 from '../assets/10205751.jfif'
import image2 from '../assets/10205942.jfif'
import image4 from '../assets/10212871.jfif'
import image5 from '../assets/10213409.jfif'
import image1 from '../assets/10213776.jfif'
import image7 from '../assets/10221968.jfif'
import image6 from '../assets/M10213562_001.jfif'
import image10 from '../assets/M10213562_008.jfif'
import image8 from '../assets/M10222398.jfif'
import image9 from '../assets/M10226866.jfif'



function ProductDetails() {
  const images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]
  const [product,setProducts]=useState({errorMessage:'',data:{}})
  const {productId}=useParams()
  useEffect(()=>{
    const fetchData=async ()=>{
      
      const responseObject=await getProductById(productId)
      setProducts(responseObject)
    }
    fetchData()
  },[productId])
  const createMarkup=()=>{
    return {__html:product.data?.description}
  }
  return (
    <>
    <div className='container'>
   <ProductInfoArticle>
    <ProductTitle>
      {product.data.title}
    </ProductTitle>
      
    <figure>
       {/* <img src={''} alt={product.data.title} width={300} height={266}/> */}
       <ProductImageContainer>
          <ProductImage src={images[productId-1]} alt={product.data.title} width={300} height={266}/>
        </ProductImageContainer>
    </figure>

    <aside>
        <ProductInfo>
            <ProductInfoHeader>Dimensions</ProductInfoHeader>
            <label>{product.data.specs?.dimensions}</label>
        </ProductInfo>
        {product.data.specs?.capacity && 
            <ProductInfo>
            <ProductInfoHeader>Capacity</ProductInfoHeader>
            <label>{product.data.specs?.capacity}</label>
        </ProductInfo>
        }

        <ProductInfo>
            <ProductInfoHeader>Features</ProductInfoHeader>
            <ul>
                {product.data.features?.map((f,i)=><ProductInfoListItem key={i}>{f}</ProductInfoListItem>)}
            </ul>
        </ProductInfo>
    </aside>

    <aside className='category-product-finance'>
        <ProductInfoFinancePrice>
            {product.data.price} DT
        </ProductInfoFinancePrice>
        <ProductInfoStock>
            <ProductInfoStockLabel> Stock level :{product.data.stock} </ProductInfoStockLabel>
            
        </ProductInfoStock>
        <ProductInfoAction>
            <ProductInfoActionButton>Add to Basket</ProductInfoActionButton>
        </ProductInfoAction>

    </aside>
          <ProductInfoDescription dangerouslySetInnerHTML={createMarkup()}>
            {/* {product.data?.description} */}
          </ProductInfoDescription>
   </ProductInfoArticle>
   </div>
    </>
  )
}

export default ProductDetails

const ProductInfoArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    column-gap: 20px;
`;

const ProductInfoDescription = styled.div`
    grid-column: 1 / span 3;
`;

const ProductTitle = styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
`;

const ProductImageContainer = styled.div`
    padding: 10px;
    width:80%;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
    color: darkslategray;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoStock = styled.div`
    padding-left: 10px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: lightgrey;
    height: 20%;
    width: 30%;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductInfoAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;

const ProductInfoFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`;