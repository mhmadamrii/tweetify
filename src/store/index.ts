'use client';

import { FilteredUser } from '~/lib/interfaces';
import { create } from 'zustand';

type Store = {
  authUser: FilteredUser | null;
  requestLoading: boolean;
  setAuthUser: (user: any | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  reset: () => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  requestLoading: false,
  setAuthUser: (user) =>
    set((state) => ({ ...state, authUser: user })),
  setRequestLoading: (isLoading) =>
    set((state) => ({
      ...state,
      requestLoading: isLoading,
    })),
  reset: () => set({ authUser: null, requestLoading: false }),
}));

export default useStore;
