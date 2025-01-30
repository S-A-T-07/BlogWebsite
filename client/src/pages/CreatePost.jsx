import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUpdloadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      if (formData.title) formDataToSend.append("title", formData.title);
      if (formData.content) formDataToSend.append("content", formData.content);
      if (imageFile) formDataToSend.append("image", imageFile);

      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      const res = await axios.post("/api/post/create", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      if (res.status === 200 || res.status === 201) {
        setPublishError(null);
        navigate(`/post/${res.data.slug}`);
      } else {
        setPublishError(res.data.message || "Something went wrong");
        return;
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            theme={{
              field: {
                input: {
                  colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-white dark:focus:border-amber-400 dark:focus:ring-amber-400",
                  },
                },
              },
            }}
          />
          <select className="w-40 px-3 py-2 border border-amber-500 rounded-lg text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:border-amber-400 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400 text-sm bg-transparent">
            <option style={{ backgroundColor: "transparent", color: "black" }}>
              Select a category
            </option>
            <option style={{ backgroundColor: "transparent", color: "black" }}>
              JavaScript
            </option>
            <option style={{ backgroundColor: "transparent", color: "black" }}>
              React.js
            </option>
            <option style={{ backgroundColor: "transparent", color: "black" }}>
              Next.js
            </option>
          </select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-amber-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleUpdloadImage}
          />
        </div>

        {formData.image && (
          <img
            src={formData.image || imageFileUrl}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white w-full"
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
