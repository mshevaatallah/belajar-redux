import React, { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const [userName, setUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  return (
    <div>
      <h1>{username}</h1>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: userName }))}>
        login
      </button>
    </div>
  );
}

export default Login;
