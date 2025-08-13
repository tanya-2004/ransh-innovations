import './Projects.scss';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import images from '../../constants/images';

const projects = [
  {
    imageUrl: images.project01,
    title: 'InstantSports',
    categories: ['Live Scores', 'Sports Analytics', 'UI/UX', 'Real-time Data'],
    shortDescription:
      'A digital platform that provides up-to-date information on various sports events. It offers live scores, match updates, news, and expert opinions in real-time.',
    fullDescription:
      'The platform is designed to be easy to use, with features like player profiles, team statistics, and historical data to help fans understand the game better. It covers a wide range of sports, including football, basketball, tennis, cricket, shooting, and many more. The platform also includes live scoreboards, match previews, and post-match reports, making it an engaging place for sports lovers. Whether you\'re tracking a football match, following a tennis tournament, or staying updated on a shooting event, this platform is your go-to source for all things sports.'
  },
  {
    imageUrl: images.project01,
    title: 'AI Powered News Aggregator',
    categories: ['AI', 'News Curation', 'Custom Feeds', 'Web/Mobile App'],
    shortDescription:
      'An intelligent platform that curates news and articles tailored to the user’s needs. It streamlines how users stay informed.',
    fullDescription:
      'In today’s digital world, the sheer volume of online information makes manual searching and monitoring news, blogs, and articles a time-consuming and inefficient task. There is a need for a customized, AI-driven solution to automatically aggregate relevant content based on specific user interests, particularly in areas of strategic, geopolitical, or industry significance. This project aims to create an AI-based web and mobile application that curates news and articles tailored to the user’s needs, providing a streamlined way to stay informed. The system will be designed to learn from user preferences, automatically gathering and presenting content from both domestic and international sources. By providing personalized, real-time updates, this application will save time, enhance efficiency, and improve the quality of insights, helping users make informed decisions based on the latest relevant information.'
  },
  {
    imageUrl: images.project01,
    title: 'Engle',
    categories: ['Language Learning', 'EdTech', 'Grammar', 'AI Feedback'],
    shortDescription:
      'A platform designed to help users improve their English skills in reading, writing, and speaking through personalized learning tools and feedback.',
    fullDescription:
      'This project is designed to help users improve their English skills in reading, writing, and speaking. Through a combination of personalized learning tools, interactive exercises, and real-time feedback, the platform aims to enhance vocabulary, grammar, pronunciation, and comprehension. Whether you\'re a beginner or looking to refine advanced skills, the platform adapts to your level and learning style, offering tailored lessons and activities to ensure steady progress and confidence in using English. The application features a variety of engaging methods such as quizzes, grammar correction, reading comprehension exercises, and writing suggestions. By tracking progress and offering constant feedback, users can focus on their areas of improvement and build a strong foundation in English. The goal is to create an immersive learning experience that makes mastering the language both effective and enjoyable, allowing users to enhance their communication skills for personal, academic, or professional success.'
  },
  {
    imageUrl: images.project01,
    title: 'SpeakEasy',
    categories: ['Conversational Learning', 'Languages', 'Practice Tool', 'Fluency'],
    shortDescription:
      'A conversational tool to boost spoken fluency and confidence when learning new languages by focusing on practical conversation.',
    fullDescription:
      'When you move to a new place, new city, learning a new language can be challenging, especially when it comes to speaking fluently and confidently. Many people struggle with overcoming the fear of making mistakes, lack of practice opportunities, and difficulty understanding everyday conversations. It creates a gap between native people and the newcomers. Traditional language learning methods often focus heavily on grammar and vocabulary, which can make it hard to develop practical speaking skills needed for real-world communication. This project addresses these challenges by providing an approach that simplifies the process, helping users build their speaking confidence and improve communication skills in a more natural and relatable way. By focusing on practical conversation and reducing the complexity of language learning, it aims to make speaking a new language easier and more accessible for everyone.'
  },
  {
    imageUrl: images.project01,
    title: 'SafePoint',
    categories: ['Emergency Response', 'Location-based', 'Crisis Management', 'Safety Tech'],
    shortDescription:
      'A platform that lets victims instantly locate and connect with nearby emergency responders to accelerate crisis response.',
    fullDescription:
      'In emergency situations, victims often struggle to quickly find and contact the right responders, leading to delays in receiving help. Traditional systems mostly rely on authorities to take the first step, but this can result in critical time lost. Victims need a way to directly reach emergency responders, such as police, ambulance, or fire services, in order to speed up the response process. This project aims to solve this problem by creating a platform that allows victims to instantly locate and directly connect with nearby emergency responders. By enabling victims to act quickly and independently, while responders continue to act as they would, the system ensures faster communication and reduces the overall response time. This collaborative approach, where both the victim and emergency responders can act simultaneously, helps cut the time it takes to provide assistance in half, improving overall efficiency and safety.'
  }
];

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const [readMoreIndex, setReadMoreIndex] = useState(null);
  const projectRefs = useRef({});

  const normalize = (title) => title.toLowerCase().replaceAll(' ', '-');

  useEffect(() => {
    projects.forEach(({ title }) => {
      const id = normalize(title);
      if (!projectRefs.current[id]) {
        projectRefs.current[id] = React.createRef();
      }
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    const ref = projectRefs.current[hash];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      const index = projects.findIndex((p) => normalize(p.title) === hash);
      setOpenIndex(index);
    }
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setReadMoreIndex(null);
  };

  const toggleReadMore = (index) => {
    setReadMoreIndex(readMoreIndex === index ? null : index);
  };

  return (
    <section className="app__wrapper mt-2 md:mt-10" aria-label="Project showcase section">
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
        <h1 className="h1-text">Our Projects</h1>

        <div className="app__projects">
          {projects.map((item, index) => {
            const id = normalize(item.title);
            const isOpen = openIndex === index;
            const isExpanded = readMoreIndex === index;

            return isOpen ? (
              <motion.div
                key={index}
                id={id}
                ref={projectRefs.current[id]}
                className="app__project-openitem"
                onClick={() => toggleIndex(index)}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="project-content"
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="bold-text left-align">{item.title}</h2>
                  <ul className="app__work-filter">
                    {item.categories.map((cat, catIndex) => (
                      <li key={catIndex} className="app__work-filter-item app__flex p-text">
                        {cat}
                      </li>
                    ))}
                  </ul>
                  <p className="p-text">{item.shortDescription}</p>
                  {item.fullDescription && (
                    <>
                      {isExpanded && <p className="p-text">{item.fullDescription}</p>}
                      <button
                        className="readmore-link"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleReadMore(index);
                        }}
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    </>
                  )}
                </motion.div>
                <img src={item.imageUrl} alt={`Visual preview of ${item.title}`} />
              </motion.div>
            ) : (
              <div
                key={index}
                id={id}
                ref={projectRefs.current[id]}
                className="app__project-closeditem"
                onClick={() => toggleIndex(index)}
              >
                <div>
                  <h2 className="bold-text">{item.title}</h2>
                  <ul className="app__work-filter">
                    {item.categories.map((cat, catIndex) => (
                      <li key={catIndex} className="app__work-filter-item app__flex p-text">
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;