import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectIsLoading } from "./spinnerSlice"

const SpinnerDiv = styled.div`
  position: absolute;
  z-index: 999999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerCircle = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #177a72;
  border-top: 10px solid #f5f5f5;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Spinner() {
  const spinner = useSelector(selectIsLoading)
  if (!spinner) return null
  return (
    <SpinnerDiv>
      <SpinnerCircle />
    </SpinnerDiv>
  )
}

export default Spinner
