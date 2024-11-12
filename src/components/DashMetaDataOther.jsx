import React, { useState } from "react";

const DashMetaDataOther = () => {
  const [formData, setFormData] = useState({
    headerTag: "",
    footerTag: "",
    bodyTag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-3xl mt-20 mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
      
        <div className="flex flex-col md:flex-row gap-4 mb-2">
        
          <div className="flex-1">
            <label htmlFor="headerTag" className="block font-semibold mb-2">
              Header Tag
            </label>
            <textarea
              id="headerTag"
              name="headerTag"
              rows="2"
              className="w-full p-2 border rounded-md"
              value={formData.headerTag}
              onChange={handleChange}
            />
          </div>

         
          <div className="flex-1">
            <label htmlFor="footerTag" className="block font-semibold mb-2">
              Footer Tag
            </label>
            <textarea
              id="footerTag"
              name="footerTag"
              rows="2"
              className="w-full p-2 border rounded-md"
              value={formData.footerTag}
              onChange={handleChange}
            />
          </div>
        </div>

       
        <div className="mb-2">
          <label htmlFor="bodyTag" className="block font-semibold mb-2">
            Body Tag
          </label>
          <textarea
            id="bodyTag"
            name="bodyTag"
            rows="3"
            className="w-full p-2 border rounded-md"
            value={formData.bodyTag}
            onChange={handleChange}
          />
        </div>

        
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-400/90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashMetaDataOther;
