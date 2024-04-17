
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import TypeSelectPrimtiveGroup from "./TypeSelectPrimtiveGroup"
import TypeSelectCustom from "./TypeSelectCustom"
import { Binary, Code } from "lucide-react"
import { useState } from "react"
import { useConfigurator } from "@/providers/ConfiguratorProvider"
import { cn } from "@/lib/utils"

interface Props{
  index: number
}

export function TypeSelect({index}:Props) {
  const {contextProps} = useConfigurator();
  const prop = contextProps[index];
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open:boolean) => {
    if(!open) return;
    setOpen(open);
  }
  const closeMenu = () => setOpen(false);
  const isInvalid = 
    prop.type === "primitive" && prop.value.length === 0 || prop.type === "custom" && prop.value === "";
  return (
    <DropdownMenu open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button className={cn("h-12 w-32",isInvalid && "border-red-500")} variant="outline">{isInvalid ? "Select" : "Change"} Type</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent onEscapeKeyDown={closeMenu} onPointerDownOutside={closeMenu} onInteractOutside={closeMenu} className="w-56">
      <DropdownMenuLabel className="flex gap-2 items-center">
          <Binary className="w-4 h-4"/>
          Primitive
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <TypeSelectPrimtiveGroup index={index} />
          <DropdownMenuSeparator/>
        <DropdownMenuLabel className="flex gap-2 items-center">
          <Code className="w-4 h-4"/>
          Own Types
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <TypeSelectCustom index={index}/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
