import React, { createContext, ReactNode, useContext, useState } from "react";

interface GlobalCtxType {
  count: number;
  setCount: (value: number) => void;
}

const GlobalContext = createContext<GlobalCtxType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const value: GlobalCtxType = {
    count,
    setCount,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
