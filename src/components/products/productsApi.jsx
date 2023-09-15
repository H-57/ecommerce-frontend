

export async function  fetchProducts() {

    // TODO: change api urls
    const response= await(await fetch(`${process.env.HOST}/products`)).json()
    
    
    return await response
    
   } 
    

   export async function  fetchProductsBYFilter(filters) {

let filterString=``
for(let key in filters){
    filterString+=`${key}=${filters[key]}&`
}
    // TODO: change api urls
    const response= await(await fetch(`${process.env.HOST}/products?${filterString}`)).json()
    
    return await response
    
   } 
  

   export async function  fetchSingleProduct(id) {

    // TODO: change api urls
    const response= await(await fetch(`${process.env.HOST}/products/${id}`)).json()
    
    return await response
    
   } 