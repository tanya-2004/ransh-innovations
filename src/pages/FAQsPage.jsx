import { ContactUs, Faqs } from "../containers";

const FAQsPage = () => {
  return (
    <div className="app">
      <main role="main" aria-label="FAQs and Contact section" className="mb-[8rem]">
        <Faqs />
        <ContactUs header="For Queries" />
      </main>
    </div>
  );
};

export default FAQsPage;