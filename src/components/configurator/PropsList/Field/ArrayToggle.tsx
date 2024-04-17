import { Toggle } from "@/components/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useProps } from "@/providers/PropsProvider";
import { Brackets } from "lucide-react";

type Props = {
  index: number
}

const ArrayToggle = ({index}:Props) => {
  const {props, setProps} = useProps();
  const prop = props[index];
  const disabled = prop.type === "custom";
  const handleChange = () => {
    setProps(props.map((p,i) => i === index ? {...p,isArray:!p.isArray} : p));
  }
  // Causes problem button cannot appear as a descendant of button (TooltipTrigger is a button)
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Toggle pressed={prop.isArray && !disabled} disabled={disabled} onPressedChange={handleChange} className="w-12 h-12" aria-label="Toggle array" variant={"outline"}>
            <Brackets className="w-4 h-4 " />
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {disabled ? "Only primitive types can be arrays" : "Toggle array"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ArrayToggle