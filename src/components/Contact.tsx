import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full px-5 md:px-20 py-16 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">
            I&apos;m always open to discussing new opportunities,
            collaborations, or just having a chat about technology and
            innovation.
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
              <Mail className="text-cyan-400" size={20} />
              <span>hammadmengrani05@gmail.com</span>
            </div>

            <a
              href="https://github.com/hammadmengrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-400 transition-colors"
            >
              <Github className="text-blue-400" size={20} />
              <span>hammadmengrani</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hammad-mengrani-00896b1b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="text-purple-400" size={20} />
              <span>hammad mengrani</span>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 space-y-5 border border-white/10 shadow-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="bg-black/70 border border-cyan-400/30 px-4 py-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="bg-black/70 border border-blue-400/30 px-4 py-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows={5}
              className="bg-black/70 border border-purple-400/30 px-4 py-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
