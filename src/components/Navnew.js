
import { ArrowRightIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import Social from "./Social";


export default function Navnew() {

return(
    <nav className="bg-black-light">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4"> {/* main div */}
            <div className="hidden md:flex justify-between">
            <div className="text-pink-light">  {/* logo section */}
                <p className="py-4">PRACHI</p>
              </div>
              <div className="text-pink-light py-4"> {/* social section*/   }
                <Social />
              </div>
              <div className="text-pink-light py-4"> {/*menu section */}
              <a href="#" className="mr-5 text-pink-dark items-right hover:text-pink-light">
               Home
             </a>
              <a href="#projects" className="mr-5 text-pink-light hover:text-pink-dark">
              Past Work
             </a>
             <a href="https://github.com/prachip1" target="_blank" className="mr-5 text-pink-light hover:text-pink-dark">
              Git Profile
             </a>
             <a href="https://www.prachipweb.co.in" target="_blank"
             className="inline-flex items-center bg-pink-dark text-pink-light border-2 rounded-full border-pink-dark py-2 px-2 focus:outline-none hover:bg-black-light rounded text-base mt-4 md:mt-0">
              Design Portfolio
             <ArrowRightIcon className="w-4 h-4 ml-1" />
             </a>
              </div>
            </div>
              

        </div>    
          {/* mobile navigation menu*/ }
          <div class="mobile-menu hidden">
          {/*<MenuIcon className="w-4 h-4 ml-1" onClick={this.burgerToggle}/> */}
            <a href="#"className="block py-2 px-4 text-pink-dark text:sm hover:bg-green-light text-pink-light onClick={this.burgerToggle}"> Home</a>
            <a href="#"className="block py-2 px-4 text-pink-dark text:sm hover:bg-green-light text-pink-light onClick={this.burgerToggle}"> Past Work</a>
            <a href="#"className="block py-2 px-4 text-pink-dark text:sm hover:bg-green-light text-pink-light onClick={this.burgerToggle}"> Git Profile</a>
            <a href="#"className="block py-2 px-4 text-pink-dark text:sm hover:bg-green-light text-pink-light onClick={this.burgerToggle}"> Design Portfolio</a>
          </div>
        
    </nav>

);
}



