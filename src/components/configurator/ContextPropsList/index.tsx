import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useConfigurator } from '@/providers/ConfiguratorProvider';
import { Plus } from 'lucide-react';
import React from 'react'
import ContextPropField from './ContextPropField';
import { Separator } from '@/components/ui/separator';

const ContextPropsList = () => {
  const {contextProps,dispatch} = useConfigurator();
  const handleAddProp = () => {
    dispatch(
      {
        set: "contextProps",
        value: [...contextProps,{name:"",isArray: false, required: true,type:"primitive",value:['string']}]
      }
    )
  };
  return (
    <div className='flex flex-col gap-1.5 h-full'>
      <Label>
        Context Properties
      </Label>
      <ScrollArea className=' w-full rounded-md border flex flex-col p-2'>
        {contextProps.map((_,index) => {
          if(index == contextProps.length - 1){
            return (
              <>
                <ContextPropField index={index} key={index} />
              </>
            )
          }
          return (
            <>
              <ContextPropField index={index} key={index} />
              <Separator/>
            </>
          )
        })}
        {contextProps.length === 0 && <span className='text-gray-400 text-sm w-full text-center h-12 flex justify-center items-center'><p>No context properties</p></span>}
        <ScrollBar orientation='horizontal'/>
      </ScrollArea>
      <Button variant={"outline"} onClick={handleAddProp}>
        <Plus className='mr-2 h-4 w-4'/>
        Add Property
      </Button>
    </div>
  )
}

export default ContextPropsList;