type User = {
  id: number;
  email: string;
  name: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
};

import { useState, useEffect, useCallback } from "react";

const AUTH_KEY = "auth_state";

const getStoredAuth = (): AuthState => {
  const stored = localStorage.getItem(AUTH_KEY);
  if (!stored) return { isAuthenticated: false, user: null, token: null };

  try {
    return JSON.parse(stored);
  } catch {
    localStorage.removeItem(AUTH_KEY);
    return { isAuthenticated: false, user: null, token: null };
  }
};

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthState>(getStoredAuth);

  // Update localStorage when auth state changes
  useEffect(() => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  }, [auth]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const user = {
        id: 1,
        email: "admin@kita.blue",
        name: "Admin",
      };

      if (email !== user.email && password !== "admin123") {
        return { success: false, error: "Email atau password salah" };
      }

      const token = "apacoba";

      setAuth({
        isAuthenticated: true,
        user,
        token,
      });

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Login failed",
      };
    }
  }, []);

  const logout = useCallback(() => {
    setAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });
    localStorage.removeItem(AUTH_KEY);
  }, []);

  const checkAuth = useCallback(() => {
    const stored = getStoredAuth();
    return stored.isAuthenticated;
  }, []);

  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    token: auth.token,
    login,
    logout,
    checkAuth,
  };
};
