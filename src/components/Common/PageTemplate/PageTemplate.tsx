import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import * as S from "./PageTemplate.style";

interface PageTemplateProps {
  children?: ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <S.Container flex={true}>
      <Navbar></Navbar>
      <S.ChildrenContainer>
        <S.Container>{children}</S.Container>
      </S.ChildrenContainer>
    </S.Container>
  );
};

export default PageTemplate;