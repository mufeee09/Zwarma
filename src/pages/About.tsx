import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import '../styles/About.css';

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
            Established in 2015, Zwarma brings the authentic flavors of Middle Eastern cuisine to Mayiladuthurai. 
            What started as a small family-owned shawarma stand has grown into a beloved restaurant that serves 
            a variety of Middle Eastern delicacies.
          </p>
          <p>
            Our founder, inspired by travels across the Middle East, wanted to bring those vibrant flavors to our 
            community. Every recipe has been carefully crafted to preserve authenticity while adding our own unique touch.
          </p>
        </div>
        <div className="about-image"></div>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <div className="mission-container">
          <div className="mission-item">
            <div className="mission-icon quality"></div>
            <h3>Quality</h3>
            <p>We use only the freshest ingredients and authentic spices to create our dishes.</p>
          </div>
          <div className="mission-item">
            <div className="mission-icon authenticity"></div>
            <h3>Authenticity</h3>
            <p>Our recipes stay true to traditional Middle Eastern cooking methods.</p>
          </div>
          <div className="mission-item">
            <div className="mission-icon community"></div>
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