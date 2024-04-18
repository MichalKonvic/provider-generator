import { createContext, PropsWithChildren, useContext } from "react";

interface ProviderType{
  
}

interface ContextType {
  asd?:string | number;
}

const initialContextData:ContextType = {
};

const AsdfContext = createContext<ContextType>(initialContextData);


export const AsdfProvider = ({
  children,
  
}:PropsWithChildren<ProviderType>) => {

  // LOGIC
  const value = initialContextData;

  return (
    <AsdfContext.Provider value={value}>
      {children}
    </AsdfContext.Provider>
  )
}

export const useAsdf = () => {
  const ctx = useContext(AsdfContext);
  if(!ctx){
    throw new Error(`useAsdf must be used within a AsdfProvider`);
  }
  return ctx;
}
  