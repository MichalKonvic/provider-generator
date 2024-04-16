import {useContext,createContext, PropsWithChildren} from 'react';
import { PropType, StringPrimitiveType } from './Generator';
import { ACTION, useGeneratorReducer } from '@/hooks/useGeneratorReducer';


export interface GeneratorContextType {
  name: string;
  contextProps:PropType[];
  providerProps:PropType[];
  initialValue: unknown;
  dispatch: React.Dispatch<ACTION>;
  code: string;
}

const initialData:GeneratorContextType ={
  name: "",
  contextProps: [],
  providerProps: [],
  initialValue: null,
  code: "",
  dispatch: () => {}
};

export const POSSIBLE_STR_PRIMITIVE_TYPES:StringPrimitiveType[] = ['string','number','boolean','bigint','symbol','null','undefined','any','unknown','never'];
export const DISABLES_OTHERS_STR_TYPES = ['any','unknown','never'];

const GeneratorContext = createContext(initialData);

export const GeneratorProvider = ({children}:PropsWithChildren) => {
  const {dispatch,state} = useGeneratorReducer(initialData);
  return (
    <GeneratorContext.Provider value={{...state,dispatch}}>
      {children}
    </GeneratorContext.Provider>
  )
};

export const useGenerator = () => {
  const ctx = useContext(GeneratorContext);
  if (!ctx) {
    throw new Error('useGenerator must be used within a GeneratorProvider');
  }
  return ctx;
};
