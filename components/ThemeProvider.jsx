'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeProviderContext = createContext({
  theme: 'dark',
  setTheme: () => null,
})

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'portfolio-theme',
  ...props
}) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme) => {
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}