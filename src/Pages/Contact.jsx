import React from "react";
import contactimage from "../assets/contact.jpg";
import '../styles/contact.css'
import { Element } from "react-scroll";

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
    <Element name="contact-section" className="contact-section">
    <div className="contact-container">
        <h2 className="main-contact-heading">Lets Get In Touch</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="left-side-contact">
            <img src={contactimage} alt="contact-image" />
        </div>
        <div className="input-elements">
            <label >Name : </label>
            <input type="text" placeholder="Enter name here..." name="name" required/> <br />
            <label >Email : </label>
            <input type="email" placeholder="Enter Email here..." name="email" required/> <br /> 
            <label >Phone Number :</label>
            <input type="number" placeholder="Enter phone number..."  name="phone" required/> <br />     
            <label> Message : </label> 
            <textarea placeholder="Enter message here ..." name="message" required></textarea>
            <button className="submit-btn" type="submit">Submit Form</button>
        </div>
      </form>
      <span>{result}</span>
    </div>
    </Element>
  );
}
export default App;
