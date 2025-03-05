import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState  } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux'; 
import { setUserDetails } from './store/userSlice';

function App() {
const dispatch= useDispatch();
const[cartProductCount, setCartProductCount]= useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch("http://localhost:4000/api/user-details"
, {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    });
    const dataApi = await dataResponse.json();
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }

    //console.log("User Details:", dataApi);
  };

const fetchUserAddtoCart= async()=>{
  const response= await fetch(SummaryApi.addToCartProductCount.url,{
    method: SummaryApi.addToCartProductCount.method,
    credentials: 'include'
  }

  )

  const dataCart= await response.json()
  console.log("daatCart", dataCart)
  setCartProductCount(dataCart?.data?.count)
}

  useEffect(() => {
    fetchUserDetails();
  }, []); // Added dependency array to avoid infinite loop

  fetchUserAddtoCart();

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails,
      cartProductCount,
      fetchUserAddtoCart
    }} //user detail fetch
    >
    <ToastContainer />
      <Header />
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </main>
      <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
