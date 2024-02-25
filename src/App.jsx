import { Outlet } from 'react-router-dom';


import Navbar from "./components/Navbar";


function App() {
  

  return (
    <main className="text-gray-400 bg-gray-900 body-font w-screen h-screen">
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
