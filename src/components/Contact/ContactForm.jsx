import { useState } from "react";
import SectionTitle from "../SectionTitle";
import contactImg from "../../assets/pictures/contact.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center border border-gray-300">
        <img className="" src={contactImg} alt="" />
      </section>

      <div className="text-center py-12">
        <SectionTitle>CONTACT US</SectionTitle>
      </div>
      <section className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
        {submitted ? (
          <p className="text-green-500 font-semibold">
            Thank you for your message!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 text-xl px-6 py-2 bg-green-500 rounded-full text-center text-slate-100 hover:bg-green-300 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
};

export default ContactForm;
