import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { PropType, StringPrimitiveType } from "@/providers/Generator"
import { DISABLES_OTHERS_STR_TYPES, useGenerator } from "@/providers/GeneratorProvider"

interface Props {
  name: StringPrimitiveType
  index: number
}
const TypeSelectPrimitiveItem = ({name,index}: Props) => {
  const {contextProps,dispatch} = useGenerator();
  const prop = contextProps[index];
  const disablesOthers = DISABLES_OTHERS_STR_TYPES.includes(name);
  const isPropPrimitive = prop.type === "primitive";
  const checked = isPropPrimitive ? prop.value.some(v => v === name) : false;
  const handleCheck = () => {
    if(!isPropPrimitive){
      // Change prop to primitive
      dispatch({
        set: "contextProps",
        value: contextProps.map((p,i) => {
          if(i === index){
            const newProp:PropType = {
              ...p,
              type: "primitive",
              value: [name]
            }
            return newProp;
          }
          return p;
        })
      })
      return;
    }

    if(checked){
      // Uncheck current item
      dispatch({
        set: "contextProps",
        value: contextProps.map((p,i) => {
          if(i === index){
            if(p.type !== "primitive") throw new Error("Checkbox item can only be used with primitive types");
            return {...p,value:p.value.filter(v => v !== name)}
          }
          return p;
        })
      })
      return;
    }

    // Check new value
    let newValue = checked ? prop.value.filter(v => v !== name) : [...prop.value,name];
    if(disablesOthers){
      newValue = [name];
    }else{
      newValue = newValue.filter(v => !DISABLES_OTHERS_STR_TYPES.includes(v));
    }
    dispatch({
      set: "contextProps",
      value: contextProps.map((p,i) => {
        if(i === index){
          if(p.type !== "primitive") throw new Error("Checkbox item can only be used with primitive types");
          return {...p,value:newValue}
        }
        return p
      })
    })
  }

  return (
    <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={handleCheck}
          >
            {name}
    </DropdownMenuCheckboxItem>
  )
}

export default TypeSelectPrimitiveItem