import styled from "styled-components";

export const Container = styled.div<{ flex?: boolean }>`
  display: ${(props) => (props.flex ? "flex" : "")};
`;

export const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
