import { Button, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm";

export function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
    sourcePage: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prevData) => ({
        ...prevData,
        sourcePage: window.location.pathname,
      }));
    }
  }, [isOpen]);

  console.log(formData);

  function handleClose() {
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: "",
      message: "",
      sourcePage: "",
    });
  }

  return (
    <Modal
      show={isOpen}
      size="md"
      style={{ zIndex: 1050 }}
      onClose={handleClose}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-medium text-[var(--erepair-black)] dark:text-[var(--erepair-white)]">
            Book Now
          </h3>

          <div>
            <TextInput
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                color: "var(--erepair-black)",
                backgroundColor: "var(--erepair-white)",
                borderColor: "var(--erepair-bdr-color)",
              }}
            />
          </div>

          <div>
            <TextInput
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                color: "var(--erepair-black)",
                backgroundColor: "var(--erepair-white)",
                borderColor: "var(--erepair-bdr-color)",
              }}
            />
          </div>

          <div>
            <TextInput
              id="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                color: "var(--erepair-black)",
                backgroundColor: "var(--erepair-white)",
                borderColor: "var(--erepair-bdr-color)",
              }}
            />
          </div>

          <div>
            <TextInput
              id="services"
              placeholder="Our Service"
              value={formData.services}
              onChange={handleChange}
              required
              style={{
                color: "var(--erepair-black)",
                backgroundColor: "var(--erepair-white)",
                borderColor: "var(--erepair-bdr-color)",
              }}
            />
          </div>

          <div>
            <textarea
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="2"
              className="w-full p-2 text-[var(--erepair-black)] bg-[var(--erepair-white)] border border-[var(--erepair-bdr-color)] rounded-md"
            />
          </div>

          <div className="w-full">
            <Button
              type="submit"
              style={{
                backgroundColor: "var(--erepair-base)",
                color: "var(--erepair-white)",
              }}
            >
              Submit
            </Button>
          </div>
        </form> */}

        <ContactForm />
      </Modal.Body>
    </Modal>
  );
}
