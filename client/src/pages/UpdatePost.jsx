import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import "quill-mention";

export default function UpdatePost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const quillRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const genres = [
    { value: "", label: "" },
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
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
        } else {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPost();
  }, [postId]);

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
            setFormData((prevData) => ({ ...prevData, image: downloadURL }));
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
      if (!formData._id) {
        setPublishError("Post ID is undefined");
        return;
      }

      const res = await fetch(
        `/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            content: formData.content,
            category: formData.category,
            image: formData.image,
            keywords: formData.keywords,
            genre: formData.genre,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setPublishError(data.message);
      } else {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
      console.error(error);
    }
  };

  // Function to get the embed URL for videos
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

  // Handle embedding video
  const handleEmbedVideo = () => {
    const videoLink = prompt("Enter the video URL:");

    if (videoLink) {
      try {
        const embedUrl = getEmbedUrl(videoLink);

        if (embedUrl) {
          const updatedContent = `${
            formData.content || ""
          }\n<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
          setFormData((prevData) => ({ ...prevData, content: updatedContent }));
        } else {
          console.error("Unsupported video platform or invalid URL");
        }
      } catch (error) {
        console.error("Invalid video URL", error);
      }
    }
  };

  // Handle adding file link
  const handleAddFileLink = () => {
    const fileLink = prompt("Enter the file URL:");

    if (fileLink) {
      const updatedContent = `${
        formData.content || ""
      }\n<a href="${fileLink}" target="_blank" rel="noopener noreferrer" style="background-color: blue; color: white; padding: 16px 32px; text-decoration: none; display: inline-block; border-radius: 4px;">Stream Here or Download later</a>`;
      setFormData((prevData) => ({ ...prevData, content: updatedContent }));
    }
  };

  const handleAddKeywords = () => {
    const keywords = prompt("Enter SEO keywords:");
    if (keywords !== null) {
      const quill = quillRef.current.editor;
      const range = quill.getSelection();

      // Customize the inserted content with button-like appearance
      const buttonHTML = `<span style="background-color: #00bcd4; color: #ffffff; padding: 8px 16px; text-decoration: none; display: inline-block; border-radius: 4px;">${keywords}</span>`;
      quill.clipboard.dangerouslyPasteHTML(range ? range.index : 0, buttonHTML);

      setFormData((prevData) => ({ ...prevData, keywords }));
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                title: e.target.value,
              }))
            }
            value={formData.title || ""}
          />
          <Select
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                category: e.target.value,
              }))
            }
            value={formData.category || ""}>
            <option value=""></option>
            <option value="movies">Movies</option>
            <option value="series">Series</option>
            <option value="kdrama">Kdrama</option>
            <option value="anime">Anime</option>
            <option value="reviews">Reviews</option>
          </Select>
          <Select
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                genre: e.target.value,
              }))
            }
            value={formData.genre || "uncategorized"}>
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
          value={formData.content || ""}
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(updatedContent) => {
            setFormData((prevData) => ({
              ...prevData,
              content: updatedContent,
            }));
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
          Update post
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
