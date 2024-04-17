import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { PropsWithChildren } from 'react'
const ExampleInitialDataTooltip = ({children}:PropsWithChildren) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent className='flex flex-col gap-1.5'>
          <Label>Example value:</Label>
          <code className='flex'>
            <span className='text-orange-300'>{'"Some initial value"'}</span>
          </code>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ExampleInitialDataTooltip