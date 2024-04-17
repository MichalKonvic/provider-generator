import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { PropType, StringPrimitiveType } from "@/providers/Configurator"
import { DISABLES_OTHERS_STR_TYPES } from "@/providers/ConfiguratorProvider"
import { useProps } from "@/providers/PropsProvider"

interface Props {
  name: StringPrimitiveType
  index: number
}
const PrimtiveItem = ({name,index}: Props) => {
  const {props,setProps} = useProps();
  const prop = props[index];
  const disablesOthers = DISABLES_OTHERS_STR_TYPES.includes(name);
  const isPropPrimitive = prop.type === "primitive";
  const checked = isPropPrimitive ? prop.value.some(v => v === name) : false;
  const handleCheck = () => {
    if(!isPropPrimitive){
      // Change prop to primitive
      setProps(props.map((p,i) => {
        if(i === index){
          const newProp:PropType = {
            ...p,
            type: "primitive",
            value: [name]
          }
          return newProp;
        }
        return p;
      }));
      return;
    }

    if(checked){
      // Uncheck current item
      setProps(props.map((p,i) => {
        if(i === index){
          if(p.type !== "primitive") throw new Error("Checkbox item can only be used with primitive types");
          return {...p,value:p.value.filter(v => v !== name)}
        }
        return p;
      }));
      return;
    }

    // Check new value
    let newValue = checked ? prop.value.filter(v => v !== name) : [...prop.value,name];
    if(disablesOthers){
      newValue = [name];
    }else{
      newValue = newValue.filter(v => !DISABLES_OTHERS_STR_TYPES.includes(v));
    }
    setProps(props.map((p,i) => {
      if(i === index){
        if(p.type !== "primitive") throw new Error("Checkbox item can only be used with primitive types");
        return {...p,value:newValue}
      }
      return p
    }));
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

export default PrimtiveItem