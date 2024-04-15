import { PropsWithChildren } from 'react'
const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className='flex flex-col w-full sm:flex-row'>
      {children}
    </div>
  )
}

export default Layout