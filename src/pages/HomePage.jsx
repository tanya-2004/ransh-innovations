import {  
  Header,
  Us,
  Testimonials,
  ContactUs,
  Numbers,
  Projects,
  Faqs,
} from "../containers";

export const HomePage = () => {
  const contact_header = "Contact Us";

  return (
    <div className="app">
      <Header />

      <main role="main" aria-label="Homepage content" className="mb-[8rem]">
        <Us />
        <Numbers />
        <Projects />
        <Testimonials />
        <Faqs />
        <ContactUs header={contact_header} />
      </main>
    </div>
  );
};

export default HomePage;