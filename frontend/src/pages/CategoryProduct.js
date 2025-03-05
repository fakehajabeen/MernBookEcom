import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
  const params= useParams()
  //{params?.categoryName}
  return (
 
    <div className='container mx-auto p-4'>
      {/* desktop version */}
      <div className='hidden lg:block lg:grid grid-cols-[200px,1fr]'> 
      
      {/* leftside */}

<div className='bg-white p-2 min-h-[calc(100vh-120px)]'>
  <div >
    <h3 className='text-lg uppercase font-medium text-slate-500'>Sort by</h3>
  </div>

</div>
{/* product */}

      <div>
        displayproduct
      </div>
      </div> 
     
      
      </div>
  )
 
}

export default CategoryProduct