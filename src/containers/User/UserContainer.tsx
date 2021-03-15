import React from "react";
import Login from "../../components/Login/Login";
import { login } from "../../lib/api/user";
import { useHistory } from "react-router-dom";

const UserContainer = () => {
  const history = useHistory();

  const onSubmitLogin = (id: string, password: string) => {
    login({ id: id, password: password })
      .then((res) => {
        console.log(res);
        history.push("/employ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Login onLogin={onSubmitLogin} />
    </>
  );
};

export default UserContainer;
