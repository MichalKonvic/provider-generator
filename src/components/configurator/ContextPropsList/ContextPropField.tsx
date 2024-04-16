import PropRename from "./PropRename";
import DeleteProp from "./DeleteProp";
import ToggleRequired from "./ToggleRequired";
import ArrayToggle from "./ArrayToggle";
import { TypeSelect } from "./TypeSelect";

interface Props {
  index: number;
}

const ContextPropField = ({index}:Props) => {
  
  return (
    <div className="h-12 w-full flex gap-2">
      <PropRename index={index} />
      <TypeSelect index={index} />
      <ArrayToggle index={index} />
      <ToggleRequired index={index} />
      <DeleteProp index={index} />
    </div>
  )
}

export default ContextPropField