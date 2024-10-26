import React, { useState, useEffect } from "react";
import { TextInput, Select, Textarea, Button, Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_URL;

export function ContactFormModal({ sourcePage }) {
  const [formData, setFormData] = useState({
    ffname: "",
    email: "",
    phone: "",
    services: "",
    form_message: "",
    sourcePage: "",
  });

  const { serviceSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recentServices, setRecentServices] = useState([]);

  // Update formData.sourcePage whenever sourcePage prop changes
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      sourcePage: sourcePage || "",
    }));
  }, [sourcePage]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${apiUrl}/api/service/getservices?slug=${serviceSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceSlug]);

  useEffect(() => {
    const fetchRecentServices = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/service/getservices?limit=6`);
        const data = await res.json();
        if (res.ok) {
          setRecentServices(data.services);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentServices();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-80">
        <Spinner size="xl" />
      </div>
    );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      id="contact-form"
      name="contact_form"
      className="p-4 max-w-lg bg-white rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-xl font-semibold">Book Now</h2>
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

      <div className="mb-4">
        <Select
          id="services"
          className="cursor-pointer"
          name="services"
          value={formData.services}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a Service *
          </option>
          {recentServices &&
            recentServices.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
        </Select>
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

      <input type="hidden" name="sourcePage" value={formData.sourcePage} />

      <Button type="submit" className="w-full bg-orange-400 hover:bg-amber-400">
        Submit Now
      </Button>
    </form>
  );
}
