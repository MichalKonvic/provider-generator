
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import PrimitiveList from "./Items/PrimitiveList"
import CustomCodeItem from "./Items/CustomCodeItem"
import { Binary, Code } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useProps } from "@/providers/PropsProvider"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Props{
  index: number
}

export function TypeSelect({index}:Props) {
  const {props} = useProps();
  const prop = props[index];
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
          <ScrollArea className="h-56 sm:h-fit" type="always">
            <PrimitiveList index={index} />
            <ScrollBar orientation="vertical" />
          </ScrollArea>
            <DropdownMenuSeparator/>
          <DropdownMenuLabel className="flex gap-2 items-center">
            <Code className="w-4 h-4"/>
            Own Types
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <CustomCodeItem index={index}/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
