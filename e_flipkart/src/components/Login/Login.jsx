import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { authenticatesSignup, authenticateslogin } from "../../service/api";
import { Datacontext } from "../../context/DataProvider";

const WrapperContainer = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Imgcomp = styled(Box)`
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;
  height: 82%;
  width: 40%;
  padding: 45px 35px;
  color: #fff;
  font-weight: 600;
`;

const FormWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginBtn = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const ReqBtn = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAc = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialval = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};

const signUpvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const Logininitialval = {
  username: "",
  password: "",
};
const Login = ({ open, setOpen }) => {
  const [account, toggleAcc] = useState(accountInitialval.login);
  const [signup, SignUpVal] = useState(signUpvalues);
  const { setAccount } = useContext(Datacontext);
  const [login, Setlogin] = useState(Logininitialval);
  const [error, Seterror] = useState(false);

  const toggleSignup = () => {
    toggleAcc(accountInitialval.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAcc(accountInitialval.login);
    Seterror(false);
  };

  const setValues = (e) => {
    SignUpVal({ ...signup, [e.target.name]: e.target.value });
  };

  const signUser = async () => {
    let res = await authenticatesSignup(signup);
    if (!res) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onvalChange = (e) => {
    Setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const Loginuser = async () => {
    let res = await authenticateslogin(login);
    console.log(res);
    if (res.status === 200) {
      handleClose();
      setAccount(res.data.data.firstname);
    } else {
      Seterror(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <WrapperContainer>
        <Imgcomp>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: "20px" }}>
            {account.subheading}
          </Typography>
        </Imgcomp>
        {account.view === "login" ? (
          <FormWrap>
            <TextField
              variant="standard"
              label="Enter Username"
              onChange={(e) => onvalChange(e)}
              name="username"
            />
            {error && <Error>Please Enter Valid Username Or Password</Error>}{" "}
            <TextField
              variant="standard"
              label="Enter Password"
              onChange={(e) => onvalChange(e)}
              name="password"
            />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginBtn onClick={Loginuser}>Login</LoginBtn>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <ReqBtn>Request OTP</ReqBtn>
            <CreateAc onClick={() => toggleSignup()}>
              New to Flipkart? Create an account
            </CreateAc>
          </FormWrap>
        ) : (
          <FormWrap>
            <TextField
              variant="standard"
              onChange={(e) => setValues(e)}
              name="firstname"
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              onChange={(e) => setValues(e)}
              name="lastname"
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              onChange={(e) => setValues(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => setValues(e)}
              name="email"
              label="Enter Email"
            />
            <TextField
              variant="standard"
              onChange={(e) => setValues(e)}
              name="password"
              label="Enter Password"
            />
            <TextField
              variant="standard"
              onChange={(e) => setValues(e)}
              name="phone"
              label="Enter Phone"
            />
            <LoginBtn onClick={signUser}>Continue</LoginBtn>
          </FormWrap>
        )}
      </WrapperContainer>
    </Dialog>
  );
};

export default Login;
