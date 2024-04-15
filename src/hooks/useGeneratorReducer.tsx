import { generateCode } from "@/lib/codeGenerator";
import { PropType } from "@/providers/Generator";
import { GeneratorContextType } from "@/providers/GeneratorProvider";
import { useReducer } from "react";

export type ACTION = {
  set: "name",
  value: string
}|
{
  set: "contextProps",
  value: PropType[]
}|
{
  set: "initialValue",
  value: unknown
}|
{
  set: "providerProps",
  value: PropType[]
}


const reducer = (state:TypeWithoutDispatch,action: ACTION):TypeWithoutDispatch => {
  //@ts-expect-error code is computed
  if(Object.keys(state).includes(action.set) && action.set !== "code"){
    const newState =  {...state,[action.set]:action.value};
    if(newState.name === ""){
      return newState;
    }
    // Compute code
    newState.code = generateCode(newState.name,newState.contextProps,newState.providerProps,newState.initialValue);
    return newState;
  }else{
    throw new Error("Invalid action type");
  }
}

type TypeWithoutDispatch = Omit<GeneratorContextType,"dispatch">;

export const useGeneratorReducer = (initialState: TypeWithoutDispatch) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return {state,dispatch};
};