import { Check, Clipboard } from "lucide-react"
import { Button } from "../ui/button"
import { useEffect, useRef, useState } from "react";
import { useConfigurator } from "@/providers/ConfiguratorProvider";

const Copy = () => {
  const {code} = useConfigurator();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
 useEffect(() => {
  if(!copied) return;
  return () => {
    if(!timerRef.current) return;
    clearTimeout(timerRef.current);
  }
 },[copied])
 const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    if(timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCopied(false);
      timerRef.current = null;
    }, 1500)
 }
  if(!code) return null;
  return (
    <Button onClick={handleCopy} size={"icon"} variant={"outline"} className="absolute z-50 right-2 top-2 bg-background/20 hover:bg-accent/50 backdrop-blur-sm">
      {copied ? (
        <Check className="w-5 h-5" />
      ): (
        <Clipboard className="w-5 h-5" />
      )}
    </Button>
  )
}

export default Copy