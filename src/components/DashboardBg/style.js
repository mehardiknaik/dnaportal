import styled from "styled-components";
import dashboardbg from "../../images/dashboardbg.png";

export const BgWrapper = styled.div`
  background-image: url(${dashboardbg});
  background-size: contain;
  margin-top: -4rem;
  background-repeat: space;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
`;
