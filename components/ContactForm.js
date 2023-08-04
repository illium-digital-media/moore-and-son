import { useState, useRef, ChangeEvent, FormEvent } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log(formData);
  //   // Reset the form
  //   setFormData({ name: "", email: "", message: "" });
  //   setIsSubmitted(true); // Set the submission state to true
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .catch((error) => alert(error));
  };
  
  return (
    <form
    data-netlify="true"
    name="pizzaOrder"
    method="post"
    onSubmit={handleSubmit}
  >
    <input type="hidden" name="form-name" value="pizzaOrder" />
    <label>
      What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit" />
  </form>
  );
};

export default ContactForm;
