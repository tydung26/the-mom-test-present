import type { ReactNode } from 'react'

interface SlideLayoutProps {
  children: ReactNode
  className?: string
}

export function SlideLayout({ children, className = '' }: SlideLayoutProps) {
  return (
    <div
      className={`flex h-screen w-screen flex-col items-center justify-center px-8 py-12 sm:px-16 md:px-24 ${className}`}
    >
      {children}
    </div>
  )
}
