import React from "react";
import "./portfolio.scss";
import Navbar from "../navbar/Navbar"; // Import the Navbar component

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
    img: "https://img.freepik.com/free-vector/business-people-communicate-with-chatbot-application-chatbot-artificial-intelligence-talkbots-service-interactive-agent-support-concept-bright-vibrant-violet-isolated-illustration_335657-406.jpg?uid=R156374610&ga=GA1.1.1398468410.1734755238&semt=ais_hybrid",
    desc: "Created an intelligent chatbot using natural language processing and machine learning to handle customer inquiries, provide support, and assist with troubleshooting. The chatbot is designed to improve customer service efficiency.",
  },
  {
    id: 7,
    title: "Machine Learning Models for Predictive Analysis",
    img: "https://img.freepik.com/free-vector/data-analyst-oversees-governs-income-expenses-with-magnifier-financial-management-system-finance-software-it-management-tool-concept_335657-1891.jpg?uid=R156374610&ga=GA1.1.1398468410.1734755238&semt=ais_hybrid",
    desc: "Developed various machine learning models for predictive analysis in fields like finance, healthcare, and marketing. These models use historical data to predict trends and outcomes, assisting businesses in making data-driven decisions.",
  },
  {
    id: 8,
    title: "Anomaly Detection in Network Traffic",
    img: "https://img.freepik.com/free-photo/blurred-traffic-light-trails-road_1359-716.jpg?semt=ais_hybrid",
    desc: "Built an anomaly detection system that uses machine learning algorithms to detect unusual patterns in network traffic. This system is designed to improve network security by identifying potential threats like cyberattacks and unauthorized access.",
  },
  {
    id: 9,
    title: "AI Chatbot for Mental Health Support",
    img: "https://bloggingwithsubi.com/wp-content/uploads/2024/04/dallc2b7e-2024-04-21-18.58.12-an-illustration-representing-generative-ai-in-mental-health-therapy.-the-image-should-depict-a-human-brain-with-digital-connections-to-signify-ai.-in-.webp",
    desc: "Developed an AI-powered chatbot that provides mental health support by offering therapeutic conversations and guidance. The chatbot leverages NLP to understand and respond empathetically to users' concerns.",
  },
  {
    id: 10,
    title: "Email Analysis Chatbot",
    img: "https://img.freepik.com/free-vector/chatbot-services-flat-composition-with-man-talking-cute-robot-laptop-screen-vector-illustration_98292-8714.jpg?uid=R156374610&ga=GA1.1.1398468410.1734755238&semt=ais_hybrid",
    desc: "Created a chatbot that analyzes and processes emails using NLP techniques. It helps users manage their inbox by categorizing and prioritizing emails, as well as generating automated responses based on the content.",
  },
  {
    id: 11,
    title: "College Selection Machine Learning Model",
    img: "https://img.freepik.com/free-vector/online-certification-illustrated-concept_23-2148570824.jpg?t=st=1736492038~exp=1736495638~hmac=b541ed3bcd43f8ec585ede6c310e630a30d6dec44e98d285c2c9a262c931f005&w=740",
    desc: "Developed a machine learning model to help students select the right college based on various factors such as location, cost, course offerings, and personal preferences. The model predicts the best fit based on user input and data analysis.",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Featured Projects</h1>
      </div>
      <div className="portfolio-container">
        {items.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="portfolio-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
