// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import '../styles/Home.css';

// import img1 from "../images/IMG-20250204-WA0010.jpg"
// import img2 from "../images/IMG-20250204-WA0014.jpg"
// import img3 from "../images/IMG-20250204-WA0015.jpg"
// import img4 from "../images/IMG-20250204-WA0016.jpg"
// import img5 from "../images/IMG-20250204-WA0017.jpg"
// import img6 from "../images/IMG-20250204-WA0018.jpg"
// import img7 from "../images/IMG-20250204-WA0019.jpg"
// import img8 from "../images/IMG-20250204-WA0022.jpg"
// import img9 from "../images/IMG-20250204-WA0026.jpg"
// import img10 from "../images/IMG-20250204-WA0029.jpg" 
// import img11 from "../images/IMG-20250204-WA0030.jpg"
// import img12 from "../images/IMG-20250204-WA0031.jpg"
// import img13 from "../images/IMG-20250204-WA0033.jpg"
// import img14 from "../images/IMG-20250204-WA0032.jpg"

// const Home = () => {
//   return (
//     <div className="home-page">
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1 className="animate-fade-in">Welcome to Zwarma</h1>
//           <p className="animate-fade-in">Experience the authentic taste of Middle Eastern cuisine</p>
//           <Link to="/menu" className="cta-button animate-fade-in">
//             View Our Menu <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       <section className="about-preview">
//         <div className="section-content">
//           <h2>Our Story</h2>
//           <p>
//             At Zwarma, we bring the rich and aromatic flavors of Middle Eastern cuisine right to your plate. 
//             Our recipes are passed down through generations, ensuring an authentic culinary experience with 
//             every bite.
//           </p>
//           <Link to="/about" className="text-link">
//             Learn more about us <ArrowRight size={16} />
//           </Link>
//         </div>
//         <div className="about-image"></div>
//       </section>

//       <section className="special-dishes">
//         <h2>Our Special Dishes</h2>
//         <div className="special-dishes-carousel">
//           <div className="carousel-image">
//               {/* <img src={img1} />
//               <img src={img2} />
//               <img src={img3} /> */}
//           </div>
//           <div className="carousel-controls">
//             <button className="carousel-control prev">‹</button>
//             <button className="carousel-control next">›</button>
//           </div>
//         </div>
//       </section>

//       <section className="cta-section">
//         <h2>Come Visit Us Today</h2>
//         <p>Open daily from 02:00 PM to 10:30 PM</p>
//         <Link to="/contact" className="cta-button">
//           Find Our Location <ArrowRight size={18} />
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;


import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

import img1 from "../images/IMG-20250204-WA0010.jpg"
import img2 from "../images/IMG-20250204-WA0014.jpg"
import img3 from "../images/IMG-20250204-WA0015.jpg"
import img4 from "../images/IMG-20250204-WA0016.jpg"

const Home = () => {
  const carouselImages = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [carouselImages.length]);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animate-fade-in">Welcome to Zwarma</h1>
          <p className="animate-fade-in">
            Experience the authentic taste of Middle Eastern cuisine
          </p>
          <Link to="/menu" className="cta-button animate-fade-in">
            View Our Menu <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="about-preview">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            At Zwarma, we bring the rich and aromatic flavors of Middle Eastern
            cuisine right to your plate. Our recipes are passed down through
            generations, ensuring an authentic culinary experience with every
            bite.
          </p>
          <Link to="/about" className="text-link">
            Learn more about us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="about-image"></div>
      </section>

      <section className="special-dishes">
        <h2>Our Special Dishes</h2>
        <div className="special-dishes-carousel">
          <div className="carousel-image">
          {carouselImages.map((img, index) => (
            <img
              // src={carouselImages[currentIndex]}
              // alt="Special Dish"
              // className="carousel-img"
              key={index}
              src={img}
              alt={`Dish ${index + 1}`}
              className={`carousel-img ${index === currentIndex ? "active" : ""}`}
            />
          ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-control prev" onClick={goToPrev}>
              ‹
            </button>
            <button className="carousel-control next" onClick={goToNext}>
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Come Visit Us Today</h2>
        <p>Open daily from 02:00 PM to 10:30 PM</p>
        <Link to="/contact" className="cta-button">
          Find Our Location <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
