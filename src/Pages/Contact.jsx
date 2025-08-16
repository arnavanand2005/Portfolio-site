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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-blue-500 mb-4 mt-4">
      HOW TO REACH ME ...
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 border-black border-2 rounded-lg bg-gray-100">
      <div>
        <img className="w-[600px] h-[625px]" src={contact_img} alt="contact-form-image" />
      </div>
      <div>
        <form className="text-white " onSubmit={onSubmit}> 
          <label className="text-black "> Name : </label>
          <input className="text-black" placeholder="Enter name here..." type="text" name="name" required/> <br />
          <label className="text-black"> Email : </label>
          <input className="text-black" placeholder="Enter email here..." type="email" name="email" required/> <br />
          <label className="text-black">Message : </label>
          <textarea className="text-black" placeholder="Enter message here..." name="message" required></textarea> <br />
          <button className="bg-blue-500 p-3 rounded-lg" type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
      </div>
      </div>
  );
}

export default App;