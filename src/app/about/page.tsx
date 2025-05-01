'use client'

import Navbar from '@/components/Navbar'
import { Code, Database, Cpu, Server, Terminal, GitBranch, Shield, Layers } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e093c] via-[#2e1065] to-[#6d28d9] text-white">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          About <span className="text-violet-400">Me</span>
        </h1>
        <p className="text-lg md:text-xl text-violet-100 mb-8">
          Full-stack developer with expertise in building scalable web applications and integrating AI models. Skilled in React.js, Node.js,
          Express.js, and databases, with a strong foundation in C++, Java, Python, and JavaScript. Passionate about delivering
          innovative solutions and optimizing user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 p-6 rounded-2xl border border-violet-500">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Maharaja Surajmal Institute of Technology</h3>
                <p className="text-violet-200">B.Tech in Computer Science | Sept 2021 – May 2024</p>
                <p className="text-violet-100">GPA: 8.6/10.0</p>
                <p className="text-violet-100 mt-2">Coursework: Computer Architecture, Data Structure and Algorithms, DBMS, Operating Systems</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">PUSA Institute of Technology</h3>
                <p className="text-violet-200">Diploma in Mechanical Engineering | Aug 2018 – Jun 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-violet-500">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages & Frameworks</h3>
                <ul className="space-y-1 text-violet-100">
                  <li>• C/C++, Java, Python</li>
                  <li>• JavaScript, TypeScript</li>
                  <li>• React.js, Node.js, Express.js</li>
                  <li>• HTML, CSS, Tailwind CSS</li>
                  <li>• WordPress</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Tools & Databases</h3>
                <ul className="space-y-1 text-violet-100">
                  <li>• GitHub, Docker</li>
                  <li>• MongoDB, MySQL</li>
                  <li>• Unity, Kaggle</li>
                  <li>• Google Colab</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
              <p className="text-violet-100">
                Strong problem-solving, leadership, teamwork, and communication abilities, with a focus on delivering impactful results.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-violet-500">
            <Code className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-violet-100">Expert in React.js, TypeScript, and modern CSS frameworks like Tailwind CSS.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-violet-500">
            <Server className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-violet-100">Proficient in Node.js, Express.js, and database management with MongoDB and MySQL.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-violet-500">
            <Cpu className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p className="text-violet-100">Experience in integrating AI models and developing AI-based applications.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl border border-violet-500">
            <GitBranch className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-violet-100">Knowledge of Docker, GitHub, and deployment practices.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 
// service_cfs2ay5