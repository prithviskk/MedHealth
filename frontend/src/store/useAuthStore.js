import { create } from 'zustand'
import axiosInstance from '../lib/axios.js'
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({
  isSigningUp: false,
  isLoggingIn: false,
  isAuthenticated: false,
  user: null,

  signup: async ({ fullName, email, username, password }) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post('/api/auth/signup', {
        fullName,
        email,
        username,
        password,
      });

      const user = res.data.user;
      set({ user, isAuthenticated: true });
      toast.success('Account created successfully');
      return { success: true, user };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
      return {
        success: false,
        error: error.response?.data?.message || 'Signup failed',
      };
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (email, password) => {
    console.log("Login payload:", { email, password });
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post('/api/auth/login', { email, password });

      const user = res.data.user;
      set({ isAuthenticated: true, user });
      toast.success('Logged in successfully');
      return { success: true };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      };
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('/api/auth/logout');
      set({ isAuthenticated: false, user: null });
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  },
}));
