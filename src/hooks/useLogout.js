import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from './../services/apiAuth';
import { useRouter } from 'next/navigation'; // Use next/navigation for redirects in App Router
export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.replace('/login'); // Redirect after login
    },
  });
  return { logout, isLoading };
}
