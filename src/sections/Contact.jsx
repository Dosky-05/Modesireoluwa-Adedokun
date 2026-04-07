import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── Replace these three values with your EmailJS credentials ───────────────
const EMAILJS_SERVICE_ID = 'service_wkn21nx';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_sbrhi2y';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'pSoxc0AC9c9QbzbHA';   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────────────────

// ─── Replace with your actual WhatsApp number (digits only, with country code)
const WHATSAPP_NUMBER = '2348166059298'; // e.g. Nigeria +234 → '2348012345678'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Modesire%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20love%20to%20connect!`;

  return (
    <section className="contact section-gap" id="contact">
      <div className="container">
        <div className="contact__grid">

          {/* ── Left column ── */}
          <div className="contact__left reveal">
            <span className="section-tag">Let's Talk</span>
            <h2 className="section-heading">
              Got a project<br />
              <em>in mind?</em>
            </h2>
            <p className="contact__sub">
              I'm open to freelance work, collaborations and new opportunities.
              Send a message and I'll get back to you.
            </p>

            <div className="contact__info">
              <a href="mailto:adedokunmodesireoluwa@gmail.com" className="contact__info-item">
                <div className="contact__info-icon"><i className="fa fa-envelope" /></div>
                <span>adedokunmodesireoluwa@gmail.com</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="contact__info-item contact__info-item--whatsapp"
              >
                <div className="contact__info-icon contact__info-icon--whatsapp">
                  <i className="fa-brands fa-whatsapp" />
                </div>
                <span>Reach me on whatsapp</span>
              </a>

              <a href="https://github.com/Dosky-05" target="_blank" rel="noreferrer" className="contact__info-item">
                <div className="contact__info-icon"><i className="fa-brands fa-github" /></div>
                <span>github.com/Dosky-05</span>
              </a>

              <a href="https://www.linkedin.com/in/modesireoluwa-adedokun-373b9b352" target="_blank" rel="noreferrer" className="contact__info-item">
                <div className="contact__info-icon"><i className="fa-brands fa-linkedin-in" /></div>
                <span>linkedin.com/in/modesireoluwa-adedokun</span>
              </a>
            </div>
          </div>

          {/* ── Right column — form ── */}
          <div className="contact__right reveal" style={{ transitionDelay: '0.15s' }}>

            {status === 'sent' ? (
              <div className="contact__success">
                <div className="contact__success-icon"><i className="fa fa-check" /></div>
                <h3>Message Sent!</h3>
                <p>Thanks {form.from_name}, I'll be in touch soon.</p>
                <button onClick={() => { setStatus('idle'); setForm({ from_name: '', from_email: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>

                {status === 'error' && (
                  <div className="contact__error">
                    <i className="fa fa-triangle-exclamation" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Michael Davis"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="michaeldavis@gmail.com"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><i className="fa fa-spinner fa-spin" /> Sending…</>
                  ) : (
                    <>Send Message <i className="fa fa-arrow-right" /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
