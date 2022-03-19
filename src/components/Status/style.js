import styled from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  gap: 1rem;
  & > div {
    flex: 1;
    padding: 1rem;
    display: flex;
    gap: 1rem;
  }
`;
export const Circle = styled.div`
  height: 50px;
  width: 50px;
  background: ${({Status}) => (Status === "Active" ? "#05c000" : "#ff0000")};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  & >img {
    transform: ${({Status}) => (Status === "Active" ?'scale(1)':'scaleY(-1)')};
  }
`;
export const Circle2 = styled.div`
  height: 50px;
  width: 50px;
  background: ${({Status}) => (Status === "Online" ? "#05c000" : "#f9aa00")};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
