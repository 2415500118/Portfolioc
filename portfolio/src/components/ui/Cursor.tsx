import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)'
      cursor.style.opacity = '0.5'
    }
    const onMouseLeaveLink = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      cursor.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const links = document.querySelectorAll('a, button, [data-cursor]')
    links.forEach(l => {
      l.addEventListener('mouseenter', onMouseEnterLink)
      l.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
