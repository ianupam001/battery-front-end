import React, { useEffect, useState } from "react";
import { Alert, Button, TextInput, Select, Textarea } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_BASE_URL;

export default function UpdateMetaData() {
  const { type, metaId } = useParams();
  console.log(type)
  console.log(metaId)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id:"",
    title: "",
    description: "",
    keyword: "",
    otherTag: "",
    type: "Service",
  });
  const [publishError, setPublishError] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  // Fetch metadata if `metaId` is provided (indicating an update)
  useEffect(() => {
    if (metaId) {
      const fetchMetaData = async () => {
        try {
          const res = await fetch(`${apiUrl}/api/metatags/${type}/${metaId}`);
          console.log(res)
          if (res.ok) {
            const data = await res.json();
            setFormData({
              title: data.title || "",
              description: data.description || "",
              keyword: data.keywords || "",
              otherTag: data.other || "",
              type: data.type || "Service",
            });
            setIsUpdate(true);
          } else {
            setPublishError("Failed to fetch metadata for update");
          }
        } catch (error) {
          setPublishError("Error fetching metadata");
        }
      };
      fetchMetaData();
    }
  }, [type,metaId]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      description: formData.description,
      keywords: formData.keyword,
      other: formData.otherTag,
    };
    const selectedType = formData.type.toLowerCase();

    try {
      const res = await fetch(
        `${apiUrl}/api/metatags/${selectedType}/${metaId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success("Metadata updated successfully");
        navigate(`/dashboard?tab=metatags`);
      } else {
        setPublishError(data.message || "Failed to update metadata");
      }
    } catch (error) {
      setPublishError("Submission failed");
    }
  };

  return (
    <div className="p-3 max-w-3xl mt-40 pt-20 mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold capitalize">
        Update Meta Data {type} page
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Meta Title"
          required
          name="title"
          onChange={handleChange}
          value={formData.title}
          className="w-full"
        />

        <Textarea
          placeholder="Meta Description"
          required
          name="description"
          rows={3}
          onChange={handleChange}
          value={formData.description}
          className="w-full"
        />

        <Textarea
          placeholder="Meta Keywords (comma-separated)"
          required
          name="keyword"
          rows={2}
          onChange={handleChange}
          value={formData.keyword}
          className="w-full"
        />

        <Textarea
          placeholder="Other Meta Tags"
          name="otherTag"
          rows={2}
          onChange={handleChange}
          value={formData.otherTag}
          className="w-full"
        />

        <Select
          id="type"
          name="type"
          required
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Service">Service</option>
          <option value="Product">Product</option>
          <option value="Blog">Blog</option>
          <option value="Common">Common</option>
        </Select>

        {publishError && <Alert color="failure">{publishError}</Alert>}

        <Button type="submit" className="bg-orange-400 text-white hover:bg-orange-400/90">
          Update Metadata
        </Button>
      </form>
    </div>
  );
}
