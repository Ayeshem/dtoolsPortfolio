// import { motion } from "framer-motion";

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };
// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   },
// };

// const Links = () => {
//   const items = ["Homepage", "Services", "Portfolio", "Contact"];

//   return (
//     <motion.div className="links" variants={variants}>
//       {items.map((item) => (
//         <motion.a
//           href={`#${item}`}
//           key={item}
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {item}
//         </motion.a>
//       ))}
//     </motion.div>
//   );
// };

// export default Links;

import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    { name: "Homepage", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={item.path}>{item.name}</Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
