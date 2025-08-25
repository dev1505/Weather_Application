import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContextComp";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};
