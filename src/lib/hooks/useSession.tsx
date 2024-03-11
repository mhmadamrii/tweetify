import React from 'react';
import useStore from '~/store';

import { useEffect } from 'react';
import { apiGetAuthUser } from '../../actions/auth.action';

export default function useSession() {
  const store = useStore();
  console.log('Hello guys');

  async function fetchUser() {
    try {
      const user = await apiGetAuthUser();
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
