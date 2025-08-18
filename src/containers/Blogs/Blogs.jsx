import './Blogs.scss';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const blogPosts = [

  {
    id: 1,
    title: 'Prompt Engineering: The Hype, The Reality, and The Right Way to Learn It',
    intro: 'Prompting isn’t magic—it’s a lever.',
    description:
      'Prompt engineering has quickly become a buzzword, seen as a shortcut to mastering AI tools like ChatGPT, Claude, Gemini, and others. But beneath the hype lies a subtle truth: prompt engineering, in itself, is <strong>not a standalone skill</strong>. Like mathematics, it becomes truly powerful only when applied alongside other domains—be it software development, research, content generation, or business strategy.',
    author: 'Tanya Agrawal',
    date: 'August 10, 2025',
    tags: ['Prompt Engineering', 'AI Literacy', 'LLM Safety'],
    domain: 'AI & Product',
    points: [
      {
        heading: 'The Illusion of Simplicity',
        desc: `Many new learners think that crafting a few good prompts makes them a prompt engineer. What they don’t realize is that effective prompt engineering is <strong>more about clarity, context, structure, and use-case awareness</strong> than simply writing instructions. It’s about:
- Understanding the limitations and strengths of LLMs
- Knowing when to be specific vs. abstract
- Iterating based on partial or imperfect responses
- Designing systems where prompt chaining or tool use becomes essential`
      },
      {
        heading: 'Why Prompt Engineering Alone Isn’t Enough',
        desc: `If you’re not pairing prompt engineering with another skill (such as software development, marketing, product design, UX writing, or research), it becomes very limited. Prompts are a bridge—not a destination. Just like knowing how to search something on Google doesn’t make you an expert on the subject, being good at prompting doesn’t replace deep domain knowledge.

For example:
- Without content strategy, you can’t generate meaningful blogs or campaigns.
- Without coding experience, debugging with AI won’t help much.
- Without product sense, even the best UI/UX prompts will sound shallow.`
      },
      {
        heading: 'Prompting Without Purpose = Half Skill',
        desc: `Whether it's generating content, debugging code, building AI-driven features, or assisting with documentation—prompt engineering becomes powerful only <strong>when paired with another core competency</strong>. Without knowing how to code, a prompt can't fix bugs. Without understanding product, you can’t design effective UX prompts. Without subject matter understanding, you can’t create great educational content using LLMs.

Prompting alone can help you do surface-level things, but <strong>depth comes from merging AI prompting with domain knowledge</strong>.`
      },
      {
        heading: 'Security and Ethical Awareness',
        desc: `Another area new learners miss is <strong>safety and privacy in prompting</strong>. Many unintentionally reveal personal or confidential data while chatting with AI systems. A good prompt engineer must:
- Know what kind of inputs are safe to give
- Understand that LLMs may retain or reflect back subtle information
- Avoid sharing internal codebases, customer details, or unreleased strategies

We try to instill this awareness in our interns early on. It’s not just about "what" you ask, but "how" and "why"—and what it might reveal.`
      },
      {
        heading: 'Where Prompting Truly Shines (When Done Right)',
        desc: `1. <strong>Code Generation & Debugging</strong>: Knowing how to break problems into prompts and interpret AI output to optimize or debug code is useful—but only if you understand programming fundamentals, structure, and systems.
2. <strong>Content Generation</strong>: For blogs, scripts, or educational modules, prompts can accelerate creativity, but only if you know your target audience and have taste + context.
3. <strong>Learning Accelerator</strong>: Prompting is powerful for learning, but again—only if you're capable of asking the right questions and validating answers.
4. <strong>Ops and Product</strong>: Prompting can reduce time in writing documentation, drafting messages, or building productivity hacks—but it’s the <strong>execution + systems thinking</strong> that matter.`
      },
      {
        heading: 'What You’ll Learn With Us',
        desc: `At our startup, interns get to work on projects where prompt engineering is treated as a tool—not the whole toolbox. We explore:
- How to generate and test <strong>safe and reliable AI responses</strong>
- Real-world projects where <strong>AI + human creativity = real innovation</strong>
- How to <strong>communicate better with AI</strong> and make it a productive partner, not just a copy-paste machine`
      },
      {
        heading: 'Why Even an Unpaid Internship Here Matters',
        desc: `While many are hunting for paid gigs in AI without understanding fundamentals, those working with us get to experience <strong>prompting in action</strong>—paired with product, engineering, or design. That kind of exposure often takes years to accumulate, and we condense it within months.

What seems "unpaid" to many is often <strong>richer than many paid roles elsewhere</strong>. Here, the value lies in accelerated exposure, experimentation, and mentorship—which most teams can’t or won’t offer unless you’re already senior.

In short: <strong>prompt engineering isn’t magic—it’s a lever</strong>. And knowing when and how to pull it is what separates amateurs from future-ready innovators.

Let us know if you want to explore this hands-on. Even if it’s unpaid, you’ll walk away with what others don’t get even in fancy courses: real project learning.`
      }
    ]
  },
  {
    id: 2,
    title: "What Most UI/UX Courses Don't Teach You (And How Our Internships Bridge That Gap)",
    intro: "Figma is just a medium—not the message.",
    description:
      "When most students start learning UI/UX design, they think mastering a tool like Figma means mastering design. But the reality is, Figma is just a medium—not the message. True design thinking is about understanding the problem, the product, and the user’s journey, long before you touch a single component.",
    author: "Anoma Singh",
    date: "August 10, 2025",
    tags: ["UI/UX", "Design Thinking", "Internship"],
    domain: "Design & Product",
    points: [
      {
        heading: "The Myth of UI/UX Simplicity",
        desc: `Many learners believe that UI/UX is a straightforward subject because of the visual appeal it carries. However, the subjectivity and depth of the field make it far more complex. Designing a beautiful screen without knowing the underlying product logic, use-cases, or admin interactions leads to shallow design. Especially when you're not just cloning apps but creating real, innovative solutions—the complexity multiplies.`
      },
      {
        heading: "Where Most Courses Fall Short",
        desc: `Most UI/UX courses skip key practical aspects:
- <strong>Component-Based Design</strong>: Creating scalable and reusable design systems.
- <strong>Variable & Layer Management</strong>: Designing efficiently at scale.
- <strong>Product Thinking</strong>: Understanding the purpose, flow, and business logic before jumping into visuals.
- <strong>Admin Side Design</strong>: Most designers only focus on user-facing interfaces and have no exposure to admin interfaces, which are equally critical but less intuitive.
- <strong>Handling Ambiguity</strong>: Real products rarely come with perfect requirements. Designers must work closely with product teams to define and refine user flows.`
      },
      {
        heading: "Why Our Internship Is Different",
        desc: `In our innovation-led projects, design is never an afterthought. Interns get to:
- Work on <strong>real products</strong>—not just clones or theoretical designs.
- Learn <strong>product thinking</strong> in collaboration with PMs and developers.
- Get mentored on <strong>component-based design</strong>, admin interface nuances, and scalable UI patterns.
- Experience <strong>iteration and critique cycles</strong> that are standard in top product companies.`
      },
      {
        heading: "Unpaid? Yes. But Unmatched in Value.",
        desc: `What seems like an unpaid internship to some, turns out to be better than many paid roles elsewhere. Why?
- Interns walk away with skills and real experience that usually takes <strong>years to acquire</strong>.
- They’re guided with <strong>personalised feedback and high standards</strong>.
- They contribute to <strong>production-ready systems</strong>, preparing them for high-growth roles.

We're not here to offer you quick courses. We're here to teach what actually matters when you're building something real.

So if you're serious about growing as a designer—not just a tool user—this is where the real journey begins.`
      }
    ]
  },
  {
    id: 3,
    title: "Why Backend Development Is More Than Just DSA or Libraries — What Interns Should Really Learn",
    intro: "Backend isn’t just about routes and databases—it’s about engineering systems that last.",
    description:
      "Many students begin learning backend development by diving into popular libraries or brushing up on their DSA (Data Structures and Algorithms) skills. But real-world backend development — especially in production-level projects or innovative systems — is a whole different world.And most internships or college-level projects don’t even scratch the surface of what it actually takes to become a good backend developer.",
    author: "Tanya Agrawal",
    date: "August 8, 2025",
    tags: ["Backend", "System Design", "Internship"],
    domain: "Engineering & Infrastructure",
    points: [
      {
        heading: "The Hidden Depth of Backend Engineering",
        desc: `Backend development is not about writing a few API routes and pushing data into a database. It’s about thinking deeply about how systems scale, how data flows, and how information is secured. Here are the core concepts often missed by beginners and even intermediate developers:`
      },
      {
        heading: "1. System Design Fundamentals",
        desc: `Learning how systems interact is crucial. From monoliths to microservices, from pub-sub to event-driven architectures — these are foundational principles that backend developers must understand to build reliable systems.`
      },
      {
        heading: "2. High-Level & Low-Level Design",
        desc: `HL Design teaches you how to architect systems across services. LL Design focuses on internal working of components and code organization. Both are critical if you want to build backend systems that are both scalable and maintainable.`
      },
      {
        heading: "3. Database Design",
        desc: `Most tutorials just use a few tables and simple queries. But in real-world backend, the structure and normalization (or denormalization) of your database can massively affect system performance and scalability. Designing indexes, optimizing join queries, and choosing the right type of database (SQL, NoSQL, etc.) is non-trivial.`
      },
      {
        heading: "4. Performance Optimization",
        desc: `Even if your DSA skills are great, your system can run slow. Why? Because you didn’t paginate your queries. Or you made multiple nested DB calls in a loop. Or maybe your transmission payload is bloated. Real-world backend dev is about profiling your system and understanding where the latency is.`
      },
      {
        heading: "5. Security Best Practices",
        desc: `CSRF, CORS, SQL injection, JWT misconfigurations, rate limiting — backend developers are responsible for securing the gateway to data. One missed header or lack of input sanitization can lead to data leaks or worse.`
      },
      {
        heading: "6. Edge Case Handling",
        desc: `In production, your system is always one unexpected input away from crashing. Robust backend systems are designed to gracefully handle bad input, timeouts, memory issues, third-party failures, and more.`
      },
      {
        heading: "The Unpaid Yet High-Value Learning Path",
        desc: `When we offer backend internships, many students may see the unpaid tag and feel it’s not worth their time. But what we offer is mentorship and exposure to a real production-like environment, something most paid internships don’t even provide. You learn what takes others years — and costly mistakes — to understand.

You don’t just learn what to do; you learn why things are done a certain way. And that mindset shift — from "developer" to "engineer" — is what truly sets apart someone who can build systems that last.

<strong>If you’re serious about backend development, what you learn here will stay with you throughout your career. And the depth of understanding you gain will make even senior devs respect your work.</strong>`
      }
    ]
  },
  {
    id: 4,
    title: "Beyond Syntax: What Interns Really Learn About Front End Development With Us",
    intro: "Learning React isn’t the same as learning how to build scalable frontends.",
    description:
      "If you’ve taken an online course on web development, it likely taught you how to create a basic webpage, maybe even how to work with a framework like React. But here’s the catch — that’s like learning the alphabet and thinking you’ve mastered the language.Real-world web development, especially at a startup dealing with innovation and scale, is a completely different game.Most interns, even those who’ve done multiple certifications, join us not knowing what they don’t know. And that’s okay. Because what matters isn’t where you start — it’s what you’re open to learning.",
    author: "Anoma Singh",
    date: "August 7, 2025",
    tags: ["Frontend", "React", "Internship"],
    domain: "Engineering & UI",
    points: [
      {
        heading: "What Courses Don’t Teach (And What We Do)",
        desc: `Here are just a few areas we focus on in real production-level work that are often missing from typical web dev training:
- <strong>CSS Specificity & Scalable Styling Systems</strong>: It's not just about writing styles. Understanding how CSS specificity works is critical in avoiding messy, conflicting styles in large codebases.
- <strong>Component-Based Design (and Why It Matters)</strong>: React isn’t just about JSX. Writing reusable, maintainable components that scale across teams and products is a whole new level.
- <strong>System Design for Front-End</strong>: How do you structure large-scale applications? How do you separate concerns? How do you ensure smooth performance and easy maintenance over time?
- <strong>Security Best Practices</strong>: Most beginner devs don’t even realize the vulnerabilities they’re introducing — from insecure API usage to poorly handled user input. We teach you how to avoid those mistakes before they cost something big.
- <strong>Code Reusability & Clean Architecture</strong>: Writing DRY, well-commented, modular code — and learning why it matters in a team setting — is something that can take years to learn alone.
- <strong>Production-Level Git Workflows</strong>: You don’t just “push code” here. You learn industry-level practices like PR reviews, branches per feature, proper commits, CI/CD pipelines, and more.`
      },
      {
        heading: "The Real-World Mentorship That Speeds Up Your Journey",
        desc: `Many developers take <strong>3–5 years</strong> in jobs or side projects to organically pick up these practices — and even then, often without structured feedback or experienced mentorship.

Here, you get to work on real projects that matter. You don’t just build for the sake of building — your work is either solving real user problems or pushing innovation boundaries. You get reviews, pairing, guidance, and, most importantly, <strong>access to the thought process</strong> behind how and why things are built a certain way.`
      },
      {
        heading: "Why This Unpaid Internship Can Be More Valuable Than Many Paid Ones",
        desc: `Let’s address the elephant in the room: yes, many of our internships are unpaid — <strong>but not unrewarding</strong>.

We’re transparent about this from the start because we don’t believe in luring you with false hopes. What we offer instead is <strong>the fastest route to becoming industry-ready</strong>. Many of our interns go on to get jobs paying <strong>2–3x</strong> higher than average fresher packages, and more importantly, they carry confidence and clarity about their craft that others take years to develop.

So if you're chasing short-term money, this may not be the right place.

But if you're chasing long-term growth, skill, and real exposure — this can be <strong>more valuable than months of paid work</strong> that teaches you little.`
      },
      {
        heading: "In Summary",
        desc: `If you're serious about becoming a strong developer — not just someone who can pass a coding bootcamp but someone who can own, scale, and innovate in real software environments — then what we offer is a launchpad.

No, it's not easy.
Yes, it requires effort.
But the transformation is real — and that’s what sets our interns apart, long after the internship ends.`
      }
    ]
  },
  {
    id: 5,
    title: "Why Web Development Interns Often Struggle — and How We Help Them Thrive",
    intro: "Most devs know syntax. Few know systems. That’s where we come in.",
    description: `
    <p>In today’s internet age, the term “web developer” is everywhere — bootcamps, YouTube tutorials, certifications, and college clubs are churning out new developers every day. But here’s a brutal truth we’ve observed firsthand:</p>
    <p><strong>Most students who “know web development” don’t actually know how to build scalable, secure, maintainable products.</strong></p>
    <p>This isn’t their fault. The typical path to learning web development is:</p>
    <ul>
      <li>Take an online course or two</li>
      <li>Learn HTML, CSS, JavaScript</li>
      <li>Learn a library or framework like React</li>
      <li>Build a to-do app or blog</li>
      <li>Call it “full-stack”</li>
    </ul>
    <p>And unfortunately, this surface-level learning doesn’t prepare them for real-world development.</p>
  `,
    author: "Tanya Agrawal",
    date: "August 5, 2025",
    tags: ["Web Development", "Frontend", "Internship"],
    domain: "Engineering & Mentorship",
    points: [
      {
        heading: "What’s Missing from the Typical Path?",
        desc: `When interns join us — even those who’ve done courses — we find that their concepts are often limited to syntax, not systems. They’re unfamiliar with critical principles like:
- <strong>CSS Specificity and Architecture</strong> – Writing clean CSS that doesn’t break everything when you add a new button.
- <strong>Component-Based Design</strong> – Thinking in UI components, not pages. Separation of concerns. Prop drilling vs. context.
- <strong>Reusable & Scalable Code</strong> – DRY (Don’t Repeat Yourself), code modularity, separation of logic from layout.
- <strong>System Design for Frontend</strong> – Structuring your project to handle growth. How do you manage thousands of components? What’s the tradeoff between performance and maintainability?
- <strong>Security Best Practices</strong> – Understanding XSS, CSRF, and how even a small mistake in the UI can lead to major breaches.
- <strong>Code Reviews & Collaboration</strong> – Writing code that’s readable and understandable by your team — not just yourself.
- <strong>Performance Optimizations</strong> – Lazy loading, chunking, bundle size, reducing re-renders, understanding DOM diffing.
- <strong>Version Control Like a Pro</strong> – Writing meaningful commits, branching strategies, handling merge conflicts, etc.
- <strong>Thinking like a Software Engineer, not just a coder</strong>`
      },
      {
        heading: "How We Help You Bridge That Gap",
        desc: `At our startup, interns don’t just build for the sake of building. You’ll work on production-level codebases and contribute to innovation projects that demand real software thinking.

What makes it different here?
1. <strong>Mentorship-Driven Learning</strong>: You’re not left to figure it all out. We teach you the principles behind the code.
2. <strong>Hands-On With Real Products</strong>: You’ll work on actual product features — not dummy projects.
3. <strong>Code Review Culture</strong>: We review your code — not just for bugs, but for design, readability, architecture, and edge cases.
4. <strong>Exposure to Modern Tooling and Practices</strong>: Git, CI/CD, design systems, Storybook, React performance tools, SASS/SCSS, Styled Components, Tailwind, Next.js, and more — you get to work on it all.
5. <strong>Focus on Principles, Not Just Stack</strong>: You might come in knowing React. But you’ll leave knowing how to build clean and scalable frontends, regardless of framework.`
      },
      {
        heading: "The Result? You Grow Years in Months",
        desc: `Because of this environment, our interns have:
- Cracked top tech companies post-internship
- Built amazing portfolios showcasing not just screens, but systems
- Learned principles in 3–4 months that usually take 2–3 years in the industry
- Realized how much they didn’t know before, and how confident they’ve now become`
      },
      {
        heading: "Who This is For",
        desc: `We’re not looking for people who just want to add another internship to their resume. We’re looking for builders. People who want to understand and grow fast. People who are okay being challenged — because they know that’s what real growth looks like.

If you’re the kind of person who wants to:
- Build beautiful, efficient, and robust web apps
- Learn from real engineering mentors
- Work on meaningful, innovation-driven products
- Go beyond the tutorial-level understanding of development

Then this might be the right place for you.`
      },
      {
        heading: "Final Thoughts",
        desc: `In an industry where it’s easy to become “just another developer,” we help you become one who stands out — by helping you think, build, and grow like a software engineer, not just a coder.

If that’s the kind of journey you’re ready for, we’re always looking for the next great intern who’s serious about becoming world-class.`
      }
    ]
  },
  {
    id: 6,
    title: "The Myth of Overnight Success: Why Most Unicorn Founders Are in Their 30s (and What That Tells You)",
    intro: "Unicorns aren’t built in dorm rooms. They’re built in trenches.",
    description: `
    <p>There’s a popular illusion that the startup world is full of 22-year-old prodigies building unicorns out of dorm rooms. That may look glamorous, but when you cut through the noise, data—and reality—tells a different story.</p>
    <p><strong>The average age of a unicorn founder?</strong> 34.<br><strong>The typical timeline?</strong> 8–10 years of deep work, across industries, experiences, and a lot of failure.</p>
    <p>Now here’s the part most people don’t talk about:</p>
    <p>To become a founder who can truly build something innovative and scalable, you either need deep domain expertise, or you need capital to hire that expertise.</p>
    <p><strong>Unfortunately, most aspiring founders have neither.</strong></p>
  `,
    author: "Shubham Singal",
    date: "August 1, 2025",
    tags: ["Startups", "Founder Journey", "Strategy"],
    domain: "Leadership & Growth",
    points: [
      {
        heading: "Why the Bar Feels So High (and Why That’s Okay)",
        desc: `Most successful founders have had years—sometimes decades—of working across different functions. Sales, design, tech, product, people management, finance. And more than that, they’ve built the emotional resilience and strategic depth to take tough calls.

That kind of maturity isn’t built in a bootcamp or MBA—it’s built in the battlefield.

And often, it’s funded by <strong>financial cushioning</strong>—family money, exits, or elite networks.

So if you’re someone who doesn’t come from that background, and still wants to build something disruptive?

You need to do what I did: <strong>compress years of learning into months</strong>.

But here’s the thing—<strong>you can</strong>.`
      },
      {
        heading: "My Journey: From Nothing to Building Multi-Sector Innovations",
        desc: `When we started, we weren’t building across multiple sectors.

We began with <strong>one core idea.</strong> But we were solving a <strong>deep, technical problem</strong>—one that couldn’t be rushed.

It took months of reading, experimenting, and re-learning what even experts get wrong. During those gaps, while we waited for progress in one direction, we didn’t sit idle. We picked other unsolved problems where we saw clear gaps—and over time, we <strong>expanded</strong> into multi-sector innovation, not by choice, but <strong>by necessity</strong>.

It wasn’t about being unfocused.

It was about <strong>not letting one hard challenge stall the entire system.</strong>

Every product was pursued with <strong>focus—one at a time—but the vision was always bigger.</strong>`
      },
      {
        heading: "What I Learned (and What I Wish I Did Better)",
        desc: `1. <strong>Compound learning is your only edge.</strong><br>
If you don’t have funds, you have to make up for it with learning speed and application.<br><br>

From design to communication, from managing 40 interns on a ₹30k budget to developing GTM strategies—every skill I have today was self-earned, under pressure.<br><br>

2. <strong>Focus is important—but stagnation is fatal.</strong><br>
Yes, I agree—I could have done better if I had <strong>just one idea</strong> and went all-in.<br>
But what do you do when your one idea hits a hardware wall?<br>
When labs don’t have the tools, vendors don’t get your prototype, and you don’t have ₹10 lakh to import a chip?<br>
You <strong>either wait 6 months... or innovate elsewhere in parallel.</strong><br>
That’s what we did. We weren’t chasing distractions—we were <strong>protecting momentum.</strong><br><br>

3. <strong>Team and intern culture matter more than money.</strong><br>
We created real career transformations—not just with salaries, but with <strong>proof of capability.</strong> Many of our unpaid interns are now at 20–40 LPA jobs.<br>
Not because we trained them for a job, but because we exposed them to <strong>startup pressure, creativity, and delivery.</strong>`
      },
      {
        heading: "Final Thought: If You're Not Privileged, You Must Be Strategic",
        desc: `Here’s the truth that even some VCs miss:<br><br>

<strong>Without capital, your only chance is becoming a multi-functional founder.</strong><br>
But learning enough skills to make that happen... <strong>takes time.</strong><br><br>

So if you’re 25, broke, and trying to build something ambitious—don’t compare yourself to someone building their 2nd startup with ₹2 crore already raised.<br>
They’ve had their 10,000 hours. You’re still clocking yours.<br><br>

But if you use your time well—every project, every unpaid grind, every failed pitch—you'll be building something far more powerful than just a product.<br><br>

<strong>You’ll be building yourself.</strong><br>
And that, ultimately, is the startup that matters most.`
      }
    ]
  },
  {
    id: 7,
    title: "Why We Expanded Across Sectors: Lessons from a Startup That Didn’t Plan to Be Multi-Sector",
    intro: "We didn’t pivot. We adapted.",
    description:
      "When people hear that we’re building a multi-sector startup, they assume we planned it that way from Day 1. We didn’t. In fact, we began with a single sector—focused, dedicated, and crystal clear about the product.But as we dove deeper into solving real-world, high-tech problems, we found something unexpected: <strong>some challenges were simply too complex to be solved quickly, even with a great team and clarity of vision.</strong>We didn’t pivot recklessly. Instead, we chose to <strong>pause when needed</strong>—to learn, investigate, and chip away at the tough technical problems—but <strong>we didn’t pause our company.</strong> Sitting idle while one system bottlenecked everything wasn’t an option.So what did we do?We used the same operational excellence and design thinking to begin solving problems in adjacent domains—ones we already understood. These weren’t distractions; they were parallel problem-solving opportunities backed by the same culture and long-term intent.",
    author: "Shubham Singal",
    date: "August 3, 2025",
    tags: ["Startup Strategy", "Multi-Sector", "Founder Insight"],
    domain: "Leadership & Systems Thinking",
    points: [
      {
        heading: "The Truth About Tough Problems",
        desc: `When you work on hardware, AI, or deeply technical innovations, there are times when you're not stuck—but you're learning. You need time. A few months just to solve one barrier. Not because you're inefficient, but because it's <strong>uncharted territory</strong>.

In those moments, you face a choice:
- Wait passively and risk losing momentum, people, and belief.
- Or push parallel innovations forward, apply your learnings, and build complementary systems.

We chose the second.

Some may see that as a lack of focus. I see it as <strong>realistic innovation management.</strong>`
      },
      {
        heading: "Did We Make Mistakes? Absolutely.",
        desc: `Looking back, had we only focused on <strong>one</strong> product for years without venturing elsewhere, we might have gone deeper faster—but at a huge cost: the team might have dissolved, interns might not have stayed, and our operational edge would’ve dulled.

Still, I acknowledge this: if a few foundational technical problems had been resolved faster, we may not have felt the need to diversify when we did. But here’s the nuance—<strong>we never left those core problems unsolved.</strong> They just took more time, and we gave them that while keeping the system alive elsewhere.`
      },
      {
        heading: "What I Learned",
        desc: `1. <strong>Focus isn’t just about one product—it’s about one intent.</strong>
We never lost sight of that. Every sector we entered addressed a clear need we deeply understood.

2. <strong>Parallel doesn’t mean scattered.</strong>
With clear timelines, distinct teams, and shared values, multiple product lines can move without chaos.

3. <strong>Your team’s morale matters.</strong>
Giving people high-impact work—even when one project is paused—keeps everyone learning, building, and engaged.

4. <strong>Not every mistake is a failure.</strong>
Some were strategic missteps, yes. But without them, we wouldn’t have learned the systems thinking that now defines our company.`
      },
      {
        heading: "Final Thought",
        desc: `We didn't set out to be a multi-sector company. But <strong>life doesn’t give you perfect conditions to innovate.</strong> It gives you imperfect windows. We jumped through each one with purpose, discipline, and adaptability.

If you’re trying to build something hard, here’s what nobody tells you:

<strong>You won’t always get it done in the perfect sequence. Just make sure you keep moving—thoughtfully, creatively, and with your eyes on the real mission.</strong>`
      }
    ]
  },
  {
    id: 8,
    title: "What Nobody Tells You About Building a Multi-Sector Startup",
    intro: "Focus is great advice — unless your vision spans systems.",
    description:
      "Most people will tell you to focus. 'Pick one thing.' 'Go deep, not wide.' 'Stick to a niche.' I’ve heard it all. And they’re not wrong — for most people. But not everyone is wired the same way. Some of us see patterns across sectors. Some of us find solutions that don’t fit into one neat little vertical. And some of us — whether by choice or circumstance — learn to be resourceful instead of specialized.That’s how this journey started for me because I didn’t have the luxury of limiting myself.",
    author: "Shubham Singal",
    date: "August 5, 2025",
    tags: ["Multi-Sector", "Startup Strategy", "Founder Insight"],
    domain: "Vision & Execution",
    points: [
      {
        heading: "When You Don’t Have Everything, You Use Everything You Have",
        desc: `Growing up in a small town, mentorship, resources, and visibility were rare. Innovation was in my head, but not in my surroundings. I couldn’t just pick one industry — I didn’t even have access to one. So I taught myself across the board.

Hardware, software, operations, product, team building, marketing, communication — not out of ambition, but necessity. Every gap I had to bridge taught me a new skill.

People assumed I was indecisive.

In truth, I can’t let my startup ecosystem fail.`
      },
      {
        heading: "The Problem With “Focus” Advice",
        desc: `Everyone romanticizes the idea of "one product, one niche, one goal." But here’s the thing no one tells you:

- Sometimes your best idea doesn't fit into a single vertical.
- Sometimes your real value lies in how you connect fields, not isolate them.
- Sometimes, the market doesn't need another hyper-narrow solution — it needs a broader perspective.

That’s where our multi-sector strategy was born.`
      },
      {
        heading: "It’s Not Just About Innovation — It’s About Leverage",
        desc: `Multi-sector doesn’t mean random.

It means intelligent diversification.

Every product we’ve worked on feeds back into the same larger vision. A <strong>strategy of leverage.</strong> A system where innovation in one domain makes another easier to solve.

People think working across sectors is chaotic. But it’s not chaotic when you build your startup like an engine, not a tree.`
      },
      {
        heading: "No One Talks About the Emotional Toll",
        desc: `They don’t tell you about:
- Being misunderstood because your vision doesn’t fit a pitch deck.
- Rebuilding teams because not everyone can keep up with cross-domain learning.
- Having to lead, mentor, design, ship, and sell — because you can’t always find someone else who understands your standards.
- Facing rejection from people who only trust what they already understand.

But also…

They don’t tell you about:
- The interns who started unpaid, learned more than any curriculum, and now earn 30–40 LPA.
- The quiet moments when your design, engineering, and vision align into something people didn’t think was possible.
- The satisfaction of not fitting in, and realizing that’s why you’re winning.`
      },
      {
        heading: "This Journey Isn’t for Everyone — But It Might Be for You",
        desc: `If you’re someone who’s always felt like your brain works in multiple directions…

If you’ve been told you’re doing “too much” but know deep down it’s exactly what makes you you…

If you believe innovation doesn’t have to come from VC-backed hubs but from first principles and resilience…

Then maybe this path is yours too.

And maybe this startup — with its core values of innovation and growth, its ecosystem approach, and its refusal to limit ideas — is where you’ll find your next chapter.

Because nobody tells you this…

But building a multi-sector startup can be the most strategic move — if you know how to see the whole board.`
      }
    ]
  },
  {
    id: 9,
    title: "What Kind of Interns Thrive With Us (and Why They Do So Well Later)",
    intro: "You won’t leave here as an intern. You’ll leave as someone who has done.",
    description:
      "Some interns join companies for a line on their resume. The ones who thrive with us? They come for the experience—and leave with the kind of transformation you can't put a price on.At Ransh Innovations, we’ve seen a special kind of intern flourish. These aren't always the ones with the most polished portfolios or the fanciest college names. They’re the ones with curiosity in their eyes and unfinished ideas scribbled in the margins of their notebooks. The ones who lean forward when you talk about vision. The ones who ask, “Why not?” when others say, “Why?”If you’re that kind of person, read on.",
    author: "Shubham Singal",
    date: "August 6, 2025",
    tags: ["Internship", "Culture", "Growth"],
    domain: "Team & Mentorship",
    points: [
      {
        heading: "Not Your Average Internship",
        desc: `We don’t offer you a cubicle. We offer you a battlefield.

We don’t ask you to shadow. We ask you to contribute.

We don’t need followers. We need thinkers.

An internship at Ransh Innovations Private Limited isn't about fetching coffee, filing reports, or sitting quietly in meetings. It’s about solving real problems with a team that’s actually building something new. You’ll be trusted with real responsibility, challenged to bring your best, and supported when you stumble.

This is not a place where people micromanage you. But it is a place where we expect you to rise.`
      },
      {
        heading: "So Who Thrives Here?",
        desc: `<strong>1. Learners, Not Knowers</strong>: Our best interns are constantly experimenting, asking questions, and improving week after week.

2. <strong>Builders at Heart</strong>: Whether it’s writing code, sketching interfaces, pitching marketing ideas, or improving ops—people who want to build something thrive here.

3. <strong>Independent but Collaborative</strong>: You’ll get your own tasks and timelines. But you’re not alone. We check in, we brainstorm, we jam.

4. <strong>Resilient and Resourceful</strong>: Early-stage startups are messy. But the interns who take it in stride, problem-solve creatively, and keep moving—they grow the fastest.

5. <strong>Driven by More Than a Stipend</strong>: Many of our internships are unpaid or lightly paid. But those who see the long-term value—access, learning, and the sheer quality of exposure—often find themselves far ahead later.Some go on to 30–40 LPA jobs. It’s not luck. It’s momentum, built here.`
      },
      {
        heading: "Why They Do So Well Later",
        desc: `Because they leave here different.

Our interns:
- Get direct mentorship and feedback from founders and senior team members.
- Work on real products, not mock projects.
- Are allowed to try, fail, and <strong>try again</strong>—safely and supportively.
- Learn what actually matters in real-world execution: communication, clarity, user impact, team trust.

They don’t just learn how to work. They learn how to win—ethically, creatively, consistently.`
      },
      {
        heading: "Culture Is the Multiplier",
        desc: `We’ve intentionally built a culture that rewards ownership, learning, and initiative. We’re honest when things don’t work. We celebrate small wins. We call out great effort even before it pays off. That culture lifts everyone—including our interns.`
      },
      {
        heading: "A Final Word",
        desc: `If you’re looking for a place to just “do time” for a certificate or build a case for a master’s application, we’re probably not the right fit.

But if you’re looking for the kind of place where your raw potential gets noticed—and sharpened—then Ransh Innovations might just be the start of your best chapter yet.

<strong>You won’t leave here as an intern.

You’ll leave as someone who has done.</strong>`
      }
    ]
  },
  {
    id: 10,
    title: "More Than a Stipend: Why Our Unpaid Internships Build Real Careers",
    intro: "This isn’t free work. It’s a launchpad.",
    description:
      "In a world chasing quick payouts and flashy titles, an unpaid internship can feel like a step backward. We get it. At first glance, it’s easy to ask—“Why work without money?” But here’s the truth we’ve seen time and again at Ransh Innovations:<strong>The right unpaid opportunity can build a path to career success that money alone can’t buy.</strong>This isn’t a coffee-fetching internship. It’s not a resumé filler. It’s a launchpad.",
    author: "Shubham Singal",
    date: "August 2, 2025",
    tags: ["Internship", "Career Growth", "Startup Culture"],
    domain: "Mentorship & Strategy",
    points: [
      {
        heading: "Why We Don’t Pay… Yet",
        desc: `We’re a lean, innovation-first startup. We’re putting every resource into building products that solve real problems—and building a team of learners and doers. At this stage, we’ve chosen not to raise capital until the foundation is ready.That means we don’t have deep pockets—but we do have deep commitment to everyone who joins us.

You won’t find ping-pong tables or inflated titles here. But you will find:
- Real product-building experience
- One-on-one mentorship
- Direct exposure to the startup grind
- A chance to be part of core, original innovation—not just support roles

And for those who give their best? We give back with guidance, referrals, letters of recommendation, and when the time is right—paid roles or connections that lead to 10x better opportunities.`
      },
      {
        heading: "Not Free Work. Smart Work.",
        desc: `We’re not asking for free labor. We’re offering an <strong>exchange of value</strong>: your time and hustle in return for learning, mentorship, and proof of capability.

At Ransh Innovations, we believe your <strong>“proof of growth”<strong> matters more than your “proof of work.”

So while our interns aren’t allowed to publish unreleased product designs or innovations in their public portfolios (to protect IP and market strategy), we absolutely:
- Let you mention the project in interviews
- Back you up with clear written proof of your role
- Support you with personalized breakdowns of your work and its impact

And often, that alone is what helps interns land dream jobs or even 40 LPA packages.(You can check LinkedIn to see what former interns at Ransh Innovations are currently doing.).`
      },
      {
        heading: "A Better Long Game",
        desc: `We understand some people can't afford unpaid opportunities—and we respect that deeply. But for those who can, even temporarily, it becomes a <strong>strategic career investment.</strong>

Many of our former interns didn’t chase a few thousand rupees. They chased knowledge, mentorship, and meaning—and got far more than money in return:
- Some joined top companies
- Some launched their own ventures
- Some stayed and grew with us into long-term team members

Because skills built here compound. Vision grows here. And momentum you gain here doesn’t stop.`
      },
      {
        heading: "Final Word",
        desc: `If you’re only looking for a stipend, this internship isn’t for you.

But if you’re looking to <strong>start your big journey with intensity, ownership, and a steep learning curve</strong>, then Ransh Innovations might just be the best unpaid gig you’ll ever take.

Your effort is not going unnoticed. Your work here is building your own story—and someday, someone will write about how you turned this chapter into a career-defining moment.`
      }
    ]
  },
  {
    id: 11,
    title: "Interning at Our Startup: Not a Coffee Job, but a Career Kickstart",
    intro: "Internships aren’t tasks. They’re transformations.",
    description:
      "We’ve all heard the stereotypes. Internships where you’re either fetching coffee, copying code, or watching others build while you sit in the corner taking notes. That’s not how we do things at Ransh Innovations...",
    author: "Shubham Singal",
    date: "August 5, 2025",
    tags: ["Internship", "Startup Culture", "Career Growth"],
    domain: "Team & Execution",
    points: [
      {
        heading: "Let’s Be Honest About Internships",
        desc: `Internships where you’re either fetching coffee, copying code, or watching others build while you sit in the corner taking notes.

You show up excited… and leave with a certificate, a line on your CV, and not much else.

That’s <strong>not how we do things at Ransh Innovations.</strong>

Here, an internship isn’t a checkbox.

It’s a <strong>launchpad</strong>. A test ground. A real chance to create something that matters—<strong>while shaping your career before it even begins</strong>.`
      },
      {
        heading: "So What Makes Us Different?",
        desc: `We're not your average startup.

We’re building <strong>multiple products across sectors like EdTech, FitnessTech, and AI</strong>—all at once. That means we’re constantly experimenting, solving hard problems, and moving fast.

But what really sets us apart?

We <strong>don’t treat interns like interns.</strong>

At Ransh Innovations, interns:
- Own real features and modules
- Join product and design discussions
- Lead experiments, not just follow instructions
- Get regular feedback and mentorship
- Contribute to early-stage innovation, not late-stage maintenance

> <strong>“I wasn’t told what to do. I was asked what I thought. That was new.”</strong> — Former intern, now working as a UI/UX designer at a global product firm`
      },
      {
        heading: "More Than Just a Learning Experience",
        desc: `Most internships teach you something.

Ours lets you <strong>apply</strong> it in the wild.

Whether you’re in engineering, product, design, AI research, or marketing, you’ll face:
- <strong>Real ambiguity</strong> (because no one’s figured it all out yet)
- <strong>Tight feedback loops</strong> (so you actually grow)
- <strong>Visible impact</strong> (because your work becomes part of our live product)

And here's the best part:

You’re not doing it for us.

You’re doing it with us.

> “They didn’t just give me work—they taught me how to think like a product person.” — Former intern, now Product Manager at a Series A startup`
      },
      {
        heading: "Growth That Goes Beyond the Internship",
        desc: `Let’s talk outcomes.

Here’s what’s happened to some of our former interns:<strong>
- Multiple 30–40 LPA job offers as freshers
- Admissions to top universities abroad
- Offers from unicorn startups and MAANG-like companies
- Some even started their own ventures</strong> inspired by the work they did here

And none of this was luck.

It was a result of ownership, immersion, and <strong>thinking like a builder early on.</strong>

> “Interning here taught me more in 3 months than an entire semester of coursework.” — Former intern, now at a global AI firm`
      },
      {
        heading: "What We Look For",
        desc: `We don’t care much about where you studied or how many coding badges you’ve earned.

We look for:
- Curiosity that never sits still
- The drive to own your outcomes
- The willingness to learn fast and figure things out
- A love for building, not just watching others build

If you bring that, we’ll bring you into the room—not keep you outside the door.`
      },
      {
        heading: "An Internship That’s Actually Worth It",
        desc: `We won’t sugarcoat it—<strong>this isn’t easy.</strong>

You’ll be challenged. You’ll get feedback. You’ll mess up. Then you’ll grow.

And in return?
- You’ll <strong>work on things that matter</strong>
- You’ll build a portfolio that proves your ability
- You’ll <strong>learn what most people only learn after their first job,/strong>

If that sounds exciting—not intimidating—then you’re exactly who we want.

<strong>Because here at Ransh Innovations, internships aren’t coffee runs.

They’re career kickstarts.

#InternshipThatBuilds  
#FromDayOne  
#StartupLearningGround  
#CareerKickstart  
#GrowthOverTasks</strong>`
      }
    ]
  },
  {
    id: 12,
    title: "Why We Built This Company: The Story of Innovation, Scarcity, and Strategy",
    intro: "We didn’t start with funding. We started with fire.",
    description:
      "For us at Ransh Innovations, the spark came from an idea—not just to build a product, but to build a company that creates original solutions across multiple sectors, each deeply rooted in real-world needs...",
    author: "Shubham Singal",
    date: "August 7, 2025",
    tags: ["Startup Origin", "Strategy", "Innovation"],
    domain: "Vision & Culture",
    points: [
      {
        heading: "The Spark",
        desc: `Every fire begins with a flicker.

For us at <strong>Ransh Innovations</strong>, that flicker came from an idea—not just to build a product, but to build a company that <strong>creates original solutions across multiple sectors</strong>, each deeply rooted in real-world needs.

It didn’t start with a pitch deck or funding round. It started with <strong>a problem worth solving</strong> — a belief that innovation isn’t just about what’s trending; it’s about what’s missing.What do people struggle with that no one’s solving well?
What could truly make a difference if approached with care, depth, and creativity?
That was our ignition point`
      },
      {
        heading: "The Scarcity",
        desc: `We had ambition, clarity, and conviction—but <strong>not a lot of resources.</strong>

No investor war chest. No full-time army of engineers. No luxury of burning time or money.

Just the fire to build.

And the willingness to bet on strategy, not circumstance.
In the market, we saw <strong>a common pattern</strong>:

- AI platforms promising magic but delivering surface-level outcomes
- EdTech tools built for engagement metrics, not learning
- Fitness apps that forgot humans are not machines

We saw potential—<strong>but also a vacuum.</strong>
And where others saw constraints, we saw our canvas.`
      },
      {
        heading: "The Strategy",
        desc: `Our approach wasn’t conventional—but it was intentional.
We decided not to wait for “the perfect time” to start just one product.
Instead, we nurtured <strong>multiple products across sectors</strong> like EdTech and FitnessTech in parallel, at different stages of development—some still on the drawing board, others almost ready to launch.

Why?

Because solving complex problems can’t be forced into linear timelines. While one team tackled a deep tech bottleneck, another kept the momentum going elsewhere..

But we didn’t do it alone.

We built a <strong>team of highly driven interns</strong>—not just as free hands, but as future creators.
We designed each role around <strong>learning, ownership, and impact.</strong>
And it worked. Many of those interns went on to secure <strong>top offers</strong>, with some landing <strong>40+ LPA packages</strong> or gaining admission to <strong>prestigious global universities.</strong>

Our strategy was simple: <strong>build people while building products.</strong>
And while some may call it risky, for us, it was the only way to stay true to our mission.`
      },
      {
        heading: "The Journey",
        desc: `The road wasn’t smooth.

Some AI problems were so technically demanding that progress crawled.

Sometimes, we had to pause one product just so another team could move forward.

There were moments of burnout, days of doubt, and nights spent rewriting code or redesigning a flow from scratch.

But breakthroughs came too:
- A young intern cracked a solution we had debated for weeks.
- A new design sparked clarity on a fitness experience.
- A user testing session revealed exactly what our EdTech platform had to become.

We weren’t just surviving scarcity—we were shaping ourselves through it.`
      },
      {
        heading: "The Now",
        desc: `Today, <strong>Ransh Innovations</strong> is on the edge of something exciting.

We're not just a startup. We're a <strong>studio of ideas, a house of real innovation</strong>, and a team that believes deeply in building things that matter.

Some of our products are in the final sprint. Some are still early sketches.

But each one is built with originality, learning, ownership, and long-term usefulness at its heart.

And when we launch, we won’t be launching just apps—we’ll be launching <strong>proof:

That even with limited resources, high standards, deep thinking, and genuine care <strong>can take you far.</strong>
This isn’t the story of just one sector.
It’s not just about AI or apps.

It’s the story of <strong>Ransh innovations.</strong>
Of betting on people.
Of making something <strong>original, useful, and human</strong>—from scratch.

We built <strong>Ransh Innovations</strong> not just to exist, but to <strong>earn its place</strong> in the world.

This isn’t the story of just one sector.
It’s not just about AI or apps.

And now, we're ready to show you what we've built.
<strong>
#InnovationThroughScarcity  
#StartupWithSoul  
#FromInternsToInnovators  
#EdTechFitnessTechAI</strong>`
      }
    ]
  },
  {
    id: 13,
    title: "What We Expect from Our Interns (and Why It Sets You Up for Real Growth)",
    intro: "We don’t track hours. We track ownership.",
    description:
      "Most internships today are about clocking time and collecting certificates. Ours is not. We believe that internships should transform you—building the mindset, discipline, and problem-solving skills that take years to develop in traditional settings. And that’s why we set high expectations from day one—regardless of whether you're joining us as a developer, designer, AI intern, prompt engineer, or anything else.We’re not just trying to get work done. We’re trying to <strong>build people who can build things</strong>",
    author: "Shubham Singal",
    date: "August 10, 2025",
    tags: ["Internship", "Expectations", "Growth Mindset"],
    domain: "Team & Culture",
    points: [
      {
        heading: "1. Clarity in Basics Is Non-Negotiable",
        desc: `Before diving into advanced tools, frameworks, or workflows, you should be solid with the fundamentals of your field. Not perfect—just clear. Because once you’re clear with the basics, we can help you grow fast. If you're not, we’ll guide you—but we expect initiative on your part to catch up.`
      },
      {
        heading: "2. Willingness to Learn and Unlearn",
        desc: `We're building things no one has built before, and that means unlearning is often more valuable than clinging to your previous methods. Curiosity and adaptability aren't soft skills—they're survival tools here.`
      },
      {
        heading: "3. Willingness to Improve",
        desc: `Feedback is part of the process. Not just once, but continuously. If you're someone who takes feedback personally instead of professionally, it’s going to be tough. But if you’re someone who <strong>wants to grow faster than average</strong>, we’ll make sure you do.`
      },
      {
        heading: "4. Strong Communication",
        desc: `You don’t have to speak perfect English or have corporate polish. But you do need to communicate clearly—your thoughts, doubts, updates, blockers, or progress. Silence kills good ideas. Interns who speak up tend to grow faster and contribute better.`
      },
      {
        heading: "5. Attention to Detail",
        desc: `From naming files to writing commits, from UI alignments to model outputs—details matter. They’re not trivial. They show whether you’re building for the real world or just doing enough to look smart. We respect those who sweat the small stuff.`
      },
      {
        heading: "6. A Positive, Professional Attitude",
        desc: `This doesn't mean fake smiles. It means owning your work, taking responsibility, and keeping things constructive—even when things aren’t perfect. Because most days in a real team aren’t perfect, and your attitude often decides whether you’re building momentum or blocking it.`
      },
      {
        heading: "7. Team Spirit Over Solo Heroics",
        desc: `We love initiative. But we love <strong>collaboration</strong> more. Whether you're shipping a module, a prompt, or a design system, your work is part of a larger system. Interns who think like team players—not freelancers—always stand out.`
      },
      {
        heading: "8. Work Ethic That Matches Ambition",
        desc: `If you're here just to do the bare minimum and collect a letter, this isn’t your place. We don’t track your hours. We track your <strong>ownership</strong>. That means reliability, focus, and commitment to finish what you start. We value outcomes more than effort—but effort still matters.`
      },
      {
        heading: "Final Thought",
        desc: `<strong>This is not the easiest internship. It’s not meant to be.</strong>

But those who complete it often say it was the most defining phase of their early career.

We’re not here to give you a free certificate. We’re here to teach you how to <strong>build, think, and grow like the kind of professional</strong> top companies wish they had.

Obviously, we will also be giving a certificate upon completion of the internship.

If that’s your kind of place—we’re already rooting for you.`
      }
    ]
  }
];

