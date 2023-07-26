
import axios from"axios"

export  function  fetchProducts() {

    
    const response=  axios.get(`https://dummyjson.com/products`).then((result) => {
   console.log(result.data)
    });
    return response.data
    
   } 
    

  