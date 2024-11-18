import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function CreateProduct() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      const res = await fetch(`${apiUrl}/api/product/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Correctly set the Authorization header
          "Content-Type": "application/json", // Content-Type header
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/dashboard?tab=products`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };
  return (
    <div className="max-w-3xl mx-auto min-h-screen border p-5 mt-32">
  <h1 className="text-center text-3xl my-7 font-semibold">
    Create Product
  </h1>
  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    {/* Title Field */}
    <div className="flex flex-col gap-4 sm:flex-row justify-between">
      <div className="flex-1">
        <label htmlFor="title" className="mb-1 text-sm font-medium">
          Title
        </label>
        <TextInput
          type="text"
          placeholder="Enter product title"
          required
          id="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
    </div>

    {/* File Upload Field */}
    <div className="flex flex-col gap-4 ">
      <label htmlFor="image" className="mb-1 text-sm font-medium">
        Product Image
      </label>
      <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
        <FileInput
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button
          type="button"
          gradientDuoTone="purpleToBlue"
          size="sm"
          outline
          onClick={handleUpdloadImage}
          disabled={imageUploadProgress}
        >
          {imageUploadProgress ? (
            <div className="w-16 h-16">
              <CircularProgressbar
                value={imageUploadProgress}
                text={`${imageUploadProgress || 0}%`}
              />
            </div>
          ) : (
            "Upload Image"
          )}
        </Button>
      </div>
      {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
      {formData.image && (
        <img
          src={formData.image}
          alt="Uploaded preview"
          className="w-full h-72 object-cover"
        />
      )}
    </div>

    {/* Description Field */}
    <div>
      <label htmlFor="content" className="mb-1 text-sm font-medium">
        Description
      </label>
      <ReactQuill
        theme="snow"
        placeholder="Write product description..."
        className="h-72 mb-12"
        required
        id="content"
        onChange={(value) => {
          setFormData({ ...formData, content: value });
        }}
      />
    </div>

    <div>
          <label htmlFor="meta_title" className="block font-medium mb-2">
            Meta Title
          </label>
          <TextInput
            type="text"
            id="meta_title"
            placeholder="Enter meta title"
            onChange={(e) =>
              setFormData({ ...formData, meta_title: e.target.value })
            }
            value={formData.meta_title || ""}
          />
        </div>

        <div>
          <label htmlFor="meta_description" className="block font-medium mb-2">
            Meta Description
          </label>
          <TextInput
            type="text"
            id="meta_description"
            placeholder="Enter meta description"
            onChange={(e) =>
              setFormData({ ...formData, meta_description: e.target.value })
            }
            value={formData.meta_description || ""}
          />
        </div>

        <div>
          <label htmlFor="meta_keyword" className="block font-medium mb-2">
            Meta Keyword
          </label>
          <TextInput
            type="text"
            id="meta_keyword"
            placeholder="Enter meta keyword"
            onChange={(e) =>
              setFormData({ ...formData, meta_keyword: e.target.value })
            }
            value={formData.meta_keyword || ""}
          />
        </div>

        <div>
          <label htmlFor="other_meta_tag" className="block font-medium mb-2">
            Other Meta Tag
          </label>
          <TextInput
            type="text"
            id="other_meta_tag"
            placeholder="Enter other meta tag"
            onChange={(e) =>
              setFormData({ ...formData, other_meta_tag: e.target.value })
            }
            value={formData.other_meta_tag || ""}
          />
        </div>



    {/* Submit Button */}
    <Button
      type="submit"
      className="bg-orange-400 text-white hover:bg-orange-400/90"
    >
      Publish
    </Button>
    {publishError && (
      <Alert className="mt-5" color="failure">
        {publishError}
      </Alert>
    )}
  </form>
</div>

  );
}
