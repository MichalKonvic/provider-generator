import { createContext, PropsWithChildren, useContext } from "react";
import { PropType } from "./Configurator";
import { useConfigurator } from "./ConfiguratorProvider";

export type propsType = "context"|"provider";

export type PROPS_ACTION = {
  set: "props",
  value: PropType[]
}


interface PropsContext {
  type: propsType
  props: PropType[];
  setProps: (newProp:PropType[]) => void;
}

interface ComponentProps{
  type: propsType;
}

const initialValue:PropsContext = {
  type: "context",
  setProps: () => {},
  props: [],
}

const PropsContext = createContext(initialValue);

export const PropsProvider = ({
  type: propsType,
  children
}:PropsWithChildren<ComponentProps>) => {
  const {dispatch,contextProps,providerProps} = useConfigurator();
  const props = propsType=== "context" ? contextProps : providerProps;
  const setProps = (newProps: PropType[]) => {
    const setName = propsType==="context" ? "contextProps" :  "providerProps";
    dispatch({
      set: setName,
      value: newProps
    });
  }
  return (
    <PropsContext.Provider value={{type:propsType,props,setProps}}>
      {children}
    </PropsContext.Provider>
  )
}

export const useProps = () => {
  const ctx = useContext(PropsContext);
  if(!ctx){
    throw new Error('useProps must be used within a PropsProvider');
  }
  return ctx;
}