import { Editor, EditorProps, useMonaco } from "@monaco-editor/react"
import { getWorker, MonacoJsxSyntaxHighlight } from "monaco-jsx-syntax-highlight";
import { useCallback, useMemo } from "react";
import { useTheme } from "../theme-provider";
interface Props {
  width?: string | number;
  height?: string | number;
  className?: string;
  asDialog?: boolean;
  value?: string;
  options?: EditorProps["options"];
  onChange?: (value: string|undefined) => void;
}

const CodeEditor = ({
  width,
  height,
  className,
  asDialog=false,
  options,
  value,
  onChange,
}:Props) => {
  const edit = useMonaco();
  const {isDark} = useTheme();
  const theme = useMemo(() => isDark ? "dark" : "light" + (asDialog ? "-dialog" : ""),[asDialog,isDark]);
  const handleEditorDidMount = useCallback((editor: any, monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true
    });

    const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(
      getWorker(),
      monaco
    );

    // editor is the result of monaco.editor.create
    const {
      highlighter,
      dispose
    } = monacoJsxSyntaxHighlight.highlighterBuilder({
      editor: editor
    });
    // init highlight
    highlighter();

    editor.onDidChangeModelContent(() => {
      // content change, highlight
      highlighter();
    });

    return dispose;
  }, []);
  if(edit){
    edit.editor.defineTheme('light', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#ffffff',
      },
    });
    edit.editor.defineTheme('dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#09090B',
      },
    });
    edit.editor.defineTheme('dark-dialog', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#0a0a0a',
      },
    });
    edit.editor.defineTheme('light-dialog', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#ffffff',
      },
    });
  }
  return (
    <Editor
      defaultLanguage="typescript"
      onMount={handleEditorDidMount}
      options={{
        fontSize: 16,
        lineHeight: 28,
        glyphMargin: false,
        minimap: {
          enabled: false
        },
        folding: false,
        lineNumbers: "off",
        automaticLayout: true,
        ...options
      }}
      width={width}
      className={className}
      height={height}
      theme={theme}
      onChange={(str) => onChange && onChange(str)}
      value={value}
    />
  )
}

export default CodeEditor