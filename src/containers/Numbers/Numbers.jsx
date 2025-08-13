import './Numbers.scss';
import { motion } from 'framer-motion';

const data = [
  { title: 'Number of interns', value: '100+' },
  { title: 'Number of innovative projects', value: '25+' },
  { title: 'Sectors in which we work', value: '5' },
  { title: 'Number of AI Projects', value: '10+' },
];

function Numbers() {
  return (
    <section className="app__wrapper mt-2 md:mt-10" aria-label="Company Statistics">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="h1-text-num">Numbers speak for themselves</h1>

        <div className="app__number-grid">
          {data.map((item, index) => (
            <div className="app__number-item" key={index}>
              <h2 className="bold-text text-white">{item.value}</h2>
              <p className="p-text text-white text-center font-normal">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Numbers;