import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1em;
  box-shadow: 0em 0.3em 1em rgba(0, 0, 0, 0.8);
`;

export default props => <Wrapper>{props.children}</Wrapper>;
