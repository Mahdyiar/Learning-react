'use client';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';

export default function Login() {
  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            background: 'white',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
          },
        },
      },
    },
  });
  const [email, setEmail] = useState('mawney@example.com');
  const [password, setPassword] = useState('12345678');
  const { login, isLoading } = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
    // console.log('Logging in with:', email, password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            background: 'transparent',
            padding: 4,
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom color="white">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {!isLoading ? 'Login' : 'Loading..'}
            </Button>

            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              href="/signup"
            >
              No Account? Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
