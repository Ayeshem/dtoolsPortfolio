import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Innovative</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>  
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Digital Success.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IT Solutions</h2>
          <p>
          We offer comprehensive IT solutions, including software development, system integration, and technology consulting. Our services are designed to optimize and streamline business operations, helping you achieve greater efficiency and effectiveness.
          </p>
          <a
            href="https://github.com/fawazdar2196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ width: "100%" }}>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Artificial Intelligence</h2>
          <p>
          We develop advanced AI systems that provide data analysis, predictive modeling, and process automation. Our AI solutions are designed to drive innovation, improve decision-making, and automate complex processes for your business.
          </p>
          <a
            href="https://github.com/fawazdar2196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ width: "100%" }}>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Game Development</h2>
          <p>
          Our team specializes in designing and developing interactive gaming experiences. We create engaging gameplay and vibrant graphics for various platforms, ensuring immersive and enjoyable experiences for players.
          </p>
          <a
            href="https://github.com/fawazdar2196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ width: "100%" }}>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning Models</h2>
          <p>
          We design and implement machine learning models tailored to your needs, enabling predictive analytics, data-driven insights, and intelligent automation to empower your business decisions.
          </p>
          <a
            href="https://github.com/fawazdar2196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ width: "100%" }}>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI Chatbots</h2>
          <p>
          Our AI chatbots are designed to enhance customer engagement, streamline communication, and provide instant support. They are fully customizable and integrate seamlessly with your platforms.
          </p>
          <a
            href="https://github.com/fawazdar2196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ width: "100%" }}>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Live Dashboards Development</h2>
          <p>
          We specialize in creating live dashboards that provide real-time data visualization and insights, empowering you to monitor and make informed decisions effectively.
          </p>
          <a
            href="https://github.com/fawazdar2196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ width: "100%" }}>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
