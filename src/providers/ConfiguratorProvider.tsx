import {useContext,createContext, PropsWithChildren} from 'react';
import { PropType, StringPrimitiveType } from './Configurator';
import { CONFIGURATOR_ACTION, useConfiguratorReducer } from '@/hooks/useConfiguratorReducer';


export interface ConfiguratorContextType {
  name: string;
  contextProps:PropType[];
  providerProps:PropType[];
  dispatch: React.Dispatch<CONFIGURATOR_ACTION>;
  code: string;
}

const initialData:ConfiguratorContextType ={
  name: "",
  contextProps: [],
  providerProps: [],
  code: "",
  dispatch: () => {}
};

export const POSSIBLE_STR_PRIMITIVE_TYPES:StringPrimitiveType[] = ['string','number','boolean','bigint','symbol','null','undefined','any','unknown','never'];
export const DISABLES_OTHERS_STR_TYPES = ['any','unknown','never'];

const ConfiguratorContext = createContext(initialData);

export const ConfiguratorProvider = ({children}:PropsWithChildren) => {
  const {dispatch,state} = useConfiguratorReducer(initialData);
  return (
    <ConfiguratorContext.Provider value={{...state,dispatch}}>
      {children}
    </ConfiguratorContext.Provider>
  )
};

export const useConfigurator = () => {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) {
    throw new Error('useGenerator must be used within a GeneratorProvider');
  }
  return ctx;
};
