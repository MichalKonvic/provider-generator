import { Input } from '@/components/ui/input';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useGenerator } from '@/providers/GeneratorProvider';
import React, { useEffect, useState } from 'react'
interface Props {
  index: number;
}
const PropRename = ({index}:Props) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const {contextProps,dispatch} = useGenerator();
  const prop = contextProps[index];
  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      set: "contextProps",
      value: contextProps.map((p,i) => i === index ? {...p,name:e.target.value} : p)
    })
  };
  useEffect(() => {
    // TODO in future add more validation rules
    if(!prop.name){
      setIsValid(false);
      return;
    }
    if(contextProps.filter(p => p.name === prop.name).length > 1){
      setIsValid(false);
      return;
    }
    setIsValid(true);
  },[prop.name,contextProps])
  return (
    <TooltipProvider>
      <Tooltip open={showTooltip && !isValid}>
        <TooltipTrigger>
          <Input onBlur={() => setShowTooltip(false)} onFocus={() => setShowTooltip(true)} className={cn("h-12 w-44",!isValid && "border-red-500")} placeholder="Property name" value={prop.name} onChange={handleNameChange} />
        </TooltipTrigger>
        <TooltipContent align='start' className='bg-red-500/20 backdrop-blur-md border-red-500'>
          <p>
            Invalid name
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default PropRename