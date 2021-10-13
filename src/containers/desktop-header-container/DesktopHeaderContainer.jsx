import styled from "styled-components";

import desktop from "../../assets/Header_Home_Desktop.jpg";

const DesktopHeaderContainer = styled.div`
  @media (max-width: 745px) {
    display: none;
  }

  padding-bottom: 175px;

  backgroundimage: url(${desktop});
`;

export default DesktopHeaderContainer;
