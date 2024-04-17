import { Button } from '@/components/ui/button';
// import { useProps } from '@/providers/PropsProvider';
import { Braces } from 'lucide-react';
import InitialDataTooltip from './Tooltip';
import { useProps } from '@/providers/PropsProvider';
import { cn } from '@/lib/utils';
import InitialDataDialog from './Dialog';

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
      <InitialDataDialog index={index}>
          <Button variant={"outline"} className={cn('w-12 h-12 flex items-center justify-center',prop.data !== "" && "bg-accent",isInvalid && "border-red-500")}>
            <Braces className='w-4 h-4'/>
          </Button>
      </InitialDataDialog>
    </InitialDataTooltip>
  )
}

export default InitialData