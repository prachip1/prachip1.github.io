import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";


export default function About() {
    return(
        <section id="about" className="text-pink-light">
            <div className="container bg-black-light mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <img
           className="object-cover object-center rounded"
           alt="hero"
           src="./profilepic.png"
         />
       </div>
               <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
           <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-sans">
           Hello, I am Prachi Priydarshini and this is my
          </h3>
         <h1 className="text-5xl lg:inline-block text-black-dark md-tracking-widest bg-gradient-to-r from-pink-dark via-green-light via-blue-dark to-blue-light">DEVELOPER PORTFOLIO</h1>
         
         <h4 className="text-blue-light my-4 text-xl">UI developer | UX designer</h4>
         <p className="mb-8 leading-relaxed text-lg">
         I have 2 years of experience of developing and customizing web pages on Joomla,WordPress, 
         ServiceNow portal and HTML,CSS, javascript.
         </p><br></br>
         <p className="mb-8 leading-relaxed text-lg">
         Since 2020 July I started learning about UX and UI designing. I have knowledge of tools such as 
         Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop and Balasmiq.
         </p>
         <div className="flex justify-center">
           <a
             href="#resume"
             className="inline-flex text-pink-light bg-pink-dark border-2 border-pink-dark rounded-full py-2 px-6 focus:outline-none hover:bg-black-dark  text-lg">
             Download Resume
           </a>
           <a
             href="#contact"
             className="ml-4 inline-flex text-white bg-pink-dark border-2 py-2 px-6 border-pink-dark rounded-full focus:outline-none hover:bg-black-dark hover:text-white text-lg">
            Get In Touch
           </a>
         </div>
       
       </div>
       
     </div>
   </section>
 );
}
      