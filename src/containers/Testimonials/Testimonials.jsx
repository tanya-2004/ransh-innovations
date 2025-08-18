import './Testimonials.scss';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Shashwat',
      designation: 'IIT Jodhpur',
      shortDescription:
        'During my internship, I gained skills in Product Feature Implementation, PRD Documentation, User Flow Design, and Competitive Audits.',
      fullDescription:
        'The projects were challenging, allowing me to apply my experience in product and UI/UX design. Consistent work progress tracking and valuable feedback on attention to detail helped refine my skills. My mentor’s clear communication taught me how to collaborate effectively with designers and PMs. Despite working from home, the innovative projects made this a rewarding experience. I advise future interns to focus on the learning opportunity, regardless of the stipend.',
    },
    {
      id: 2,
      name: 'Yash Raj Gupta',
      designation: 'NIT Meghalaya',
      shortDescription:
        'During my internship, I developed and optimized web applications using JavaScript, React, and Node.js.',
      fullDescription:
        'Working on backend services and API integrations, the projects provided real-world challenges in performance optimization and scalability, requiring cross-functional teamwork. This internship stood out for its practical exposure to web development and backend services. Valuable feedback on coding practices and teamwork helped me grow. The collaborative work environment and dynamic projects motivated me to improve. I advise future interns to be proactive, embrace feedback, and stay adaptable to fully benefit from the experience.',
    },
    {
      id: 3,
      name: 'Himangi Verma',
      designation: 'IISc Bangalore',
      shortDescription:
        'During my internship at Ransh Innovation, I gained valuable skills in product management, including PRD creation.',
      fullDescription:
        'Wireframing, task allocation, and team collaboration while working on AI News Aggregator and sports projects gave me real-world exposure and meaningful contribution to product development. The mentorship I received, which provided both guidance and the freedom to work independently, was crucial to my growth. Ransh Innovation’s focus on learning, innovation, and providing practical experience and opportunities for growth sets it apart, making it an ideal place for interns to develop their skills and thrive.',
    },
    {
      id: 4,
      name: 'Saumya Bharti',
      designation: 'IGDTUW, Delhi',
      shortDescription:
        'During my internship, I improved time and team management skills and focused on writing clean, readable code.',
      fullDescription:
        'I applied my game development and UI/UX design experience to create user-centered projects. The freedom to explore new skills, regular feedback, and involvement in decision-making set this internship apart. My mentor’s guidance on reusable code was invaluable. Ransh Innovation’s focus on personal development created an ideal growth environment. I advise future interns to embrace this opportunity for both personal and professional growth.',
    },
    {
      id: 5,
      name: 'Rishabh Prasad',
      designation: 'NIT Kurukshetra',
      shortDescription:
        'During my internship, I gained experience with neural networks and large language models.',
      fullDescription:
        'Particularly fine-tuning BERT for news classification. The flexibility, daily feedback, and mentor guidance were key to my growth. The remote work environment motivated me to perform well. Ransh Innovation offers diverse projects and learning opportunities, making it a great place for interns. My advice: stay consistent and focus on applying your skills.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  const [scrollStep, setScrollStep] = useState(0);
  const [expandedStates, setExpandedStates] = useState({});
  const trackRef = useRef(null);

  function getVisibleItems() {
    const width = window.innerWidth;
    if (width > 1080) return 3;
    if (width > 768) return 2;
    return 1;
  }

  useEffect(() => {
    const updateVisible = () => {
      const items = getVisibleItems();
      setVisibleItems(items);
      setCurrentIndex(0);

      if (trackRef.current) {
        const item = trackRef.current.querySelector('.testimonial-slider-item-wrapper');
        if (item) {
          setScrollStep(item.getBoundingClientRect().width);
        }
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const handleNext = () => {
    const maxIndex = Math.max(0, testimonials.length - visibleItems);
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }

    if (window.innerWidth <= 768 && trackRef.current) {
      trackRef.current.scrollBy({
        left: scrollStep,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    if (window.innerWidth <= 768 && trackRef.current) {
      trackRef.current.scrollBy({
        left: -scrollStep,
        behavior: 'smooth',
      });
    }
  };

  const toggleExpand = (id) => {
    setExpandedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="app__wrapper mt-2 md:mt-10" aria-label="Intern testimonials">
      <div className="app__testimonials__section">
        <h1 className="h1-text">Testimonials</h1>

        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__test__profiles"
        >
          <div className="testimonial-slider-container">
            <div className="testimonial-slider">
              <div
                className="testimonial-slider-track"
                ref={trackRef}
                style={
                  window.innerWidth > 768
                    ? { transform: `translateX(-${currentIndex * scrollStep}px)` }
                    : undefined
                }
              >
                {testimonials.map((item) => (
                  <div className="testimonial-slider-item-wrapper" key={item.id}>
                    <TestimonialCard
                      item={item}
                      isExpanded={expandedStates[item.id]}
                      toggle={() => toggleExpand(item.id)}
                    />
                  </div>
                ))}

                {window.innerWidth <= 768 && (
                  <div className="testimonial-buffer-card" aria-hidden="true" />
                )}
              </div>
            </div>

            <div className="testimonial-nav">
              <button onClick={handlePrev}>
                <MdArrowCircleLeft className="testimonial-arrow" />
              </button>
              <button onClick={handleNext}>
                <MdArrowCircleRight className="testimonial-arrow" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ item, isExpanded, toggle }) {
  return (
    <div className={`testimonial-slider-item ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <h2 className="name">{item.name}</h2>
      <h3 className="designation">{item.designation}</h3>
      <p className="short-description">{item.shortDescription}</p>

      {isExpanded && (
        <div className="full-text">
          <p>{item.fullDescription}</p>
        </div>
      )}

      <button className="readmore-link" onClick={toggle}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default Testimonials;