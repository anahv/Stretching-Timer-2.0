// have Button as the functionality, and a separate file would have the style

import styled from "styled-components"
import StyledButton from "../Button"

const ControlButton = styled(StyledButton)`
  width: 100%;
  height: 45px;
  margin: 15px;
  outline: none;
  position: relative;
  margin: 15px 30px;
  width: 180px;
`
export default ControlButton