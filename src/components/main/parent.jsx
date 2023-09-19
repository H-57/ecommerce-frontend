"use client"

import { useEffect } from "react"
import {getCartAsync}from "../cart/cartSlice"
import { useDispatch,useSelector } from "react-redux"


function parent({children}) {
    const dispatch=useDispatch()
    const authCheck=useSelector((state)=>state.auth.token)
    useEffect(()=>{
  
      dispatch(getCartAsync())
    },[authCheck])


  return (
    <>

    {children}
    </>
  )
}

export default parent