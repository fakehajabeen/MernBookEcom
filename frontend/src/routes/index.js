import { createBrowserRouter } from 'react-router-dom';
 import App from '../App';
import Home  from '../pages/Home';
import Login from  '../pages/Login';
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProduct from '../pages/AllProduct';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct';
import Payment from '../pages/Payment';
import AllOrders from '../pages/AllOrders';

 const router = createBrowserRouter(
[   {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"login",
                element:<Login/>,
            },
            {
                path:"sign-up",
                element:<SignUp/>,
            },
            {
                path:"product-category/:categoryName",
                element:<CategoryProduct/>,
            },
            {
                path:"product/:id",
                element:<ProductDetails/>,
            },
            
            {
                path:"cart",
                element:<Cart/>,
            },
            {
                path:"search",
                element:<SearchProduct/>,
            },
            {
                path:"payment",
                element:<Payment/>,
            },
            {
                path:"admin-panel",
                element:<AdminPanel/>,
                children:[
                    {
                        path: "all-users",
                        element:<AllUsers/>,
                    },
                    {
                        path: "all-products",
                        element: <AllProduct/>
                    },
                    {
                        path: "get-order",
                        element: <AllOrders/>
                    }

                ]
            },
        ]
    },
 ])
 export default router;