import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, Paper, Checkbox, FormControlLabel } from "@mui/material";


const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUserName("");
    setUserPassword("");
  },[]);

  const handleLogin = (e) => {
    e.preventDefault();   

    axios.post('http://localhost:3001/register', { userName: userName, password: userPassword })
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error("Login failed:", error.response?.data || error.message);
        // Handle error (e.g., show error message to user)
      });
  };

  const handleChange = (event) => {
    setChecked(event.target.checked); 
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, mt: 5, textAlign: "center"}}>
          <Typography variant="h5">Login</Typography>
          <Box component="form" noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />

              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
              label="Trust This Device"
             />

              <Typography variant="h6" sx={{ mt: 2 }}>Don't have an account, sign up</Typography>

            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Login;