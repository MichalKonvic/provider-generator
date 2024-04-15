import { Editor, useMonaco } from "@monaco-editor/react"
import { getWorker, MonacoJsxSyntaxHighlight } from "monaco-jsx-syntax-highlight";
import { useCallback } from "react";
import { useTheme } from "./theme-provider";
import { useScreenSize } from "@/hooks/useScreenSize";

const PreviewEditor = () => {
  const edit = useMonaco();
  const {width} = useScreenSize();
  const {isDark} = useTheme();
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
  }
  return (
    <Editor
      defaultLanguage="typescript"
      onMount={handleEditorDidMount}
      options={{
        readOnly: true,
        fontSize: 16,
        lineHeight: 28,
        automaticLayout: true
      }}
      width={width < 640 ? "100%" : "50%"}
      className="min-h-60"
      height={"100%"}
      theme={isDark ? 'dark' : 'light'}
      value="import React from 'react';"
    />
  )
}

export default PreviewEditor