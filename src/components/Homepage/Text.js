import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "You can say me a React Js Developer",
          "I'm a Flutter Developer too",
          "I love sketching",
          "Art fascinates me",
          "History isnt my cup of tea",
          "Love to mess up things",
          "yeah yeah yeah"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  )
}

export default Text