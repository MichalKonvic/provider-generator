import { Button } from '@/components/ui/button';
import { useProps } from '@/providers/PropsProvider';
import { Trash2 } from 'lucide-react';

type Props = {
  index: number
}
const Delete = ({index}:Props) => {
  const {props,setProps} = useProps();
  const handleDelete = () => {
    setProps(props.filter((_,i) => i !== index));
  }
  return (
    <Button onClick={handleDelete} variant={"destructive"} className='w-12 h-12 flex items-center justify-center'>
      <Trash2 className='w-4 h-4'/>
    </Button>
  )
}

export default Delete