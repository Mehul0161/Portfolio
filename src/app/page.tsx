'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { ArrowRight, Code, Database, Cpu, Server } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Frontend Development', description: 'React.js, TypeScript, Tailwind CSS' },
    { icon: <Server className="w-6 h-6" />, name: 'Backend Development', description: 'Node.js, Express.js, RESTful APIs' },
    { icon: <Database className="w-6 h-6" />, name: 'Database Management', description: 'MongoDB, MySQL, Data Modeling' },
    { icon: <Cpu className="w-6 h-6" />, name: 'AI Integration', description: 'Machine Learning, TensorFlow, Python' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e093c] via-[#2e1065] to-[#6d28d9] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm <span className="text-violet-400">Mehul</span>
                <br />
                <span className="text-4xl md:text-5xl">Full Stack Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-violet-100">
                I build scalable web applications and integrate AI models to create innovative solutions.
                Currently working at WriteCream AI, focusing on full-stack development and AI integration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 text-white font-semibold text-lg shadow-lg hover:from-violet-600 hover:to-violet-800 transition"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 border border-violet-500 text-white font-semibold text-lg hover:bg-white/20 transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-violet-700/20 rounded-2xl blur-3xl" />
              <div className="relative bg-white/10 border border-violet-500 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 border border-violet-500/50 rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-violet-400">{skill.icon}</div>
                        <h4 className="font-semibold">{skill.name}</h4>
                      </div>
                      <p className="text-sm text-violet-200">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Featured <span className="text-violet-400">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Based Code Generator',
                description: 'Generates frontend code from user prompts with real-time preview',
                technologies: ['React.js', 'Node.js', 'Daytona SDK'],
                link: '/projects'
              },
              {
                title: 'Intelligent Food Ordering',
                description: 'AI-powered system for food recognition and meal recommendations',
                technologies: ['React.js', 'Node.js', 'MySQL'],
                link: '/projects'
              },
              {
                title: 'Student Result Management',
                description: 'Comprehensive system for managing student results and grades',
                technologies: ['React.js', 'Node.js', 'MySQL'],
                link: '/projects'
              }
            ].map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                className="group bg-white/10 border border-violet-500 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-violet-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-violet-700/30 border border-violet-400 text-violet-100 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-violet-400">Amazing</span> Together
          </h2>
          <p className="text-lg text-violet-100 mb-8">
            Have a project in mind? I'm always open to discussing new opportunities and collaborations.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 text-white font-semibold text-lg shadow-lg hover:from-violet-600 hover:to-violet-800 transition"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
} 