import { DropdownMenuGroup } from "@/components/ui/dropdown-menu"
import { POSSIBLE_STR_PRIMITIVE_TYPES } from "@/providers/ConfiguratorProvider";
import TypeSelectPrimitiveItem from "./TypeSelectPrimitiveItem";

interface Props{
  index: number
}

const TypeSelectPrimtiveGroup = ({index}:Props) => {
  return (
    <DropdownMenuGroup>
      {POSSIBLE_STR_PRIMITIVE_TYPES.map((name) => (
        <TypeSelectPrimitiveItem index={index} name={name} key={name} />
      ))}
    </DropdownMenuGroup>
  )
}

export default TypeSelectPrimtiveGroup