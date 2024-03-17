import { create } from 'zustand';
import { nanoid } from 'nanoid';

const initialState = { notifications: [] };

const notifierStore = create((set) => ({
  ...initialState,
  setNotification: (type, message) =>
    set((state) => ({
      notifications: [...state.notifications, { id: nanoid(), type, message }]
    })),
  removeNotifications: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((item) => item.id !== id)
    })),
  clearAll: () =>
    set(() => ({
      ...initialState
    }))
}));

export default notifierStore;
