import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {

  const currentPage = useLocation().pathname;

    return (
    <header className="bg-gray-800 md:sticky top-0 z-10 w-screen">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <h1 href="#about" className="ml-3 text-xl">
            Alphonse Kusluch
          </h1>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
       
        <a className="mr-5 hover:text-white">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </a>
        <a className="mr-5 hover:text-white">
        <Link
          to="/Projects"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
        </a>
        <a className="mr-5 hover:text-white">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
        </a>
        <a className="mr-5 hover:text-white">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
        </a>
        
        </nav>
      </div>
    </header>

    
    );
}