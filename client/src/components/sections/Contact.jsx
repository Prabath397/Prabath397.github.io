import { useState } from 'react';
import { contact } from '../../data/portfolio';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${bodyText}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk about internships, junior roles, or collaborative builds.</h2>
          <p>
            The fastest way to reach me is by email, LinkedIn, or WhatsApp. I am based
            in {contact.location} and open to opportunities where I can learn, contribute, and grow.
          </p>
          <div className="contact-links">
            <a href={`tel:${contact.phone}`}>
              <i className="fas fa-phone"></i>
              {contact.phoneDisplay}
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
            <a href={`mailto:${contact.email}`}>
              <i className="fas fa-envelope"></i>
              {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>

        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button className="button button-primary" type="submit">
            <i className="fas fa-paper-plane"></i>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
