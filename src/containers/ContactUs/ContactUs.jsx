import './ContactUs.scss';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactFlagsSelect from 'react-flags-select';
import { customList } from 'country-codes-list';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const customLabels = customList(
  'countryCode',
  '{countryNameEn} (+{countryCallingCode})'
);

const ContactUs = ({ header }) => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'IN',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { name, email, country, phone, message } = formData;

  const validateFields = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.match(/^[\w.-]+@[\w.-]+\.\w{2,}$/))
      newErrors.email = 'Invalid email';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (!message.trim()) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const handleCountrySelect = (code) => {
    setFormData((prevData) => ({ ...prevData, country: code }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        'service_bx12h3g',
        'template_8v692lf',
        formRef.current,
        'jsFQ5ogiBTrOF7Py_'
      )
      .then(() => {
        toast.success('Message sent! ✅');
        setFormData({
          name: '',
          email: '',
          country: 'IN',
          phone: '',
          message: '',
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        toast.error('Something went wrong. Try again later.');
        setLoading(false);
      });
  };

  return (
    <section
      className="contact-section bg-[#FFD646] my-10 py-10"
      aria-label="Contact Us section"
    >
      <Toaster position="bottom-center" />
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.6 }}
        className="app__wrapper"
      >
        <h2 className="h1-text text-center">{header}</h2>

        <form
          ref={formRef}
          className="app__flex-contact w-full"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="app__footer-form app__flex-row">
            <div className={`app__flex ${errors.name ? 'has-error' : ''}`}>
              <input
                className="p-text"
                type="text"
                name="name"
                value={name}
                onChange={handleChangeInput}
                placeholder="Your Name"
                aria-label="Your Name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className={`app__flex ${errors.email ? 'has-error' : ''}`}>
              <input
                className="p-text"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="Your Email"
                aria-label="Your Email"
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="app__phone-row">
              <div className="country-select-wrapper">
                <div className="custom-flag-select">
                  <ReactFlagsSelect
                    selected={country}
                    onSelect={handleCountrySelect}
                    searchable
                    customLabels={customLabels}
                  />
                </div>
              </div>
              <div className={`phone-field ${errors.phone ? 'has-error' : ''}`}>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleChangeInput}
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className="phone-input"
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>
            </div>
          </div>

          <div className="app__footer-form app__flex">
            <div className={`textarea-wrapper ${errors.message ? 'has-error' : ''}`}>
              <textarea
                className="p-text"
                name="message"
                value={message}
                onChange={handleChangeInput}
                placeholder="Your Message"
                aria-label="Your Message"
              />
              {errors.message && (
                <span className="error-text">{errors.message}</span>
              )}
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="p-text responsive-button"
              disabled={loading}
              aria-label="Submit contact form"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;