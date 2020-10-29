import React from "react"
import { useSpring, animated } from "react-spring"

const AnimatedHero2 = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
      marginTop: 50,
    },
    to: {
      opacity: 1,
      marginTop: 0,
    },
    delay: 2000,
    config: {
      duration: 1000,
    },
  })

  return (
    <animated.h3 style={fade}>
      Experience why we are the most trusted name <br /> in wedding
      entertainment
    </animated.h3>
  )
}

export default AnimatedHero2
