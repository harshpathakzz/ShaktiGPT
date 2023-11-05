import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/chat");
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the API endpoint
      const response = await axios.post(
        "https://shaktigpt.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      // Handle successful registration here (e.g., redirect to login page)
      console.log("User registered successfully!", response.data);
      navigate("/login");
    } catch (error) {
      // Handle registration error
      setError("Registration failed. Please try again.");
      console.error("Registration error:", error);
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
              Sign Up
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
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
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
                  <Button variant="contained" type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <Typography align="center">
              Have an account? <Link to="/login">Log in</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
