import styled from "styled-components"
import Devices from "../Theme/Devices"

const ButtonsRow = styled.div`
    width: 100%;
    text-align: center;
    display: flex; 
    flex-direction: row;
    justify-content: center;

    i {
        margin-left: 10px;
        color: #333;
    } 



    @media ${Devices.tablet} {
        flex-direction: column; 
        button {
            margin: 20px 0px 20px 40px;
            width: 80%;
            align-content: center;
        }
    }
`

export default ButtonsRow