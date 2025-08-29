import React from "react";
import contact_img from "../assets/contact.jpeg";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e428775-c488-4c43-8478-7cd6dabbfd89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        HOW TO REACH ME ...
      </h1>

      {/* Contact Card */}
      <div className="flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl bg-gradient-to-r from-blue-500 to-purple-600">
        
        {/* Left Image */}
        <div className="flex-1 bg-white flex items-center justify-center">
          <img 
            className="w-full h-72 sm:h-80 md:h-full object-cover" 
            src={contact_img} 
            alt="contact-form" 
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-white flex flex-col justify-center items-center p-6 md:p-10">
          <form className="w-full max-w-md space-y-4" onSubmit={onSubmit}>
            
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name :</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" 
                placeholder="Enter your name..." 
                type="text" 
                name="name" 
                required 
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email :</label>
              <input 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                placeholder="Enter your email..." 
                type="email" 
                name="email" 
                required 
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message :</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none h-28" 
                placeholder="Enter your message..." 
                name="message" 
                required
              />
            </div>

            {/* Button with glow hover */}
            <button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold p-3 rounded-lg shadow-lg 
                         transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              type="submit"
            >
              Submit Form
            </button>
          </form>
          
          {/* Result Message */}
          <span className="mt-4 text-purple-600 font-medium">{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
