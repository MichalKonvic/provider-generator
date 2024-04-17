import { PropsWithChildren } from 'react'
import { ScrollArea, ScrollBar } from './scroll-area'

const List = ({children}:PropsWithChildren) => {
  return (
    <ScrollArea className='w-full max-h-52 sm:max-h-fit h-full rounded-md border flex flex-col p-2'>
      {children}
    <ScrollBar orientation='horizontal'/>
  </ScrollArea>
  )
}

export default List