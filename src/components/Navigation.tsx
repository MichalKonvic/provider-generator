"use client";

import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  return (
    <div className='sticky top-0 w-full flex items-center justify-between px-2 py-1.5 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <p className='text-xl font-bold'>Konvic.</p>
        <ThemeToggle/>
    </div>
  )
}

export default Navigation