import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import CustomTypeDialog from "../CustomTypeDialog";
import { useProps } from "@/providers/PropsProvider";

interface Props{
  index: number
}
const CustomCodeItem = ({index}:Props) => {
  const {props} = useProps();
  const prop = props[index];
  const checked = prop.type === "custom";
  return (
    <CustomTypeDialog index={index}>
      <DropdownMenuCheckboxItem checked={checked}>
        Custom
      </DropdownMenuCheckboxItem>
    </CustomTypeDialog>
  )
}

export default CustomCodeItem