'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContactCharacter from '@/components/ContactCharacter'
import { Mail, Github, Linkedin, Twitter, Gamepad2, Dribbble, Smile, X, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init("x033FAfaqogfRA5mX")

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      console.log('Sending email with service ID:', "service_271od2w")
      console.log('Using template ID:', "template_9x5nky9")
      
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_271od2w",
        "template_9x5nky9",
        {
          to_name: "Mehul",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        }
      )

      console.log('EmailJS response:', response)

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setIsModalOpen(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        throw new Error(`EmailJS returned status ${response.status}`)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      if (error instanceof Error) {
        if (error.message.includes('service ID not found')) {
          setErrorMessage('Email service configuration error. Please contact the website administrator.')
        } else {
          setErrorMessage(error.message)
        }
      } else {
        setErrorMessage('Failed to send message. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e093c] via-[#2e1065] to-[#6d28d9] text-white">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text and Actions */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Let's work <span className="text-violet-400">together</span>
          </h1>
          <p className="text-lg md:text-xl text-violet-100 mb-8">
            Feel free to express yourself in any way and at any time. You're always welcome to share your thoughts with me—I'm here to support you.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-violet-700 text-white font-semibold text-lg shadow-lg hover:from-violet-600 hover:to-violet-800 transition mb-8"
          >
            Send me a message
            <Mail className="w-5 h-5" />
          </button>

          <div className="mt-8 space-y-6">
            <div>
              <div className="text-violet-200 text-base mb-2">Location</div>
              <div className="text-2xl md:text-3xl font-bold mb-4">Delhi, India</div>
            </div>
            
            <div>
              <div className="text-violet-200 text-base mb-2">Email</div>
              <div className="text-2xl md:text-3xl font-bold mb-4">mehul.gupta.56614@gmail.com</div>
            </div>

            <div>
              <div className="text-violet-200 text-base mb-2">Phone</div>
              <div className="text-2xl md:text-3xl font-bold mb-4">+91 9818762675</div>
            </div>

            <div>
              <div className="text-violet-200 mb-2">Connect with me</div>
              <div className="flex gap-3 flex-wrap">
                <a href="https://github.com/Mehul0161" target="_blank" rel="noopener noreferrer" className="border-2 border-violet-500 rounded-full p-2 hover:bg-violet-600 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mehul-gupta-605698269/" target="_blank" rel="noopener noreferrer" className="border-2 border-violet-500 rounded-full p-2 hover:bg-violet-600 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="border-2 border-violet-500 rounded-full p-2 hover:bg-violet-600 transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right: 3D Character */}
        <div className="flex-1 flex justify-center items-center w-full md:w-auto">
          <div className="max-w-md w-full">
            <ContactCharacter />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-[#1e093c] via-[#2e1065] to-[#6d28d9] p-8 rounded-2xl max-w-lg w-full mx-4 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-violet-200 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-3xl font-bold mb-6">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-violet-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-violet-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-violet-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-400 outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-violet-700 cursor-not-allowed'
                    : 'bg-violet-600 hover:bg-violet-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </main>
  )
} 