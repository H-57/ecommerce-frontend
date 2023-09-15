export async function  getUser(data) {

    // TODO: change api urls
    const response=await fetch(`${process.env.HOST}/auth/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
    })
    
    
    return (await response.json())
  
    
   } 

export async function  setUser(data) {

    // TODO: change api urls
    const response=await fetch(`${process.env.HOST}/auth/signup`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
    })
    
    
    return (await response.json())
   } 
