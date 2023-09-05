

export async function  fetchProducts() {

    // TODO: change api urls
    const response= await(await fetch(`http://192.168.43.169:4000/products`)).json()
    
    return await response
    
   } 
    

   export async function  fetchProductsBYFilter(filters) {

let filterString=``
for(let key in filters){
    filterString+=`${key}=${filters[key]}&`
}
    // TODO: change api urls
    const response= await(await fetch(`http://192.168.43.169:4000/products?${filterString}`)).json()
    
    return await response
    
   } 
  

   export async function  fetchSingleProduct(id) {

    // TODO: change api urls
    const response= await(await fetch(`http://192.168.43.169:4000/products/${id}`)).json()
    
    return await response
    
   } 