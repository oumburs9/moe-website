import { Outlet } from "react-router-dom";

import Navbar from './views/navigations/header'

import TopNavBar from './views/navigations/top-navbar'
function App() {

  return (
    <>
    <TopNavBar/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
