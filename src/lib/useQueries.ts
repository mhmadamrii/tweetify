import { useQueryClient } from '@tanstack/react-query';

// First create a helper function
export const useGetCachedQueryData = (key: string) => {
  const queryClient = useQueryClient();

  // Make sure that the key is wrapped in an array for this to work
  const data = queryClient.getQueryData([key]);
  return data;
};
