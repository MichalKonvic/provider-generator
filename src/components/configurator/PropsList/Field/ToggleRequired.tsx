import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useProps } from "@/providers/PropsProvider";
import { Asterisk } from "lucide-react";

type Props = {
  index: number
}

const ToggleRequired = ({index}:Props) => {
  const {props,setProps} = useProps();
  const prop = props[index];
  const handleChange = () => {
    setProps(props.map((p,i) => i === index ? {...p,required:!p.required} : p))
  }
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Toggle pressed={prop.required} onPressedChange={handleChange} className="w-12 h-12" aria-label="Toggle required" variant={"outline"}>
            <Asterisk className="w-4 h-4" />
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Toggle required
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ToggleRequired