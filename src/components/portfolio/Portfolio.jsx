import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "../navbar/Navbar";  // Import the Navbar component


const items = [
  {
    id: 1,
    title: "Personalized AI Companion for Preserving Memories",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/ai-image-bhoot-044840722-16x9_0.png?VersionId=zprZrNFwhAtwQEcLnSwY2pbRlhzUK3l5&size=690:388",
    desc: "Enables users to connect with an AI system that learns and adopts the persona of a loved one who has passed away. Through a simple interface, users can upload personal content such as letters, audio, and videos. The AI then simulates conversations based on the uploaded material, remembering details like birthdays and favorite foods, creating a personalized, meaningful interaction.",
  },
  {
    id: 2,
    title: "Psychological Effect Detection Using Eyeballs",
    img: "https://images.pexels.com/photos/3396959/pexels-photo-3396959.jpeg",
    desc: "AI system for detecting psychological states using eye-gaze parameters. This advanced AI system leverages pupillographical data to assess psychological states based on eye-gaze parameters. By analyzing eye movement and pupil responses, the system can detect emotional and cognitive states.",
  },
  {
    id: 3,
    title: "Face Recognition",
    img: "https://images.pexels.com/photos/17484975/pexels-photo-17484975/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-can-help-humans-to-understand-the-complexity-of-biology-it-was-created-by-artist-khyati-trehan-as-part.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Our robust face recognition system provides real-time identification and verification of individuals. The system uses advanced algorithms to ensure accuracy and reliability in detecting and matching faces.",
  },
  {
    id: 4,
    title: "Pulmonary Fibrosis Progression",
    img: "https://www.researchgate.net/publication/349914254/figure/fig1/AS:999319893192704@1615267837413/Example-CT-slices-from-the-OSIC-Pulmonary-Fibrosis-Progression-Challenge-benchmark.ppm",
    desc: "Developed a machine learning model to predict the progression of pulmonary fibrosis using historical patient data. The model analyzes various indicators to forecast disease advancement and support clinical decision-making.",
  },
  {
    id: 5,
    title: "Emotion Recognition Using Facial Expressions",
    img: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Implemented an AI system capable of recognizing and interpreting human emotions through facial expressions. This technology uses computer vision and machine learning to analyze facial cues and determine emotional states.",
  },
  {
    id: 6,
    title: "Chatbot Development for Customer Support",
    img: "https://nordvpn.com/wp-content/uploads/blog-featured-what-is-chatbot.svg",
    desc: "Created an intelligent chatbot using natural language processing and machine learning to handle customer inquiries, provide support, and assist with troubleshooting. The chatbot is designed to improve customer service efficiency.",
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
