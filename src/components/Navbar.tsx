'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Mehul
            </Link>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                pathname === '/'
                  ? 'text-primary font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === '/about'
                  ? 'text-primary font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`${
                pathname === '/projects'
                  ? 'text-primary font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === '/contact'
                  ? 'text-primary font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 