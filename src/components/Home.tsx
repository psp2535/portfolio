// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./Home.css";
// import background from "../assets/background.mp4";

// export const Home = () => {
//   // Titles that will change dynamically
//   const titles = ["Web Developer", "Passionate Programmer", "UI/UX Designer"];
//   const [index, setIndex] = useState(0);

//   // Change text every 2.5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % titles.length);
//     }, 2500); // 2.5 seconds interval

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="home-section">
//       {/* Background Video */}
//       <video autoPlay loop muted playsInline className="background-video">
//         <source src={background} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay for better readability */}
//       <div className="overlay"></div>

//       {/* Content */}
//       <div className="home-content">
//         <h1>
//           Hi! I'm <span className="highlight">Surendra</span>
//         </h1>

//         {/* Animated Text */}
//         <motion.p
//           key={index} // Key change triggers animation
//           className="animated-text"
//           initial={{ opacity: 0, y: 10 }} // Start animation
//           animate={{ opacity: 1, y: 0 }} // End animation
//           exit={{ opacity: 0, y: -10 }} // Exit animation
//           transition={{ duration: 0.8 }} // Smooth transition
//         >
//           {titles[index]}
//         </motion.p>

//         <button className="connect-btn">Let's Connect</button>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import background from "../assets/background.mp4";
import { FaArrowDown } from "react-icons/fa"; // Import an icon

export const Home = () => {
  const titles = ["Web Developer", "Passionate Programmer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500); // 2.5 seconds interval

    return () => clearInterval(interval);
  }, []);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-section" id="home-section">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <div className="home-content">
        <h1>
          Hi! I'm <span className="highlight">Sai Pranav</span>
        </h1>

        <motion.p
          key={index}
          className="animated-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          {titles[index]}
        </motion.p>
      </div>

      <div className="scroll-down-btn" onClick={scrollToSkills}>
        <FaArrowDown className="scroll-icon" />
      </div>
    </div>
  );
};
