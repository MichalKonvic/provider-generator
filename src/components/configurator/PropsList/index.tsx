import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import PropField from './Field';
import { Separator } from '@/components/ui/separator';
import { useProps } from '@/providers/PropsProvider';
import List from '@/components/ui/list';

const PropsList = () => {
  const {props,setProps, type} = useProps();
  const handleAddProp = () => {
    setProps([...props,{name:"",isArray: false, required: true,type:"primitive",data:"",value:[]}])
  };
  return (
    <div className='flex flex-col gap-1.5 min-h-32'>
      <Label>
        {type.charAt(0).toUpperCase() + type.slice(1)} Properties
      </Label>
      <List>
        {props.map((_,index) => {
          const key = index;
          if(index == props.length - 1){
            return (
              <div key={key}>
                <PropField index={index} />
              </div>
            )
          }
          return (
            <div key={key}>
              <PropField index={index} />
              <Separator/>
            </div>
          )
        })}
        {props.length === 0 && (
          <span className='text-gray-400 text-sm w-full text-center h-12 flex justify-center items-center'>
            <p>No {type} properties</p></span>
        )}
      </List>
      <Button variant={"outline"} onClick={handleAddProp}>
        <Plus className='mr-2 h-4 w-4'/>
        Add Property
      </Button>
    </div>
  )
}

export default PropsList;