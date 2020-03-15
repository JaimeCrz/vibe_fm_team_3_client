import React from "react";
import TextField from '@material-ui/core/TextField';




const LoginForm = ({ submitFormHandler }) => {
  return (

    <form onSubmit={submitFormHandler} id="login-form">
      <TextField name="email" type="email" id="email" id="outlined-basic" label="Email" variant="outlined"></TextField>
      <TextField name="password" type="password" id="password" id="outlined-basic" label="Password" variant="outlined"></TextField>

      <button id="submit"
        variant="contained"
        color="primary"
        size="large">
          Submit
      </button>
    </form>
  );
};

export default LoginForm;