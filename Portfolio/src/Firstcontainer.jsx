import React, { useState, useEffect } from "react";
import "./Firstcontainer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";

export const Firstcontainer = () => {
  const skills = [
    "Java",
    "Python",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Sql",
    "problem_solving",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    let typingSpeed = 150;

    if (isDeleting) typingSpeed /= 2;

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentSkill.substring(0, prev.length - 1)
          : currentSkill.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, skills, currentSkillIndex]);

  const slides = [
    {
      id: 1,
      content: (
        <div className="slide-1">
          <div className="navbar">
            <ul>
              <a href="#home">
                <li>Home</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#projects">
                <li>Project</li>
              </a>
              <a href="#certificate">
                <li>Certificates</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className="slide-container">
            <div className="details">
              <h1>Hi, I am</h1>
              <h1>
                MARIKANTI <b>SAIKUMAR</b>
              </h1>
              <h1>
                My skills are <span className="typing">{displayText}</span>
                <span className="cursor">|</span>
              </h1>
              <div>
                <p>
                  I’m an <s>AI and Machine Learning</s> student who enjoys
                  exploring new technologies and solving real-world problems. I
                  have developed multiple <s>projects </s>by identifying my own{" "}
                  <s>problem statements</s>, which helped me gain practical
                  experience in building intelligent and data-driven solutions.
                  I’m passionate about continuous learning, innovation, and
                  applying AI concepts to create meaningful impact.
                </p>
              </div>
              <div className="imgdiv">
                <a href="https://leetcode.com/u/saimudhiraj64">
                  <img
                    src="/leetcode.png"
                    width="30px"
                    height="30px"
                    className="img"
                  ></img>
                </a>
                <h3>300+</h3>
                <a href="https://www.geeksforgeeks.org/user/sai_mudhiraj_034">
                  <img
                    src="/gfg.png"
                    width="30px"
                    height="26px"
                    className="img"
                  ></img>
                </a>
                <h3>150+</h3>
              </div>
              <div className="maildiv">
                <a
                  href="https://linkedin.com/in/yourlinkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>
                <h4>saimudhiraj6410@gmail.com</h4>
              </div>
              <div className="icondiv">
                <div className="social-icons">
                  <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marikanti-sai-kumar-438866287"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a href="mailto:youremail@example.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            <div className="slide-1_pic">
              <img className="sai_pic" src="/sai_pic.png" alt="Sai Kumar" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="slide-2">
          <div className="about-container">
            <div className="slide-2_pic">
              <img className="sai_pic2" src="/sai_pic.png" alt="Sai Kumar" />
            </div>
            <div className="about-details">
              <h2>Introducing Me</h2>
              <p>
                My name is <s>Sai Kumar</s>, and I am an{" "}
                <s>AI & Machine Learning</s> student with a passion for learning
                new technologies and solving
                <s>real-world</s> problems. I completed my diploma at{" "}
                <s>TRR College</s> from
                <s> 2020 </s>to <s>2023</s> , which laid a strong foundation in{" "}
                <s>computer science and programming</s>. Currently, I am
                pursuing my <s> B.Tech </s>at <s>Anurag University </s> from{" "}
                <s>2023</s> to <s>2026</s>, where I have maintained a strong
                academic record with an <s>8.35 GPA</s>. Alongside my studies, I
                have actively honed my <s>problem-solving</s> skills by
                completing over <s>300+</s>
                problems on <s>LeetCode </s>and <s>150+</s> problems on{" "}
                <s>GeeksforGeeks</s>. I have undertaken several <s>projects</s>
                based on my <s>own problem statements</s>, which allowed me to
                practically apply concepts and enhance my learning. My
                experience with <s>MERN stack</s> projects has strengthened my
                expertise in <s>authentication</s>,<s>API development</s>,
                <s>schema design</s>, and working with both <s>SQL</s> and{" "}
                <s>NoSQL databases</s>. I am also proficient in <s>Java </s>and
                regularly solve problems to improve my coding and logical
                thinking abilities. Participating in hackathons has further
                enhanced my hands-on experience,
                <s>teamwork</s>, and ability to tackle challenges creatively. I
                am continuously exploring new tools and <s>technologies</s> to
                grow as a developer and create meaningful solutions. My journey
                reflects a blend of <s>academics</s>,{" "}
                <s>practical experience </s>, and a relentless drive to learn
                and innovate in the field of <s>AI & ML</s>.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="slide-3">
          <div className="education-tree">
            <div className="tree-line"></div>

            <div className="tree-branch left-branch">
              <div className="tree-box">
                <h3>College</h3>
                <p>
                  <strong>College:</strong> Anurag University
                </p>
                <p>
                  <strong>Course:</strong> B.Tech in AI & ML
                </p>
                <p>
                  <strong>Years:</strong> 2023 - 2026
                </p>
                <p>
                  <strong>Place:</strong>Ghatkesar,Hyderabad
                </p>
              </div>
              <div className="branch-line"></div>
            </div>

            <div className="tree-branch right-branch">
              <div className="branch-line"></div>
              <div className="tree-box">
                <h3>College</h3>
                <p>
                  <strong>College:</strong>T.R.R polytechnic college
                </p>
                <p>
                  <strong>Course:</strong>Computer Science and Engineering
                </p>
                <p>
                  <strong>Years:</strong> 2020 - 2023
                </p>
                <p>
                  <strong>Place:</strong>Meerpet,Hyderabad
                </p>
              </div>
            </div>
            <div className="tree-branch left-branch-down">
              <div className="tree-box">
                <h3>Schooling</h3>
                <p>
                  <strong>School:</strong>Sri Sai Grammer High School
                </p>
                <p>
                  <strong>Years:</strong> 2018 - 2020
                </p>
                <p>
                  <strong>Board:</strong>ssc
                </p>
                <p>
                  <strong>Place:</strong>Hyderabad
                </p>
              </div>
              <div className="branch-line"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  //   useEffect(() => {

  //     intervalRef.current = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % slides.length);
  //     },10000);
  //   return () => clearInterval(intervalRef.current);
  // }, [isUserInteracting, slides.length]);

  // const handleUserClick = (index) => {
  //   setIsUserInteracting(true);
  //   setCurrentIndex(index);
  //   clearInterval(intervalRef.current);
  //   setTimeout(() => setIsUserInteracting(false),10000);
  // };
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="container" id="home">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              {slide.content}
            </div>
          ))}
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};
