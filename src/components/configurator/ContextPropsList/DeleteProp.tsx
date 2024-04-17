import { Button } from '@/components/ui/button';
import { useConfigurator } from '@/providers/ConfiguratorProvider';
import { Trash2 } from 'lucide-react';
import React from 'react'

type Props = {
  index: number
}
const DeleteProp = ({index}:Props) => {
  const {contextProps,dispatch} = useConfigurator();
  const handleDelete = () => {
    dispatch({
      set: "contextProps",
      value: contextProps.filter((_,i) => i !== index)
    })
  }
  return (
    <Button onClick={handleDelete} variant={"destructive"} className='w-12 h-12 flex items-center justify-center'>
      <Trash2 className='w-4 h-4'/>
    </Button>
  )
}

export default DeleteProp