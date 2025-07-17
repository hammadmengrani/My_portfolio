import About from "@/components/About";
import ThreeJSBanner from "@/components/Banner";
import Contact from "@/components/Contact";
import SectionContainer from "@/components/container/SectionContainer";
import Projects from "@/components/Projects";
import React from "react";

const data = [
  {
    _id: "1",
    title: "Full Stack Development",
    desc: "I build scalable full stack applications using Next.js for modern frontend development and Flask/FastAPI for efficient, lightweight backend services. My approach emphasizes clean architecture, API-first design, and seamless integration between client and server.",
    icon: "Layers",
  },
  {
    _id: "2",
    title: "Data Science & Analysis",
    desc: "I work on extracting insights from data through exploratory data analysis, visualization, and reporting. My skillset includes Python-based analysis and building interactive, decision-ready dashboards using Power BI.",
    icon: "BarChart3",
  },
  {
    _id: "3",
    title: "Automation & Workflows",
    desc: "I design and implement automated workflows using n8n, enabling seamless integration between tools, services, and custom logic. These workflows help streamline operations, reduce manual effort, and improve system efficiency.",
    icon: "Workflow",
  },
  {
    _id: "4",
    title: "Generative AI & Custom LLMs",
    desc: "I explore the potential of Generative AI by building solutions with custom GPTs, Retrieval-Augmented Generation (RAG) pipelines, and fine-tuning LLMs for domain-specific applications, from content generation to intelligent assistants.",
    icon: "Bot",
  },
];

const achievementsData = [
  {
    _id: "1",
    title: "Runner-Up — ZabFest 2024",
    desc: "Built the ZabMart smart shopping application, integrating an e-cart system with a physical trolley for enhanced retail efficiency.",
    icon: "Award", // ✅ exists in Lucide
  },
  {
    _id: "2",
    title: "Certified in Image Modeling with Keras — DataCamp",
    desc: "Completed practical training in deep learning, focusing on image classification using Keras and TensorFlow.",
    icon: "BookCheck", // ✅ Replacing Certificate (symbolic of course completion)
  },
  {
    _id: "3",
    title: "Participant — ZabFest 2025 (Business Automation Track)",
    desc: "Developed and presented a project focused on automating retail operations with intelligent workflow systems.",
    icon: "BriefcaseBusiness", // ✅ exists in Lucide
  },
  {
    _id: "4",
    title: "Participant — RemoteBase Hackfest 2025",
    desc: "Collaborated on a time-bound, team-based project tackling real-world problems in a competitive hackathon environment.",
    icon: "Code2", // ✅ Replacing LaptopCode (symbolic of coding)
  },
];

const skills = [
  {
    _id: "1",
    title: "Development & Design",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript","Wordpress","Python","Flask", "FastAPI","React Native", "GraphQL", "Node.js"],
  },
  {
    _id: "2",
    title: "AI & Data Science",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP",
      "FastAPI",
      "Generative AI",
      "LangChain",
      "LLM",
      "SQL","PostgreSQL"
    ],
  },
  {
    _id: "3",
    title: "Tools & Platforms",
    tags: ["Git", "MongoDB", "Power BI", "Jupyter", "Vercel","n8n", "Docker", "Postman","insomnia"],
  },
];

