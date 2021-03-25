import React from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { useHistory } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../lib/toast";

const UserContainer = () => {
  const history = useHistory();

  const onSubmitLogin = (id: string, password: string) => {
    login({ id: id, password: password })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        history.push("/employ");
        SuccessToast("로그인에 성공하였습니다.");
      })
      .catch(() => {
        ErrorToast("로그인에 실패하였습니다.");
      });
  };

  return (
    <>
      <Login onLogin={onSubmitLogin} />
    </>
  );
};

export default UserContainer;
