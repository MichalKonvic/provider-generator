import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props {
  isInvalid:boolean
}

const InitialDataTooltip = ({children,isInvalid}:PropsWithChildren<Props>) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
            {children}
        </TooltipTrigger>
        <TooltipContent className={cn(isInvalid && 'bg-red-500/20 backdrop-blur-md border-red-500')}>
          <p>
            Initial data {isInvalid ? "is required" : ""}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default InitialDataTooltip