import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoggedIn, setAccessToken } from "../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Paper,
} from "@mui/material";

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [email, setEmail] = useState(""); // Initialize email state
  const [password, setPassword] = useState(""); // Initialize password state
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/chat");
    }
  });
  const handleSubmit = async (e) => {
    console.log("Inside");
    e.preventDefault();

    try {
      // Send POST request to the API endpoint
      const response = await axios.post(
        "https://shaktigpt.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      // Handle successful login here (e.g., store authentication token, redirect to home page)
      console.log("Login successful!", response.data);
      // Handle successful login here
      const { accessToken } = response.data;

      // Update Redux store state and save in local storage
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(accessToken));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("accessToken", accessToken);
      // Redirect to home page after successful login
      navigate("/chat"); // You can replace "/" with the desired redirect path
    } catch (error) {
      // Handle login error
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error message:", error.message);
      }
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper sx={{ padding: 2 }}>
        <Grid container justifyContent="center" spacing={2} direction="column">
          <Grid item>
            <Typography variant="h4" align="center">
              Login
            </Typography>
            {error && (
              <Typography color="error" align="center">
                {error}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <TextField
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <Typography align="center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
