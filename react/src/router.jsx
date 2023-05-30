
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
// import Header from './views/navigations/header';
// import Test from './views/navigations/test';
// import Home from './views/home';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            // {
            //     path: '/nav',
            //     element: <Header/>
            // },
            // {
            //     path: '/test',
            //     element: <Test/>
            // },
        //add other routes
        ]
       
    }
]);

export default router;


