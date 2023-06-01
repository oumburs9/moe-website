import { Outlet } from "react-router-dom";

import TopNavBar from './views/navigations/top-navbar'
import Navbar from './views/navigations/header'

import Footer from './views/navigations/footer'

function App() {

  return (
    <>
    <TopNavBar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
