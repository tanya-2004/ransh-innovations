import React from "react";
import JobCard from "./JobCard";

export const jobs = [
  {
    title: "UI/UX Designer Intern",
    location: "Remote",
    type: "Internship",
    experience: "Entry Level",
    industry: "EdTech / Sports / Defence / Gaming",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Join our creative team at Ransh Innovations to design user-centered experiences across EdTech, Sports, Defence, and Gaming domains. You'll work on wireframes, prototypes, and usability testing, contributing to engaging, responsive UI solutions in a remote, innovation-driven environment.",
    responsibilities: [
      "Design & Prototyping: Assist in creating wireframes, prototypes, and interactive mockups.",
      "User Research & Testing: Support usability testing and gather feedback to refine designs.",
      "Collaboration: Work closely with designers, developers, and stakeholders to ensure feasibility.",
      "UI Design: Help craft visually appealing and consistent UI elements.",
      "Design Refinement: Iterate based on feedback, testing results, and evolving project goals.",
      "Documentation & Design Systems: Contribute to structured design documentation and pattern libraries."
    ],
    qualifications: [
      "Understanding of user-centered UI/UX design principles and interaction patterns.",
      "Ability to design wireframes and user flows that communicate clearly.",
      "Proficiency in tools like Figma, Sketch, Adobe XD, or similar.",
      "Knowledge of responsive and cross-platform design approaches.",
      "Strong visual design skills — layout, typography, color systems, and spacing.",
      "Attention to detail for pixel-perfect execution.",
      "Clear communication and collaboration across teams.",
      "Problem-solving mindset with a focus on usability and improvement."
    ]
  },
  {
    title: "Front-End Developer Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Collaborate with design and development teams to build responsive, interactive web interfaces across innovative industry domains.",
    responsibilities: [
      "Assist in web UI development using front-end technologies",
      "Work closely with designers and back-end devs to ship features",
      "Maintain and enhance existing codebase",
      "Debug, test, and deploy cross-browser web applications",
      "Document technical changes and contribute to team knowledge",
    ],
    qualifications: [
      "Proficiency in HTML5, CSS3, and JavaScript",
      "Knowledge of responsive web design and mobile-first principles",
      "Experience with Git and GitHub for version control",
      "Basic familiarity with React.js, Vue.js, or Angular",
      "Understanding of cross-browser compatibility requirements",
      "UI/UX awareness and attention to pixel-perfect detail",
      "Strong debugging and problem-solving mindset",
    ],
  },
  {
    title: "Back-End Developer Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Join our backend team to build secure, scalable, and high-performance web services using the MERN stack and structured databases.",
    responsibilities: [
      "Develop server-side logic with Node.js and Express.js",
      "Manage structured and unstructured data using MongoDB or SQL",
      "Design and implement secure RESTful APIs",
      "Implement authentication (JWT, OAuth) for user access",
      "Optimize code performance and scalability",
      "Troubleshoot and debug server-side issues",
      "Document backend logic and architectural flows",
    ],
    qualifications: [
      "Familiarity with Node.js, Express.js, and JavaScript",
      "Experience using MongoDB and optionally SQL databases",
      "Understanding of API development and REST principles",
      "Knowledge of Git and GitHub for version control",
      "Awareness of security practices (JWT, OAuth)",
      "Problem-solving and debugging skills",
      "Basic knowledge of testing frameworks like Jest or Mocha",
      "Comfort working in Agile development environments",
    ],
  },
  {
    title: "Product Management Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Support the full product lifecycle—from strategy to delivery—across cross-functional teams building products in EdTech, Sports, Defence, and Gaming.",
    responsibilities: [
      "Assist in crafting product strategy and roadmap",
      "Conduct market and competitive research",
      "Help define features and write user stories",
      "Collaborate with engineering, design, and marketing teams",
      "Support creation of product specs and documentation",
      "Participate in user feedback sessions and testing",
      "Track product metrics and prepare performance reports",
    ],
    qualifications: [
      "Clear communication and documentation skills",
      "Strong analytical and market research mindset",
      "Familiarity with Agile and product lifecycle processes",
      "Attention to detail in defining user stories and features",
      "Customer-centric approach to product decisions",
      "Basic understanding of technical workflows and product architecture",
      "Collaboration mindset across design/dev/sales teams",
    ],
  },
  {
    title: "Project Management Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Assist in planning, coordinating, and tracking multiple projects across teams to ensure timely and successful delivery.",
    responsibilities: [
      "Support project planning and scheduling",
      "Break down tasks and track milestone progress",
      "Assist in allocating team resources and tools",
      "Collaborate across engineering, design, and marketing teams",
      "Help identify project risks and mitigation strategies",
      "Maintain up-to-date documentation and reports",
      "Monitor deadlines and track KPIs",
      "Communicate project status to stakeholders",
    ],
    qualifications: [
      "Strong organizational and time management skills",
      "Clear and professional communication abilities",
      "Attention to detail in tracking project workflows",
      "Familiarity with tools like Trello, Jira, Asana, or Microsoft Project",
      "Collaborative mindset for working with diverse teams",
      "Adaptability and problem-solving attitude",
    ],
  },
  {
    title: "Prompt Engineering Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Work with cutting-edge AI tools to generate engaging digital content through prompt design, refinement, and performance analysis.",
    responsibilities: [
      "Create high-quality content using AI models",
      "Design and optimize prompts for accuracy and creativity",
      "Collaborate with content and technical teams",
      "Support AI training and experimentation",
      "Review and edit AI-generated outputs",
      "Research best practices and track AI trends",
      "Document workflows and insights",
    ],
    qualifications: [
      "Strong writing and creative thinking skills",
      "Understanding of GPT-based tools or similar AI models",
      "Attention to detail in quality control and editing",
      "Analytical mindset for refining prompt performance",
      "Ability to collaborate with cross-functional teams",
      "Interest in AI-driven content strategies and innovation",
    ],
  },
  {
    title: "Marketing Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Support digital marketing strategies through research, content creation, social media, email campaigns, and performance analysis.",
    responsibilities: [
      "Conduct market research and track industry trends",
      "Create engaging content for blogs, email, and social media",
      "Manage and grow brand presence across social platforms",
      "Assist in SEO, SEM, and paid ad campaigns",
      "Build and track email marketing campaigns",
      "Monitor metrics like traffic and engagement",
      "Coordinate marketing efforts across product and design teams",
      "Support webinars and virtual events",
    ],
    qualifications: [
      "Strong communication and writing skills",
      "Creative mindset for marketing ideation",
      "Familiarity with platforms like Facebook, Instagram, LinkedIn",
      "Basic analytics and performance tracking experience",
      "Experience with content tools (Canva, Mailchimp, etc.)",
      "Collaborative and detail-oriented work style",
      "Ability to manage multiple marketing tasks",
    ],
  },
  {
    title: "Sales Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Work with the sales team to generate leads, create outreach campaigns, and support sales strategy development across high-impact digital products.",
    responsibilities: [
      "Research and identify prospective leads and clients",
      "Draft outreach campaigns and follow-ups",
      "Prepare proposals, decks, and presentations",
      "Update CRM and track lead opportunities",
      "Support client communication and scheduling",
      "Conduct industry and competitor research",
      "Assist in tracking sales metrics and performance",
      "Contribute to sales strategy development",
    ],
    qualifications: [
      "Clear and persuasive communication skills",
      "Confidence in pitching and client engagement",
      "Detail-oriented and result-driven",
      "Time management across multiple leads",
      "Market research and analysis capabilities",
      "Experience or interest in using CRM tools",
      "Collaborative mindset across sales and marketing",
    ],
  },
  {
    title: "QA and Testing Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Contribute to manual and automated testing of high-impact products, improving quality and reliability across EdTech, Sports, Defence, and Gaming platforms.",
    responsibilities: [
      "Plan and execute test cases, scripts, and plans",
      "Identify, report, and track bugs using tools like Jira or Trello",
      "Perform functional, usability, and regression testing manually",
      "Assist in automated testing with frameworks like Selenium or Appium",
      "Document test results, defects, and status updates",
      "Work closely with developers to resolve quality issues",
      "Support performance testing and load validation",
      "Prepare test data for varied scenarios and edge cases",
      "Contribute ideas to improve testing efficiency and coverage",
    ],
    qualifications: [
      "Strong attention to detail and issue identification",
      "Familiarity with testing tools (e.g., Selenium, Postman, Jira)",
      "Analytical thinking to interpret test results and patterns",
      "Clear communication of test plans and bug reports",
      "Understanding of SDLC and QA role within it",
      "Time management to meet project testing timelines",
      "Collaborative mindset to work with cross-functional teams",
      "Willingness to learn and adapt to new testing frameworks",
    ],
  },
  {
    title: "HR Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Support core HR functions including recruitment, onboarding, employee engagement, and policy coordination in a fast-paced digital innovation environment.",
    responsibilities: [
      "Assist with job posting, resume screening, and interview scheduling",
      "Support onboarding process and employee integration",
      "Organize surveys, team-building, and engagement events",
      "Maintain HR records, documents, and databases",
      "Help ensure policy compliance and HR procedural updates",
      "Coordinate performance management and training efforts",
      "Assist in payroll and benefit tracking",
      "Support miscellaneous HR projects and initiatives",
    ],
    qualifications: [
      "Strong interpersonal and written communication skills",
      "Organizational capability and multi-tasking effectiveness",
      "Attention to detail and confidentiality handling",
      "Proactive attitude and ability to learn quickly",
      "Team-oriented and collaborative disposition",
      "Understanding of core HR processes and roles",
      "Comfort with digital tools (Google Suite, MS Office, etc.)",
      "Basic problem-solving abilities and professionalism",
    ],
  },
  {
    title: "Machine Learning Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Join the ML team to design, develop, and deploy intelligent models that transform data into actionable insights across cutting-edge digital products.",
    responsibilities: [
      "Clean and preprocess datasets for machine learning",
      "Build models using supervised and unsupervised techniques",
      "Evaluate performance using metrics like accuracy and F1-score",
      "Tune hyperparameters and improve model accuracy",
      "Visualize data distributions and model output",
      "Stay current with ML trends and apply emerging techniques",
      "Collaborate with developers to integrate models into products",
      "Document methodologies and research findings",
    ],
    qualifications: [
      "Strong foundation in ML algorithms (e.g., SVM, Regression, Neural Nets)",
      "Proficiency in Python and libraries (NumPy, Pandas, Scikit-learn)",
      "Basic understanding of deep learning frameworks (TensorFlow, PyTorch)",
      "Statistical and mathematical reasoning (probability, linear algebra)",
      "Data cleaning and feature engineering experience",
      "Analytical mindset for working with large datasets",
      "Effective communication with cross-functional teams",
      "Attention to detail in model evaluation and documentation",
    ],
  },
  {
    title: "NLP Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Collaborate on real-world NLP tasks including classification, sentiment analysis, and named entity recognition, using state-of-the-art models and frameworks.",
    responsibilities: [
      "Clean, tokenize, and vectorize text datasets for NLP use",
      "Build models for classification, sentiment, and topic modeling",
      "Fine-tune pre-trained models (e.g., BERT, RoBERTa, GPT) using frameworks like Hugging Face",
      "Engineer features using TF-IDF, Word2Vec, GloVe, etc.",
      "Work on NER, POS tagging, and text summarization",
      "Integrate language models into production services",
      "Evaluate and optimize model performance and accuracy",
      "Document code, research findings, and system architecture",
    ],
    qualifications: [
      "Familiarity with NLP techniques (NER, sentiment, classification)",
      "Proficiency in Python and libraries like spaCy, NLTK, Hugging Face",
      "Experience with model training and fine-tuning",
      "Understanding of ML algorithms (Logistic Regression, SVM, etc.)",
      "Hands-on with text preprocessing and embedding techniques",
      "Strong analytical and collaborative skills",
      "Clear communication of technical concepts",
      "Attention to accuracy, scalability, and performance tuning",
    ],
  },
  {
    title: "Deep Learning Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Join our ML team to develop advanced neural networks using CNNs, RNNs, GANs, and Transformers for real-world applications in EdTech, Defence, Sports, and Gaming.",
    responsibilities: [
      "Design and build deep learning models (CNNs, RNNs, GANs, Transformers)",
      "Preprocess image, text, and time-series data for training",
      "Train and optimize models using TensorFlow, Keras, and PyTorch",
      "Apply techniques like transfer learning and hyperparameter tuning",
      "Run experiments to evaluate accuracy and reduce overfitting",
      "Research and apply latest advances in DL literature",
      "Collaborate on model deployment and integration into production",
      "Document workflows, architecture, and performance metrics",
    ],
    qualifications: [
      "Understanding of neural network architectures (CNNs, RNNs, GANs, Transformers)",
      "Proficiency in Python with TensorFlow, PyTorch, or Keras",
      "Solid grasp of linear algebra, calculus, probability, and optimization",
      "Experience with preprocessing and augmenting image/text data",
      "Familiarity with GPU computing and tools like CUDA",
      "Strong foundation in supervised and unsupervised learning",
      "Problem-solving mindset with attention to detail",
      "Effective communicator with cross-team collaboration skills",
    ],
  },
  {
    title: "Data Science Intern",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Work with large datasets to uncover patterns, build predictive models, and drive meaningful decisions across EdTech, Sports, Defence, and Gaming domains.",
    responsibilities: [
      "Gather and clean data from diverse sources",
      "Perform exploratory data analysis (EDA) and uncover trends",
      "Build ML models for classification, regression, and clustering",
      "Apply statistical tests and generate data-driven insights",
      "Visualize data using Matplotlib, Seaborn, or Tableau",
      "Document findings and create technical/non-technical reports",
      "Collaborate with engineers, product managers, and analysts",
      "Research and experiment with emerging data science techniques",
    ],
    qualifications: [
      "Proficiency in Python and libraries like Pandas, NumPy, Scikit-learn",
      "Basic knowledge of SQL for querying structured data",
      "Experience with EDA, statistical analysis, and ML algorithms",
      "Understanding of hypothesis testing and confidence intervals",
      "Strong skills in visual storytelling using charts and dashboards",
      "Analytical and problem-solving mindset",
      "Ability to communicate insights effectively",
      "Attention to accuracy and data integrity",
    ],
  },
  {
    title: "Mechanical Engineering Intern (Designing)",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Join the hardware innovation team to design, simulate, and prototype mechanical systems used in next-gen products across EdTech, Defence, Sports, and Gaming.",
    responsibilities: [
      "Design mechanical components and assemblies to meet functional needs",
      "Create detailed 3D models using CAD tools like SolidWorks or Fusion 360",
      "Assist in prototyping and validating hardware designs",
      "Support material selection based on performance and cost factors",
      "Contribute to design optimization and manufacturability improvements",
      "Perform or assist in Finite Element Analysis (FEA) using tools like ANSYS",
      "Prepare and maintain technical drawings and documentation",
      "Collaborate across electrical, software, and product teams",
      "Help conduct physical testing for prototype validation",
    ],
    qualifications: [
      "Proficiency in CAD software (e.g., SolidWorks, Fusion 360, AutoCAD)",
      "Understanding of mechanical design fundamentals and material science",
      "Basic knowledge of FEA or eagerness to learn simulation tools",
      "Creative problem-solving and prototyping mindset",
      "Detail-oriented approach to engineering documentation",
      "Ability to communicate clearly in a team setting",
      "Willingness to collaborate in cross-disciplinary environments",
    ],
  },
  {
    title: "Mechanical Engineering Intern (Simulation)",
    location: "Remote",
    type: "Internship",
    company: "Ransh Innovations Private Limited",
    contact: "ranshinnovations@gmail.com",
    description:
      "Support the engineering team by performing FEA, CFD, and thermal simulations to validate mechanical system behavior and optimize performance.",
    responsibilities: [
      "Set up simulations for fluid flow, heat transfer, impact, and structural mechanics",
      "Use tools like ANSYS, Abaqus, COMSOL to run physics-based analyses",
      "Model and mesh components for accurate computation and convergence",
      "Conduct CFD and thermal simulations under varying conditions",
      "Simulate stress and impact responses to mechanical loads",
      "Interpret simulation data and suggest design improvements",
      "Document methodologies, assumptions, and results clearly",
      "Collaborate with design, product, and engineering teams to optimize components",
    ],
    qualifications: [
      "Experience with ANSYS, COMSOL, Abaqus or equivalent simulation software",
      "Strong grasp of fluid mechanics, thermodynamics, and solid mechanics",
      "Proficiency in mathematical modeling and numerical analysis",
      "Ability to interpret simulation results and validate assumptions",
      "Clear written and verbal communication for cross-team collaboration",
      "Detail-oriented mindset with focus on accuracy and reproducibility",
      "Required: PC with specifications capable of running simulation software",
    ],
  }
];

const CareerContent = ({ filters, searchText }) => {
  const normalize = str => str.toLowerCase().trim();

  const isMatch = job =>
    (!filters.type || job.type === filters.type) &&
    (!filters.location || job.location === filters.location) &&
    (!filters.experience || job.experience === filters.experience) &&
    (!filters.industry || job.industry === filters.industry) &&
    (!searchText || normalize(job.title).includes(normalize(searchText)));

  const filteredJobs = jobs.filter(isMatch);

  return (
    <section className="job-listings" aria-label="Available job listings">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, i) => <JobCard key={i} {...job} />)
      ) : (
        <div className="no-jobs-found">
          <img src="./404.webp" alt="Job not found illustration" />
          <h2>Job Not Found</h2>
          <p>Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </section>
  );
};

export default CareerContent;