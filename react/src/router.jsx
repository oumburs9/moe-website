
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Mission from './views/about/mission-and-vision';
import PoliciesAndStrategies from './views/Resources/policies-and-strategies'
import Home from './views/home';
import { ContactUs } from './views/contact-us/contact-us';
import WhoIsWho from './views/about/who-is-who';
import OrganizationalStructure from './views/about/organizational-structure';
// import Header from './views/navigations/header';
// import Test from './views/navigations/test';
// import Home from './views/home';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [

            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about/mission-and-vision',
                element: <Mission/>
            },
            {
                path: '/resources/policies-and-strategies',
                element: <PoliciesAndStrategies/>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },
            {
                path:'/about/who-is-who',
                element:<WhoIsWho/>
            },
            {
                path:"/about/moe's-organizational-structure",
                element:<OrganizationalStructure/>
            }
        //add other routes
        ],
    },  
     
]);

export default router;


