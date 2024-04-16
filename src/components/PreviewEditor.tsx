import { useScreenSize } from "@/hooks/useScreenSize";
import CodeEditor from "./CodeEditor";

const PreviewEditor = () => {
  const {width} = useScreenSize();
  
  return (
    <CodeEditor
      options={{
        readOnly: true,
        fontSize: 16,
        lineHeight: 28,
        automaticLayout: true
      }}
      width={width < 640 ? "100%" : "50%"}
      className="min-h-60"
      height={768}
      value="import React from 'react';"
    />
  )
}

export default PreviewEditor