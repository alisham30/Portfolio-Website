import { useEffect, useRef } from 'react'

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, label, [data-cursor="hover"]'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
      dotRef.current?.style.setProperty('display', 'none')
      ringRef.current?.style.setProperty('display', 'none')
      return
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { x: target.x, y: target.y }
    let raf

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const animate = () => {
      pos.x += (target.x - pos.x) * 0.18
      pos.y += (target.y - pos.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onOver = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) {
        ringRef.current?.classList.add('is-hover')
      }
    }
    const onOut = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) {
        ringRef.current?.classList.remove('is-hover')
      }
    }
    const onDown = () => ringRef.current?.classList.add('is-tap')
    const onUp = () => ringRef.current?.classList.remove('is-tap')
    const onLeave = () => {
      dotRef.current?.style.setProperty('opacity', '0')
      ringRef.current?.style.setProperty('opacity', '0')
    }
    const onEnter = () => {
      dotRef.current?.style.setProperty('opacity', '1')
      ringRef.current?.style.setProperty('opacity', '1')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
