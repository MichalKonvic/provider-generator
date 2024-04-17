import Rename from "./Rename";
import Delete from "./Delete";
import ToggleRequired from "./ToggleRequired";
import ArrayToggle from "./ArrayToggle";
import { TypeSelect } from "./TypeSelect";
import InitialData from "./InitialData";

interface Props {
  index: number;
}

const PropField = ({index}:Props) => {
  
  return (
    <div className="h-12 w-full flex gap-2">
      <Rename index={index} />
      <TypeSelect index={index} />
      <ArrayToggle index={index} />
      <ToggleRequired index={index} />
      <InitialData index={index}/>
      <Delete index={index} />
    </div>
  )
}

export default PropField