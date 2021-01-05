import styled from "styled-components";

export const AllContainer = styled.div<{big? : boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height : ${(props) => (props.big ? "100%" : "100vh")};
  background-color: #eeeeee;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 52rem;
  justify-content: space-between;
  height: 100%;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Container = styled.div<{ flex?: boolean }>`
  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: space-between;
`;

export const Span = styled.span<{ point?: boolean }>`
  color: ${(props) => (props.point ? "#DE2727" : "#AEAEAE")};
`;

export const RecruitContainer = styled(AllContainer)<{ height?: boolean }>`
  background-color: white;
  border-radius: 33px;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 2px 6px #72727245;
  padding: 5rem;
  width: 57rem;
  height: ${(props) => (props.height ? "30rem" : "44.5rem")};
`;

export const InputList = styled.span`
  color: #d1d1d1;
`;

export const Input = styled.input<{ type: string }>`
  border: ${(props) => (props.type === "text" ? "none" : "")};
  width: ${(props) => (props.type === "text" ? "2rem" : "")};
  outline: none;
  text-align: left;
`;

export const Text = styled.p``;

export const InputLine = styled.input<{ width?: string }>`
  border: none;
  border-bottom: 1px solid #e2e2e2;
  outline: none;
  width: ${(props) => (props.width ? "3rem" : "12rem")};
  margin-left: 2.6rem;
`;

export const SearchButton = styled.button`
  border-radius: 0.3rem;
  border: 1px solid #449734;
  color: #449734;
  background-color: white;
  padding: 0.4rem 2rem;
  margin-left: 1rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #449734;
    color: white;
    transition: 0.3s;
  }
`;

export const NextButton = styled(SearchButton)`
  float: right;
  margin: 1.5rem 0 1.5rem 0;
  background-color: #449734;
  color: white;
  opacity: 0.7;
  font-weight: 500;
  box-shadow: 0px 2px 6px #72727245;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
  &:active {
    background-color: green;
    padding: 0.5rem 2.1rem;
    transition: 0.3s;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 11rem;
  resize: none;
  outline: none;
  border: 1px solid #aeaeae;
  box-shadow: 0px 2px 6px #72727245;
`;
