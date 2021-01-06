import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import * as S from "./PageTemplate.style";

interface EmployRequestPageTemplateProps {
  children?: ReactNode;
}

const EmployRequestPageTemplate = ({ children }: EmployRequestPageTemplateProps) => {
  return (
    <S.Container flex={true}>
      <Navbar></Navbar>
      <S.ChildrenContainer>
        <S.Container>{children}</S.Container>
      </S.ChildrenContainer>
    </S.Container>
  );
};

export default EmployRequestPageTemplate;
