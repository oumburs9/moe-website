
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Mission from './views/about/mission-and-vision';
import PoliciesAndStrategies from './views/Resources/policies-and-strategies'
import Home from './views/home';
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
        //add other routes
        ]
       
    }
]);

export default router;


