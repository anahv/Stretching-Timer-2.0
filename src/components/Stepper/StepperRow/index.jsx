import styled from 'styled-components';
import Devices from "../../Theme/Devices";

const StepperRow = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${Devices.tablet} {
    button {
      margin: 10px 0;
      flex-direction: row;
    }
  }

`
export default StepperRow;
