import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ViewContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  background: white;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB4PSIxNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmRmZGZkIj48L3JlY3Q+Cjwvc3ZnPg==");
  background-repeat: repeat;

  @media (orientation: landscape) {
    height: 100vh;
  }
`

const AlmaLogoStroke = styled(motion.svg)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: calc(128px + (256 - 128) * ((100vw - 300px) / (1600 - 300)));
  height: auto;
  overflow: visible;
  stroke: url(#AlmaGradient);
  stroke-linejoin: round;
  stroke-linecap: round;
  z-index: 2;
`

const AlmaLogoFill = styled(motion.svg)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: calc(128px + (256 - 128) * ((100vw - 300px) / (1600 - 300)));
  height: auto;
  overflow: visible;
  stroke: url(#AlmaGradient);
  z-index: 1;
`

const iconStrokeLeft = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    pathOffset: 1
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0
  }
}

const iconStrokeRight = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1
  }
}

const iconFill = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

// const iconRight = {
//   hidden: {
//     opacity: 1,
//     pathLength: 0,
//     pathOffset: 0,
//     fill: "rgba(0, 0, 0, 0)"
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     pathOffset: 1,
//     fill: "rgba(0, 0, 0, 1)"
//   }
// }

const AnimatedLogo = () => {
  return(
    <ViewContainer
      initial = {{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3,
        duration: 2,
        ease: "easeInOut"
      }}
    >
      <AlmaLogoStroke
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 246.507,19.953c-2.433,-0.974 -6.327,-1.46 -11.194,-1.46c-14.601,0 -36.015,5.353 -48.183,23.361c-24.335,34.069 -33.095,107.56 2.434,206.846c-28.715,-46.723 -50.13,-128.488 -25.308,-188.352c-16.061,0.974 -37.476,11.194 -47.21,25.795c-18.008,25.795 -25.795,58.404 -18.981,99.286c7.787,44.289 19.468,72.031 47.696,105.613c-38.449,-27.742 -75.438,-106.586 -57.917,-159.636c-26.768,4.38 -58.403,34.555 -55.483,80.791c4.38,73.491 36.989,95.879 54.997,110.48c-38.936,-13.14 -61.324,-52.076 -62.298,-94.905c-21.414,14.114 -26.281,47.696 -24.821,67.65c2.433,32.122 29.202,73.978 61.324,81.279c18.494,-17.522 31.148,-26.769 51.589,-26.769c23.849,0 46.723,18.495 46.723,44.29c0,19.467 -15.087,50.129 -59.377,41.369c30.662,2.433 49.157,-15.088 49.157,-37.476c0,-22.875 -18.495,-35.529 -37.476,-35.529c-18.981,0 -47.696,13.628 -51.103,48.183c-1.947,18.981 14.114,82.738 82.738,82.738c57.43,0 110.967,-34.068 110.967,-110.966c0,-111.94 -56.943,-285.69 -8.274,-362.588l0,0 Z"
          stroke="url(#AlmaGradientFull)"
          stroke-width="2"
          fill="none"
          variants={iconStrokeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 265.493,19.953c48.669,76.898 -8.274,250.648 -8.274,362.588c0,76.898 53.537,110.966 110.967,110.966c68.624,0 84.685,-63.757 82.738,-82.738c-3.407,-34.555 -32.122,-48.183 -51.103,-48.183c-18.981,0 -37.476,12.654 -37.476,35.529c0,22.388 18.495,39.909 49.157,37.476c-44.29,8.76 -59.377,-21.902 -59.377,-41.369c0,-25.795 22.874,-44.29 46.723,-44.29c20.441,0 33.095,9.247 51.589,26.769c32.122,-7.301 58.891,-49.157 61.324,-81.279c1.46,-19.954 -3.407,-53.536 -24.821,-67.65c-0.974,42.829 -23.362,81.765 -62.298,94.905c18.008,-14.601 50.617,-36.989 54.997,-110.48c2.92,-46.236 -28.715,-76.411 -55.483,-80.791c17.521,53.05 -19.468,131.894 -57.917,159.636c28.228,-33.582 39.909,-61.324 47.696,-105.613c6.814,-40.882 -0.973,-73.491 -18.981,-99.286c-9.734,-14.601 -31.149,-24.821 -47.21,-25.795c24.822,59.864 3.407,141.629 -25.308,188.352c35.529,-99.286 26.769,-172.777 2.434,-206.846c-12.168,-18.008 -33.582,-23.361 -48.183,-23.361c-4.867,0 -8.761,0.486 -11.194,1.46 Z"
          stroke="url(#AlmaGradientFull)"
          stroke-width="2"
          fill="none"
          variants={iconStrokeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="AlmaGradientClear" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#01acc4" stop-opacity="0"/>
            <stop offset="100%" stop-color="#006897" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="AlmaGradientFull" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#01acc4" stop-opacity="1"/>
            <stop offset="100%" stop-color="#006897" stop-opacity="1"/>
          </linearGradient>
        </defs>
      </AlmaLogoStroke>

      <AlmaLogoFill
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M187.13,41.854c-24.335,34.069 -33.095,107.56 2.434,206.846c-28.715,-46.723 -50.13,-128.488 -25.308,-188.352c-16.061,0.974 -37.476,11.194 -47.21,25.795c-18.008,25.795 -25.795,58.404 -18.981,99.286c7.787,44.289 19.468,72.031 47.696,105.613c-38.449,-27.742 -75.438,-106.586 -57.917,-159.636c-26.768,4.38 -58.403,34.555 -55.483,80.791c4.38,73.491 36.989,95.879 54.997,110.48c-38.936,-13.14 -61.324,-52.076 -62.298,-94.905c-21.414,14.114 -26.281,47.696 -24.821,67.65c2.433,32.122 29.202,73.978 61.324,81.279c18.494,-17.522 31.148,-26.769 51.589,-26.769c23.849,0 46.723,18.495 46.723,44.29c0,19.467 -15.087,50.129 -59.377,41.369c30.662,2.433 49.157,-15.088 49.157,-37.476c0,-22.875 -18.495,-35.529 -37.476,-35.529c-18.981,0 -47.696,13.628 -51.103,48.183c-1.947,18.981 14.114,82.738 82.738,82.738c57.43,0 110.967,-34.068 110.967,-110.966c0,-111.94 -56.943,-285.69 -8.274,-362.588c-2.433,-0.974 -6.327,-1.46 -11.194,-1.46c-14.601,0 -36.015,5.353 -48.183,23.361Z"
          stroke="none"
          fill="url(#AlmaGradient)"
          variants={iconFill}
          initial="hidden"
          animate="visible"
          transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
        />
        <motion.path 
          d="M265.493,19.953c48.669,76.898 -8.274,250.648 -8.274,362.588c0,76.898 53.537,110.966 110.967,110.966c68.624,0 84.685,-63.757 82.738,-82.738c-3.407,-34.555 -32.122,-48.183 -51.103,-48.183c-18.981,0 -37.476,12.654 -37.476,35.529c0,22.388 18.495,39.909 49.157,37.476c-44.29,8.76 -59.377,-21.902 -59.377,-41.369c0,-25.795 22.874,-44.29 46.723,-44.29c20.441,0 33.095,9.247 51.589,26.769c32.122,-7.301 58.891,-49.157 61.324,-81.279c1.46,-19.954 -3.407,-53.536 -24.821,-67.65c-0.974,42.829 -23.362,81.765 -62.298,94.905c18.008,-14.601 50.617,-36.989 54.997,-110.48c2.92,-46.236 -28.715,-76.411 -55.483,-80.791c17.521,53.05 -19.468,131.894 -57.917,159.636c28.228,-33.582 39.909,-61.324 47.696,-105.613c6.814,-40.882 -0.973,-73.491 -18.981,-99.286c-9.734,-14.601 -31.149,-24.821 -47.21,-25.795c24.822,59.864 3.407,141.629 -25.308,188.352c35.529,-99.286 26.769,-172.777 2.434,-206.846c-12.168,-18.008 -33.582,-23.361 -48.183,-23.361c-4.867,0 -8.761,0.486 -11.194,1.46Z"
          stroke="none"
          fill="url(#AlmaGradient)"
          variants={iconFill}
          initial="hidden"
          animate="visible"
          transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="AlmaGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#01acc4" stop-opacity="1"/>
            <stop offset="100%" stop-color="#006897" stop-opacity="1"/>
          </linearGradient>
        </defs>
      </AlmaLogoFill>
    </ViewContainer>
  )
}

export default AnimatedLogo