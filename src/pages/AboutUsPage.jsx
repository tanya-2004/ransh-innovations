import {Numbers, Testimonials } from "../containers";

const AboutUsPage = () => {
  return (
    <div className="app">
      <main role="main" aria-label="About Us Content" className="mb-[8rem]">
        <Numbers />
        <Testimonials />
      </main>
    </div>
  );
};

export default AboutUsPage;