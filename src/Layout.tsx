import { PropsWithChildren } from 'react'
const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className='flex flex-col w-full gap-8 sm:gap-0 sm:flex-row'>
      {children}
    </div>
  )
}

export default Layout