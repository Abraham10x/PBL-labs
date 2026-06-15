'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  lazy?: boolean
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  lazy = false,
  className = '',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(!lazy)

  useEffect(() => {
    if (!lazy) return

    // Create intersection observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    )

    const element = document.getElementById(`img-${src}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [lazy, src])

  return (
    <div id={`img-${src}`} className={`relative overflow-hidden ${className}`}>
      {isLoaded ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={lazy ? 'lazy' : 'eager'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
          className="w-full h-full object-cover"
          quality={75}
        />
      ) : (
        <div className="bg-muted animate-pulse w-full h-full" />
      )}
    </div>
  )
}
