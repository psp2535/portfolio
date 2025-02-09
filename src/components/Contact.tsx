  import React, { useRef } from 'react';
  import emailjs from '@emailjs/browser';
  import './Contact.css'; // Import CSS file
  import background from "../assets/background.mp4";

  export const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (form.current) {
        emailjs
          .sendForm('service_rvsnym5', 'template_x07h8vm', form.current, {
            publicKey: 'vk3tKw9nA7h5-YtAH',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error: { text: any; }) => {
              console.log('FAILED...', error.text);
            }
          );
      }
    };

    return (
      <div className="contact-container" id='contact'>
        <video autoPlay loop muted className="background-video">
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Let's get in touch</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
          
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  };
