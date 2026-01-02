import { useState, useEffect, useCallback } from "react";
import { isAdminLoggedIn, loginAdmin as loginAdminStorage, logoutAdmin as logoutAdminStorage } from "@/lib/storage";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAdminLoggedIn());
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    const success = loginAdminStorage(username, password);
    if (success) {
      setIsLoggedIn(true);
    }
    return success;
  }, []);

  const logout = useCallback(() => {
    logoutAdminStorage();
    setIsLoggedIn(false);
  }, []);

  return {
    isLoggedIn,
    login,
    logout,
  };
};