const dummyProjects = [
  {
    _id: "1",
    image: "/image_1.png",
    title: "AI-Powered Storytelling from Visual Media (n8n + Gemini)",
    desc: "Built a fully automated workflow that transforms images and videos into creative, context-aware stories using n8n and Google Gemini. The system processes uploaded media, interprets visual content through Gemini, and generates engaging narratives — all without writing backend code.This no-code pipeline showcases the power of combining generative AI, automation, and visual understanding, with potential use cases in education, content creation, and storytelling tools.",
    tools: ["n8n", "Gemini", "Ai Agent",],
    url:'https://www.linkedin.com/posts/hammad-mengrani-00896b1b4_artificialintelligence-geminiai-n8n-activity-7346931880224591872-lp0j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADH53EgBs_BnQM8u05Uw9Sp_96Ul8GKPyHU'
  },
  {
    _id: "2",
    image: "/image_3.jpeg",
    title: "Smart Marketplace Automation Tool (ZABEFEST 2025 Showcase)",
    desc: "The Smart Marketplace Automation Tool, showcased at ZABEFEST, is an AI-powered solution that automates product discovery, trend analysis, vendor communication, and marketing. It offers real-time product recommendations, integrates Google Trends for data-driven decisions, auto-generates vendor emails, and creates high-quality marketing visuals using generative AI — helping businesses launch faster, sell smarter, and grow effortlessly.",
    tools: ["Next js", "Gemini", "LangChain","Dall-e","FastAPI","GraphQL","Mongodb"],
    url:"https://www.linkedin.com/posts/hammad-mengrani-00896b1b4_businessautomation-smartmarketplace-ecommerceinnovation-activity-7335318963741941760-l8q7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADH53EgBs_BnQM8u05Uw9Sp_96Ul8GKPyHU"
  },
  {
    _id: "3",
    image: "/image_5.png",
    title: "IslamicGPT – A Conversational AI for Islamic Understanding",
    desc: "IslamicGPT is a conversational AI assistant developed for Netsol Online, built using Google Gemini and LangChain. It’s designed to provide respectful, context-aware, and informative responses to Islamic questions, helping users navigate faith-based topics, daily practices, and spiritual queries. By leveraging advanced prompt chaining and powerful language models, IslamicGPT ensures responses remain aligned with Islamic values while maintaining cultural and contextual relevance — offering a modern, accessible path to Islamic understanding.",
    tools: ["Next js", "Gemini", "LangChain","FastAPI","GraphQL","Mongodb"],
    url:"https://islamicgpt.com/"
  },
  {
    _id: "4",
    image: "/image_4.jpg",
    title: "EcomGenius – AI-Powered Product Recommendation Assistant",
    desc: "EcomGenius is a custom GPT-powered assistant designed to deliver intelligent product recommendations based on user preferences and sales predictions. Fine-tuned on retail-specific data, this LLM adapts to individual user behavior to suggest relevant, high-conversion products in real time. By combining conversational AI with predictive modeling, EcomGenius enhances the shopping experience and supports smarter decision-making for e-commerce platforms.",
    tools: ["Next js", "Gemini", "LangChain","LLM","Flask","HuggingFace","Mongodb"],
    url:"https://www.linkedin.com/posts/hammad-mengrani-00896b1b4_ai-machinelearning-genrativeai-activity-7292806452795133953-wBSH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADH53EgBs_BnQM8u05Uw9Sp_96Ul8GKPyHU"
  },
  {
    _id: "5",
    image: "/image_6.png",
    title: "ZabMart – Smart Shopping App | Runner-Up at ZabFest 2024",
    desc: "ZabMart is a smart shopping application that integrates AI with physical retail through a connected e-cart system. Designed to enhance the in-store experience, the app syncs with a smart trolley to automatically detect products, manage billing, and streamline the checkout process.This innovation earned Runner-Up at ZabFest 2024, recognized for its practical impact in automating retail workflows and bridging hardware with intelligent software — creating a frictionless, tech-driven shopping journey.",
    tools: ["React", "React Native", "Mongodb","Express Js","Node js","MQTT"],
    url:"https://www.figma.com/design/nU9jqLgok5g7he5XnaqYCL/Untitled--Copy-?node-id=46-2&t=8haNJh5yf3Nyre0U-0"
  },
  {
    _id: "6",
    image: "/image_7.png",
    title: "Fashion E-commerce Website",
    desc: "Pehnawa is a fully functional fashion e-commerce website developed for Netsol Online, built and deployed using the Metastore.ai platform. It allows customers to seamlessly browse, filter, and purchase products through a modern, responsive interface. Designed for smooth shopping experiences, Pehnawa highlights how brands can quickly launch and manage their own online stores using Metastore’s multi-tenant infrastructure.",
    tools: ["React", "Next js"],
    url:"https://pehnawa.metastore.ai/"
  },
];

const page = () => {
  return (
    <div>
      <ThreeJSBanner />
      <SectionContainer
        className="container mx-auto py-12"
        title="About Me"
        desc="I’m Hammad Mengrani, a full stack developer and artificial intelligence student currently studying at SZABIST University, with a passion for building intelligent, data-driven digital solutions. With hands-on experience in Next.js, React Native, and Python, I specialize in creating scalable web and mobile applications that blend seamless UI/UX with smart backend logic. My work spans across AI-powered systems, automation using n8n, and generative AI integration, enabling personalized user experiences and operational efficiency. I’ve also built solutions in data analysis and business intelligence, including NLP-based CV extractors, automated marketing flows, and interactive dashboards with Power BI. I thrive at the intersection of code, data, and automation to deliver real-world impact."
        bgColor={true}
        childClassName="flex flex-row items-center justify-center mx-auto overflow-hidden"
      >
        <About about={data} className="items-center text-center" />
      </SectionContainer>
      <SectionContainer
        className="container mx-auto py-12"
        title="Technical Skills"
        desc="A comprehensive toolkit spanning modern web development and artificial intelligence"
        bgColor={true}
        childClassName="flex flex-row items-center justify-center mx-auto overflow-hidden"
      >
        <About about={skills} className="items-center text-center w-96 h-80" />
      </SectionContainer>
      <SectionContainer
        className="container mx-auto py-12"
        title="Featured Projects"
        desc="A showcase of innovative solutions combining web development with artificial intelligence — with more projects available on my LinkedIn profile."
        bgColor={true}
        childClassName="flex flex-row items-center justify-center mx-auto overflow-hidden"
      >
        <Projects projects={dummyProjects} className="" />
      </SectionContainer>
      <SectionContainer
        className="container mx-auto py-12"
        title="Certifications & Accomplishments"
        desc="Recognition for innovative solutions and technical excellence"
        bgColor={true}
        childClassName="flex flex-row items-center justify-center mx-auto overflow-hidden"
      >
        <About about={achievementsData} className="items-center text-center h-72" />
      </SectionContainer>
      <SectionContainer
        className="container mx-auto py-12"
        title="Let's Build Something Amazing"
        desc="Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with modern web technologies and AI integration."
        bgColor={true}
        childClassName="flex flex-row items-center justify-center mx-auto overflow-hidden"
      >
        <Contact/>
      </SectionContainer>
            <SectionContainer
        className="container mx-auto py-12"
        title="Let's Build Something Amazing"
        desc="Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with modern web technologies and AI integration."
        bgColor={true}
        childClassName="flex flex-row items-center justify-center mx-auto overflow-hidden"
      >
        <Contact/>
      </SectionContainer>
    </div>
  );
};

export default page;
