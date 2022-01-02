import React from "react";

export default function Contact() {
   const [name, setName] = React.useState("");
   const [email, setEmail] = React.useState("");
   const [message, setMessage] = React.useState("");

   function encode(data) {
      return Object.keys(data)
         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
         .join("&");
   }

   function handleSubmit (e) {

    e.preventDefault();

      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", name, email, message })
      })
         .then(() => alert("Message Sent!"))
         .catch(error => alert(error));

     
   }



  return (
    <section id="contact" className="relative bg-black-light">
      <div className="container w-full px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
           <div className="w-full flex flex-col text-center ">
           <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-pink-dark">
             Hire Me
            </h2>
            <p className="leading-relaxed mb-5 text-pink-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
        </div>
       
        <form netlify name="contact" onSubmit={handleSubmit}
        className=" flex flex-col flex-wrap md:ml-auto w-full md:py-8 mt-8 md:mt-0">
       
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-pink-light">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-pink-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-pink-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
              h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white-main bg-pink-dark border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
        
      </div>
    </section>
  );
}