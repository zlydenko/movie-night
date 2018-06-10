import styled from "styled-components";

export default styled.div`
  font-family: ${props => props.theme.fonts.main};
  padding-top: 3em;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.bgGradient};
  overflow: hidden;
`;
