import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContextComp";


export function useGlobalContext() {
    const context = useContext(GlobalContext);
    console.log(context)
    if (!context && context?.weatherAppData?.apiStates?.data !== false) {
        throw new Error("useGlobalContext must be used within a GlobalContext.Provider");
    }
    return context;
}