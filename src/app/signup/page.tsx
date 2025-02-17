'use client';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
// import { useMutation } from '@tanstack/react-query';
// import toast from 'react-hot-toast';
// import { signUpApi } from '../services/apiAuth';
import {
  Box,
  Button,
  Container,
  createTheme,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';

export default function SignUp() {
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
  // const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const mutation = useMutation(signUpApi, {
  //   onSuccess: () => {
  //     toast.success('Sign-up successful! Redirecting...');
  //     router.push('/dashboard'); // Redirect after successful sign-up
  //   },
  //   onError: (error: any) => {
  //     toast.error(error.message || 'Sign-up failed');
  //   },
  // });

  const onSignUp = (data: any) => {
    console.log(data);

    // mutation.mutate({ email, password });
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
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSignUp)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // disabled={isLoading}
              {...(register('email'),
              {
                required: 'Add Email Stupid!',
                pattern: { value: /\S+@\S+\.\S+/, message: 'valid email pls' },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // disabled={isLoading}
              {...(register('password'),
              {
                required: 'Set A Password',
                minLength: { value: 8, message: '8 shit' },
              })}
              error={!!errors.email}
              helperText={errors.password?.message}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              // disabled={isLoading}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );

  // return (
  //   <div>
  //     <h1>Sign Up</h1>
  //     <form onSubmit={handleSignUp}>
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button type="submit" disabled={mutation.isLoading}>
  //         {mutation.isLoading ? 'Signing up...' : 'Sign Up'}
  //       </button>
  //     </form>
  //   </div>
  // );
}
