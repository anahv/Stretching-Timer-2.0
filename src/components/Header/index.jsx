import React from "react"
import styled from "styled-components"

// const Header = ({className, children}) => <div className={className}>{children}</div>

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.header};
  margin-left: -50px !important;
  margin-right: -50px !important;
  padding: 20px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  color: #fff;
  font-family: "Lobster", cursive;
  text-align: center;
  font-size: 2em;
`

export default StyledHeader
