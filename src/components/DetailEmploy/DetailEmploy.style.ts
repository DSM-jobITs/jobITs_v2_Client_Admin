import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
`;

export const Title = styled.h1`
  color: #565656;
  font-weight: 300;
`;

export const TextBox = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Description = styled.p`
  color: #cecece;
`;

export const Text = styled.p<{ right?: boolean }>`
  color: #565656;
  float: ${(props) => (props.right ? "right" : "")};
`;

export const Hr = styled.hr`
  background-color: #d5d5d5;
  height: 0.01rem;
  border: 0;
`;

export const CompanyBox = styled.div`
  width: 100%;
  box-shadow: 0px 3px 6px #00000016;
  border-radius: 0.3rem;
  border: 1px solid #d5d5d5;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
  box-sizing: border-box;
  display: flex;
`;

export const CategoryBox = styled.div``;

export const Category = styled.p`
  color: #9b9b9b;
  margin-right: 6rem;
`;

export const Contents = styled.p`
  color: #565656;
`;

export const Button = styled.button`
  background-color: #349a07;
  border-radius: 0.7rem;
  padding: 0.7rem 2rem;
  border: none;
  font-weight: 400;
  font-size: 0.9rem;
  box-shadow: 0px 3px 6px #00000018;
  color: white;
  margin: 3rem 0 0 0rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #31810e;
    transition: 0.3s;
  }

  &:active {
    background-color: #28640d;
    transition: 0.2s;
  }
`;
