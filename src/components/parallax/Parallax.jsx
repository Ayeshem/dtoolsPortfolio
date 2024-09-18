import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  // Track the scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Move the entire background upwards as you scroll
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjust the percentage for desired speed

  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{
        y: yBg, // Move the entire background as you scroll
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <h1>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </h1>
      <motion.div
        className="mountains"
        style={{
          backgroundImage: `url("/mountains.png")`,
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          backgroundImage: `url("/stars.png")`,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Parallax;
