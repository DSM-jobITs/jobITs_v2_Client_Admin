import styled from "styled-components";

export const EmployContainer = styled.section<{ scroll?: boolean }>`
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 6px #00000018;
  width: 75rem;
  height: 42rem;
  border: 1px solid #e7e7e7;
  margin: 0 auto;
  overflow : ${(props) => (props.scroll ? "scroll" : "")};
`;

export const Container = styled.div<{ flex?: boolean; company?: boolean }>`
  display: ${(props) => (props.flex ? "flex" : "")};
  cursor: ${(props) => (props.company ? "pointer" : "")};
  justify-content: space-between;
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
  padding: ${(props) => (props.company ? "0.5rem 2.8rem 0.5rem 4rem" : "0.5rem 9rem 0 4rem")};

  &:hover {
    background-color: ${(props) => (props.company ? "#fbfbfb" : "")};
    transition: ${(props) => (props.company ? "0.3s" : "")};
  }
`;

export const TitleText = styled.p<{ date?: boolean }>`
  color: #707070;
  margin-right: ${(props) => (props.date ? "1.5rem" : "")};
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
  margin: 3rem 0 0 1.7rem;
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

export const SaveButton = styled(AddButton)`
  border: 1px solid #349a07;
  color: #349a07;
  background-color: white;

  &:hover {
    color: white;
  }

  &:active {
    color: white;
  }
`;

export const PageNationBox = styled.div`
  display: flex;
  border: 1px solid #b7b7b8;
  width: 17rem;
  border-radius: 0.7rem;
  margin-top: 3rem;
`;

export const PageNationItem = styled.div<{ last?: boolean }>`
  width: 1rem;
  height: 1rem;
  padding: 0.7rem;
  text-align: center;
  border-right: ${(props) => (props.last ? "" : "1px solid #b7b7b8;")};
  cursor: pointer;

  &:hover {
    background-color: #349a07;
    transition: 0.3s;
    color: white;
  }

  &:active {
    background-color: #28640d;
    color: white;
    transition: 0.2s;
  }
`;

export const Img = styled.img<{ delete?: boolean }>`
  opacity: 0.7;
  margin-right: ${(props) => (props.delete ? "1rem" : "")};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
