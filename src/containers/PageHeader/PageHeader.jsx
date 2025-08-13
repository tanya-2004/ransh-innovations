import "./PageHeader.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { useLocation } from "react-router-dom";
import { pageMeta } from "../../utils/pageMeta";

const PageHeader = () => {
  const { pathname } = useLocation();
  const normalizePath = (path) => {
    if (path.startsWith("/blogs/")) return "/blogsdetail";
    return path;
  };

  const meta = pageMeta[normalizePath(pathname)] || {
    title: "Untitled Page",
    desc: "Description not available.",
  };


  return (
    <header className="home-page page-wrapper" aria-label="Page Header">
      <motion.div
        className="page__header app__flex"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Content */}
        <motion.div
          className="page__header-info"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="page__header-badge">
            <h2 className="head-text mb-8">{meta.title}</h2>
            <p className="p-text text-white text-left">{meta.desc}</p>

            <div className="mobile__img-page">
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
              >
                <img src={images.pagehead} alt="Page illustration" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="page__header-img"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <img src="/src/assets/page-header.svg" alt="Page visual" className="right-person" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default PageHeader;