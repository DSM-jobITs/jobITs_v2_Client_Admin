import React from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { useHistory } from "react-router-dom";
import { ErrorToast } from "../../lib/toast";
interface UserContainerProps {}

const UserContainer = ({}: UserContainerProps) => {
  const history = useHistory();

  const onSubmitLogin = (id: string, password: string) => {
    login({ id: id, password: password })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        history.push("/employ");
      })
      .catch((err) => {
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
