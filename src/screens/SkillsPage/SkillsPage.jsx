import "./SkillsPage.css";
import java from "../../assets/images/java.png";
import javascript from "../../assets/images/javascript.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import postman from "../../assets/images/postman.png";
import react from "../../assets/images/react.png";
import reactnative from "../../assets/images/reactnative.png";
import springboot from "../../assets/images/springboot.png";
import node from "../../assets/images/node.png";
import expo from "../../assets/images/expo.png";

import mtajava from "../../assets/images/mtajava.png";
import mtajavascript from "../../assets/images/mtajavascript.png";
import mtapython from "../../assets/images/mtapython.png";
import mtasecurity from "../../assets/images/mtasecurity.png";
import mtanetwork from "../../assets/images/mtanetwork.png";

const SkillsPage = () => {
  const skills = [
    { id: 1, name: "java", icon: java },
    { id: 2, name: "JavaScript", icon: javascript },
    { id: 3, name: "HTML", icon: html },
    { id: 4, name: "CSS", icon: css },
    { id: 6, name: "Postman", icon: postman },
    { id: 5, name: "React", icon: react },
    { id: 8, name: "React/Native", icon: reactnative },
    { id: 9, name: "Springboot", icon: springboot },
    { id: 7, name: "Node", icon: node },
    { id: 10, name: "Expo", icon: expo },
  ];

  const certs = [
    {
      id: 1,
      name: "MTA Intro to Java Programming",
      icon: mtajava,
      path:
        "https://www.credly.com/badges/923b8393-d255-429f-9c5d-017ed090fcab",
    },
    {
      id: 2,
      name: "MTA Intro to JavaScript Programming",
      icon: mtajavascript,
      path:
        "https://www.credly.com/badges/d8754c45-6d1d-4cb6-a224-f121cc82c36b",
    },
    {
      id: 3,
      name: "MTA Intro to Python Programming",
      icon: mtapython,
      path:
        "https://www.credly.com/badges/ee4cf9a8-2f3f-4387-8cad-1dcac3c682a4",
    },
    {
      id: 4,
      name: "MTA Security Fundamentals",
      icon: mtasecurity,
      path:
        "https://www.credly.com/badges/9d663765-fc1d-4163-aa46-0fe16fcd27ef",
    },
    {
      id: 5,
      name: "MTA Network Fundamentals",
      icon: mtanetwork,
      path:
        "https://www.credly.com/badges/35c367c9-28f3-47f3-ac20-fe23cf5bb745",
    },
  ];

  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1>Known technologies</h1>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item"><img src={skill.icon} className="skill-icon" alt="skill" /></div>
          ))}
        </div>
          

        </div>
      <div className="cert-conatiner">
        <h1>My Certifications</h1>
        <div className="certs-list">
          {certs.map((cert) => (
            <div className="cert-item"><a href={cert.path}><img src={cert.icon} className="cert-icon" alt="skill" /></a></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
