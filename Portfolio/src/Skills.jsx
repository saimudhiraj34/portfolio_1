import React from "react";
import "./Skills.css";
import { FaHtml5 } from "react-icons/fa";
import {
  FaJava,
  FaGithub,
  FaPython,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-inner">
        <div className="skill-box">
          <h2>Skills & Frameworks</h2>
          <div className="skill-boxes">
            <div className="box">
              <FaJava style={{ fontSize: "40px", color: "#E76F00" }} />
              <div>JAVA</div>
            </div>
            <div className="box">
              <FaPython style={{ fontSize: "40px", color: "#3776AB" }} />
              <div className="intext">PYTHON</div>
            </div>
            <div className="box">
              <FaJsSquare style={{ fontSize: "40px", color: "#F7DF1E" }} />
              <div className="intext">JS</div>
            </div>
            <div className="box">
              <FaDatabase style={{ fontSize: "40px", color: "#4DB33D" }} />
              <div className="intext">SQL</div>
            </div>
            <div className="box">
              <FaHtml5 style={{ fontSize: "40px", color: "#E34F26" }} />
              <div>HTML</div>
            </div>
            <div className="box">
              <FaCss3Alt style={{ fontSize: "40px", color: "#1572B6" }} />
              <div className="intext">CSS</div>
            </div>

            <div className="box">
              <SiTailwindcss style={{ fontSize: "40px", color: "#38BDF8" }} />
              <div className="intext">TAILWIND</div>
            </div>
            <div className="box">
              <FaBootstrap style={{ fontSize: "40px", color: "#7952B3" }} />
              <div className="intext" style={{ fontSize: "13px" }}>
                BOOTSTRAP
              </div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                style={{ width: "40px" }}
              ></img>
              <div className="intext">MongoDB</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                style={{ width: "40px" }}
              ></img>
              <div className="intext">Node.js</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                style={{ width: "40px", filter: " invert(1)" }}
              ></img>
              <div className="intext">Express</div>
            </div>
          </div>
        </div>
        <div className="tool-box">
          <h2>Tools & Libraries</h2>
          <div className="tool-boxes">
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VS Code"
                style={{ width: "40px" }}
              />
              <div className="intext">VS Code</div>
            </div>
            <div className="box">
              <img
                src="./postman.png"
                alt="Postman"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="intext">Postman</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"
                alt="PyCharm"
                style={{ width: "40px" }}
              />
              <div className="intext">PyCharm</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
                alt="Jupyter"
                style={{ width: "40px" }}
              />
              <div className="intext">Jupyter</div>
            </div>
            <div className="box">
              <FaGithub style={{ fontSize: "40px", color: "#ffffff" }} />
              <div className="intext">GitHub</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                alt="NumPy"
                style={{ width: "40px" }}
              />
              <div className="intext">NumPy</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                alt="OpenCV"
                style={{ width: "40px" }}
              />
              <div className="intext">OpenCV</div>
            </div>
            <div className="box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                alt="Pandas"
                style={{ width: "40px" }}
              />
              <div className="intext">Pandas</div>
            </div>
            <div className="box">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
                alt="Matplotlib"
                style={{ width: "40px" }}
              />
              <div className="intext">Matplotlib</div>
            </div>
            <div className="box">
              <FaReact style={{ fontSize: "40px", color: "#61DBFB" }} />
              <div className="intext">REACT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
