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
    delay: 1000,
    config: {
      duration: 1000,
    },
  })

  return (
    <animated.h3 className="animated-hero1" style={fade}>
      2,700 weddings and counting
    </animated.h3>
  )
}

export default AnimatedHero1
