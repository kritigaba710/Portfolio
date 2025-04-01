"use client"
import Image from "next/image";
import Head from "next/head";
import { useRef, useState } from "react";

export default function Home() {
  const divRef = useRef(null);
  const [visibleDiv, setVisibleDiv] = useState(false);

  const handleButtonClick = (divId) => {
    setVisibleDiv((prevDiv) => (prevDiv === divId ? null : divId));
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-950 "   style={{
      background: 'radial-gradient(circle, rgba(15, 19, 41, 1) 12%, rgba(23, 2, 32, 1) 64%)',
      padding: '20px',
      borderRadius: '8px',
    }}>

      <Head>
        <title>Kriti - Portfolio</title>
        <meta name="description" content="Your Name's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Navbar */}
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
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 fade-in">Welcome To My</h1>
          <p className="text-3xl font-semibold text-purple-320 fade-in">Portfolio Website</p>
          <p className="text-sm mt-4 fade-in">I am a versatile developer and designer, creating both functional web applications and visually engaging user interfaces.</p>
          <a href="#projects" className="mt-6 inline-block py-1.5 px-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 fade-in">View My Work</a>
        </header>


        <section id="about" className="py-20 pt-30 max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">About Me</h2>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8">
            {/* Image */}
            <div className="rounded-full mx-6 my-4 w-60 h-60 overflow-hidden border-2 border-gray-300 mb-8 md:mb-0">
              <Image src="/me.jpg" alt="image" width={100} height={100} className="w-full h-full object-cover" />
            </div>
            {/* Text */}
            <div className="mt-4 flex flex-col w-2/3 text-center md:text-left">
              <span className="text-3xl font-bold mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Hello, I&apos;m</span>
              <span className="text-3xl mx-2">Kriti</span>
              <p className="text-gray-500 text-sm mx-3">
                I am a MERN stack Developer with a strong passion for building dynamic, scalable, and high-performance web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in developing responsive front-end interfaces and robust back-end systems. My front-end skills allow me to craft seamless and interactive user experiences using React.js, ensuring intuitive and engaging applications. On the backend, I leverage Node.js and Express.js to manage authentication and optimize server-side performance. From designing intuitive UIs using Spline, Figma to handling server-side logic and database operations, I excel in the full-stack development lifecycle, delivering modern web solutions that meet both technical and business needs.
                I am currently pursuing a Bachelor&apos;s of Computers & Applications at Maharishi Markandeshwar University (2023 - 2026) with a CGPA of 8.0/10. My studies focus on advanced computer science concepts, including web development, algorithms, and data structures. I completed high school at Govt. model sanskriti senior seconday School (2017 - 2019) with a focus on mathematics and information technology, securing 87%.
              </p>
            </div>
          </div>
        </section>




    <section id="skills" className="py-20 max-w-4xl mx-auto">
  <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</h2>
  <div className="flex flex-col md:flex-row gap-6 items-center">
    <div className="flex justify-center w-full md:w-1/2">
      <Image src="/skill.svg" alt="Skill Image" width={200} height={200} />
    </div>
    <div className="flex flex-col w-full md:w-1/2">
      {/* Frontend Technologies */}
      <button
        onClick={() => handleButtonClick(1)}
        className="cursor-pointer flex hover:text-purple-800 items-center text-gray-300 mb-4"
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
      
      {/* Web Frameworks */}
      <button
        onClick={() => handleButtonClick(2)}
        className="cursor-pointer hover:text-purple-800 flex items-center text-gray-300 mb-4"
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
      
      {/* Languages */}
      <button
        onClick={() => handleButtonClick(3)}
        className="cursor-pointer hover:text-purple-800 flex items-center text-gray-300 mb-4"
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
      
      {/* Tools */}
      <button
        onClick={() => handleButtonClick(4)}
        className="cursor-pointer hover:text-purple-800 flex items-center text-gray-300 mb-4"
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
          <h2 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</h2>
          <div className="mt-6 grid mx-4 grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-lg shadow-lg bg-cover bg-center bg-gray-800"  >
              <h3 className="text-2xl">Jarvis</h3>
              <hr />
              <p className="mt-2">A voice-controlled personal assistant built using HTML, CSS, and JavaScript. It allows users to perform tasks like fetching real-time information, setting reminders, and controlling applications through voice commands.</p>
              <a href="https://github.com/kritigaba710/Jarvis-js.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl">Todo App</h3>
              <hr />
              <p className="mt-2">A simple To-Do app built with React that allows users to add, edit, and delete tasks. It features a clean, responsive UI and local storage to persist tasks across session</p>
              <a href="https://github.com/kritigaba710/Todo-app.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl">Spotify clone</h3>
              <hr />
              <p className="mt-2">A Spotify Clone built with HTML, CSS, and JavaScript, replicating the music streaming platform&apos;s basic features such as creating playlists, and playing music. It demonstrates my skills in front-end development and user interface design.</p>
              <a href="https://github.com/kritigaba710/spotify-project.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Contact Me</h2>
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
