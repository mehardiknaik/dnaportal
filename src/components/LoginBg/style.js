import styled from "styled-components";
export const BgWrapper = styled.div`
  flex: 1;
  & img {
    width: 100%;
    @media (max-width: 900px) {
        max-width: 300px;
      }
  }
`;
