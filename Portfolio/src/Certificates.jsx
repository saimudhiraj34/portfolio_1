import React, { useState } from "react";
import "./certificates.css";
import { CheckCircle } from "lucide-react";

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Google Developer Certificate",
      org: "Google for Developers",
      type: "Virtual Internship",
      year: "2024",
      src: "./eduskill.png",
    },
    {
      id: 2,
      title: "NSIC Technical Training",
      org: "National Small Industries Corporation",
      type: "Technical Training",
      year: "2024",
      src: "./internship.jpeg",
    },
    {
      id: 3,
      title: "Python Course Completion",
      org: "Infosys Springboard",
      type: "Course Completion",
      year: "2023",
      src: "./infosys.png",
    },
    {
      id: 4,
      title: "SQL & Databases",
      org: "IBM SkillsBuild",
      type: "Professional Certificate",
      year: "2023",
      src: "./ibm.png",
    },
    {
      id: 5,
      title: "Java",
      org: "Scalar",
      type: "Professional Certificate",
      year: "2023",
      src: "./scalar.png",
    },
    {
      id: 6,
      title: "Python",
      org: "Hackerrank",
      type: "Professional Certificate",
      year: "2023",
      src: "./hackerrank.png",
    },
    {
      id: 7,
      title: "Project",
      org: "Anurag university",
      type: "Participation Certificate",
      year: "2023",
      src: "./tejas.jpeg",
    },

  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="certificates-container" id="certificate">
      <div className="certificates-inside">
        <h2>Certificates</h2>
        <p>A collection of professional achievements and recognitions</p>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => handleImageClick(cert.src)}
            >
              <div className="card-icon">
                <CheckCircle size={48} color="#00ffff" />
              </div>

              <div className="card-content">
                <h3>{cert.title}</h3>
                <p className="org">{cert.org}</p>
                <div className="card-footer">
                  <span className="type">{cert.type}</span>
                  <span className="year">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={selectedImage} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};
