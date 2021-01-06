import React, { ReactNode } from "react";
import * as S from "../../RecruitNotice/RecruitNotice.style";

interface RecruitPageTemplateProps {
  children?: ReactNode;
}

const RecruitPageTemplate = ({ children }: RecruitPageTemplateProps) => {
  return (
    <>
      <S.AllContainer>
        <S.Container>{children}</S.Container>
      </S.AllContainer>
    </>
  );
};

export default RecruitPageTemplate;
