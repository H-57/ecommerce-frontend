

export async function  fetchProducts() {

    // TODO: change api urls
    const response= await(await fetch(`http://localhost:4000/products`)).json()
    
    return await response
    
   } 
    

   export async function  fetchProductsBYFilter(filters) {

let filterString=``
for(let key in filters){
    filterString+=`${key}=${filters[key]}&`
}
    // TODO: change api urls
    const response= await(await fetch(`http://localhost:4000/products?${filterString}`)).json()
    
    return await response
    
   } 
  