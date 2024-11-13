import { UserMe } from '@services/auth/user-me/types';
import { create } from 'zustand';

interface IRoomsReservations {
  userMe: UserMe;
  setUserMe: (userMe: UserMe) => void;
}

const userMeStore = create<IRoomsReservations>((set) => ({
  userMe: {} as UserMe,
  setUserMe: (userMe: UserMe) => set((state) => ({ ...state, userMe })),
}));

export default userMeStore;
