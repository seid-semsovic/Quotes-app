import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const registeredUsers: User[] = [
  {
    email: "semsovicseid@gmail.com",
    userName: "Seid",
    password: "seki123",
    confirmPassword: "seki123",
  },
  {
    email: "nikolaglisovic@gmail.com",
    userName: "Nikola",
    password: "dzoni123",
    confirmPassword: "dzoni123",
  },
];

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(password, "pwd");

  const navigate = useNavigate();

  //   function uporedjivanje() {
  //     if (userName.toString().includes(password.toString())) {
  //       console.log("userName i password su isti, promenite ih.");
  //     }
  //   }

  function onRegisterHandler() {
    const loggedInUser = registeredUsers.find((user) => user.email !== email);
    if (loggedInUser) {
      console.log("Uspešno ste se registrovali:", loggedInUser);
    } else {
      console.log("Vec postoji takav korisnik, idite na login.");
    }
  }
  return (
    <Card sx={{ width: "30rem", m: "auto", mt: "10rem", padding: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic-username"
            label="Username"
            variant="outlined"
            size="small"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedInput
            fullWidth
            size="small"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {/* <TextField
            id="outlined-basic-confirm-password"
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            id="outlined-basic-password"
            label=" Confirm Password"
            variant="outlined"
            size="small"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            size="small"
            disabled={
              userName === "" || password === "" || password !== confirmPassword
            }
            onClick={onRegisterHandler}
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            size="small"
            onClick={() => navigate("/")}
          >
            Go to login
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RegisterPage;
