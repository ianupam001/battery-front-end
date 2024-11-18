import { Alert, Button, FileInput, TextInput } from "flowbite-react";
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

export default function UpdateService() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { serviceId } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [id, setId] = useState(null);

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      const fetchService = async () => {
        const res = await fetch(
          `${apiUrl}/api/service/getservices?serviceId=${serviceId}`
        );
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.services[0]);
          setImageUrl(data.services[0].image);
          setId(data.services[0]._id);
        }
      };

      fetchService();
    } catch (error) {
      console.log(error.message);
    }
  }, [serviceId]);

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
        `${apiUrl}/api/service/updateservice/${id}/${currentUser._id}`,
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
        navigate(`/dashboard?tab=services`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto min-h-screen border">
      <h1 className="text-center text-3xl my-7 font-semibold mt-20">
        Update Service
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <TextInput
            type="text"
            id="title"
            placeholder="Enter title"
            required
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title || ""}
          />
        </div>

        <div>
          <label htmlFor="short_description" className="block font-medium mb-2">
            Short Description
          </label>
          <TextInput
            type="text"
            id="short_description"
            placeholder="Enter short description"
            required
            onChange={(e) =>
              setFormData({ ...formData, short_description: e.target.value })
            }
            value={formData.short_description || ""}
          />
        </div>

        <div>
          <label htmlFor="file_input" className="block font-medium mb-2">
            Upload Image
          </label>
          <div className="flex gap-4 items-center border-4 border-teal-500 border-dotted p-3">
            <FileInput
              type="file"
              id="file_input"
              accept="image/*"
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
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-72 object-cover"
          />
        )}

        <div>
          <label htmlFor="content" className="block font-medium mb-2">
            Content
          </label>
          <ReactQuill
            id="content"
            theme="snow"
            value={formData.content || ""}
            placeholder="Write something..."
            className="h-72 mb-12"
            required
            onChange={(value) => setFormData({ ...formData, content: value })}
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

        <Button
          type="submit"
          className="bg-orange-400 text-white hover:bg-orange-400/90 my-3"
        >
          Update Service
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
