import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import '../styles/About.css';
import img from '../images/IMG-20250204-WA0010.webp'
import img1 from '../images/IMG-20250204-WA0011.webp'
import img2 from '../images/IMG-20250204-WA0012.webp'
import img3 from '../images/IMG-20250204-WA0013.webp'

interface FAQItem {
  question: string;
  answer: string;
}

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What type of cuisine does Zwarma serve?",
      answer: "Zwarma specializes in authentic Middle Eastern cuisine, particularly shawarma and other regional dishes with our own unique twist."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have a variety of vegetarian options including Veg Shawarma, Falafel Wrap, and Vegetable Sizzlers."
    },
    {
      question: "Can I book the restaurant for private events?",
      answer: "Yes, you can book our restaurant for private events and celebrations. Please contact us for more details and availability."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes, we offer home delivery within a 5km radius. You can place your order online or call us directly."
    },
    {
      question: "Are your ingredients halal?",
      answer: "Yes, all our meat products are certified halal. We ensure authentic preparation methods."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
      </div>

      <section className="about-story">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Opened in 2021, Zwarma is a franchise restaurant born out of our passion for bringing 
            authentic Middle Eastern flavors to our community. After connecting with the Zwarma brand, 
            we proudly launched our outlet to serve delicious, high-quality food with consistent taste and freshness.

          </p>
          <p>

            At Zwarma, we specialize in flavorful shawarmas, our signature Al-Faham chicken, sizzlers, 
            refreshing beverages, and aromatic biriyani. Every dish is prepared with carefully selected 
            ingredients to deliver a satisfying and memorable dining experience, blending authentic 
            flavors with a modern touch.
          </p>
        </div>
        <div className="about-image">
          <img src={img} alt="About Zwarma" />
        </div>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <div className="mission-container">
          <div className="mission-item">
            <div className="mission-icon">
              <img src={img1} alt="Quality Icon" />
            </div>
            <h3>Quality</h3>
            <p>We use only the freshest ingredients and authentic spices to create our dishes.</p>
          </div>
          <div className="mission-item">
            <div className="mission-icon">
              <img src={img2} alt="Authenticity Icon" />
            </div>
            <h3>Authenticity</h3>
            <p>Our recipes stay true to traditional Middle Eastern cooking methods.</p>
          </div>
          <div className="mission-item">
            <div className="mission-icon">
              <img src={img3} alt="Community Icon" />
            </div>
            <h3>Community</h3>
            <p>We strive to create a welcoming environment for families and friends to gather.</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <ChevronRight size={20} className="faq-icon" />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;