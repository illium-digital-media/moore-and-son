import { useState, useRef, ChangeEvent, FormEvent } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true); // Set the submission state to true
  };

  return (
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    // <form name="contact" className="" onSubmit={handleSubmit} data-netlify="true">
    //   <Input
    //     value={formData.name}
    //     handleInputChange={handleChange}
    //     type={"text"}
    //     id={"name"}
    //     name={"name"}
    //     placeholder={"Name"}
    //   />
    //   <Input
    //     value={formData.email}
    //     handleInputChange={handleChange}
    //     type={"email"}
    //     id={"email"}
    //     name={"email"}
    //     placeholder={"Email"}
    //   />

    //   <div className="mb-4">
    //     <textarea
    //       className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary h-[150px]"
    //       id="message"
    //       name="message"
    //       placeholder="Message"
    //       value={formData.message}
    //       onChange={handleChange}
    //       required
    //     ></textarea>
    //   </div>
    //   <button
    //     className="bg-primary text-white font-bold py-2 px-4 rounded mt-4"
    //     type="submit"
    //   >
    //     Submit
    //   </button>
    //   {isSubmitted && (
    //     <div className="mt-4 p-2 bg-green-500 text-white rounded">
    //       We have received your message and will get back to you shortly!
    //     </div>
    //   )}
    // </form>
  );
};

export default ContactForm;
