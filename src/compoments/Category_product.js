import React,{useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { CartContext } from '../context/cartContext';

function CategoryProduct({id,title,image,specs,features,price,stock}) {
    const navigate=useNavigate()
    const cartContext=useContext(CartContext)
    const {addProduct}=cartContext;
  return (
    <div className='container'>
   <ProductInfoArticle>
    <ProductTitle >
       <Link className='link' to={`/products/${id}`}>{title}</Link> 
    </ProductTitle>

    <figure>
        <ProductImageContainer>
        <ProductImage src={require(`../assets/${image}`)} alt={title} width={300} height={266}/>
        </ProductImageContainer>
    </figure>

    <aside>
        <ProductInfo >
            <ProductInfoHeader>Dimensions</ProductInfoHeader>
            <label>{specs.dimensions}</label>
        </ProductInfo>
        {specs.capacity && 
        <ProductInfo>
            <ProductInfoHeader>Capacity</ProductInfoHeader>
            <label>{specs.capacity}</label>
        </ProductInfo>
        }

        <ProductInfo >
            <ProductInfoHeader>Features</ProductInfoHeader>
            <ul>
                {features?.map((f,i)=><ProductInfoListItem key={i}>{f}</ProductInfoListItem>)}
            </ul>
        </ProductInfo>
    </aside>

    <aside className='category-product-finance'>
        <ProductInfoFinancePrice >
            {price} DT
        </ProductInfoFinancePrice>
        <ProductInfoStock>
            <ProductInfoStockLabel> Stock level :{stock} </ProductInfoStockLabel>
        </ProductInfoStock>
        <ProductInfoAction>
           
              <ProductInfoActionButton className='btn' onClick={()=>navigate(`/products/${id}`)}>view Product</ProductInfoActionButton>
            
            <ProductInfoActionButton onClick={()=>addProduct({id,title,price})}>Add to Basket</ProductInfoActionButton>
        </ProductInfoAction>

    </aside>
   </ProductInfoArticle>
   </div>
  )
}

export default CategoryProduct



const ProductInfoArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    column-gap: 20px;
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
    width: 80%;
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
    color:rgb(255, 80, 86);
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`;