import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { PropType } from "@/providers/Generator";
import { useGenerator } from "@/providers/GeneratorProvider"
import CodeDialog from "./CodeDialog";

interface Props{
  index: number
}
const TypeSelectCustom = ({index}:Props) => {
  const {contextProps} = useGenerator();
  const prop = contextProps[index];
  const checked = prop.type === "custom";
  return (
    <CodeDialog index={index}>
      <DropdownMenuCheckboxItem checked={checked}>
        Custom
      </DropdownMenuCheckboxItem>
    </CodeDialog>
  )
}

export default TypeSelectCustom