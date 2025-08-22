import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaMinus,
  FaExpand,
} from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Cedrick's AI assistant. I can tell you about his experience, skills, projects, and help answer any questions you have about his work. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Knowledge base about Cedrick
  const knowledgeBase = {
    personal: {
      name: "Cedrick Bienvenue",
      role: "Software Engineer",
      location: "Kigali, Rwanda",
      description:
        "Junior software engineer with a good foundation in client-side scripting, currently diving deeper into server-side programming and backend technologies",
    },
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
      frontend: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Middleware"],
      databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Docker", "Git", "GitHub Actions", "Postman", "Swagger"],
      cloud: ["AWS", "Terraform", "Kubernetes", "Nginx"],
    },
    experience: [
      {
        role: "Backend Developer",
        company: "Solvit Africa",
        period: "July 2025 - Present",
        description:
          "Code2Connect Fellowship - hands-on backend development with Node.js, building scalable server-side solutions",
      },
      {
        role: "Frontend Developer",
        company: "ALX Rwanda",
        period: "Mar 2024 - Oct 2024",
        description:
          "Frontend development program creating responsive, user-friendly web applications",
      },
    ],
    projects: [
      {
        name: "THE BIG FIVE",
        tech: ["React", "TailwindCSS", "Framer Motion"],
        description:
          "Platform highlighting educational initiatives with smooth animations and responsive design",
      },
      {
        name: "AUTHENTICATION System",
        tech: ["MERN Stack", "JWT", "Nodemailer", "Swagger"],
        description:
          "Backend-focused project exploring user authentication flows and JWT security",
      },
      {
        name: "BLOG-BACKEND",
        tech: ["Express.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
        description:
          "Robust blog backend with clean architecture and secure endpoints",
      },
      {
        name: "E-COMMERCE API",
        tech: ["Node.js", "Express", "TypeScript", "Sequelize", "PostgreSQL"],
        description:
          "E-commerce backend with JWT authentication, Redis caching, and Swagger documentation",
      },
    ],
    contact: {
      email: "cedrick13bienvenue@gmail.com",
      phone: "+250 784 667 128",
      linkedin: "https://www.linkedin.com/in/cedrick-bienvenue-256317298/",
      github: "https://github.com/cedrick13bienvenue",
    },
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Greeting responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! I'm here to help you learn more about Cedrick. You can ask me about his skills, experience, projects, or how to contact him. What would you like to know?";
    }

    // Skills related
    if (
      message.includes("skill") ||
      message.includes("technolog") ||
      message.includes("programming")
    ) {
      return `Cedrick has expertise in:\n\n🔸 **Frontend**: ${knowledgeBase.skills.frontend.join(
        ", "
      )}\n🔸 **Backend**: ${knowledgeBase.skills.backend.join(
        ", "
      )}\n🔸 **Databases**: ${knowledgeBase.skills.databases.join(
        ", "
      )}\n🔸 **Tools**: Docker, Git, GitHub Actions, Postman, Swagger\n🔸 **Cloud**: AWS, Terraform, Kubernetes\n\nHe's currently focusing on backend development and DevOps practices!`;
    }

    // Experience related
    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job")
    ) {
      return `Here's Cedrick's professional experience:\n\n🔸 **Current**: Backend Developer at Solvit Africa (July 2025 - Present)\n   - Code2Connect Fellowship program\n   - Building scalable server-side solutions with Node.js\n\n🔸 **Previous**: Frontend Developer at ALX Rwanda (Mar 2024 - Oct 2024)\n   - Developed responsive web applications\n   - Worked with React, JavaScript, and modern frontend tools\n\nHe's passionate about continuous learning and solving real-world problems!`;
    }

    // Projects related
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("built") ||
      message.includes("created")
    ) {
      return `Cedrick has worked on several interesting projects:\n\n🔸 **E-Commerce API** - Node.js backend with TypeScript, PostgreSQL, and Redis\n🔸 **Blog Backend** - Express.js API with Docker and clean architecture\n🔸 **Authentication System** - MERN stack with JWT and email verification\n🔸 **The Big Five** - React platform with smooth animations\n\nEach project demonstrates his growth from frontend to full-stack development. Want details about any specific project?`;
    }

    // Contact related
    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("hire") ||
      message.includes("reach")
    ) {
      return `You can reach Cedrick through:\n\n📧 **Email**: ${knowledgeBase.contact.email}\n📱 **Phone**: ${knowledgeBase.contact.phone}\n💼 **LinkedIn**: [Connect with Cedrick](${knowledgeBase.contact.linkedin})\n💻 **GitHub**: [View his code](${knowledgeBase.contact.github})\n\nHe's always open to discussing new opportunities and collaborations!`;
    }

    // Backend specific
    if (
      message.includes("backend") ||
      message.includes("api") ||
      message.includes("server")
    ) {
      return `Cedrick is currently specializing in backend development! His backend skills include:\n\n🔸 **Frameworks**: Node.js, Express.js\n🔸 **Languages**: JavaScript, TypeScript, Python\n🔸 **Databases**: PostgreSQL, MongoDB, MySQL, Redis\n🔸 **Security**: JWT authentication, middleware, input validation\n🔸 **DevOps**: Docker, CI/CD pipelines, AWS deployment\n\nHe's particularly passionate about building robust, scalable APIs and exploring DevOps practices.`;
    }

    // Location/personal
    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("rwanda") ||
      message.includes("kigali")
    ) {
      return `Cedrick is based in Kigali, Rwanda 🇷🇼. He's part of the growing tech ecosystem in Rwanda and is passionate about contributing to the local tech community while building solutions that can scale globally.`;
    }

    // Default response
    return `I'd be happy to help you learn more about Cedrick! You can ask me about:\n\n🔸 His technical skills and technologies\n🔸 Work experience and current role\n🔸 Projects he's built\n🔸 How to contact him\n🔸 His background and location\n\nWhat specifically interests you about Cedrick's work?`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (text) => {
    // Convert markdown-like formatting to HTML
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/🔸 /g, "• ")
      .replace(/\n/g, "<br>");

    return { __html: formatted };
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? "hidden" : "block"}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaRobot className="text-2xl" />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "60px" : "500px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-80 bg-stone-900 border border-stone-700 rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white text-xl" />
                <div>
                  <h3 className="text-white font-medium">
                    Cedrick's AI Assistant
                  </h3>
                  <p className="text-blue-100 text-xs">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded"
                >
                  {isMinimized ? <FaExpand /> : <FaMinus />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            {!isMinimized && (
              <>
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.isBot ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`flex items-start gap-2 max-w-[80%] ${
                          message.isBot ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-full ${
                            message.isBot ? "bg-blue-500" : "bg-purple-500"
                          }`}
                        >
                          {message.isBot ? (
                            <FaRobot className="text-white text-sm" />
                          ) : (
                            <FaUser className="text-white text-sm" />
                          )}
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.isBot
                              ? "bg-stone-800 text-stone-200"
                              : "bg-blue-500 text-white"
                          }`}
                          dangerouslySetInnerHTML={formatMessage(message.text)}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="p-2 rounded-full bg-blue-500">
                          <FaRobot className="text-white text-sm" />
                        </div>
                        <div className="bg-stone-800 text-stone-200 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-stone-700">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about Cedrick..."
                      className="flex-1 bg-stone-800 border border-stone-600 rounded-lg px-3 py-2 text-stone-200 placeholder-stone-400 focus:outline-none focus:border-blue-500"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputMessage.trim()}
                      className="bg-blue-500 hover:bg-blue-600 disabled:bg-stone-600 text-white p-2 rounded-lg transition-colors"
                    >
                      <FaPaperPlane />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
