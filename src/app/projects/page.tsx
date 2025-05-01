'use client'

import Navbar from '@/components/Navbar'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect } from 'react'

const projects = [
  {
    title: 'AI-Based Code Generator and Previewer',
    description: 'Built a full-stack web app that generates frontend code (React, Vue, Angular, Next.js) from user prompts and displays a real-time preview. Developed a code editor with real-time syntax highlighting and integrated Daytona SDK to show interactive previews.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'Daytona SDK', 'HTML', 'CSS', 'JavaScript'],
    logo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#a78bfa"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff">AI</text></svg>
    )
  },
  {
    title: 'Intelligent Food Ordering System',
    description: 'A system that helps users recognize food types, view nutritional information, and get personalized meal recommendations. Features a personalized User Interface to help users get proper meals that improve their health.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    logo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#a78bfa"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff">FO</text></svg>
    )
  },
  {
    title: 'Food Recognition System',
    description: 'Machine Learning based Model which recognizes food images and lists nutritional details. Developed using Python and TensorFlow, with training data from Kaggle.',
    technologies: ['Python', 'Google Colab', 'Kaggle', 'Tensorflow'],
    logo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#a78bfa"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff">ML</text></svg>
    )
  },
  {
    title: 'Student Result Management System',
    description: 'Developed a comprehensive system for managing student results with user authentication and role-based access control. Features a modern React.js frontend and secure backend with Node.js and MySQL.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    logo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#a78bfa"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff">SR</text></svg>
    )
  },
  {
    title: 'Live Weather App',
    description: 'Created a real-time weather application with React.js frontend and Node.js backend. Features user authentication and data management for tracking weather conditions.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    logo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#a78bfa"/><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#fff">WA</text></svg>
    )
  }
]

const experiences = [
  {
    company: 'WriteCream AI',
    position: 'Full Stack Web Developer',
    period: 'January 2025 – Present',
    location: 'Delhi',
    responsibilities: [
      'Developed and integrated dynamic frontend interfaces using React.js',
      'Collaborated on backend using Node.js and Express.js',
      'Implemented RESTful APIs and MongoDB integration',
      'Contributed to AI-based content generation platform',
      'Implemented secure user authentication'
    ]
  },
  {
    company: 'DesignsLab',
    position: 'Full Stack Web Developer, Intern',
    period: 'June 2023 – Sept 2023',
    location: 'Delhi',
    responsibilities: [
      'Developed frontend for Student Result Management system with Reactjs',
      'Developed Backend with Nodejs, Express, MySQL',
      'Implemented user authentication and data management'
    ]
  },
  {
    company: 'Internshala',
    position: 'Web Development Trainee',
    period: 'June 2022 – Aug 2022',
    location: 'Remote',
    responsibilities: [
      'Created frontend for LiveWeather App with React.Js',
      'Developed Backend with Nodejs, Express, MySQL',
      'Implemented user authentication and data management'
    ]
  }
]

export default function Projects() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 3, spacing: 32 },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
    renderMode: 'performance',
    drag: true,
  })

  // Infinite autoplay effect
  useEffect(() => {
    if (!slider || !slider.current) return
    let timeout: NodeJS.Timeout
    function nextTimeout() {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (!slider.current) return
        slider.current.next()
        nextTimeout()
      }, 4000)
    }
    nextTimeout()
    return () => clearTimeout(timeout)
  }, [slider])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e093c] via-[#2e1065] to-[#6d28d9] text-white">
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
          Here are my <span className="text-violet-400">recent projects</span>
        </h1>
        <p className="text-violet-200 mb-10 text-lg">You can click on any of the projects to know more.</p>
        <div className="relative">
          {/* Grid background */}
          <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
            <svg width="100%" height="100%" className="h-full w-full" style={{ minHeight: 340 }}>
              <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#a78bfa" fillOpacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {/* Carousel project cards */}
          <div ref={sliderRef} className="keen-slider relative z-10 pb-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="keen-slider__slide bg-white/10 border border-violet-500 rounded-2xl shadow-lg p-6 flex flex-col items-start min-w-[320px] max-w-[340px] w-full hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="mb-4 w-full flex justify-center items-center h-40">
                  {project.logo}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
                <p className="text-violet-100 mb-4 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-violet-700/30 border border-violet-400 text-violet-100 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 