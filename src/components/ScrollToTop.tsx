import { useEffect } from 'react'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return null
}

export default ScrollToTop
