

import ProductList from "../../components/home/ProductList"
import Filter from "../../components/filters/Filter"
import Pagination from '../../components/pagination/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// const products=;


export default function Home() {
 
  
  return (
    <>
<Filter >
  <ProductList />
  <Pagination />
    </Filter>

    </>
  )
}