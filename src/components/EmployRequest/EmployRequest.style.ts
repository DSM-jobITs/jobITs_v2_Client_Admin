import styled from "styled-components";

export const EmployContainer = styled.section`
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 6px #00000018;
  width: 75rem;
  height: 42rem;
  border: 1px solid #e7e7e7;
  margin: 0 auto;
`;

export const Container = styled.div<{ flex?: boolean }>`
  display: ${(props) => (props.flex ? "flex" : "")};
`;

export const Title = styled.h1`
  font-weight: 200;
  color: #4d4d4d;
  padding: 1.5rem 0 1.8rem 0;
  width: 65rem;
  border-bottom: 1px solid #707070;
  margin-bottom: 0;
`;

export const EmployBox = styled.div<{ company?: boolean }>`
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.company ? "0.5rem 2.8rem 0.5rem 4rem" : "0.5rem 4rem")};
`;

export const TitleText = styled.p`
  color: #707070;
`;

export const CompanyText = styled.p`
  color: #000000;
  display: inline-block;
  margin-right: 5rem;
`;
export const AddButton = styled.button`
  background-color: #349a07;
  border-radius: 0.7rem;
  padding: 0.7rem 2rem;
  border: none;
  font-weight: 400;
  font-size: 0.9rem;
  box-shadow: 0px 3px 6px #00000018;
  color: white;
  float: right;
  margin-top: 3rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #31810e;
    transition: 0.3s;
  }

  &:active {
    background-color: #28640D;
    transition: 0.3s;
  }
`;
