import "./Us.scss";
import { motion } from "framer-motion";
import React from "react";
import images from "../../constants/images"; 

const reasons = [
  {
    imageUrl: images.us01,
    title: "Innovative Solutions",
    description:
      "We think outside the box and deliver creative, cutting-edge solutions through continuous improvement and trend awareness.",
  },
  {
    imageUrl: images.us02,
    title: "Expertise Across Industries",
    description:
      "Our solutions span defense, sports, ed-tech, and gaming—bringing niche insights and specialized development to each domain.",
  },
  {
    imageUrl: images.us03,
    title: "Reliable & Trustworthy",
    description:
      "We meet deadlines, fulfill promises, and maintain transparency with ethical practices that build long-term partnerships.",
  },
  {
    imageUrl: images.us04,
    title: "End-to-End Development",
    description:
      "From idea to launch, we manage every stage of development to deliver high-quality products seamlessly and efficiently.",
  },
];

function Us() {
  return (
    <section className="app__wrapper mt-10" aria-label="Why choose Ransh section">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="h1-text">Why Us?</h1>

        <div className="app__profiles">
          {reasons.map((item, index) => (
            <React.Fragment key={`reason-${index}`}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="app__profile-item"
              >
                <div>
                  <img src={item.imageUrl} alt={`Illustration for ${item.title}`} />
                  <h2 className="bold-text mt-2">{item.title}</h2>
                </div>
                <p className="p-text text-[#08006199] text-center mt-3 md:mt-1 font-normal">
                  {item.description}
                </p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="app__profile-item-tab"
              >
                <img src={item.imageUrl} alt={`Visual cue for ${item.title}`} />
                <div>
                  <h2 className="bold-text">{item.title}</h2>
                  <p className="p-text text-[#08006199] text-left mt-2 font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Us;