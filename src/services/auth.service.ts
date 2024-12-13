import { firebaseAuth } from '../firebase';
import api from './api';
import { User } from '../types';

const serializeUser = (user: any): User => {
  // Ensure we only include serializable data
  return {
    id: user.uid || user.id || '',
    email: user.email || '',
    name: user.displayName || user.name || '',
    photoURL: user.photoURL || null,
    role: user.role || 'user',
    createdAt: new Date(user.createdAt || Date.now()).toISOString(),
    updatedAt: new Date(user.updatedAt || Date.now()).toISOString(),
  };
};

export const authService = {
  async register(userData: Partial<User>) {
    try {
      const { email, password, name, businessName, ...rest } = userData as any;

      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const displayName = name || businessName;
      const firebaseUser = await firebaseAuth.registerUser(email, password, displayName);

      const { data } = await api.post('/users/register', {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: displayName,
        ...rest,
      });

      return serializeUser(data.user);
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  async login(identifier: string, password: string) {
    try {
      const firebaseUser = await firebaseAuth.loginWithEmail(identifier, password);
      const token = await firebaseUser.getIdToken();
      localStorage.setItem('authToken', token);

      const { data } = await api.post('/users/login', {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
      });

      return serializeUser(data.user);
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  async loginWithGoogle() {
    try {
      const firebaseUser = await firebaseAuth.loginWithGoogle();
      const token = await firebaseUser.getIdToken();
      localStorage.setItem('authToken', token);

      const { data } = await api.post('/users/google-auth', {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
      });

      return serializeUser(data.user);
    } catch (error: any) {
      console.error('Google login error:', error);
      throw new Error(error.response?.data?.message || 'Google login failed');
    }
  },

  async getCurrentUser() {
    const currentUser = firebaseAuth.getCurrentUser();
    if (!currentUser) {
      return null;
    }

    try {
      const { data } = await api.get('/users/me');
      return serializeUser(data);
    } catch (error: any) {
      console.error('Get current user error:', error);
      return null;
    }
  },

  async logout() {
    try {
      await firebaseAuth.logout();
      localStorage.removeItem('authToken');
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error('Failed to log out');
    }
  },

  isAuthenticated() {
    const currentUser = firebaseAuth.getCurrentUser();
    const token = localStorage.getItem('authToken');
    return !!currentUser && !!token;
  },
};