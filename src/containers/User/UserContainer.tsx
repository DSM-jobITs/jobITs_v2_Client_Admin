import React from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { useHistory } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../lib/toast";
import useChangeInput from "../../lib/hooks/useChangeInput";

const UserContainer = () => {
  const history = useHistory();

  const [inputs, setInputs] = useChangeInput({
    id: "",
    password: "",
  });

  const onKeyPressLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmitLogin();
  };

  const onSubmitLogin = () => {
    login(inputs)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        history.push("/employ");
        SuccessToast("로그인에 성공하였습니다.");
      })
      .catch(() => {
        ErrorToast("로그인에 실패하였습니다.");
      });
    console.log(inputs);
  };

  return (
    <>
      <Login onSubmitLogin={onSubmitLogin} onKeyPressLogin={onKeyPressLogin} inputs={inputs} setInputs={setInputs} />
    </>
  );
};

export default UserContainer;
