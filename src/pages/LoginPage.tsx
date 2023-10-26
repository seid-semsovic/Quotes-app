import React, { useState } from "react";
import { Button, Card, Grid, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../types/user";

const users: userLogin[] = [
  {
    userName: "Seid",
    password: "seki123",
  },
  {
    userName: "Nikola",
    password: "dzoniblaze123",
  },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onLoginHandler() {
    const loged = users.filter(
      (user) => user.password === password && user.userName === userName
    );

    if (loged.length > 0) {
      navigate("/quotes");
    }
  }

  return (
    <Paper
      style={{
        width: "100%",
        backgroundColor: "orange",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "30rem", padding: "1rem 2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              size="small"
              disabled={userName === "" || password === ""}
              onClick={() => onLoginHandler()}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              size="small"
              onClick={() => navigate("/register")}
            >
              Create an account
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
};

export default LoginPage;
