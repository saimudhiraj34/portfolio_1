import React, { useState } from "react";
import "./certificates.css";

export const Certificates = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const Img=[
    {id:1, src:"/eduskill.png",alt:"eduskill"
    },
    {id:2, src:"/infosys.png" ,alt:"eduskill"
    },
    {id:3, src:"/ibm.png" ,alt:"eduskill"},
    {id:4, src:"/scalar.png" ,alt:"eduskill"},
    {id:5, src:"/hackerrank.png" ,alt:"eduskill"},
    {id:6, src:"/eduskill.png" ,alt:"eduskill"}
  ]

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="certificates-container">
      <div className="certificates-inside">
        <h2>Certificates</h2>
        <div className="certificates-boxes">
        {
          Img.map((img,index)=>(
          <div key={index}className="certificates-box">
            <img
              className="certificate-img"
              src={img.src}
              alt={img.alt}
              onClick={() => handleImageClick(img.src)}
            />
          </div>
))}
        </div>
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={selectedImage} alt="Certificate Large" />
          </div>
        </div>
      )}
    </div>
  );
};
