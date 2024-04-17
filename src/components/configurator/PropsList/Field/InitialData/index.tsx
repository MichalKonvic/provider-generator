import { Button } from '@/components/ui/button';
// import { useProps } from '@/providers/PropsProvider';
import { Braces } from 'lucide-react';
import InitialDataTooltip from './Tooltip';
import { useProps } from '@/providers/PropsProvider';
import { cn } from '@/lib/utils';
import { Toggle } from '@/components/ui/toggle';

type Props = {
  index: number
}
const InitialData = ({index}:Props) => {
  const {props} = useProps();
  const prop = props[index]
  // TODO validate data type in future
  const isInvalid = prop.required && !prop.data;
  return (
    <InitialDataTooltip isInvalid={isInvalid} >
      <Toggle pressed={!!prop.data} variant={"outline"} className={cn('w-12 h-12 flex items-center justify-center',isInvalid && "border-red-500")}>
        <Braces className='w-4 h-4'/>
      </Toggle>
    </InitialDataTooltip>
  )
}

export default InitialData