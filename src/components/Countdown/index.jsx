import React from "react"
import styled from "styled-components"

// const Countdown = ({className, children}) => <div className={className}>{children}</div>

/* const StyledCountdown = styled(Countdown)`
  text-align: center;
  font-size: 18em;
  font-weight: 500;
  @media only screen and (max-width: 648px) {
  .timer h1 {
    font-size: 14em !important;
  }
}
`
*/

const Countdown = styled.div`
  text-align: center;
  font-size: 18em;
  font-weight: 500;
  line-height: 1.2;
  @media only screen and (max-width: 648px) {
  .timer h1 {
    font-size: 14em !important;
  }
}
`


export default Countdown
