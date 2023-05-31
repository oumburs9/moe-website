import { Outlet } from "react-router-dom";

import Navbar from './views/navigations/header'
function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
