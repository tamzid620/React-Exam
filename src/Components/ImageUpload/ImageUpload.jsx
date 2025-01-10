import React, { useState } from "react";

const ImageUpload = () => {
  const [imageUpload, setImageUpload] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  console.log("images---", imageUpload);
  return (
    <div>
      <h1 className="mt-20 text-center text-3xl uppercase font-bold underline mb-5">
        ImageUpload!
      </h1>
      {/*<<<<<<<<<<<<<<<< table section >>>>>>>>>>>>>>>>>> */}
      <div className="grid md:grid-cols-2 sm: grid-cols-1 items-center">
        <div>
          <img
            className="shadow-lg w-[350px] h-[500px] object-cover"
            src={imageUpload}
            alt=""
          />
        </div>

        <div>
          <input type="file" id="fileInput" onChange={handleImageChange} />
          <div className="flex md:justify-end sm:justify-center mt-32">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-3 py-1 uppercase text-white drop-shadow-lg rounded-sm"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
