import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background-color: ${props => props.theme.colors.receipt.bg};
  color: ${props => props.theme.colors.receipt.text};
  border-radius: 1em;
  box-shadow: 0em 0.3em 1em ${props => props.theme.colors.receipt.shadow};
`;

export default props => <Wrapper>{props.children}</Wrapper>;
