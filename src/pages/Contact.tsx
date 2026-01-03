// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import '../styles/Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <div className="contact-header">
//         <h1>Contact Us</h1>
//       </div>

//       <div className="contact-container">
//         <div className="contact-info">
//           <div className="info-item">
//             <MapPin size={24} className="info-icon" />
//             <div>
//               <h3>Our Location</h3>
//               <p>2 No.02, 123/1, Gandhiji Rd, opp. Catholic Church, Mayiladuthurai, Tamil Nadu 609001</p>
//             </div>
//           </div>

//           <div className="info-item">
//             <Phone size={24} className="info-icon" />
//             <div>
//               <h3>Phone Number</h3>
//               <p><a href="tel:+917639571484">+91 76395 71484</a></p>
//             </div>
//           </div>

//           <div className="info-item">
//             <Mail size={24} className="info-icon" />
//             <div>
//               <h3>Email Address</h3>
//               <p><a href="mailto:zwarma.mly1983@gmail.com">zwarma.mly1983@gmail.com</a></p>
//             </div>
//           </div>

//           <div className="info-item">
//             <Clock size={24} className="info-icon" />
//             <div>
//               <h3>Opening Hours</h3>
//               <p>Open daily: 02:00 PM - 10:30 PM</p>
//             </div>
//           </div>
//         </div>

//         <div className="contact-form-container">
//           <h2>Send Us a Message</h2>
//           <form className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" name="name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone (optional)</label>
//               <input type="tel" id="phone" name="phone" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" name="message" rows={5} required></textarea>
//             </div>
//             <button type="submit" className="submit-button">Send Message</button>
//           </form>
//         </div>
//       </div>

//       <div className="map-container">
//         <iframe 
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5688550054784!2d79.65191087470573!3d11.268935290058406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5501a0b1a8b61b%3A0x8e35398e48a3aa25!2sZwarma%20The%20Shawarma%20Makers!5e0!3m2!1sen!2sin!4v1718124108209!5m2!1sen!2sin" 
//           width="600" 
//           height="450" 
//           style={{ border: 0 }} 
//           allowFullScreen 
//           loading="lazy" 
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Zwarma Restaurant Location"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import { useRef, useState } from 'react';
// import toast from 'react-hot-toast';
// import emailjs from 'emailjs-com';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import '../styles/Contact.css';

// const [isSending, setIsSending] = useState(false);
// const isSendingRef = useRef(false);

// const Contact = () => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // 🔒 HARD LOCK (prevents double click)
//     if (isSendingRef.current) return;

//     isSendingRef.current = true;
//     setIsSending(true);

//     emailjs
//       .sendForm(
//         'service_q5emrkm',
//         'template_i7l85h6',
//         formRef.current,
//         'Q3GwIc419Yy5t5wGs'
//       )
//       .then(() => {
//         toast.success('Message sent successfully!');
//         formRef.current.reset();
//       })
//       .catch(() => {
//         toast.error('Failed to send message. Please try again.');
//       })
//       .finally(() => {
//         isSendingRef.current = false; // 🔓 unlock
//         setIsSending(false);
//       });
//   };



//   return (
//     <div className="contact-page">
//       <div className="contact-header">
//         <h1>Contact Us</h1>
//       </div>

//       <div className="contact-container">
//         <div className="contact-info">
//           <div className="info-item">
//             <MapPin size={24} className="info-icon" />
//             <div>
//               <h3>Our Location</h3>
//               <p>2 No.02, 123/1, Gandhiji Rd, opp. Catholic Church, Mayiladuthurai, Tamil Nadu 609001</p>
//             </div>
//           </div>

//           <div className="info-item">
//             <Phone size={24} className="info-icon" />
//             <div>
//               <h3>Phone Number</h3>
//               <p><a href="tel:+917639571484">+91 76395 71484</a></p>
//             </div>
//           </div>

//           <div className="info-item">
//             <Mail size={24} className="info-icon" />
//             <div>
//               <h3>Email Address</h3>
//               <p><a href="mailto:zwarma.mly1983@gmail.com">zwarma.mly1983@gmail.com</a></p>
//             </div>
//           </div>

//           <div className="info-item">
//             <Clock size={24} className="info-icon" />
//             <div>
//               <h3>Opening Hours</h3>
//               <p>Open daily: 02:00 PM - 10:30 PM</p>
//             </div>
//           </div>
//         </div>

//         <div className="contact-form-container">
//           <h2>Send Us a Message</h2>
//           <form ref={formRef} onSubmit={sendEmail} className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" name="user_name" placeholder='Name' required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="user_email" placeholder='Email' required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone (optional)</label>
//               <input type="tel" id="phone" name="user_phone" placeholder='Phone Number' />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" name="message" placeholder='Enter your message here...' rows={5} required></textarea>
//             </div>
//             <button
//               type="submit"
//               className="submit-button"
//               disabled={isSending}
//             >
//               {isSending ? (
//                 <span className="spinner"></span>
//               ) : (
//                 'Send Message'
//               )}
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="map-container">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.69813637640405!2d79.64821460453892!3d11.100691172652258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55272d92fea517%3A0x98b46917af64e07a!2sZwarma%20Mayiladuthurai!5e0!3m2!1sen!2sin!4v1746186332627!5m2!1sen!2sin"
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Zwarma Restaurant Location"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const isSendingRef = useRef(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 🔒 HARD LOCK (prevents double click)
    if (isSendingRef.current) return;

    // Custom validation with toast messages
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name')?.trim();
    const email = formData.get('user_email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name) {
      toast.error('Please enter your name');
      return;
    }
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    if (!message) {
      toast.error('Please enter your message');
      return;
    }

    isSendingRef.current = true;
    setIsSending(true);

    emailjs
      .sendForm(
        'service_q5emrkm',
        'template_i7l85h6',
        formRef.current,
        'Q3GwIc419Yy5t5wGs'
      )
      .then(() => {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        isSendingRef.current = false; // 🔓 unlock
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <MapPin size={24} className="info-icon" />
            <div>
              <h3>Our Location</h3>
              <p>2 No.02, 123/1, Gandhiji Rd, opp. Catholic Church, Mayiladuthurai, Tamil Nadu 609001</p>
            </div>
          </div>

          <div className="info-item">
            <Phone size={24} className="info-icon" />
            <div>
              <h3>Phone Number</h3>
              <p><a href="tel:+917639571484">+91 76395 71484</a></p>
            </div>
          </div>

          <div className="info-item">
            <Mail size={24} className="info-icon" />
            <div>
              <h3>Email Address</h3>
              <p><a href="mailto:zwarma.mly1983@gmail.com">zwarma.mly1983@gmail.com</a></p>
            </div>
          </div>

          <div className="info-item">
            <Clock size={24} className="info-icon" />
            <div>
              <h3>Opening Hours</h3>
              <p>Open daily: 02:00 PM - 10:30 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form ref={formRef} onSubmit={sendEmail} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" placeholder='Name' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" placeholder='Email' />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input type="tel" id="phone" name="user_phone" placeholder='Phone Number' />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder='Enter your message here...' rows={5}></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSending}
            >
              {isSending ? (
                <span className="spinner"></span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.69813637640405!2d79.64821460453892!3d11.100691172652258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55272d92fea517%3A0x98b46917af64e07a!2sZwarma%20Mayiladuthurai!5e0!3m2!1sen!2sin!4v1746186332627!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zwarma Restaurant Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;