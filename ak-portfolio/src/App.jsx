import { Outlet } from 'react-router-dom';

// import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";

function App() {
  

  return (
    <main className="text-gray-400 bg-gray-900 body-font w-screen h-screen">
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
