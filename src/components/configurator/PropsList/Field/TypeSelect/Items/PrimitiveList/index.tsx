import { DropdownMenuGroup } from "@/components/ui/dropdown-menu"
import { POSSIBLE_STR_PRIMITIVE_TYPES } from "@/providers/ConfiguratorProvider";
import PrimtiveItem from "./Item";

interface Props{
  index: number
}

const PrimitiveList = ({index}:Props) => {
  return (
    <DropdownMenuGroup>
      {POSSIBLE_STR_PRIMITIVE_TYPES.map((name) => (
        <PrimtiveItem index={index} name={name} key={name} />
      ))}
    </DropdownMenuGroup>
  )
}

export default PrimitiveList