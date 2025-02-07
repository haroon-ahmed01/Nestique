import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, Paper, Checkbox, FormControlLabel, Link } from "@mui/material";


const Signup = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUserName("");
    setUserPassword("");
  },[]);

  const handleSignup = (e) => {
    e.preventDefault();   

    axios.post('http://localhost:3001/signup', { userName: userName, userEmail: userEmail, password: userPassword })
      .then((response) => {
        console.log(response.data);
        navigate('/login');
      })
      .catch((error) => {
        console.error("Signup failed:", error.response?.data || error.message);
      });
  };

  const handleChange = (event) => {
    setChecked(event.target.checked); 
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, mt: 5, textAlign: "center"}}>
          <Typography variant="h5">Signup</Typography>
          <Box component="form" noValidate onSubmit={handleSignup}>
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
              id="userEmail"
              label="userEmail"
              name="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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

              <Typography variant="h6" sx={{ mt: 2 }}>Have an account, <Link href='/login'>Login</Link></Typography>

            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Signup
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Signup;