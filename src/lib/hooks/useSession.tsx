import { useEffect } from 'react';
import { apiGetAuthUser } from '../../actions/auth.action';
import useStore from '~/store';

export default function useSession() {
  const store = useStore();

  async function fetchUser() {
    try {
      const user = await apiGetAuthUser();
      console.log('fucking user', user);
      store.setAuthUser(user);
    } catch (error: any) {
      store.reset();
    }
  }

  useEffect(() => {
    if (!store.authUser) {
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return store.authUser;
}
