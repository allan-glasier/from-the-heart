import React from "react"
import { FaArrowDown } from "react-icons/fa"
import { useSpring, animated } from "react-spring"

const AnimatedHero2 = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
      marginBottom: -500,
    },
    to: {
      opacity: 1,
      marginBottom: 20,
    },
    delay: 4500,
    config: {
      duration: 1000,
    },
  })

  return (
    <animated.h5 style={fade}>
      Scroll for More info
      <br />
      <FaArrowDown />
    </animated.h5>
  )
}

export default AnimatedHero2
