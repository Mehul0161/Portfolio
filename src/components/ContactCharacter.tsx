'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CharacterScene = dynamic(() => import('./CharacterScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function ContactCharacter() {
  return (
    <Suspense fallback={
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CharacterScene />
    </Suspense>
  )
} 