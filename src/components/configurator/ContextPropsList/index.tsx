import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useGenerator } from '@/providers/GeneratorProvider';
import { Plus } from 'lucide-react';
import React from 'react'

const ContextPropsList = () => {
  const {contextProps,dispatch} = useGenerator();
  const handleAddProp = () => {
    dispatch(
      {
        set: "contextProps",
        value: [...contextProps,{name:"",isArray: false, required: true,type:"primitive",value:['string']}]
      }
    )
  };
  // TODO Dodelej Field Component
  return (
    <div className='flex flex-col gap-1.5'>
      <Label>
        Context Properties
      </Label>
      <ScrollArea className='max-h-96 w-full rounded-md border flex flex-col p-2 relative'>
        {contextProps.map((prop,index) => (<></>))}
        {contextProps.length === 0 && <p className='text-gray-400 text-sm w-full text-center'>No context properties</p>}
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