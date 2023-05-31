
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Mission from './views/about/mission';
import PoliciesAndStrategies from './views/Resources/policies-and-strategies'
import { ContactUs } from './views/contact-us/contact-us';
// import Header from './views/navigations/header';
// import Test from './views/navigations/test';
// import Home from './views/home';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: '/about/mission',
                element: <Mission/>
            },
            {
                path: '/resources/policies-and-strategies',
                element: <PoliciesAndStrategies/>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            }
        //add other routes
        ]
       
    }
]);

export default router;


