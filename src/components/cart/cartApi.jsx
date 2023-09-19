export async function  getCart() {

    const response=await fetch(`${process.env.HOST}/cart`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`bearer ${localStorage.getItem('uid')}`
          },
          
    })
    
    
    return (await response.json())
  
    
   } 

export async function  setCart(data) {

    // TODO: change api urls
    const response=await fetch(`${process.env.HOST}/cart`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`bearer ${localStorage.getItem('uid')}`
          },
          body: JSON.stringify(data),
    })
    
    
    return (await response.json())
   } 
