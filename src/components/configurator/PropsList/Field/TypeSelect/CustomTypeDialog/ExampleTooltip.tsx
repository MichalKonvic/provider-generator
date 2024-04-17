import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { PropsWithChildren } from 'react'
const ExampleTooltip = ({children}:PropsWithChildren) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent className='flex flex-col gap-1.5'>
          <Label>Example type:</Label>
          <code className='flex'>
            <span className='text-blue-300'>{"("}</span>
            <span className='text-orange-300'>data</span>
            <span className='text-red-300'>{":"}</span>
            <span className='text-blue-300'>string</span>
            <span className='text-blue-300'>{")"}</span>
            <span className='text-red-300 mx-1'>{"=>"}</span>
            <span className='text-blue-300'>void</span>
            <span>{";"}</span>
          </code>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ExampleTooltip