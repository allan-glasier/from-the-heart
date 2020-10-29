import React from "react"
import { useSpring, animated } from "react-spring"

const AnimatedHero1 = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return <h3>2,700 weddings and counting --// fade in</h3>
}

export default AnimatedHero1
