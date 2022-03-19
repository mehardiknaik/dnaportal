import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  margin-bottom:4rem;
  background-color: #008e8e;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  z-index: 10;
  & .text{
    flex: 1;
    text-align: center;
    @media (max-width: 900px) {
      text-align: left;
    }
  }
`;
export const HeaderBg=styled.div`
position: fixed;
height: 300px;
background-image: linear-gradient(177deg, #008e8e 70%, #fafafa calc(70% + 2px));
width: 100%;
z-index: -1;
top: 0;
left: 0;
`
