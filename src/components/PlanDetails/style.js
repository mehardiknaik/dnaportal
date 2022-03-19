import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  & > div {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;
export const Singleinfo = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: 0.8rem;
  flex-wrap: wrap;
  align-items: center;
  & .title {
    margin-right: 1rem;
  }
`;
