import './Blogs.scss';
import { useParams } from 'react-router-dom';
import { blogPosts } from './Blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) return <p>Blog not found.</p>;

  return (
    <section className="app__wrapper blog-detail-wrapper">
      <div className="blog-detail-container">
        {/* LEFT: Content */}
        <div className="blog-detail-content">
          <h1 className="blog-title">{blog.title}</h1>
          <h2 className="main-line">{blog.intro}</h2>

          <div className="metadata-row">
            <div className="tags-list">
              {blog.tags.map((tag, i) => (
                <span key={i} className="tag-card">{tag}</span>
              ))}
              <span className="tag-card domain">{blog.domain}</span>
            </div>
            <span className="author-line">
              {blog.author} • {blog.date}
            </span>
          </div>

          <hr />

          <section className="blog-section">
            {/* ✅ Render HTML inside description */}
            <p
              className="intro-paragraph"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />

            {blog.points?.map(({ heading, desc }, i) => (
              <div key={i} id={`section-${i}`} className="blog-point-block">
                <h4 className="section-heading">{heading}</h4>
                <div className="section-content">
                  {desc.split('\n').map((line, j) => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('- ') || trimmed.match(/^\d+\./)) {
                      return (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{
                            __html: trimmed.replace(/^[-\d.]+\s*/, ''),
                          }}
                        />
                      );
                    } else {
                      return (
                        <p
                          key={j}
                          dangerouslySetInnerHTML={{ __html: trimmed }}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT: TOC + LinkedIn CTA */}
        <div className="blog-right-panel">
          <div className="toc-wrapper">
            <aside className="blog-toc-card">
              <h3>Table of Contents</h3>
              <ul>
                {blog.points?.map(({ heading }, i) => (
                  <li key={i} className="toc-item">
                    <a href={`#section-${i}`}>{heading}</a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="linkedin-cta-wrapper">
            <a
              href="https://linkedin.com/company/ransh-innovations"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-anchor"
              aria-label="LinkedIn profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#080061" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.75v2.34h.07c.66-1.26 2.27-2.6 4.68-2.6 5.01 0 5.93 3.3 5.93 7.59V24h-5v-7.16c0-1.71-.03-3.91-2.38-3.91-2.38 0-2.75 1.85-2.75 3.78V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;