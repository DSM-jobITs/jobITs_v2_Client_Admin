import React, { useState } from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { useHistory } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../lib/toast";

const UserContainer = () => {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onKeyPressLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmitLogin();
  };

  const onSubmitLogin = () => {
    login({ id: inputs.id, password: inputs.password })
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
      <Login onSubmitLogin={onSubmitLogin} onKeyPressLogin={onKeyPressLogin} onChangeInput={onChangeInput} inputs={inputs} />
    </>
  );
};

export default UserContainer;
