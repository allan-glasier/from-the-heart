import React from "react"
import { useSpring, animated } from "react-spring"

const AnimatedHero2 = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2000,
    config: {
      duration: 1000,
    },
  })

  return (
    <animated.h3 className="animated-hero2" style={fade}>
      100% word of mouth
    </animated.h3>
  )
}

export default AnimatedHero2
