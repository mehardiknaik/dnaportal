import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  & > div {
    flex: 1;
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }
`;
const ripple = keyframes`
0% {
  opacity: 1;
  transform: scale(.8);
}

100% {
  opacity: 0;
  transform: scale(1.4);
}
`;
export const Circle = styled.div`
  height: 50px;
  width: 50px;
  background: ${({ Status }) => (Status === "Active" ? "#05c000" : "#ff0000")};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  animation: ${({ Status }) => (Status === "Active" ? `` : css`${ripple} 1.2s infinite ease-in-out`)};
  & >img {
    transform: ${({Status}) => (Status === "Active" ?'scale(1)':'scaleY(-1)')};
  }
`;
export const Circle2 = styled.div`
  height: 50px;
  width: 50px;
  background: ${({ Status }) => (Status === "Online" ? "#05c000" : "#f9aa00")};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  animation: ${({ Status }) => (Status === "Online" ? `` : css`${ripple} 1.2s infinite ease-in-out`)};
`;
