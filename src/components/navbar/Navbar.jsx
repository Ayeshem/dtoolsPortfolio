// import Links from "../sidebar/links/Links"; // Correct import path
// import "./navbar.scss";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="wrapper">
//         <motion.span
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           DTools Incorporation
//         </motion.span>
        
//         <Links /> {/* Add the Links component */}
//         <div className="social">
//           {/* Instagram Link */}
//           <a 
//             href="https://www.instagram.com/dtools.incorporation?igsh=MWg3ejR0bW5ydnEwcQ==" 
//             target="_blank" 
//             rel="noopener noreferrer"
//           >
//             <img src="/instagram.png" alt="Instagram" />
//           </a>
//           {/* LinkedIn Link */}
//           <a 
//             href="https://www.linkedin.com/posts/d-tools-inc_ai-automation-futuretech-activity-7241433396780949504-Pkff?utm_source=share&utm_medium=member_ios" 
//             target="_blank" 
//             rel="noopener noreferrer"
//           >
//             <img src="/linkedin.png" alt="LinkedIn" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import Links from "../sidebar/links/Links"; // Correct import path
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="brand">
          {/* Add favicon image */}
          <img src="/favicon.ico" alt="DTools Logo" className="logo" />
          
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            DTools Incorporation
          </motion.span>
        </div>

        <Links /> {/* Add the Links component */}
        
        <div className="social">
          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/dtools.incorporation?igsh=MWg3ejR0bW5ydnEwcQ==" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
          
          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/posts/d-tools-inc_ai-automation-futuretech-activity-7241433396780949504-Pkff?utm_source=share&utm_medium=member_ios" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
