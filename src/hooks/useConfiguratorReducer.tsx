import { generateCode } from "@/lib/codeGenerator";
import { PropType } from "@/providers/Configurator";
import { ConfiguratorContextType } from "@/providers/ConfiguratorProvider";
import { useReducer } from "react";

export type CONFIGURATOR_ACTION = {
  set: "name",
  value: string
}|
{
  set: "contextProps",
  value: PropType[]
}|
{
  set: "providerProps",
  value: PropType[]
}


const reducer = (state:TypeWithoutDispatch,action: CONFIGURATOR_ACTION):TypeWithoutDispatch => {
  //@ts-expect-error code is computed
  if(Object.keys(state).includes(action.set) && action.set !== "code"){
    const newState =  {...state,[action.set]:action.value};
    if(newState.name === ""){
      newState.code = "";
      return newState;
    }
    // Compute code
    newState.code = generateCode(newState.name,newState.contextProps,newState.providerProps);
    return newState;
  }else{
    throw new Error("Invalid action type");
  }
}

type TypeWithoutDispatch = Omit<ConfiguratorContextType,"dispatch">;

export const useConfiguratorReducer = (initialState: TypeWithoutDispatch) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return {state,dispatch};
};