// src/PermissionsContext.js
import { createContext, useContext, useEffect, useState } from "react";
import defaultPermissions from "./config/menuPermissions";

const PermissionsContext = createContext();

export function PermissionsProvider({ children }) {
  const [permissions, setPermissions] = useState(() => {
    const saved = localStorage.getItem("permissions");
    return saved ? JSON.parse(saved) : defaultPermissions;
  });

  useEffect(() => {
    localStorage.setItem("permissions", JSON.stringify(permissions));
  }, [permissions]);

  return (
    <PermissionsContext.Provider value={{ permissions, setPermissions }}>
      {children}
    </PermissionsContext.Provider>
  );
}

export function usePermissions() {
  return useContext(PermissionsContext);
}
