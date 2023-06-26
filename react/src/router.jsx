
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Mission from './views/about/mission-and-vision';
import PoliciesAndStrategies from './views/Resources/policies-and-strategies'
import Home from './views/home';
import { ContactUs } from './views/contact-us/contact-us';
import WhoIsWho from './views/about/who-is-who';
import OrganizationalStructure from './views/about/organizational-structure';
import GeneralEducation from './views/education-sectors/general-education/general-education';
import HigherEducation from './views/education-sectors/higher-education/higher-education';
import FactSheet from './views/about/fact-sheet';
import History from './views/about/history/history';
import PartnersAndStakeholders from './views/about/partners-and-stakeholders';
import PowerAndDuties from './views/about/power-and-duties';
import News from './views/Media/news';
import Magazines from './views/Media/magazines';
import PressRelease from './views/Media/press-releases';
import Test from './views/Test/test';
import DetailNews from './views/Media/detail-news';
import VideoGallery from './views/Media/gallery/video-gallery';
import ImageGallery from './views/Media/gallery/image-gallery';
import VideoDetails from './views/Media/gallery/video-details';
import JobVacancies from './views/announcements/job-vacancies';
import GuidlinesAndStandards from './views/Resources/guidelines-and-standards';
import PlansAndReports from './views/Resources/plans-and-reports';
import AnnualAbstract from './views/Resources/annual-abstract';
import Notices from './views/announcements/notices';
import Tender from './views/announcements/tender';



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
            {
                path:'/about/who-is-who',
                element:<WhoIsWho/>
            },
            {
                path:"/about/moe's-organizational-structure",
                element:<OrganizationalStructure/>
            },
            {
                path:"/about/fact-sheets",
                element:<FactSheet/>
            },
            {
                path:"/about/history",
                element:<History/>
            },
            {
                path:"/about/partners-and-stakeholders",
                element:<PartnersAndStakeholders/>
            },
            {
                path:"/about/power-and-duties",
                element:<PowerAndDuties/>
            },
            {
                path:"/test",
                element:<Test/>
            },
           
            
          
         
            
            {
                path:"/media/news",
                element:<News/>
            },
            {
                path:"/media/press-release",
                element:<PressRelease/>
            },
            {
                path:"/media/magazines",
                element:<Magazines/>
            },
            {
                path:"/media/news/:id",
                element:<DetailNews/>
            },
            {
                path:"/media/gallery/image",
                element:<ImageGallery/>
            },
            {
                path:"/media/gallery/videos",
                element:<VideoGallery/>
            },
            {
                path:"/media/gallery/videos/:id",
                element:<VideoDetails/>
            },
            // announcement
            {
                path:"/announcement/job-vacancy",
                element:<JobVacancies/>
            },
            {
                path:"/announcement/notices",
                element:<Notices/>
            },
            {
                path:"/announcement/tender",
                element:<Tender/>
            },
            //resource
            {
                path:'/resource/guidlinesandstandards',
                element:<GuidlinesAndStandards/>
            },
            {
                path:'/resource/plansandreports',
                element:<PlansAndReports/>
            },
            {
                path:'/resource/annualabstracts',
                element:<AnnualAbstract/>
            },
            
        //add other routes
        ],
    },  
  
     
]);

export default router;


