"use client"
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { fetchAllProducts } from "@/store/slices/products";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Pagination from "../pagination/Pagination"
import Filter  from"../filters/Filter"
export default function ProducList() {
const product = useSelector((state) => state.product.products);
const dispatch = useDispatch()

const [Page, setPage] = useState(1)
const totalPages=product/12

  useEffect(() => {

   dispatch(fetchAllProducts())


  }, [])






  if (product ==null) {
    return (<h1 className="text-4xl font-bold tracking-tight text-gray-900">loading ....</h1>)
  }
 
  const total=Array.from(product).length
 
let products=product.slice(( ((Page==1)?0:12) *(Page-((Page==1)?0:1))), (12*Page))

  
if (products ==null) {
  return (<h1 className="text-4xl font-bold tracking-tight text-gray-900">loading ....</h1>)
}



  return (
    <>
    <Filter >
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8 ">


        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="lg:h-72 group relative border-gray-500  border-2  p-3 shadow-2xl rounded-md">

              <div className=" aspect-h-1 aspect-w-1 w-full  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-4/5 border-2 overflow-hidden ">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full h- object-cover object-center  lg:h-full group-hover:scale-125 ease-in duration-300 "
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="h-2 text-gray-700">
                    <Link href={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {(product.title).slice(0, 12)}..
                    </Link>
                  </h3>
                  <div className="m-3">
                    <StarIcon className="h-5 m-2 text-yellow-400 inline">

                    </StarIcon>
                    <span>{Math.round(product.rating*10)/10}</span>
                  </div>

                </div>
                <div className="flex flex-col">
                  <p className="text-sm  font-medium text-gray-900">
                    ${Math.floor(product.price - (product.price * (product.discountPercentage / 100)))}
                  </p>
                  <p className="text-sm  font-medium text-gray-500 line-through">
                    ${product.price}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
    {Page}
    <Pagination Page={Page} setPage={setPage} totalPages={totalPages} totalProduct={total} />
    </Filter>
    </>
  );
}
