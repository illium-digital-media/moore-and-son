import { useState, useRef, ChangeEvent, FormEvent } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
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
    }).catch((error) => alert(error));
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true); 
  };

  return (
    //   <form
    //   data-netlify="true"
    //   name="pizzaOrder"
    //   method="post"
    //   onSubmit={handleSubmit}
    // >
    //   <input type="hidden" name="form-name" value="pizzaOrder" />
    //   <label>
    //     What order did the pizza give to the pineapple?
    //     <input name="order" type="text" onChange={handleChange} />
    //   </label>
    //   <input type="submit" />
    // </form>
 
    <form
      name="contact"
      className=""
      method="post"
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <Input
        value={formData.name}
        handleInputChange={handleChange}
        type={"text"}
        id={"name"}
        name={"name"}
        placeholder={"Name"}
      />
      <Input
        value={formData.email}
        handleInputChange={handleChange}
        type={"email"}
        id={"email"}
        name={"email"}
        placeholder={"Email"}
      />

      <div className="mb-4">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary h-[150px]"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="bg-primary text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
      >
        Submit
      </button>
      {isSubmitted && (
        <div className="mt-4 p-2 bg-green-500 text-white rounded">
          We have received your message and will get back to you shortly!
        </div>
      )}

    </form>
  );
};

export default ContactForm;
