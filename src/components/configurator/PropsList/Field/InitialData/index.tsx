import { Button } from '@/components/ui/button';
// import { useProps } from '@/providers/PropsProvider';
import { Braces } from 'lucide-react';
import InitialDataTooltip from './Tooltip';

type Props = {
  index: number
}
const InitialData = ({index}:Props) => {
  // const {props,setProps} = useProps();
  return (
    <InitialDataTooltip>
      <Button variant={"outline"} className='w-12 h-12 flex items-center justify-center'>
        <Braces className='w-4 h-4'/>
      </Button>
    </InitialDataTooltip>
  )
}

export default InitialData