import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Btn = styled.button`
  transition: transform 0.9s;
  display: block;
  width: 40%;
  padding: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  font-family: "Inconsolata", monospace;
  background-color: orange;
  color: rgb(0, 0, 0);
  border: 0.1em solid transparent;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 0em auto;
  opacity: 0.9;
  height: ${props => (props.filmInfoOpened ? `auto` : `0em`)};
  ${props => (props.filmInfoOpened ? null : `transform: translate(0,10em);`)};

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }
`;
