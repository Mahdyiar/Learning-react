'use client';
import { Button } from '@mui/material';
import { useLogout } from '../hooks/useLogout.js';
const Logout = () => {
  const { isLoading, logout } = useLogout();
  return (
    <Button
      disabled={isLoading}
      onClick={logout}
      sx={{
        color: 'white',
        border: '1px solid #333',
        borderRadius: '128px',
      }}
    >
      Log Out
    </Button>
  );
};

export default Logout;
