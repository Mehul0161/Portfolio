'use client'

export default function ContactIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="0" y="0" width="400" height="300" rx="32" fill="url(#bg)" />
      <ellipse cx="320" cy="220" rx="60" ry="80" fill="#a78bfa" fillOpacity="0.2" />
      <ellipse cx="100" cy="220" rx="60" ry="80" fill="#a78bfa" fillOpacity="0.15" />
      <rect x="120" y="60" width="160" height="200" rx="24" fill="#fff" stroke="#a78bfa" strokeWidth="4" />
      <circle cx="200" cy="120" r="24" fill="#a78bfa" />
      <rect x="160" y="160" width="80" height="16" rx="8" fill="#a78bfa" fillOpacity="0.7" />
      <rect x="160" y="190" width="80" height="16" rx="8" fill="#a78bfa" fillOpacity="0.5" />
      <rect x="160" y="220" width="80" height="16" rx="8" fill="#a78bfa" fillOpacity="0.3" />
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
    </svg>
  )
} 