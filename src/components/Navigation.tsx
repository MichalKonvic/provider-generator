"use client";

import ReactLogo from "@/assets/ReactLogo";
import { ThemeToggle } from "./ThemeToggle";
import GithubButton from "./ui/GithubButton";

const Navigation = () => {
  return (
    <div className='sticky top-0 w-full flex items-center justify-between px-2 py-1.5 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className="flex items-center">
        <a href="https://konvic.dev/" className='text-xl font-bold select-none'>Konvic.</a>
        <p className="text-xl mx-1.5">/</p>
        <div className="flex items-center gap-1.5">
          <ReactLogo className="w-4 h-4" />
          <p className="">Provider Generator</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <GithubButton />
      </div>
    </div>
  )
}

export default Navigation