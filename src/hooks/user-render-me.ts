import { getUserMeService } from '@services/auth/user-me';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import userMeStore from 'src/store/user-me';

export const useRenderMe = () => {
  const { setUserMe } = userMeStore();

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['renderUserMe'],
    queryFn: getUserMeService,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setUserMe(data);
    }
  }, [isSuccess, data, setUserMe]);

  return {
    users: data,
    isLoading,
    isError,
  };
};
