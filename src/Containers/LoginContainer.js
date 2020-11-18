import React, { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import { useHistory } from "react-router-dom";
import axios from "axios";

const baseURL = "http://churrasco.uk.to:3005/api/auth";

export default function LoginContainer() {
  const [auth, setAuth] = useState("");
  const [errors, setError] = useState();
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AuthToken")) {
      return history.push("/sites");
    }
  });

  function handleLogin(data) {
    setAuth(data);
    return axios
      .post(baseURL, data)
      .then((response) => {
        const AUTH_TOKEN = response.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
        sessionStorage.setItem("AuthToken", AUTH_TOKEN);
        history.push("/sites");
      })
      .catch((errors) => {
        if (errors.response.status === 401) {
          setError("Los datos ingresados no son correctos. Intente nuevamente");
        } else {
          setError("Servicio no disponible");
        }
      });
  }

  return <LoginForm onSubmit={handleLogin} formState={auth} error={errors} />;
}
