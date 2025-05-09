import { PropType, StringPrimitiveType } from "@/providers/Configurator";


const typesArrayToString = (types:StringPrimitiveType[]):string => {
  return types.map(type => `${type}`).join(" | ");
};

const primitiveArrayToString = (prop:StringPrimitiveType[]):string => {
  return `(${typesArrayToString(prop)})[]`;
}

const propToString = (prop:PropType):string => {
  const identifier = prop.required ? ":" : "?:";
  if(prop.type === "primitive"){
    if(prop.value.length === 1){
      // Single primitive
      return prop.name + identifier + prop.value[0] + (prop.isArray ? "[]" : "") + ";";
    }else{
      // Multiple primitive
      if(prop.isArray){
        return prop.name + identifier + primitiveArrayToString(prop.value) + ";";
      }else{
        return prop.name + identifier + typesArrayToString(prop.value) + ";";
      }
    }
  }else{
    // custom
    return prop.name + identifier + prop.value + (prop.value.endsWith(";") ? "" : ";");
  }
}

const returnInitialValueAsString = (prop:PropType):string => {
  if(!prop.required && !prop.data){
    return "";
  }
  const hasEnd = prop.data.endsWith(";") || prop.data.endsWith(",");
  const identifier = prop.required ? ":" : "?:";
  return prop.name + identifier + prop.data + (hasEnd ? "" : ",")
};

const destructureProviderProp = (prop:PropType):string => {
  const identifier = prop.data ? "=": "";
  return `${prop.name}${identifier}${prop.data}`;
};


const removeUnnecessaryLineBreaks = (str:string):string => {
  return str.split("\n").filter(line => line.trim() !== "").join("\n");
};


export const generateCode = (name: string, contextProps: PropType[], providerProps: PropType[]):string => {
  const strInitialContextValue = removeUnnecessaryLineBreaks(contextProps.map(prop => returnInitialValueAsString(prop)).join("\n  "));
  const strProviderProps = removeUnnecessaryLineBreaks(providerProps.map(prop => destructureProviderProp(prop)).join(",\n  "));
  const strProviderPropsTypes = removeUnnecessaryLineBreaks(providerProps.map(prop => propToString(prop)).join("\n  "));
  const strContextPropsTypes = removeUnnecessaryLineBreaks(contextProps.map(prop => propToString(prop)).join("\n  "));


  return `import { createContext, PropsWithChildren, useContext } from "react";

interface ProviderType{
  ${strProviderPropsTypes}
}

interface ContextType {
  ${strContextPropsTypes}
}

const initialContextData:ContextType = {
  ${strInitialContextValue}
};

const ${name}Context = createContext<ContextType>(initialContextData);


export const ${name}Provider = ({
  children,
  ${strProviderProps}
}:PropsWithChildren<ProviderType>) => {

  // LOGIC
  const value = initialContextData;

  return (
    <${name}Context.Provider value={value}>
      {children}
    </${name}Context.Provider>
  )
}

export const use${name} = () => {
  const ctx = useContext(${name}Context);
  if(!ctx){
    throw new Error(${"`"}use${name} must be used within a ${name}Provider${"`"});
  }
  return ctx;
}
  `;
}