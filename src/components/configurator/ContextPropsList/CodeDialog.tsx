import CodeEditor from '@/components/CodeEditor'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { PropType } from '@/providers/Generator'
import { useGenerator } from '@/providers/GeneratorProvider'
import { CircleHelp, Info } from 'lucide-react'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import ExampleTooltip from './ExampleTooltip'

interface Props {
  index: number
}

const CodeDialog = ({index,children}:PropsWithChildren<Props>) => {
  const {dispatch,contextProps} = useGenerator();
  const prop = contextProps[index];
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(prop.type === "custom" ? prop.value : "");
  useEffect(() => {
    setCode(prop.type === "custom" ? prop.value : "");
  },[prop])
  const handleOpenChange = (open:boolean) => {
    if(!open){
      // TODO handle close without saving
      // DO not change the prop
    }
    setOpen(open);
  }
  const handleSave = () => {
    const newCode = code;
    dispatch({
      set: "contextProps",
      value: contextProps.map((p,i) => {
        if(i === index){
          const newProp:PropType = {
            ...p,
            type: "custom",
            isArray: false,
            value: newCode
          }
          return newProp;
        }
        return p
        }
    )})
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Create custom type
          </DialogTitle>
          <DialogDescription>
            Just enter the type definition. 
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4 w-full overflow-hidden">
          <div className='flex justify-between items-end'>
            <Label>
              Your type
            </Label>
            <ExampleTooltip>
              <CircleHelp className="w-6 h-6 text-foreground/50 hover:text-foreground duration-100"/>
            </ExampleTooltip>
          </div>
          <div className='py-2 w-full border rounded-lg box-border focus-within:outline'>
            <CodeEditor
              width={"100%"}
              height={150}
              options={{
                fontSize: 14,
                lineHeight: 24,
                scrollbar:{
                  useShadows: false,
                }
              }}
              onChange={(value) => setCode(value || "")}
              value={code}
            />
          </div>
        </div>
      <DialogFooter className='gap-2 sm:gap-0'>
          <DialogClose asChild>
            <Button variant={"ghost"}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSave}>
            Save
          </Button>
      </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CodeDialog