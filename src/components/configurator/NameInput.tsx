import { useConfigurator } from "@/providers/ConfiguratorProvider"
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const NameInput = () => {
  const {dispatch,name} = useConfigurator();
  const [isValid, setIsValid] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({set:"name",value:e.target.value});
  };
  useEffect(() => {
    if(!name){
      setIsValid(false);
      return;
    }
    setIsValid(true);
  },[name])
  return (
    <div className='flex flex-col gap-1.5 w-full'>
      <label htmlFor="name" className='text-sm'>Provider Name</label>
      <TooltipProvider>
      <Tooltip open={showTooltip && !isValid}>
        <TooltipTrigger asChild>
          <Input onBlur={() => setShowTooltip(false)} onFocus={() => setShowTooltip(true)} className={cn(!isValid && "border-red-500")} placeholder="Name" value={name} onChange={handleNameChange} />
        </TooltipTrigger>
        <TooltipContent align='start' className='bg-red-500/20 backdrop-blur-md border-red-500'>
          <p>
            Invalid name
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </div>
  )
}

export default NameInput