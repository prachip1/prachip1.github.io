
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import Social from "./Social";





export default function Navbar() {
  return (
    <header className="bg-black-light md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          
          <a href="#about" className="ml-3 text-xl text-white-main">
            PRACHI
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        
        
        <a href="#" className="mr-5 text-pink-dark items-right hover:text-pink-light">
            Home
          </a>
          <a href="#projects" className="mr-5 text-pink-light hover:text-pink-dark">
            Past Work
          </a>
          <a href="https://github.com/prachip1" className="mr-5 text-pink-light hover:text-pink-dark">
            Git Profile
          </a>
          
          <Social />
         
        </nav>
        <a
          href="https://www.prachipweb.co.in" target="_blank"
          className="inline-flex items-center bg-pink-dark text-pink-light border-2 rounded-full border-pink-dark py-2 px-2 focus:outline-none hover:bg-black-light rounded text-base mt-4 md:mt-0">
          Design Portfolio
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    
    </header>
  );
}
