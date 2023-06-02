
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Mission from './views/about/mission-and-vision';
import PoliciesAndStrategies from './views/Resources/policies-and-strategies'
import Home from './views/home';
import { ContactUs } from './views/contact-us/contact-us';
import GeneralEducation from './views/education-sectors/general-education/general-education';
import HigherEducation from './views/education-sectors/higher-education/higher-education';

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
                path: '/educations/higher-education',
                element: <HigherEducation/>
            },
            {
                path: '/educations/general-education',
                element: <GeneralEducation/>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },   
        //add other routes
        ],
    },  
  
     
]);

export default router;


