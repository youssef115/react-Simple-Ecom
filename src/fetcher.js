import axios from 'axios';
const Base_url="http://localhost:3001"
//fetch data with fetch 
// export const fetcher=async(url)=>{
//      const response=await fetch(Base_url+url)
//      const responseData=await response.json()
//      return responseData;   
// }
//fetch data with axios 
const fetcher=async(url)=>{
   let responseObject={errorMessage:"",data:[]}
   try{
      
      responseObject.errorMessage=""
      responseObject.data=await axios.get(Base_url+url)
      .then(response=>{
         if(response.statusText!=="OK"){
            throw new Error(`http error ${response.status}`)
         }
         console.log(response);
         return response.data
      }
         )
   
   }catch(err){
         responseObject.errorMessage=err.message;
   }
   return responseObject
}

export const getCategories=()=>{
   return fetcher("/categories")
}
export const getProducts=id=>{
   return fetcher("/products?catId="+id)
}
export const getProductById=id=>{
   return fetcher("/products/"+id)
}
export const getProductsByQuery=query=>{
   return fetcher('/products?q='+query)
}