// src/FileUpload.js
import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<string | undefined>();
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!file) {
    //   setMessage("Please select a file to upload");
    //   return;
    // }

    // const formData = new FormData();
    // formData.append("file", file);

    // try {
    //   const response = await fetch("/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     setMessage("File uploaded successfully");
    //   } else {
    //     setMessage("File upload failed");
    //   }
    // } catch (error) {
    //   setMessage("Error uploading file");
    // }
  };

  return (
    <div>
      <h2>Upload the file for which you want the caricature generated</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="uploadfile"
          id="img"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <div className="flex gap-4 m-2">
          <button
            style={{ cursor: "pointer" }}
            className="bg-white text-black p-2 "
          >
            <label htmlFor="img"> Upload </label>
          </button>
          {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
          {/* <button type="submit">Upload</button> */}
          <button
            onClick={() => {
              setFile("");
            }}
            className="bg-white text-black p-2 "
          >
            Delete
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}

      {file && (
        <div>
          <h3>Preview:</h3>
          <img
            src={file}
            alt="Selected"
            style={{ maxWidth: "200px", height: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
