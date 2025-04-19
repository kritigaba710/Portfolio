"use client"
import Image from "next/image";
import Head from "next/head";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import FloatingImage from "./Components/FloatingImage";

export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);
  const divRef = useRef(null);
  const [visibleDiv, setVisibleDiv] = useState(false);

  const handleButtonClick = (divId) => {
    setVisibleDiv((prevDiv) => (prevDiv === divId ? null : divId));
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-950 " style={{
      background: 'radial-gradient(circle, rgba(15, 19, 41, 1) 12%, rgba(23, 2, 32, 1) 64%)',
      padding: '20px',
      borderRadius: '8px',
    }}>

      <Head>
        <title>Kriti - Portfolio</title>
        <meta name="description" content="Your Name's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md shadow-md text-white">
        <nav className="flex justify-between items-center py-6 px-10">
          <div className="text-2xl font-semibold text-gray-300 hidden md:block">My Portfolio</div>
          <ul className="flex space-x-8">
            <li><a href="#about" className=" text-gray-500 hover:text-purple-500">About</a></li>
            <li><a href="#skills" className=" text-gray-500 hover:text-purple-500">Skills</a></li>
            <li><a href="#projects" className=" text-gray-500 hover:text-purple-500">Projects</a></li>
            <li><a href="#contact" className=" text-gray-500 hover:text-purple-500">Contact</a></li>
          </ul>
        </nav>
      </header>


      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-320 text-white pt-20">
        <header className="text-center py-35">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 fade-in">Welcome To My</h1>
          <p className="text-5xl font-semibold text-purple-320 fade-in">Portfolio Website</p>
          <p className="text-xl text-gray-300 mt-4 fade-in">I am a versatile developer and designer, creating both functional web applications and visually engaging user interfaces.</p>
          <a href="#projects" className="mt-6 inline-block px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 fade-in">View My Work</a>
        </header>


        <section id="about" className="py-20 pt-30 max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8">
            
            <div className="rounded-full mx-6 my-4 w-60 h-60 overflow-hidden border-2 border-gray-300 mb-8 md:mb-0">
              <Image src="/me.jpg" alt="image" width={100} height={100} className="w-full h-full object-cover" />
            </div>
            
            <div className="mt-4 flex flex-col w-2/3 text-center md:text-left">
              <span className="text-3xl mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">Hello, I&apos;m</span>
              <span className="text-3xl mx-2 font-bold">Kriti</span>
              <p className="text-gray-500 text-xl mx-3">
                I’m a MERN Stack Developer passionate about building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js. I focus on creating seamless front-end experiences and robust back-end systems.
                {isExpanded && (
                  <>
                    {" "}
                    With strong command over React.js, I craft interactive UIs, while using Node.js and Express.js to manage backend logic, authentication, and performance optimization. I also work with tools like Spline and Figma for UI design and handle full-stack project lifecycles effectively. Currently pursuing a Bachelor’s in Computer Applications (2023–2026) at Maharishi Markandeshwar University with an 8.0 CGPA. I completed my high school in 2023 with 87%, specializing in mathematics and IT.
                  </>
                )}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 mt-2 hover:underline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>

            </div>
          </div>
        </section>




        <section id="skills" className="py-20 max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex justify-center items-center h-screen">
      <FloatingImage />
    </div>
            <div className="flex flex-col w-full md:w-1/2">
              
              <button
                onClick={() => handleButtonClick(1)}
                className="cursor-pointer text-2xl flex hover:text-purple-800 items-center text-gray-300 mb-4"
              >
                Frontend Technologies
                <Image width={32} height={32} src="/down.svg" alt="Down Arrow" className="invert-0 ml-2" />
              </button>
              <div ref={divRef} style={{ display: visibleDiv === 1 ? 'block' : 'none' }}>
                <ul className="flex flex-wrap gap-6">
                  <li className=""><Image src="/html.svg" alt="" width={32} height={32} />HTML5</li>
                  <li><Image src="/css.avif" alt="" width={32} height={32} />CSS3</li>
                  <li className="mt-3"><Image src="/js.svg" alt="" width={32} height={32} />JavaScript</li>
                  <li><Image src="/tailwind.svg" alt="" width={32} height={32} />TailwindCSS</li>
                </ul>
              </div>
              <hr />

             
              <button
                onClick={() => handleButtonClick(2)}
                className="cursor-pointer hover:text-purple-800 flex text-2xl items-center text-gray-300 mb-4"
              >
                Web Frameworks
                <Image width={32} height={32} src="/down.svg" alt="Down Arrow" className="invert-0 ml-2" />
              </button>
              <div ref={divRef} style={{ display: visibleDiv === 2 ? 'block' : 'none' }}>
                <ul className="flex flex-wrap gap-6">
                  <li><Image src="/express.svg" alt="" width={32} height={32} />Express</li>
                  <li><Image src="./react.svg" alt="" width={32} height={32} />React</li>
                  <li><Image src="/js.svg" alt="" width={32} height={32} />NodeJS</li>
                  <li><Image src="/next.svg" alt="" width={32} height={32} />NextJS</li>
                  <li><Image src="/vite.svg" alt="" width={32} height={32} />Vite</li>
                </ul>
              </div>
              <hr />

             
              <button
                onClick={() => handleButtonClick(3)}
                className="cursor-pointer hover:text-purple-800 flex text-2xl items-center text-gray-300 mb-4"
              >
                Languages
                <Image width={32} height={32} src="/down.svg" alt="Down Arrow" className="invert-0 ml-2" />
              </button>
              <div ref={divRef} style={{ display: visibleDiv === 3 ? 'block' : 'none' }}>
                <ul className="flex flex-wrap gap-6">
                  <li><Image src="/js.svg" alt="" width={32} height={32} />JavaScript</li>
                  <li><Image src="/python.svg" alt="" width={32} height={32} />Python</li>
                  <li><Image src="/c++.svg" alt="" width={32} height={32} />C++</li>
                </ul>
              </div>
              <hr />

              
              <button
                onClick={() => handleButtonClick(4)}
                className="cursor-pointer hover:text-purple-800 flex text-2xl items-center text-gray-300 mb-4"
              >
                Tools
                <Image width={32} height={32} src="/down.svg" alt="Down Arrow" className="invert-0 ml-2" />
              </button>
              <div ref={divRef} style={{ display: visibleDiv === 4 ? 'block' : 'none' }}>
                <ul className="flex flex-wrap gap-6">
                  <li><Image src="/vs.svg" alt="" width={32} height={32} />VS Code</li>
                  <li><Image src="/bash.svg" alt="" width={32} height={32} />BASH</li>
                  <li><Image src="/spline.jpg" alt="" width={32} height={32} />Spline</li>
                  <li><Image src="/figma.svg" alt="" width={32} height={32} />Figma</li>
                  <li><Image src="/npm.svg" alt="" width={32} height={32} />NPM</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section id="projects" className="py-20 max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="mt-6 grid mx-4 grid-cols-1 md:grid-cols-2 gap-10">
  {[
    { title: "Jarvis", img: "/jarviss.png", link: "https://github.com/kritigaba710/Jarvis-js.git" },
    { title: "Todo App", img: "/todo.png", link: "https://github.com/kritigaba710/Todo-app.git" },
    { title: "Spotify clone", img: "/spotify.png", link: "https://github.com/kritigaba710/spotify-project.git" },
    { title: "ID-Card Generator", img: "/idcard.png", link: "https://github.com/kritigaba710/IDCardGenerator.git" },
    { title: "Finance-Visualizer", img: "/graph.png", link: "https://github.com/kritigaba710/Personal-Finance-Visualizer.git" },
  ].map((card, index) => (
    <motion.div
      key={card.title}
      initial={{
        opacity: 0,
        scale: 0.5,
        rotateX: 90, 
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotateX: 0, 
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2, 
      }}
      className="card p-6 flex flex-col justify-center items-center rounded-lg shadow-lg bg-cover bg-center bg-gradient-to-r from-[#524664] to-[#422b47]"
    >
      <div><img src={card.img} width={200} height={200} alt={card.title} /></div>
      <h3 className="text-2xl">{card.title}</h3>
      <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
        View on GitHub
      </a>
    </motion.div>
  ))}
</div>

        </section>

      
        <div className="h-[2px] w-[80%] mx-auto bg-gradient-to-r from-[#371f4d] via-[#2f0b3d] to-red-400 rounded-full" />



        <section id="contact" className="py-20 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-3 items-center"><span>Contact Me</span><span className="text-pink-500 text-4xl">★</span></div>
          </motion.h2>
          <p className="flex flex-col">
            <span className="text-purple-320 text-2xl font-semibold">Let&apos;s Work Together</span>
            <span className="text-gray-300 px-9">I&apos;m currently looking for a new opportunity. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</span>
          </p>
          <p className="mt-4">Email: <a href="mailto:your.email@example.com" className="text-blue-400">kritigaba31@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kriti-gaba-47623b287/" target="_blank" rel="noopener noreferrer" className="text-blue-400">Kriti Gaba</a></p>
        </section>

        <footer className="py-10 text-center">
          <p>&copy; {new Date().getFullYear()} Kriti. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
