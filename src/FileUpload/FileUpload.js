import React, { useState } from "react";

function FileUpload() {
  let [image, setImage] = useState("");
  let [allImages, setAllImages] = useState([]);

  function imageHandler(e) {
    let file = e.target.files[0];
    setImage(URL.createObjectURL(file)); //convert object to url

    setAllImages([...allImages, { url: URL.createObjectURL(file) }]); //add multiple image
  }
  return (
    <>
      <h1>File upload using state</h1>
      <div>
        <input type="file" className="file" />
        <button onClick={imageHandler}>Submit</button>
      </div>

      <div>
        <img src={image} alt="" height="200px" width="500px" />
      </div>

      <div>
        {allImages.map((e) => {
          return <img src={e.url} alt="" height="100px" width="200px" />;
        })}
      </div>
    </>
  );
}

export default FileUpload;
