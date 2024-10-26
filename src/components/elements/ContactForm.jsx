import React, { useState } from "react";
import { TextInput, Textarea, Button } from "flowbite-react";

export function ContactForm({ sourcePage, formType }) {
  const [formData, setFormData] = useState({
    ffname: "",
    email: "",
    phone: "",
    form_message: "",
    our_services: sourcePage.split("/").pop(),
    sourcePage: sourcePage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", {
      sourcePage: formData.sourcePage,
      our_services: formData.our_services,
    });
    console.log("Form Data:", formData);
    // handle form submission logic here
  };

  return (
    <form
      id="contact-form"
      name="contact_form"
      className="p-1 py-2 max-w-md bg-[#FDEEDF] rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        {formType || "Enquire Now"}
      </h2>

      <div className="mb-4">
        <TextInput
          id="ffname"
          type="text"
          name="ffname"
          placeholder="Name *"
          value={formData.ffname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex justify-between gap-2">
        <div className="mb-4">
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <TextInput
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <Textarea
          id="form_message"
          name="form_message"
          placeholder="Message"
          value={formData.form_message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Hidden fields for 'our_services' and 'sourcePage' */}
      <input type="hidden" name="our_services" value={formData.our_services} />
      <input type="hidden" name="sourcePage" value={formData.sourcePage} />

      <Button type="submit" className="w-full bg-orange-400 hover:bg-amber-400">
        Submit Now
      </Button>
    </form>
  );
}
