// complete app
import Test from "./Test";
import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

// const App = () => {
//   return (
//     <div>
//       <section id="Homepage">
//         <Navbar />
//         <Hero />
//       </section>
//       <section id="Services">
//         <Parallax type="services" />
//       </section>
//       <section>
//         <Services />
//       </section>
//       <section id="Portfolio">
//         <Parallax type="portfolio" />
//       </section>
//       <Portfolio />
//       <section id="Contact">
//         <Contact />
//       </section>
//       {/* Framer Motion Crash Course */}
//       {/* <Test/>
//     <Test/> */}
//     </div>
//   );
// };
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};


export default App;
