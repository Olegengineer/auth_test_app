import { create } from 'zustand';

const userStore = create((set) => ({
  user: {
    email: '',
    error: null,
    isLoading: false,

    // yeah, save temporary fields is not ok, better to use useState hook.
    password: '',
    newPassword: null,
    passwordConfirmation: null
  },
  setUser: (key, value) => set((state) => ({ ...state, [key]: value }))
}));

export default userStore;
