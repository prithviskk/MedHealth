import { create } from "zustand";

export const useAppointmentStore = create((set) => ({
  appointments: [],
  addAppointment: (data) =>
    set((state) => ({
      appointments: [...state.appointments, data],
    })),
}));