function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  const [scrollStep, setScrollStep] = useState(0);
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
        const item = trackRef.current.querySelector('.blog-slider-item-wrapper');
        if (item) {
          const style = getComputedStyle(item);
          const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
          setScrollStep(item.getBoundingClientRect().width + margin);
        }
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const handleNext = () => {
    const maxIndex = Math.max(0, blogPosts.length - visibleItems);
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }

    if (trackRef.current) {
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

    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: -scrollStep,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="app__wrapper mt-2 md:mt-10" aria-label="Blog posts">
      <h1 className="h1-text">Blogs</h1>
      <div className="app__blogs__section">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="blog-slider-container">
            <div className="blog-slider" ref={trackRef}>
              <div className="blog-slider-track">
                {blogPosts.map((post) => (
                  <div className="blog-slider-item-wrapper" key={post.id}>
                    <BlogCard post={post} />
                  </div>
                ))}
                <div className="blog-buffer-card" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="blog-nav flex flex-row gap-3 mt-4 justify-center">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              <MdArrowCircleLeft className="blog-slider-arrow" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= blogPosts.length - visibleItems}
            >
              <MdArrowCircleRight className="blog-slider-arrow" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post }) {
  const isTall = post.title.length > 60;

  const firstParagraph = post.description
    .split('</p>')[0]
    .replace(/<[^>]+>/g, '')
    .slice(0, 180) + '...';

  return (
    <div className={`blog-slider-item ${isTall ? 'tall-card' : ''}`}>
      <h2 className="bold-text">{post.title}</h2>
      <h2 className="p-text text-[#080061]">
        {post.author} • {post.date}
      </h2>
      <p className="blog-intro-text">{post.intro}</p>
      <p className="description">{firstParagraph}</p>
      <Link to={`/blogs/${post.id}`} className="readmore-link">
        Read More
      </Link>
    </div>
  );
}

export default Blogs;