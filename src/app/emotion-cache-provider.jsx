'use client'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { useRef } from 'react'

export function EmotionCacheProvider({ children }) {
  const cacheRef = useRef(null)

  if (!cacheRef.current) {
    const cache = createCache({ key: 'css', prepend: true })
    // helps Emotion behave correctly with SSR insertion
    cache.compat = true
    cacheRef.current = cache
  }

  useServerInsertedHTML(() => {
    const cache = cacheRef.current
    const keys = Object.keys(cache.inserted)
    const styles = keys.map((k) => cache.inserted[k]).join(' ')

    if (keys.length === 0) return null

    return (
      <style
        data-emotion={`${cache.key} ${keys.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return <CacheProvider value={cacheRef.current}>{children}</CacheProvider>
}
