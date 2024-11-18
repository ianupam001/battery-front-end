import React, { useState } from "react";
const apiUrl = import.meta.env.VITE_BASE_URL;
import { toast } from "react-toastify";
function DashHomeMeta() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    keyword: "",
    otherTag: "",
    type: "Service",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      description: form.description,
      keywords: form.keyword,
      other: form.otherTag,
    };
    const type = form.type.toLowerCase();
    try {
      const res = await fetch(`${apiUrl}/api/metatags/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success("Form submitted successfully");
        setForm({
          title: "",
          description: "",
          keywords: "",
          other: "",
          type: "Service",
        });
      } else {
        toast.error(`Form submission failed`);
      }
    } catch (error) {
      toast.error("Form submission failed");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h6>Home Meta data</h6>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-2">
            <label
              className="block text-gray-700  mb-2"
              htmlFor="title"
            >
              Meta Title
            </label>
            <textarea
              name="title"
              id="title"
            
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-2">
            <label
              className="block text-gray-700  mb-2"
              htmlFor="description"
            >
              Meta Description
            </label>
            <textarea
              name="description"
              id="description"
             
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              value={form.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-2">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="keyword"
            >
              Meta Keyword
            </label>
            <textarea
              name="keyword"
              id="keyword"
            
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              value={form.keyword}
              onChange={handleChange}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-2">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="otherTag"
            >
              Other Meta Tag
            </label>
            <textarea
              name="otherTag"
              id="otherTag"
            
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              value={form.otherTag}
              onChange={handleChange}
            />
          </div>
        </div>

       

        <div className="px-3">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-400 text-white font-bold rounded-md hover:bg-orange-400/90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DashHomeMeta;
