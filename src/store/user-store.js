import { create } from 'zustand';

const userStore = create((set) => ({
  user: {
    email: '',
    password: '',
    error: null,
    isLoading: false,
    fetchData: null,

    // yeah, save temporary fields is not ok, better to use useState hook.
    newPassword: null,
    passwordConfirmation: null
  },
  setUser: (key, value) => set((state) => ({ ...state, [key]: value }))
}));

export default userStore;
