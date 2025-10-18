import React from "react";
import "./Project.css";
import { useRef, useState } from "react";


export const Project = () => {
  const videos=[
  
    {
  id: 1,
  src: "./grocerystore.mp4",
  title: "Grocery Store",
  desc: "This project is a Grocery Store management system that helps shopkeepers handle their business digitally. It manages user tracking, stock updates, and high-sale analysis with authentication for secure access. The system enables accurate data handling without any paperwork, making store management easier and more efficient.",
  features: "User Tracking, Stock Management, Sales Analytics, Authentication",
  tech: "HTML, CSS, JavaScript, MongoDB, Express, React, Node.js",
  code: "https://github.com/saimudhiraj34/",
  live: "https://grocerystore-3.onrender.com"
}

  
    ,
    {
        id:2,
        src:"./amazon.mp4",
        title:"Amazon_HeroPage",
        desc:"This project is an Amazon clone I created as a beginner to learn HTML and CSS from scratch.I built it completely without using any AI tools.It helped me understand web page design and front-end development fundamentals",
        features:"Design of Website",
        tech:"HTML,CSS",
        code:"https://github.com/saimudhiraj34/AmazonClone",
        live:""
  
    },
    {
        id:3,
        src:"./Dailystreak.mp4",
        title:"Dailystreaks",
        desc:"full-stack project showcases my understanding of frontend and backend seamlessly communicate through APIs I also implemented authentication to ensure secure user access and data handling ",
        features:'"Security, Api Requests, Fetching, All_users"',
        tech:"MERN",
        code:"https://github.com/saimudhiraj34/DailyStreakFrontend",
        live:"https://dailystreaksss.onrender.com",
    },
    {
        id:4,
        src:"./password.mp4",
        title:"Password_Manager",
        desc:"This password manager is a full-stack project I built as a beginner to learn how the frontend and backend communicate through APIs.I focused on understanding how to fetch and store data securely in the backend",
        features:'"Security, Api Requests, Fetching, All_users"',
        tech:"MERN",
        code:"https://github.com/saimudhiraj34/password_manager", 
        live:""
    },
  
  ]

return (
    <div className="Project-container" id="projects">
      <div className="project-inside">
        <h2>Projects</h2>
        <div className="project-boxes">
          {videos.map((video) => {
            const videoRef = useRef(null);
            const [muted, setMuted] = useState(true);

            const toggleMute = () => {
              if (videoRef.current) {
                videoRef.current.muted = !videoRef.current.muted;
                setMuted(videoRef.current.muted);
              }
            };

            const handleFullScreen = () => {
              if (videoRef.current) {
                if (videoRef.current.requestFullscreen) {
                  videoRef.current.requestFullscreen();
                } else if (videoRef.current.webkitRequestFullscreen) {
                  videoRef.current.webkitRequestFullscreen();
                } else if (videoRef.current.msRequestFullscreen) {
                  videoRef.current.msRequestFullscreen();
                }
              }
            };
             const handleMouseEnter = () => {
              if (videoRef.current) {
                videoRef.current.play();
              }
            };
                const handleMouseLeave = () => {
              if (videoRef.current) {
                videoRef.current.pause();
              }
            };

            return (
              <div className="project-box" key={video.id}>
                <video
                  ref={videoRef}
                  className="video"
                  src={video.src}
                    onMouseEnter={handleMouseEnter}     
                     onMouseLeave={handleMouseLeave}         
                  mute
        
                ></video>

                {/* Custom controls */}
                <div className="video-controls">
                  <button onClick={toggleMute}>
                    {muted ? "Unmute" : "Mute"}
                  </button>
                  <button onClick={handleFullScreen}>Fullscreen</button>
                  <a href={video.code}><button className="dynamic-btn">Code</button></a>
                  {video.live==="" ? "" :(
                  <a href={video.live}><button className="dynamic-btn">Live</button></a>
                  )
                  }
                </div>

                <div className="videotext">
                  <h3>{video.title}</h3>
                  <p>{video.desc}</p>
                  <p className="p-f">
                    <strong>Features:</strong> {video.features}
                  </p>
                  <div className="tech">
                  <strong>{video.tech}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};