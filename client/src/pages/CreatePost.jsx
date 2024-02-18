import React, { useRef, useState } from "react";
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
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import "quill-mention";

export default function CreatePost() {
  const { postId } = useParams();
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const genres = [
    {value:"", label: ""},
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "romance", label: "Romance" },
    { value: "horror", label: "Horror" },
    { value: "thriller", label: "Thriller" },
    { value: "sci-fi", label: "Science Fiction" },
    { value: "fantasy", label: "Fantasy" },
    { value: "animation", label: "Animation" },
    { value: "adventure", label: "Adventure" },
    { value: "mystery", label: "Mystery" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "family", label: "Family" },
    { value: "musical", label: "Musical" },
    { value: "biography", label: "Biography" },
    { value: "history", label: "History" },
    { value: "war", label: "War" },
    { value: "sport", label: "Sport" },
    { value: "western", label: "Western" },
    { value: "asian-movie", label: "Asian-movie" },
    { value: "bollywood-movie", label: "Bollywood-movie" },
    { value: "wwe", label: "WWE" },
  ];

  const handleUploadImage = async () => {
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
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
      console.error(error);
    }
  };

  const handleAddFileLink = () => {
    const fileLink = prompt("Enter the file URL:");

    if (fileLink) {
      const updatedContent = `${
        formData.content || ""
      }\n<a href="${fileLink}" target="_blank" rel="noopener noreferrer" style="background-color: blue; color: white; padding: 16px 32px; text-decoration: none; display: inline-block; border-radius: 4px;">Stream Here or Download later </a>`;
      setFormData({ ...formData, content: updatedContent });
    }
  };
  const handleEmbedVideo = () => {
    const videoLink = prompt("Enter the video URL:");

    if (videoLink) {
      try {
        const embedUrl = getEmbedUrl(videoLink);

        if (embedUrl) {
          const updatedContent = `${
            formData.content || ""
          }\n<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
          setFormData({ ...formData, content: updatedContent });
        } else {
          console.error("Unsupported video platform or invalid URL");
        }
      } catch (error) {
        console.error("Invalid video URL", error);
      }
    }
  };

  const getEmbedUrl = (videoLink) => {
    if (videoLink.includes("youtube.com")) {
      const videoId = new URL(videoLink).searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (videoLink.includes("vimeo.com")) {
      const videoId = videoLink.split("/").pop().split("&")[0];
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
    }

    return null;
  };

  const handleAddKeywords = () => {
    const keywords = prompt("Enter SEO keywords:");
    if (keywords !== null) {
      const quill = quillRef.current.editor;
      const range = quill.getSelection();

      // Customize the inserted content with button-like appearance
      const buttonHTML = `<span style="background-color: #00bcd4; color: #ffffff; padding: 8px 16px; text-decoration: none; display: inline-block; border-radius: 4px;">${keywords}</span>`;
      quill.clipboard.dangerouslyPasteHTML(range ? range.index : 0, buttonHTML);
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
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }>
            <option value=""></option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
            <option value="kdrama">Kdrama</option>
            <option value="anime">Anime</option>
            <option value="reviews">Reviews</option>
          </Select>
          <Select
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }>
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.label}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}>
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
            alt="upload"
            className="w-full h-full object-cover"
          />
        )}
        <ReactQuill
          ref={quillRef}
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(updatedContent) => {
            setFormData({ ...formData, content: updatedContent });
          }}
        />
        <Button
          type="button"
          gradientDuoTone="purpleToBlue"
          size="sm"
          onClick={handleAddKeywords}>
          Add SEO Keywords
        </Button>

        <Button
          type="button"
          gradientDuoTone="purpleToBlue"
          size="sm"
          onClick={handleEmbedVideo}>
          Embed Video
        </Button>
        <Button
          type="button"
          gradientDuoTone="purpleToBlue"
          size="sm"
          onClick={handleAddFileLink}>
          Add File Link
        </Button>
        <Button type="submit" gradientDuoTone="purpleToBlue">
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
