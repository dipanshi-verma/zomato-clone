import React from 'react'
import Card from './Card'

 const Products = () => {
  return (
    <>
     <div>
        <h1 className='text-blue-500 text-3xl text-center'>Products List</h1>
    </div>
    <div className='flex flex-column justify-items-center gap-6 my-10 mx-6'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
   
    </>
  )
}
 export default Products;