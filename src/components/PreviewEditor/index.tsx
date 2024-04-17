import { useScreenSize } from "@/hooks/useScreenSize";
import CodeEditor from "../ui/CodeEditor";
import { useConfigurator } from "@/providers/ConfiguratorProvider";
import Copy from "./Copy";

const PreviewEditor = () => {
  const {width} = useScreenSize();
  const {code} = useConfigurator();
  
  return (
    <div className="relative w-full  sm:w-1/2 h-full">
      <Copy/>
      <CodeEditor
        options={{
          readOnly: true,
          fontSize: 16,
          lineHeight: 28,
          automaticLayout: true
        }}
        width={width < 640 ? width-16 : "100%"}
        className="min-h-60"
        height={768}
        value={code}
      />
    </div>
  )
}

export default PreviewEditor