import CodeEditor from '@/components/ui/CodeEditor'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { PropType } from '@/providers/Configurator'
import { CircleHelp } from 'lucide-react'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useProps } from '@/providers/PropsProvider'
import ExampleInitialDataTooltip from './Tooltip'


interface Props {
  index: number
}

const InitialDataDialog = ({index,children}:PropsWithChildren<Props>) => {
  // TODO display in UI what type the property has
  const {setProps,props} = useProps();
  const prop = props[index];
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(prop.data);
  useEffect(() => {
    setCode(prop.data);
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
    setProps(props.map((p,i) => {
      if(i === index){
        const newProp:PropType = {
          ...p,
          data: newCode
        }
        return newProp;
      }
      return p
      }
  ));
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
            Enter value
          </DialogTitle>
          <DialogDescription>
            Just enter the initial value for property. 
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4 w-full overflow-hidden">
          <div className='flex justify-between items-end'>
            <Label>
              Your value
            </Label>
            <ExampleInitialDataTooltip>
              <CircleHelp className="w-6 h-6 text-foreground/50 hover:text-foreground duration-100"/>
            </ExampleInitialDataTooltip>
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

export default InitialDataDialog