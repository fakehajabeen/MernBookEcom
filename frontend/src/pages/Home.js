import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
   <div>
     <div>
<CategoryList/>


    </div>
 <div>
  
 </div>
 <BannerProduct/>
 <HorizontalCardProduct category={"Science and Technology"} heading={"Science and Technology"}/>
      <HorizontalCardProduct category={"Graphic Novel"} heading={"Graphic Novel"}/>
      
      
      <VerticalCardProduct  category={"Historic Fiction"} heading={"Historic Fiction"}/>
      <VerticalCardProduct  category={"Business and Economics"} heading={"Business and Economics"}/>

 <VerticalCardProduct  category={"Personal Developmnet"} heading={"Personal Developmnet"}/>
 <VerticalCardProduct  category={"Horror"} heading={"Horror"}/>
      <VerticalCardProduct  category={"Romance"} heading={"Romance"}/>
      <VerticalCardProduct  category={"Mystry and Thriller"} heading={"Mystry and Thriller"}/>

   </div>

  )
}

export default Home