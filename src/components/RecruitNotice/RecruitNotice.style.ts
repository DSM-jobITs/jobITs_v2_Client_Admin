import styled from "styled-components";

export const AllContainer = styled.div<{ big?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  color: ${(props) => (props.point ? "#DE2727" : "#000000")};
`;

export const DescriptionSpan = styled(Span)`
  font-size: 0.8rem;
  color: #aeaeae;
  margin-left: 1rem;
`;

export const RecruitContainer = styled(AllContainer)<{ height?: boolean }>`
  background-color: white;
  border-radius: 33px;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 2px 6px #72727245;
  padding: 5rem;
  width: 57rem;
  height: ${(props) => (props.height ? "30rem" : "110rem")};
  margin-bottom: 4rem;
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

export const Text = styled.p<{ white?: boolean }>`
  color: ${(props) => (props.white ? "white" : "")};
`;

export const InputLine = styled.input<{ width?: string }>`
  border: none;
  font-size: 0.9rem;
  border-bottom: 1px solid #e2e2e2;
  outline: none;
  width: ${(props) => (props.width ? "3rem" : "10rem")};
  margin-left: 2.4rem;
`;

export const CustomInputLine = styled(InputLine)<{ width?: string }>`
  width: ${(props) => props.width + "rem"};
`;

export const SearchButton = styled.button`
  border-radius: 0.5rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  float: right;
`;

export const NextButton = styled(SearchButton)`
  margin: 0 0 3rem 1.3rem;
  padding: 0.6rem 2rem;
  background-color: #006004;
  border: none;
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  box-shadow: 0px 2px 6px #72727245;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
  &:active {
    background-color: green;
    padding: 0.65rem 2.1rem;
    transition: 0.3s;
  }
`;

export const CancelButton = styled(NextButton)`
  background-color: #349a07;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 11rem;
  resize: none;
  outline: none;
  border: 1px solid #aeaeae;
  box-shadow: 0px 2px 6px #72727245;
`;

export const Logo = styled.img`
  margin: 1rem 0;
`;

export const FileUploadContainer = styled.div`
  background-color: #378913;
  box-shadow: 3px 2px 6px #72727216;
  width: 62rem;
  padding: 1.5rem 2.5rem;
  border-radius: 1.6rem;
  margin-bottom: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FileUploadBox = styled.div`
  display: flex;
  align-items: center;
`;

export const FileButton = styled.button`
  background-color: #f5f5f5;
  color: #6a5657;
  border: none;
  border-radius: 5%;
  padding: 0.6rem 1rem;
  height: 2.3rem;
  margin-right: 1rem;
`;
