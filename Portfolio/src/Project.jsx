import React from "react";
import "./Project.css";
import { useRef, useState } from "react";


export const Project = () => {
  const videos=[
    {
        id:1,
        src:"/abcd.mp4",
        title:"DeveloperDashBoard",
        desc:"This project mainly focuses on students. They can store their preparation data in one place and view a dashboard of their data.",
        features:'"Security, Dashboard, Streak Graph, Process of Project, Important Notes,Remainders,Schedule,WorkDoneToday"',
        tech:"MERN",
        live:"https://developer-dashboard-1.netlify.app/"
    },
    {
        id:2,
        src:"/abcd.mp4",
        title:"DeveloperDashBoard",
        desc:"This project mainly focuses on students. They can store their preparation data in one place and view a dashboard of their data.",
        features:'"Security, Dashboard, Streak Graph, Process of Project, Important Notes,Remainders,Schedule,WorkDoneToday"',
        tech:"MERN",
        live:""
    },
    {
        id:3,
        src:"/abcd.mp4",
        title:"DeveloperDashBoard",
        desc:"This project mainly focuses on students. They can store their preparation data in one place and view a dashboard of their data.",
        features:'"Security, Dashboard, Streak Graph, Process of Project, Important Notes,Remainders,Schedule,WorkDoneToday"',
        tech:"MERN",
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
                  muted
                  width="590px"
                ></video>

                {/* Custom controls */}
                <div className="video-controls">
                  <button onClick={toggleMute}>
                    {muted ? "Unmute" : "Mute"}
                  </button>
                  <button onClick={handleFullScreen}>Fullscreen</button>
                  <button className="dynamic-btn">Code</button>
                  {video.live==="" ? "" :(
                  <button className="dynamic-btn">Live</button>
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