import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  margin-bottom: 56px;
  background-color: #008e8e;
  color: #fff;
  display: flex;
  align-items: center;
  z-index: 10;
  margin-right: 1rem;
  & .text{
    flex: 1;
    text-align: center;
  }
`;
export const HeaderBg=styled.div`
position: fixed;
height: 300px;
background-color: #008e8e;
width: 100%;
z-index: -1;
top: 0;
left: 0;
`
