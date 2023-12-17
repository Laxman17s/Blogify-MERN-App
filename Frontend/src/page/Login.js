import React, { useState, useContext } from "react";

import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const loginInitial = {
  username: "",
  password: "",
};

const signupInitial = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ setIsAuthenticated }) => {
  const [login, setLogin] = useState(loginInitial);
  const [sign, setSign] = useState(signupInitial);
  const [account, setAccount] = useState("login");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setLogin({ ...sign, [e.target.name]: e.target.value });
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleTogleAccount = () => {
    account === "login" ? setAccount("signup") : setAccount("login");
  };

  const LoginUser = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <React.Fragment>
      <Component>
        <Box>
          {account === "login" ? (
            <Wrapper>
              <Title>Login</Title>
              <TextField
                variant="standard"
                value={login.username}
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                value={login.password}
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />

              {error && <Error>{error}</Error>}

              <LoginButton variant="contained" onClick={() => LoginUser()}>
                Login
              </LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <SignupButton
                onClick={() => handleTogleAccount()}
                style={{ marginBottom: 50 }}
              >
                Create an account
              </SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <Title>Signup</Title>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="name"
                label="Enter Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />

              <SignupButton>Signup</SignupButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton
                variant="contained"
                onClick={() => handleTogleAccount()}
              >
                Already have an account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </React.Fragment>
  );
};
export default Login;

const Component = styled(Box)`
  width: 400px;
  margin: 70px auto;
  box-shadow: 5px 2px 5px 2px rgb(44, 130, 201, 0.4);
  border-radius: 10px;
`;

const Title = styled(Typography)({
  textAlign: "center",
  fontSize: "1.7rem",
  fontWeight: "600",
  letterSpacing: "2px",
  color: "orange",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 5px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  &:hover {
    color: white;
    background-color: blue;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
