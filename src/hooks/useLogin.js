import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from './../services/apiAuth';
import { useRouter } from 'next/navigation'; // Use next/navigation for redirects in App Router
import toast from 'react-hot-toast';

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      router.replace('/'); // Redirect after login
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('email or password are wrong bitch');
    },
  });
  return { login, isLoading };
}
