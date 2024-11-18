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
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const apiUrl = import.meta.env.VITE_BASE_URL;
export default function UpdateProduct() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { productId } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [id, setId] = useState(null);

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const res = await fetch(
          `${apiUrl}/api/product/getproducts?productId=${productId}`
        );
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.products[0]);
          setImageUrl(data.products[0].image);
          setId(data.products[0]._id);
        }
      };

      fetchProduct();
    } catch (error) {
      console.log(error.message);
    }
  }, [productId]);

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
            setImageUrl(downloadURL);
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
      const res = await fetch(
        `${apiUrl}/api/product/updateproduct/${id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        // navigate(`/product/${data.slug}`);
        navigate(`/dashboard?tab=products`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };
  return (
    <div className="p-5 max-w-3xl mx-auto min-h-screen mt-32 border">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Update Product
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <div className="flex-1">
            <label htmlFor="title" className="mb-1 text-sm font-medium">
              Product Title
            </label>
            <TextInput
              type="text"
              placeholder="Enter product title"
              required
              id="title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
            />
          </div>
        </div>

        {/* File Upload Field */}
        <div className="flex flex-col gap-4">
          <label htmlFor="image" className="mb-1 text-sm font-medium">
            Upload Product Image
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
          {imageUploadError && (
            <Alert color="failure">{imageUploadError}</Alert>
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded preview"
              className="w-full h-72 object-cover"
            />
          )}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="content" className="mb-1 text-sm font-medium">
            Product Description
          </label>
          <ReactQuill
            theme="snow"
            value={formData.content}
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
          <label htmlFor="metaTitle" className="block font-medium mb-2">
            Meta Title
          </label>
          <TextInput
            type="text"
            id="metaTitle"
            placeholder="Enter meta title"
            onChange={(e) =>
              setFormData({ ...formData, metaTitle: e.target.value })
            }
            value={formData.metaTitle}
          />
        </div>

        <div>
          <label htmlFor="metaDescription" className="block font-medium mb-2">
            Meta Description
          </label>
          <TextInput
            type="text"
            id="metaDescription"
            placeholder="Enter meta description"
            onChange={(e) =>
              setFormData({ ...formData, metaDescription: e.target.value })
            }
            value={formData.metaDescription}
          />
        </div>

        <div>
          <label htmlFor="metaKeywords" className="block font-medium mb-2">
            Meta Keyword
          </label>
          <TextInput
            type="text"
            id="metaKeywords"
            placeholder="Enter meta keyword"
            onChange={(e) =>
              setFormData({ ...formData, metaKeywords: e.target.value })
            }
            value={formData.metaKeywords}
          />
        </div>

        <div>
          <label htmlFor="otherMeta" className="block font-medium mb-2">
            Other Meta Tag
          </label>
          <TextInput
            type="text"
            id="otherMeta"
            placeholder="Enter other meta tag"
            onChange={(e) =>
              setFormData({ ...formData, otherMeta: e.target.value })
            }
            value={formData.otherMeta}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-orange-400 text-white hover:bg-orange-400/90"
        >
          Update Product
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
