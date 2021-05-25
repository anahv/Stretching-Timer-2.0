import styled from "styled-components"

const AppWrapper = styled.div`
  background: ${ ({theme}) => theme.appBackground } url("https://www.transparenttextures.com/patterns/cubes.png");
  color: ${ ({theme}) => theme.fontColor };
  padding-bottom: 100px;
`
export default AppWrapper

//theme is passed on to all the App children because we're using Theme Provider
