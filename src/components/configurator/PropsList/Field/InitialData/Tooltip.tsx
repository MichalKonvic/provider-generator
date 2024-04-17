import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { PropsWithChildren } from 'react'

const InitialDataTooltip = ({children}:PropsWithChildren) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
            {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>Initial data</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default InitialDataTooltip